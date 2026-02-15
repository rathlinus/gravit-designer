/**
 * Module 1110
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
  var n = i(90), r = i(338), o = function (e) {
      this.primitve = e;
    };
  i(0).inherit(o, n), o.prototype.write = function (e) {
    var t = this.primitve;
    "number" == typeof t && (t = r.normalizeNumber(t)), e.write(t);
  }, e.exports = o;
}
