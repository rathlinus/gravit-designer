#!/usr/bin/env node
// One-time setup for Linux installs that skip a package manager (AppImage
// via Gearlever/AppImageLauncher, or a manual run). electron-builder's
// "fileAssociations" config (see package.json) only gets wired into the
// system MIME database automatically for .deb/.rpm installs, which run a
// postinstall script — a bare AppImage has no equivalent install step, so
// this script does by hand what that postinstall would have done:
//
//   1. Install a shared-mime-info package declaring .gvdesign as its own
//      MIME type (packaging/linux/gravit-designer-gvdesign.xml), instead of
//      Linux content-sniffing it as plain gzip (which it is, under the
//      hood) and showing the generic archive icon.
//   2. Install that type's icon into the hicolor icon theme, reusing the
//      existing app icon.
//   3. Refresh the mime/icon caches so the change takes effect immediately.
//
// Run via: npm run linux:register-mime
"use strict";

const fs = require("fs");
const path = require("path");
const os = require("os");
const { execFileSync } = require("child_process");

const REPO_ROOT = path.join(__dirname, "..");
const MIME_TYPE = "application/x-gravit-design";
const ICON_NAME = "application-x-gvdesign";

const ICON_SIZES = ["16x16", "32x32", "48x48", "128x128", "256x256", "512x512"];
const ICON_SOURCE_DIR = path.join(
  REPO_ROOT,
  "public",
  "assets",
  "prerendered",
  "linux",
);

function run(cmd, args) {
  try {
    execFileSync(cmd, args, { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function which(cmd) {
  return run(process.platform === "win32" ? "where" : "which", [cmd]);
}

function installMimePackage() {
  const dataHome =
    process.env.XDG_DATA_HOME || path.join(os.homedir(), ".local", "share");
  const destDir = path.join(dataHome, "mime", "packages");
  const destFile = path.join(destDir, "gravit-designer-gvdesign.xml");
  const srcFile = path.join(
    REPO_ROOT,
    "packaging",
    "linux",
    "gravit-designer-gvdesign.xml",
  );

  fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(srcFile, destFile);
  console.log(`Installed MIME type definition -> ${destFile}`);

  const mimeRoot = path.join(dataHome, "mime");
  if (which("update-mime-database")) {
    run("update-mime-database", [mimeRoot]);
    console.log("Refreshed MIME database (update-mime-database).");
  } else {
    console.warn(
      "update-mime-database not found on PATH — install it (usually part " +
        "of shared-mime-info) and re-run, or the new type won't be picked up.",
    );
  }
}

function installIcons() {
  const dataHome =
    process.env.XDG_DATA_HOME || path.join(os.homedir(), ".local", "share");
  const iconThemeDir = path.join(dataHome, "icons", "hicolor");

  let installed = 0;
  for (const size of ICON_SIZES) {
    const src = path.join(ICON_SOURCE_DIR, `${size}.png`);
    if (!fs.existsSync(src)) continue;

    const destDir = path.join(iconThemeDir, size, "mimetypes");
    fs.mkdirSync(destDir, { recursive: true });
    fs.copyFileSync(src, path.join(destDir, `${ICON_NAME}.png`));
    installed++;
  }
  console.log(`Installed ${installed} mimetype icon size(s) -> ${iconThemeDir}`);

  if (which("gtk-update-icon-cache")) {
    run("gtk-update-icon-cache", ["-f", "-t", iconThemeDir]);
    console.log("Refreshed icon cache (gtk-update-icon-cache).");
  } else {
    console.log(
      "gtk-update-icon-cache not found — icon should still pick up on " +
        "next login if it doesn't appear immediately.",
    );
  }
}

function findCandidateDesktopFiles() {
  const dataHome =
    process.env.XDG_DATA_HOME || path.join(os.homedir(), ".local", "share");
  const searchDirs = [
    path.join(dataHome, "applications"),
    "/usr/share/applications",
    "/usr/local/share/applications",
  ];

  const matches = [];
  for (const dir of searchDirs) {
    let entries;
    try {
      entries = fs.readdirSync(dir);
    } catch {
      continue;
    }
    for (const entry of entries) {
      if (!entry.endsWith(".desktop")) continue;
      let contents;
      try {
        contents = fs.readFileSync(path.join(dir, entry), "utf8");
      } catch {
        continue;
      }
      if (/gravit/i.test(entry) || /gravit designer/i.test(contents)) {
        matches.push(entry);
      }
    }
  }
  return matches;
}

// Best-effort: set our .desktop file as the default handler for our MIME
// type, so a fresh install needs zero manual `xdg-mime default` step. Silent
// no-op if we can't confidently find exactly one candidate .desktop file
// (e.g. app not installed via Gearlever yet, or ambiguous matches) — a
// human running this by hand still gets the printed instructions in main().
function trySetDefaultApp() {
  const candidates = findCandidateDesktopFiles();
  if (candidates.length !== 1) return false;
  // findCandidateDesktopFiles() returns bare filenames — xdg-mime default
  // resolves those against the standard applications dirs itself, matching
  // how main()'s printed instructions already use it.
  return run("xdg-mime", ["default", candidates[0], MIME_TYPE]);
}

function main() {
  installMimePackage();
  installIcons();

  console.log("\nDone. Remaining manual step:");
  const candidates = findCandidateDesktopFiles();
  if (candidates.length === 1) {
    console.log(
      `  xdg-mime default ${candidates[0]} ${MIME_TYPE}`,
    );
  } else if (candidates.length > 1) {
    console.log(
      "  Multiple Gravit-related .desktop files were found, pick the one " +
        `Gearlever installed for the AppImage, then run:\n` +
        `  xdg-mime default <that-file>.desktop ${MIME_TYPE}\n` +
        `  Candidates: ${candidates.join(", ")}`,
    );
  } else {
    console.log(
      "  No installed .desktop file for Gravit Designer was found. Install " +
        "it via Gearlever first, then run:\n" +
        `  xdg-mime default <name-of-that-file>.desktop ${MIME_TYPE}\n` +
        "  (list candidates with: ls ~/.local/share/applications | grep -i gravit)",
    );
  }
  console.log(
    "\nAfter that, a .gvdesign file should show the app icon, and double-" +
      "clicking one should open it in Gravit Designer.",
  );
}

module.exports = { installMimePackage, installIcons, trySetDefaultApp };

if (require.main === module) {
  main();
}
