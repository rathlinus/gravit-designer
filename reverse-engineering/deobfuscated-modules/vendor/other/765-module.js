/**
 * Module 765
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
  var n = require(551) /* GEllipseTool */, r = require(317) /* GEllipseAnnotation */, o = require(0) /* GObject */, a = require(212) /* GAnnotationTool */, s = require(52) /* module */;
  function l() {
    n.call(this, true, true);
  }
  require(766) /* GEllipseAnnotationEditor */, o.inheritAndMix(l, n, [a]), l.prototype._getRelatedItemClass = function () {
    return r;
  }, l.prototype.getCursor = function () {
    return s.CrossEllipse;
  }, l.prototype._showMousePositionInlineHint = function () {
    return false;
  }, l.prototype.toString = function () {
    return "[Object GEllipseAnnotationTool]";
  }, exports.exports = l;
}
