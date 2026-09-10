const express = require("express");
const router = express.Router();
const fileStore = require("../lib/fileStore");

const jsonBody = express.json();
// Design/thumbnail bytes arrive as an arbitrary-content-type PUT body (the
// client sets Content-Type to the design mime type, e.g.
// "application/gravit+design"), not JSON — must be parsed as raw binary,
// and only on these two upload routes so express.json() elsewhere is unaffected.
const rawBody = express.raw({ type: "*/*", limit: "512mb" });

router.get("/file", (_req, res) => {
  res.json(fileStore.list());
});

router.post("/file", jsonBody, (req, res) => {
  res.json(fileStore.create(req.body));
});

router.get(["/file/:id", "/file/:id/full"], (req, res) => {
  const file = fileStore.get(req.params.id);
  if (!file) return res.status(404).json({ error: "not found" });
  res.json(file);
});

router.put("/file/:id", jsonBody, (req, res) => {
  const file = fileStore.update(req.params.id, req.body);
  if (!file) return res.status(404).json({ error: "not found" });
  res.json(file);
});

router.delete("/file/:id", (req, res) => {
  if (!fileStore.remove(req.params.id))
    return res.status(404).json({ error: "not found" });
  res.status(204).end();
});

// Stand-in for the original product's S3 "signed put URL" — since we own
// the whole server, this just hands back one of our own upload endpoints.
router.put("/file/:id/urls", jsonBody, (req, res) => {
  const target = req.body && req.body.type_t ? "thumbnail" : "content";
  res.json({ url: `/file/${req.params.id}/${target}` });
});

router.put("/file/:id/content", rawBody, (req, res) => {
  const file = fileStore.writeContent(
    req.params.id,
    req.body,
    req.headers["content-type"],
  );
  if (!file) return res.status(404).json({ error: "not found" });
  res.json(file);
});

router.get("/file/:id/content", (req, res) => {
  const content = fileStore.readContent(req.params.id);
  if (!content) return res.status(404).end();
  res.setHeader("Content-Type", content.mimeType);
  res.send(content.buffer);
});

router.put("/file/:id/thumbnail", rawBody, (req, res) => {
  const file = fileStore.writeThumbnail(
    req.params.id,
    req.body,
    req.headers["content-type"],
  );
  if (!file) return res.status(404).json({ error: "not found" });
  res.json(file);
});

router.get("/file/:id/thumbnail", (req, res) => {
  const thumb = fileStore.readThumbnail(req.params.id);
  if (!thumb) return res.status(404).end();
  res.setHeader("Content-Type", thumb.mimeType);
  res.send(thumb.buffer);
});

module.exports = router;
