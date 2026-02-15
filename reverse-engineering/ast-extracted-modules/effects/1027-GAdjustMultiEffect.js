/**
 * Module 1027 - GAdjustMultiEffect
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
  var n = i(535), r = i(282), o = i(731), a = i(728), s = i(2), l = i(9);
  function h() {
    n.call(this);
  }
  s.inherit("adjustMultiEffect", h, n), h.prototype.getNodeNameTranslated = function () {
    return l.getValue("GAdjustMultiEffect", "name", this.getNodeName());
  }, h.prototype.toString = function () {
    return "[Object GAdjustMultiEffect]";
  }, n.register(h, [
    o,
    a,
    r
  ]), e.exports = h;
}
