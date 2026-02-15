/**
 * Module 550
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
  var n = i(60), r = i(236), o = i(0), a = i(45), s = i(9), l = i(47);
  function h() {
    r.call(this, !0, !0);
  }
  o.inherit(h, r), h.prototype._getRelatedItemClass = function () {
    return n;
  }, h.prototype._createShape = function () {
    var e = new (this._getRelatedItemClass())(!1);
    return e.getAnchorPoints().appendChild(new a.AnchorPoint()), e.getAnchorPoints().appendChild(new a.AnchorPoint()), e;
  }, h.prototype._updateShape = function (e, t, i) {
    return !!i && (e.getAnchorPoints().getChildByIndex(0).setProperties([
      "x",
      "y"
    ], [
      i[0].getX(),
      i[0].getY()
    ]), e.getAnchorPoints().getChildByIndex(1).setProperties([
      "x",
      "y"
    ], [
      i[1].getX(),
      i[1].getY()
    ]), !0);
  }, h.prototype._insertShape = function (e, t, i, n) {
    var o = !1;
    if (i)
      o = r.prototype._insertShape.call(this, e, t, !0), e.getPaintLayers().clearFillLayers();
    else
      try {
        this._editor.beginTransaction(), o = r.prototype._insertShape.call(this, e, t, !0), e.getPaintLayers().clearFillLayers();
      } finally {
        var a = this.getAdditionalTransactionData(e, e.getParent());
        this._editor.commitTransaction(n || s.get(new l("GShapeTool", "action.insert-elements")), a);
      }
    return o;
  }, h.prototype._showMousePositionInlineHint = function () {
    return !0;
  }, h.prototype._showAreaInlineHint = function () {
    return !0;
  }, h.prototype.toString = function () {
    return "[Object GLineTool]";
  }, e.exports = h;
}
