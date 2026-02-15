/**
 * Webpack Module #678
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var globalThis = require(23) /* globalThis */,
      tryCall = require(21) /* tryCall */,
      uncurryThis = require(27) /* uncurryThis */,
      requireObjectCoercible = require(62) /* requireObjectCoercible */,
      DataModule_262 = require(262) /* DataModule_262 */.trim,
      l = require(248) /* module_248 */,
      c = globalThis.parseInt,
      d = globalThis.Symbol,
      u = d && d.iterator,
      p = /^[+-]?0x/i,
      g = uncurryThis(p.exec),
      h =
        8 !== c(l + "08") ||
        22 !== c(l + "0x16") ||
        (u &&
          !tryCall(function () {
            c(Object(u));
          }));
    exports.exports = h
      ? function (e, t) {
          var n = DataModule_262(requireObjectCoercible(e));
          return c(n, t >>> 0 || (g(p, n) ? 16 : 10));
        }
      : c;
  }