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

function (exports, module, require) {
  var n = require(48) /* GVertex */;
  function r() {
  }
  r.prototype.addVertex = function (e, t, i) {
    throw new Error("Not Supported");
  }, r.prototype.appendVertices = function (e, t) {
    if (e.rewindVertices(t || 0))
      for (var require = new n(); e.readVertex(require);)
        this.addVertex(require.command, require.x, require.y);
  }, r.prototype.clearVertices = function () {
    throw new Error("Not Supported.");
  }, r.prototype.toString = function () {
    return "[Object GVertexTarget]";
  }, exports.exports = r;
}
