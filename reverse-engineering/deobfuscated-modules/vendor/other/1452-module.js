/**
 * Module 1452
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
  var n = require(6) /* GRect */;
  function r() {
  }
  r.tile = function (e, t) {
    var i, r, o = 0, a = 0, s = [], l = e.getWidth(), h = e.getHeight();
    if (l > (t = t || 1024) || h > t)
      for (; a < h;) {
        for (r = t, a + t >= h && (r = h - a), o = 0; o < l;)
          i = t, o + t >= l && (i = l - o), s.push(new n(o, a, i, r)), o += i;
        a += r;
      }
    else
      s = null;
    return s;
  }, r.prototype.toString = function () {
    return "[Object GPDFRect]";
  }, exports.exports = r;
}
