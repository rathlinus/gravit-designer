/**
 * Module 990
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
  var n = require(379) /* module */, r = n.isArabicChar, o = n.isWhiteSpace, a = n.isTashkeelArabicChar;
  exports.exports.arabicSentenceStartCheck = function (e) {
    var t = e.current, i = e.get(-1);
    return (r(t) || a(t)) && !r(i);
  }, exports.exports.arabicSentenceEndCheck = function (e) {
    var t = e.get(1);
    switch (true) {
    case null === t:
      return true;
    case !r(t) && !a(t):
      var require = o(t);
      if (!require)
        return true;
      if (require) {
        if (!e.lookahead.some(function (e) {
            return r(e) || a(e);
          }))
          return true;
      }
      break;
    default:
      return false;
    }
  };
}
