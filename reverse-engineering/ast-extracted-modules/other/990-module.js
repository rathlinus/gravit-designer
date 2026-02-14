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

function (e, t, i) {
  var n = i(379), r = n.isArabicChar, o = n.isWhiteSpace, a = n.isTashkeelArabicChar;
  e.exports.arabicSentenceStartCheck = function (e) {
    var t = e.current, i = e.get(-1);
    return (r(t) || a(t)) && !r(i);
  }, e.exports.arabicSentenceEndCheck = function (e) {
    var t = e.get(1);
    switch (!0) {
    case null === t:
      return !0;
    case !r(t) && !a(t):
      var i = o(t);
      if (!i)
        return !0;
      if (i) {
        if (!e.lookahead.some(function (e) {
            return r(e) || a(e);
          }))
          return !0;
      }
      break;
    default:
      return !1;
    }
  };
}
