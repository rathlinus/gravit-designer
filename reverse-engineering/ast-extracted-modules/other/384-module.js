/**
 * Module 384
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
  var n = i(284), r = i(236), o = i(0), a = i(12), s = i(64);
  function l() {
    r.call(this, !1, !1);
  }
  i(747), o.inherit(l, r), l.prototype._getRelatedItemClass = function () {
    return n;
  }, l.prototype._modifiersChanged = function (e) {
    e.changed.shiftKey && this._invalidateShape(), r.prototype._modifiersChanged.call(this, e);
  }, l.prototype._createShape = function () {
    return new n();
  }, l.prototype._getNumberOfPoints = function () {
    return 6;
  }, l.prototype._getInnerRadiusFactor = function () {
    return 0;
  }, l.prototype._updateShape = function (e, t, i) {
    if (i) {
      var n = this._getNumberOfPoints(), r = i[1].getX() - i[0].getX(), o = i[1].getY() - i[0].getY(), l = a.normalizeAngleRadians(Math.atan2(o, r)), h = a.ptDist(i[1].getX(), i[1].getY(), i[0].getX(), i[0].getY());
      s.modifiers.shiftKey && (l = this._lockAngle(l));
      var A = l, c = a.normalizeAngleRadians(l + Math.PI / n), p = h, u = h * Math.cos(Math.PI / n), d = this._getInnerRadiusFactor();
      return d && (u = h * d), u = Math.max(0.5, u), p = Math.max(u, p), e.setProperties([
        "pts",
        "cx",
        "cy",
        "ir",
        "or",
        "ia",
        "oa"
      ], [
        n,
        i[0].getX(),
        i[0].getY(),
        Math.max(0.5, u),
        p,
        c,
        A
      ]), !0;
    }
    return !1;
  }, l.prototype._showMousePositionInlineHint = function () {
    return !0;
  }, l.prototype._showAreaInlineHint = function () {
    return !0;
  }, l.prototype._hasCenterCross = function () {
    return !0;
  }, l.prototype._lockAngle = function (e) {
    return Math.round(12 * e / Math.PI) * Math.PI / 12;
  }, l.prototype.toString = function () {
    return "[Object GPolygonTool]";
  }, e.exports = l;
}
