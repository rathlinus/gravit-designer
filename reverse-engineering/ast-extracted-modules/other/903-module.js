/**
 * Module 903
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (e, t, i) {
  var n = i(48);
  function r() {
  }
  r.prototype.addVertex = function (e, t, i) {
    throw new Error("Not Supported");
  }, r.prototype.appendVertices = function (e, t) {
    if (e.rewindVertices(t || 0))
      for (var i = new n(); e.readVertex(i);)
        this.addVertex(i.command, i.x, i.y);
  }, r.prototype.clearVertices = function () {
    throw new Error("Not Supported.");
  }, r.prototype.toString = function () {
    return "[Object GVertexTarget]";
  }, e.exports = r;
}
