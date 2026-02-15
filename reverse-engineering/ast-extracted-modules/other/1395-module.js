/**
 * Module 1395
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
  var n = i(0), r = i(587), o = i(708);
  function a(e, t, i, n) {
    var a = o.parse(n);
    if (!a || !a.supported)
      throw "Could not load embedded font";
    r.call(this, e, t, i, n, a);
  }
  n.inherit(a, r), a.prototype.isEmbedded = function () {
    return !0;
  }, e.exports = a;
}
