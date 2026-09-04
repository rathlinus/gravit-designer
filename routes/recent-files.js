const { Router } = require("express");
const fs = require("fs");
const os = require("os");
const path = require("path");
const crypto = require("crypto");
const router = Router();

// Plain os.homedir(), not Electron's app.getPath() — same reasoning as
// routes/user.js: this file is require()d by both server.js and
// electron-main.js, so it needs a path that works without any Electron API.
// In practice only electron-main.js ever calls addRecentFile() (server.js has
// no filesystem paths to track — documents there come from browser upload/
// download, not a real path), so under plain `npm start` this list just stays
// empty and GET /file keeps returning [] like it always did.
const RECENT_DIR = path.join(os.homedir(), ".gravit-designer-local");
const RECENT_FILE = path.join(RECENT_DIR, "recent-files.json");
const MAX_RECENT = 10;

function load() {
  try {
    const parsed = JSON.parse(fs.readFileSync(RECENT_FILE, "utf8"));
    return Array.isArray(parsed.files) ? parsed.files : [];
  } catch {
    return [];
  }
}

function save(files) {
  try {
    fs.mkdirSync(RECENT_DIR, { recursive: true });
    fs.writeFileSync(RECENT_FILE, JSON.stringify({ files }, null, 2));
  } catch (err) {
    console.error("Failed to save recent-files.json:", err);
  }
}

// Short, stable id derived from the absolute path, so the same file always
// maps to the same /file/:id URL across launches (the client's file-list
// model just wants *some* opaque id — see GET /file below).
function idFor(filePath) {
  return crypto.createHash("sha1").update(filePath).digest("hex").slice(0, 16);
}

// Called from electron-main.js whenever a .gvdesign file is opened (file
// association / re-invoke) or written to (Save, or Save As's follow-up
// write). Most-recent-first, deduped by path, capped at MAX_RECENT — mirrors
// the client's own native-menu recent list (also capped at 10, see
// GOpenRecentAction's caller in the bundle).
function addRecentFile(filePath) {
  const id = idFor(filePath);
  const files = load().filter((f) => f.path !== filePath);
  files.unshift({ id, path: filePath, updated: new Date().toISOString() });
  save(files.slice(0, MAX_RECENT));
}

// Drops entries whose file no longer exists on disk (moved/deleted since it
// was recorded), and returns what's left. Self-healing: GET /file prunes on
// every call instead of needing a separate cleanup pass.
function loadExisting() {
  const files = load();
  const existing = files.filter((f) => fs.existsSync(f.path));
  if (existing.length !== files.length) save(existing);
  return existing;
}

// Shape expected by the client's GFilesPanel / GCloudStorage code
// (reverse-engineering/src/modules/1092_module.js's createFrom() does a
// plain Object.assign of whatever we return here onto its internal file
// model) — mimeType/ext must match a FILE_FORMATS entry (GVDESIGN: ext
// "gvdesign", mime "application/gravit+design") or the client throws trying
// to read a match that isn't there.
function toCloudItem(entry) {
  return {
    id: entry.id,
    name: path.basename(entry.path, path.extname(entry.path)),
    mimeType: "application/gravit+design",
    ext: "gvdesign",
    type: "application/gravit+design",
    parent: null,
    updated: entry.updated,
    // Fetched directly (same-origin) by the client's document-open pipeline
    // once a recent entry is clicked — see loadDesignData() in
    // reverse-engineering/src/modules/0119_module.js.
    url: `/file/${entry.id}/content`,
  };
}

function findEntry(id) {
  return loadExisting().find((f) => f.id === id);
}

router.get("/file", (_req, res) => {
  res.json(loadExisting().map(toCloudItem));
});

// gApi.getFile()/getFileExtended() both resolve to GET /file/:id[/full] —
// same shape either way, we don't distinguish "extended".
router.get(["/file/:id", "/file/:id/full"], (req, res) => {
  const entry = findEntry(req.params.id);
  if (!entry) return res.status(404).json({ message: "Not found" });
  res.json(toCloudItem(entry));
});

router.get("/file/:id/content", (req, res) => {
  const entry = findEntry(req.params.id);
  if (!entry) return res.status(404).end();
  res.sendFile(entry.path, (err) => {
    if (err && !res.headersSent) res.status(404).end();
  });
});

module.exports = { router, addRecentFile };
