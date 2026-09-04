const {
  app,
  BrowserWindow,
  Menu,
  dialog,
  screen,
  ipcMain,
} = require("electron");
const path = require("path");
const http = require("http");
const fs = require("fs");
const { fileURLToPath } = require("url");
const { router: recentFilesRoutes, addRecentFile } = require("./routes/recent-files");

let mainWindow;
let server;

// A .gvdesign path this process was launched/re-invoked with, waiting to be
// picked up by the renderer once it's ready to receive it. Cleared once
// read (see the "get-pending-open-file" handler below).
let pendingOpenFile = null;

// A .desktop file's "%U"/"%u" (which is what the AppImage's integrated
// launcher uses) hands us a file:// URI, not a plain path — percent-encoded,
// so a path with spaces arrives as "file:///.../My%20File.gvdesign". "%F"/"%f"
// would give a plain path instead, and dev invocation ("electron . foo") does
// too. Accept either.
function argToFilePath(arg) {
  if (/^file:\/\//i.test(arg)) {
    try {
      return fileURLToPath(arg);
    } catch {
      return null;
    }
  }
  return arg;
}

// Command-line args (from process.argv or a second-instance's commandLine)
// can carry Electron/Chromium flags and, in dev, "electron ." itself, so
// don't rely on position — pick out whatever actually looks like a
// .gvdesign file that exists on disk.
function findOpenFilePath(argv) {
  for (const arg of argv) {
    const filePath = argToFilePath(arg);
    if (
      filePath &&
      filePath.toLowerCase().endsWith(".gvdesign") &&
      fs.existsSync(filePath)
    ) {
      return filePath;
    }
  }
  return null;
}

function readOpenFilePayload(filePath) {
  // Covers both cold-start (file-association launch) and a second instance
  // re-invoked with a file — see the two call sites below. Feeds the "Open"
  // dialog's Recent Files strip (routes/recent-files.js's GET /file).
  addRecentFile(filePath);
  return {
    filename: path.basename(filePath),
    // Absolute path, kept alongside the bytes so the renderer can write back
    // to the same file on Save instead of falling back to Save As (see the
    // "write-open-file" handler below and public/index.html).
    path: filePath,
    data: new Uint8Array(fs.readFileSync(filePath)),
  };
}

// Persisted window bounds (size/position/maximized state) so a maximized
// window stays maximized, and a resized window keeps its size, across
// launches. Stored outside the app bundle so it survives updates.
const WINDOW_STATE_FILE = path.join(
  app.getPath("userData"),
  "window-state.json",
);
const DEFAULT_WINDOW_STATE = { width: 1400, height: 900 };

function loadWindowState() {
  try {
    const raw = fs.readFileSync(WINDOW_STATE_FILE, "utf8");
    const state = JSON.parse(raw);
    if (typeof state.width !== "number" || typeof state.height !== "number") {
      return { ...DEFAULT_WINDOW_STATE };
    }

    // Discard saved x/y if they'd place the window off any connected
    // display (e.g. an external monitor was unplugged since last run).
    if (typeof state.x === "number" && typeof state.y === "number") {
      const onScreen = screen
        .getAllDisplays()
        .some((d) =>
          state.x >= d.bounds.x &&
          state.y >= d.bounds.y &&
          state.x < d.bounds.x + d.bounds.width &&
          state.y < d.bounds.y + d.bounds.height,
        );
      if (!onScreen) {
        delete state.x;
        delete state.y;
      }
    }

    return state;
  } catch {
    return { ...DEFAULT_WINDOW_STATE };
  }
}

function saveWindowState(win) {
  if (!win || win.isDestroyed()) return;
  const isMaximized = win.isMaximized();
  // getNormalBounds() returns the un-maximized size/position even while
  // maximized, so restoring later un-maximizes to the right size.
  const bounds = win.getNormalBounds();
  try {
    fs.writeFileSync(
      WINDOW_STATE_FILE,
      JSON.stringify({ ...bounds, isMaximized }),
    );
  } catch (err) {
    console.error("Failed to save window state:", err);
  }
}

// Fixed port so the page origin (http://127.0.0.1:PORT) stays constant across
// launches. localStorage — where Gravit Designer keeps the theme and other
// preferences — is partitioned by origin, so a random port (listen(0)) would
// give every launch a fresh, empty store and reset all settings.
const FIXED_PORT = 47823;

