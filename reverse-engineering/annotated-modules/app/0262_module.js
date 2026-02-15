/**
 * Webpack Module #262
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(27) /* uncurryThis */,
      i = n(92) /* classof */,
      a = n(62) /* requireObjectCoercible */,
      r = n(248) /* module_248 */,
      s = o("".replace),
      l = RegExp("^[" + r + "]+"),
      c = RegExp("(^|[^" + r + "])[" + r + "]+$"),
      d = function (e) {
        return function (t) {
          var n = a(i(t));
          return 1 & e && (n = s(n, l, "")), 2 & e && (n = s(n, c, "$1")), n;
        };
      };
    e.exports = { start: d(1), end: d(2), trim: d(3) };
  }