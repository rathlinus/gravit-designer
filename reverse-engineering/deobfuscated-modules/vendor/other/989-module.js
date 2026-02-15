/**
 * Module 989
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
  var n = require(379) /* module */.isArabicChar;
  exports.exports.arabicWordStartCheck = function (e) {
    var t = e.current, i = e.get(-1);
    return null === i && n(t) || !n(i) && n(t);
  }, exports.exports.arabicWordEndCheck = function (e) {
    var t = e.get(1);
    return null === t || !n(t);
  };
}
