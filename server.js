const express = require("express");
const path = require("path");
const http = require("http");
const { setupWebSocket } = require("./routes/ws");
const userRoutes = require("./routes/user");
const fileRoutes = require("./routes/files");

const app = express();
const port = process.env.PORT || 3100;

// Request logger (first, so every request is logged regardless of which
// handler ends up serving it — most routes end the response without
// calling next(), so a logger placed later would never see them)
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Body parsing
app.use(express.json());

// /.well-known (RFC 8615). Mounted separately because express.static
// refuses to serve paths containing a dot-prefixed segment; with the
// prefix stripped the remaining path is an ordinary filename. The service
// worker precaches .well-known/assetlinks.json, and a single 404 fails
// the whole precache install, so this has to actually resolve.
app.use(
  "/.well-known",
  express.static(path.join(__dirname, "public", ".well-known")),
);

// Static files - public dir (main app)
app.use(
  express.static(path.join(__dirname, "public"), {
    setHeaders: (res, filePath) => {
      const name = path.basename(filePath);
      // index.html loads designer.browser.dev.js, not designer.browser.js,
      // so the immutable header was being applied to a file nothing
      // requests while the 6.7MB bundle actually served got no caching
      // policy at all.
      if (
        name === "chunk.vendor.js" ||
        name === "designer.browser.js" ||
        name === "designer.browser.dev.js"
      ) {
        res.setHeader("Cache-Control", "public, max-age=2592000, immutable");
      }
      // These must always be revalidated (not cached at a CDN/browser
      // level): index.html and cacher.js so a new deploy — and any future
      // service-worker precache update — is actually seen, and
      // save-to-server.js since it changes independently of the app bundle
      // and has no cache-busting filename.
      if (
        name === "index.html" ||
        name === "cacher.js" ||
        name === "save-to-server.js"
      ) {
        res.setHeader("Cache-Control", "no-cache");
      }
    },
  }),
);

// Static files - docs
app.use("/docs", express.static(path.join(__dirname, "docs")));

// API routes
app.get("/connection/test", (_req, res) => res.send("OK"));
app.use(userRoutes);

// Maintenance status
app.get("/maintenance/status", (_req, res) => {
  res.json({ maintenance: false });
});

// i18n URL
app.get("/i18n-url/:locale/designer", (_req, res) => {
  res.json({});
});

// License check (GET) — returns data consumed directly by the License constructor
app.get("/license", (_req, res) => {
  res.json({
    license: "pro",
    expire: "2099-12-31T23:59:59.000Z",
    created: "2021-09-22T19:58:35.018Z",
    legacy: false,
  });
});

// Subscription test
app.get("/subscription/test", (_req, res) => {
  res.json({ active: true, plan: "pro", status: 1 });
});

// Subscription endpoints
app.get("/subscription/nextbillingdate", (_req, res) => {
  res.json({ date: "2099-12-31T23:59:59.000Z" });
});
app.get("/subscription/lifetime", (_req, res) => {
  res.json({ lifetime: true });
});

// Quota
app.get("/quota", (_req, res) => {
  res.json({ quota: { pro: {}, free: {} } });
});

// Subscription history
app.get("/ever-subscribed", (_req, res) => {
  res.json({ subscribed: true });
});
app.get("/total-subscription-days", (_req, res) => {
  res.json({ days: 9999 });
});

// Pro paywall (return empty page so client doesn't 404)
app.get("/pro/paywall/:page", (_req, res) => {
  res.send("");
});

// File storage (list/create/read/update/delete projects, backed by PROJECTS_DIR)
app.use(fileRoutes);

// Catch /null requests (client bug sends null URL)
app.get("/null", (_req, res) => {
  res.json({});
});

// HTTP + WebSocket server
const server = http.createServer(app);
setupWebSocket(server);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
