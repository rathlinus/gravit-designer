/**
 * Webpack Module #702
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(23) /* module_23 */,
      i = require(21) /* module_21 */,
      a = require(27) /* module_27 */,
      r = require(62) /* module_62 */,
      s = require(262) /* module_262 */.trim,
      l = require(248) /* module_248 */,
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
    exports.exports = g
      ? function (e) {
          var t = s(r(e)),
            n = d(t);
          return 0 === n && "-" === c(t, 0) ? -0 : n;
        }
      : d;
  }