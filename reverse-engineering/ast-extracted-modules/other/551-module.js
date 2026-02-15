/**
 * Module 551
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
  var n = i(7), r = i(236), o = i(214), a = i(0);
  function s() {
    r.call(this, !0, !0);
  }
  i(552), a.inherit(s, r), s.prototype._getRelatedItemClass = function () {
    return o;
  }, s.prototype._updateShape = function (e, t, i) {
    return !!t && (e.setProperty("trf", new n(Math.max(1, t.getWidth()) / 2, 0, 0, Math.max(1, t.getHeight()) / 2, t.getX() + t.getWidth() / 2, t.getY() + t.getHeight() / 2)), !0);
  }, s.prototype._showMousePositionInlineHint = function () {
    return !0;
  }, s.prototype._showAreaInlineHint = function () {
    return !0;
  }, s.prototype._hasCenterCross = function () {
    return !0;
  }, s.prototype.toString = function () {
    return "[Object GEllipseTool]";
  }, e.exports = s;
}
