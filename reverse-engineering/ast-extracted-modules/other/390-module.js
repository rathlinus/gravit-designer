/**
 * Module 390
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
  var n = i(68), r = i(90), o = i(0), a = function () {
    };
  o.inheritAndMix(a, r, [o]), a.prototype.hasTransparency = function () {
    return (null != this.getAlpha() ? this.getAlpha() : 1) < 1;
  }, a.prototype.getAlpha = function () {
    return 1;
  }, a.prototype.equals = function (e) {
    return !!(e instanceof o && e.hasMixin(a)) && this.asArray().equals(e.asArray());
  }, a.prototype.write = function (e) {
    this.asArray().forEach(function (t) {
      t.write(e), e.writeSpace();
    });
  }, a.prototype.asArray = function () {
  }, a.rgbToCMYK = function (e) {
    return n.rgbToCMYK([
      e >> 24 & 255,
      e >> 16 & 255,
      e >> 8 & 255
    ]);
  }, e.exports = a;
}
