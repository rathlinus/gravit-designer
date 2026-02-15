/**
 * Webpack Module #678
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(23) /* globalThis */,
      i = require(21) /* tryCall */,
      a = require(27) /* uncurryThis */,
      r = require(62) /* requireObjectCoercible */,
      s = require(262) /* module_262 */.trim,
      l = require(248) /* module_248 */,
      c = o.parseInt,
      d = o.Symbol,
      u = d && d.iterator,
      p = /^[+-]?0x/i,
      g = a(p.exec),
      h =
        8 !== c(l + "08") ||
        22 !== c(l + "0x16") ||
        (u &&
          !i(function () {
            c(Object(u));
          }));
    exports.exports = h
      ? function (e, t) {
          var n = s(r(e));
          return c(n, t >>> 0 || (g(p, n) ? 16 : 10));
        }
      : c;
  }