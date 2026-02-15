/**
 * Webpack Module #309
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var uncurryThis = require(27) /* uncurryThis */,
      lengthOfArrayLike = require(130) /* lengthOfArrayLike */,
      requireObjectCoercible = require(62) /* requireObjectCoercible */,
      classof = require(92) /* classof */,
      s = uncurryThis("".charAt),
      l = uncurryThis("".charCodeAt),
      c = uncurryThis("".slice),
      d = function (e) {
        return function (t, n) {
          var uncurryThis,
            d,
            u = requireObjectCoercible(classof(t)),
            p = lengthOfArrayLike(n),
            g = u.length;
          return p < 0 || p >= g
            ? e
              ? ""
              : undefined
            : (uncurryThis = l(u, p)) < 55296 ||
              uncurryThis > 56319 ||
              p + 1 === g ||
              (d = l(u, p + 1)) < 56320 ||
              d > 57343
            ? e
              ? s(u, p)
              : uncurryThis
            : e
            ? c(u, p, p + 2)
            : d - 56320 + ((uncurryThis - 55296) << 10) + 65536;
        };
      };
    exports.exports = { codeAt: d(false), charAt: d(true) };
  }