function startServer() {
  return new Promise((resolve) => {
    const express = require("express");
    const { setupWebSocket } = require("./routes/ws");
    const userRoutes = require("./routes/user");

    const expressApp = express();

    expressApp.use(express.json());

    expressApp.use(
      express.static(path.join(__dirname, "public"), {
        setHeaders: (res, filePath) => {
          const name = path.basename(filePath);
          if (name === "chunk.vendor.js" || name === "designer.browser.js") {
            res.setHeader(
              "Cache-Control",
              "public, max-age=2592000, immutable",
            );
          }
        },
      }),
    );

    expressApp.use("/docs", express.static(path.join(__dirname, "docs")));

    expressApp.get("/connection/test", (_req, res) => res.send("OK"));
    expressApp.use(userRoutes);
    expressApp.use(recentFilesRoutes);

    expressApp.get("/maintenance/status", (_req, res) => {
      res.json({ maintenance: false });
    });

    expressApp.get("/i18n-url/:locale/designer", (_req, res) => {
      res.json({});
    });

    expressApp.get("/license", (_req, res) => {
      res.json({
        plan: "pro",
        status: "active",
        expireDate: "2099-12-31T23:59:59.000Z",
        features: [],
      });
    });

    expressApp.get("/subscription/test", (_req, res) => {
      res.json({ active: true, plan: "pro" });
    });

    expressApp.get("/null", (_req, res) => {
      res.json({});
    });

    server = http.createServer(expressApp);
    setupWebSocket(server);

    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        // Don't fall back to a random port: that changes the origin and would
        // reset the user's settings. Surface the conflict instead.
        dialog.showErrorBox(
          "Gravit Designer",
          `Port ${FIXED_PORT} is already in use. Another instance may be ` +
            `running, or another program is using the port. Close it and ` +
            `relaunch Gravit Designer.`,
        );
      } else {
        dialog.showErrorBox("Gravit Designer", `Server error: ${err.message}`);
      }
      app.quit();
    });

    server.listen(FIXED_PORT, "127.0.0.1", () => {
      const assignedPort = server.address().port;
      console.log(`Embedded server on http://127.0.0.1:${assignedPort}`);
      resolve(assignedPort);
    });
  });
}

