/**
 * Webpack Module #309
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(27) /* module_27 */,
      i = require(130) /* module_130 */,
      a = require(62) /* module_62 */,
      r = require(92) /* module_92 */,
      s = o("".charAt),
      l = o("".charCodeAt),
      c = o("".slice),
      d = function (e) {
        return function (t, n) {
          var o,
            d,
            u = a(r(t)),
            p = i(n),
            g = u.length;
          return p < 0 || p >= g
            ? e
              ? ""
              : undefined
            : (o = l(u, p)) < 55296 ||
              o > 56319 ||
              p + 1 === g ||
              (d = l(u, p + 1)) < 56320 ||
              d > 57343
            ? e
              ? s(u, p)
              : o
            : e
            ? c(u, p, p + 2)
            : d - 56320 + ((o - 55296) << 10) + 65536;
        };
      };
    exports.exports = { codeAt: d(false), charAt: d(true) };
  }