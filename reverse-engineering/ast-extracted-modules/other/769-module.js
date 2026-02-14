/**
 * Module 769
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
  i(7);
  var n = i(550), r = i(319), o = i(0), a = i(212), s = i(52);
  function l() {
    n.call(this, !0, !0);
  }
  i(770), o.inheritAndMix(l, n, [a]), l.prototype._getRelatedItemClass = function () {
    return r;
  }, l.prototype.getCursor = function () {
    return s.CrossArrow;
  }, l.prototype._showMousePositionInlineHint = function () {
    return !1;
  }, l.prototype.toString = function () {
    return "[Object GArrowAnnotationTool]";
  }, e.exports = l;
}
