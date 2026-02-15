/**
 * Webpack Module #702
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(23) /* module_23 */,
      i = n(21) /* module_21 */,
      a = n(27) /* module_27 */,
      r = n(62) /* module_62 */,
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