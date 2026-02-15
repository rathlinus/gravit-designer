/**
 * Module 767
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
  require(7) /* GTransform */;
  var n = require(549) /* GRectangleTool */, r = require(316) /* GRectangleAnnotation */, o = require(0) /* GObject */, a = require(212) /* GAnnotationTool */, s = require(52) /* module */;
  function l() {
    n.call(this, true, true);
  }
  require(768) /* GRectangleAnnotationEditor */, o.inheritAndMix(l, n, [a]), l.prototype._getRelatedItemClass = function () {
    return r;
  }, l.prototype.getCursor = function () {
    return s.CrossRectangle;
  }, l.prototype._showMousePositionInlineHint = function () {
    return false;
  }, l.prototype.toString = function () {
    return "[Object GRectangleAnnotationTool]";
  }, exports.exports = l;
}
