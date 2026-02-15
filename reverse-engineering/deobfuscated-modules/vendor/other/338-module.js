/**
 * Module 338
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

function (exports, module) {
  var i = {
    normalizeNumber: function (e) {
      return ("number" != typeof e || isNaN(e)) && (console.warn("GPDFNumber.normalizeNumber", "invalid number", e), e = 0), parseFloat(e.toFixed(4));
    },
    toHex: function (e, t) {
      for (var i = new Array(t || 4), n = e.toString(16), r = i.length - n.length, o = 0; o < r; o++)
        i[o] = "0";
      return i.join("") + n;
    }
  };
  exports.exports = i;
}
