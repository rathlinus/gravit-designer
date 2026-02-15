/**
 * Webpack Module #403
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(184) /* module_184 */,
      i = n(244) /* module_244 */,
      a = n(101) /* module_101 */,
      r = function (e) {
        return function (t, n, r) {
          var s = o(t),
            l = a(s);
          if (0 === l) return !e && -1;
          var c,
            d = i(r, l);
          if (e && n != n) {
            for (; l > d; ) if ((c = s[d++]) != c) return true;
          } else
            for (; l > d; d++)
              if ((e || d in s) && s[d] === n) return e || d || 0;
          return !e && -1;
        };
      };
    e.exports = { includes: r(true), indexOf: r(false) };
  }