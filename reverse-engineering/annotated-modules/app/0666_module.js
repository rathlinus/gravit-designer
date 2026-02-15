/**
 * Webpack Module #666
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(27) /* uncurryThis */,
      i = n(348) /* module_348 */,
      a = n(35) /* anObject */,
      r = n(116) /* module_116 */,
      s = n(62) /* requireObjectCoercible */,
      l = o([].push);
    e.exports = function (e) {
      if (a(e)) return e;
      if (i(e)) {
        for (var t = e.length, n = [], o = 0; o < t; o++) {
          var c = e[o];
          "string" == typeof c
            ? l(n, c)
            : ("number" != typeof c &&
                "Number" !== r(c) &&
                "String" !== r(c)) ||
              l(n, s(c));
        }
        var d = n.length,
          u = !0;
        return function (e, t) {
          if (u) return (u = !1), t;
          if (i(this)) return t;
          for (var o = 0; o < d; o++) if (n[o] === e) return t;
        };
      }
    };
  }