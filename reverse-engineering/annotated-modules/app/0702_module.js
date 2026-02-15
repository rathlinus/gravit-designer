/**
 * Webpack Module #702
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(23) /* globalThis */,
      i = n(21) /* tryCall */,
      a = n(27) /* uncurryThis */,
      r = n(62) /* requireObjectCoercible */,
      s = n(262) /* module_262 */.trim,
      l = n(248) /* module_248 */,
      c = a("".charAt),
      d = o.parseFloat,
      u = o.Symbol,
      p = u && u.iterator,
      g =
        1 / d(l + "-0") != -1 / 0 ||
        (p &&
          !i(function () {
            d(Object(p));
          }));
    e.exports = g
      ? function (e) {
          var t = s(r(e)),
            n = d(t);
          return 0 === n && "-" === c(t, 0) ? -0 : n;
        }
      : d;
  }