function createWindow(port) {
  const state = loadWindowState();

  mainWindow = new BrowserWindow({
    width: state.width,
    height: state.height,
    x: state.x,
    y: state.y,
    minWidth: 800,
    minHeight: 600,
    title: "Gravit Designer",
    icon: path.join(
      __dirname,
      "public",
      "assets",
      "prerendered",
      "icon512.png",
    ),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
    autoHideMenuBar: true,
  });

  // TEMP DEBUG: forward renderer console output (including our open-file
  // bootstrap script's logging) to this process's stdout, since it's
  // otherwise only visible in DevTools.
  mainWindow.webContents.on(
    "console-message",
    (_event, _level, message, line, sourceId) => {
      console.log(`[renderer] ${message} (${sourceId}:${line})`);
    },
  );

  if (state.isMaximized) {
    mainWindow.maximize();
  }

  Menu.setApplicationMenu(null);

  mainWindow.loadURL(`http://127.0.0.1:${port}`);

  // Closing a single document tab already asks "Save / Don't Save / Cancel"
  // via Gravit's own dialog (GDesigner.canUnloadDocument) when it has
  // unsaved changes. Closing the whole window used to skip that entirely —
  // Electron destroyed the window immediately, so the renderer never even
  // got a chance to react. Fix: preventDefault the native close, ask the
  // renderer (reusing the same GDesigner.handleUnsavedDocuments() pipeline
  // tab-close already exercises, just across every open document), and only
  // let the close actually happen once that resolves true.
  //
  // Confirmed close uses destroy(), not close(): calling close() again from
  // inside the executeJavaScript().then() callback (i.e. on a later tick,
  // not synchronously within the original "close" handler) reliably
  // re-fired "close" but never actually finished tearing the window down in
  // this Electron version — "closed"/"window-all-closed" just never fired,
  // confirmed by instrumenting every step. destroy() is also the more
  // correct call here regardless: we've already done our own confirmation,
  // so there's no reason to run the whole event cycle a second time.
  let closeConfirmed = false;
  mainWindow.on("close", (event) => {
    saveWindowState(mainWindow);
    if (closeConfirmed) return;
    event.preventDefault();
    mainWindow.webContents
      .executeJavaScript(
        `(window.gDesigner && window.gDesigner.isInitialized()
          ? window.gDesigner.handleUnsavedDocuments().then(() => true).catch(() => false)
          : Promise.resolve(true))`,
      )
      .then((canClose) => {
        if (canClose) {
          closeConfirmed = true;
          mainWindow.destroy();
        }
      })
      .catch(() => {
        // executeJavaScript itself threw (e.g. window already torn down) —
        // don't leave the app permanently un-closable over it.
        closeConfirmed = true;
        mainWindow.destroy();
      });
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

// Only one instance may run, so the fixed port is reliably ours. A second
// launch focuses the existing window instead of fighting over the port.
if (!app.requestSingleInstanceLock()) {
  app.quit();
} else {
  app.on("second-instance", (_event, argv) => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();

      const openPath = findOpenFilePath(argv);
      if (openPath) {
        mainWindow.webContents.send("open-file", readOpenFilePayload(openPath));
      }
    }
  });

  ipcMain.handle("get-pending-open-file", () => {
    const payload = pendingOpenFile;
    pendingOpenFile = null;
    return payload;
  });

  // Writes back to the path a document was opened from (see
  // public/index.html's use of this to give a real Item a working write()).
  // The renderer is fully trusted first-party code here (this is the whole
  // desktop app, not a sandboxed guest page), same trust level as reading
  // process.argv paths above, so no extra path allowlisting is done.
  ipcMain.handle("write-open-file", (_event, filePath, data) => {
    fs.writeFileSync(filePath, Buffer.from(data));
    // Covers both Save (existing path) and Save As's follow-up write (new
    // path chosen via show-save-dialog below) — see routes/recent-files.js.
    addRecentFile(filePath);
  });

  // Backs "Save As" for a document that was opened from a known path (see
  // public/index.html's savePrompt override). The browser's own
  // showSaveFilePicker() can't be told to start in an arbitrary folder — it
  // only accepts a well-known directory name or a FileSystemHandle the page
  // already holds, and there's no way to turn a plain path into one of
  // those without the user picking it first — so this uses Electron's own
  // native dialog instead, which does accept a real starting path.
  ipcMain.handle("show-save-dialog", async (_event, defaultDir, defaultName, filters) => {
    const result = await dialog.showSaveDialog(mainWindow, {
      defaultPath: path.join(defaultDir, defaultName),
      filters,
    });
    return result.canceled ? null : result.filePath;
  });

  // Backs Ctrl/Cmd+O (GOpenAction, patched to call this instead of its
  // original browser-native showOpenFilePicker() — see public/index.html's
  // window.__gravitOpenFromComputer). Real fs access means a real path,
  // unlike the File System Access API, so this is the one local-open path
  // that can feed Recent Files — readOpenFilePayload() already does that.
  ipcMain.handle("show-open-dialog", async () => {
    const result = await dialog.showOpenDialog(mainWindow, {
      properties: ["openFile"],
      filters: [{ name: "Gravit Design", extensions: ["gvdesign"] }],
    });
    if (result.canceled || !result.filePaths[0]) return null;
    return readOpenFilePayload(result.filePaths[0]);
  });

  app.on("ready", async () => {
    const openPath = findOpenFilePath(process.argv);
    if (openPath) {
      pendingOpenFile = readOpenFilePayload(openPath);
    }

    // Self-register the .gvdesign MIME type + icon (see scripts/register-
    // linux-mime.cjs). A packaged AppImage user never runs that script by
    // hand, so a fresh install would otherwise stay unregistered forever —
    // this makes it happen automatically, every launch, with no manual step.
    // Fire-and-forget: never delay first paint over it, and never let it
    // crash startup if e.g. update-mime-database isn't on PATH.
    if (process.platform === "linux") {
      Promise.resolve()
        .then(() => {
          const {
            installMimePackage,
            installIcons,
            trySetDefaultApp,
          } = require("./scripts/register-linux-mime.cjs");
          installMimePackage();
          installIcons();
          trySetDefaultApp();
        })
        .catch((err) => {
          console.warn("Linux MIME/icon self-registration failed:", err);
        });
    }

    const port = await startServer();
    createWindow(port);
  });
}

app.on("window-all-closed", () => {
  if (server) server.close();
  app.quit();
});

app.on("activate", async () => {
  if (mainWindow === null) {
    const port = server ? server.address().port : await startServer();
    createWindow(port);
  }
});
