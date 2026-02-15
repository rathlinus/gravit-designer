/**
 * Module 754
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
    return 5;
  }, r.prototype._getInnerRadiusFactor = function () {
    return 0.5;
  }, r.prototype._lockAngle = function (e) {
    return Math.round(10 * e / Math.PI) * Math.PI / 10;
  }, r.prototype.toString = function () {
    return "[Object GStarTool]";
  }, exports.exports = r;
}
