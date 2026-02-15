/**
 * Module 771
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
  var n = require(7) /* GTransform */, r = require(236) /* GShapeTool */, o = require(285) /* GCommentAnnotation */, a = require(0) /* GObject */, s = require(212) /* GAnnotationTool */, l = (require(60) /* GPath */, require(17) /* GRGBColor */, require(28) /* GStylable */, require(52) /* module */);
  function h() {
    r.call(this, true, true);
  }
  require(772) /* GCommentAnnotationEditor */, a.inheritAndMix(h, r, [s]), h.prototype._getRelatedItemClass = function () {
    return o;
  }, h.prototype._updateShape = function (e, t, i) {
    if (t) {
      var r = new n(t.getWidth() / 2, 0, 0, t.getHeight() / 2, t.getX() + t.getWidth() / 2, t.getY() + t.getHeight() / 2), o = (e.getProperty("trf") || new n()).inverted() || new n();
      return e.transform(o.multiplied(r)), true;
    }
    return false;
  }, h.prototype._createShape = function () {
    return null;
  }, h.prototype._mouseDragStart = function (e) {
  }, h.prototype._mouseDrag = function (e) {
  }, h.prototype._mouseDragEnd = function (e) {
  }, h.prototype._createShapeManually = function (e) {
    var t = new o();
    t.initDefaultForLimitedRestore(), t.initSizeAndPosition(), t.transform(new n(1, 0, 0, 1, e.getX(), e.getY())), this._insertShape(t);
  }, h.prototype._showMousePositionInlineHint = function () {
    return false;
  }, h.prototype._showAreaInlineHint = function () {
    return true;
  }, h.prototype.getCursor = function () {
    return l.Comment;
  }, h.prototype.toString = function () {
    return "[Object GCommentAnnotationTool]";
  }, exports.exports = h;
}
