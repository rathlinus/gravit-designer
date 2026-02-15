/**
 * Module 746
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
  var n = require(384) /* GPolygonTool */;
  function r() {
    n.call(this, false, false);
  }
  require(0) /* GObject */.inherit(r, n), r.prototype._getNumberOfPoints = function () {
    return 3;
  }, r.prototype.toString = function () {
    return "[Object GTriangleTool]";
  }, exports.exports = r;
}
