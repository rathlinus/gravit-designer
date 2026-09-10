const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const PROJECTS_DIR = path.resolve(
  process.env.PROJECTS_DIR || path.join(__dirname, "..", "projects"),
);

fs.mkdirSync(PROJECTS_DIR, { recursive: true });

const DEFAULT_MIME = "application/gravit+design";
const DEFAULT_EXT = "gvdesign";

function metaPath(id) {
  return path.join(PROJECTS_DIR, `${id}.meta.json`);
}
function contentPath(id) {
  return path.join(PROJECTS_DIR, `${id}.gvdesign`);
}
function thumbnailPath(id) {
  return path.join(PROJECTS_DIR, `${id}.thumb.png`);
}

function readMeta(id) {
  try {
    return JSON.parse(fs.readFileSync(metaPath(id), "utf8"));
  } catch (err) {
    if (err.code === "ENOENT") return null;
    throw err;
  }
}

function writeMeta(meta) {
  fs.writeFileSync(metaPath(meta.id), JSON.stringify(meta, null, 2));
  return meta;
}

function withUrls(meta) {
  const out = { ...meta, url: `/file/${meta.id}/content` };
  if (meta.hasThumbnail) out.thumbnailLink = `/file/${meta.id}/thumbnail`;
  return out;
}

function list() {
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((name) => name.endsWith(".meta.json"))
    .map((name) => name.slice(0, -".meta.json".length))
    .map(readMeta)
    .filter(Boolean)
    .map(withUrls);
}

function create({ name, parent, type, app } = {}) {
  const id = crypto.randomUUID();
  const now = new Date().toISOString();
  const meta = {
    id,
    name: name || "Untitled",
    app: app || "designer",
    mimeType: type || DEFAULT_MIME,
    type: type || DEFAULT_MIME,
    fileExtension: DEFAULT_EXT,
    parent: parent || null,
    trashed: false,
    createdTime: now,
    modifiedTime: now,
    created: now,
    updated: now,
    version: 1,
    size: 0,
    sha256: null,
    hasThumbnail: false,
    thumbnailLink: null,
    capabilities: { canDownload: true, canEdit: true },
    width: 0,
    height: 0,
    unit: null,
  };
  writeMeta(meta);
  return withUrls(meta);
}

function get(id) {
  const meta = readMeta(id);
  return meta ? withUrls(meta) : null;
}

function update(id, patch) {
  const meta = readMeta(id);
  if (!meta) return null;
  const now = new Date().toISOString();
  const next = {
    ...meta,
    ...patch,
    id: meta.id,
    modifiedTime: now,
    updated: now,
  };
  writeMeta(next);
  return withUrls(next);
}

function remove(id) {
  const meta = readMeta(id);
  if (!meta) return false;
  for (const p of [metaPath(id), contentPath(id), thumbnailPath(id)]) {
    fs.rmSync(p, { force: true });
  }
  return true;
}

function writeContent(id, buffer, mimeType) {
  const meta = readMeta(id);
  if (!meta) return null;
  fs.writeFileSync(contentPath(id), buffer);
  const now = new Date().toISOString();
  const next = {
    ...meta,
    size: buffer.length,
    sha256: crypto.createHash("sha256").update(buffer).digest("hex"),
    version: (meta.version || 1) + 1,
    mimeType: mimeType || meta.mimeType,
    modifiedTime: now,
    updated: now,
  };
  writeMeta(next);
  return withUrls(next);
}

function readContent(id) {
  const meta = readMeta(id);
  if (!meta || !fs.existsSync(contentPath(id))) return null;
  return {
    buffer: fs.readFileSync(contentPath(id)),
    mimeType: meta.mimeType || DEFAULT_MIME,
  };
}

function writeThumbnail(id, buffer, mimeType) {
  const meta = readMeta(id);
  if (!meta) return null;
  fs.writeFileSync(thumbnailPath(id), buffer);
  const next = {
    ...meta,
    hasThumbnail: true,
    thumbnailMimeType: mimeType || "image/png",
  };
  writeMeta(next);
  return withUrls(next);
}

function readThumbnail(id) {
  const meta = readMeta(id);
  if (!meta || !meta.hasThumbnail || !fs.existsSync(thumbnailPath(id)))
    return null;
  return {
    buffer: fs.readFileSync(thumbnailPath(id)),
    mimeType: meta.thumbnailMimeType || "image/png",
  };
}

module.exports = {
  PROJECTS_DIR,
  list,
  create,
  get,
  update,
  remove,
  writeContent,
  readContent,
  writeThumbnail,
  readThumbnail,
};
