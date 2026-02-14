/**
 * Module 1111
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
  var n = i(559), r = i(0), o = i(437), a = i(390), s = i(182), l = function (e) {
      this._alpha = new n(e).getAlpha();
    };
  r.inheritAndMix(l, o, [a]), l.prototype.getAlpha = function () {
    return this._alpha;
  }, l.prototype.asArray = function () {
    return new s([this._alpha]);
  }, e.exports = l;
}
