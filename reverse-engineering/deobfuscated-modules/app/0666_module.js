/**
 * Webpack Module #666
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var uncurryThis = require(27) /* uncurryThis */,
      i = require(348) /* module_348 */,
      anObject = require(35) /* anObject */,
      r = require(116) /* module_116 */,
      requireObjectCoercible = require(62) /* requireObjectCoercible */,
      l = uncurryThis([].push);
    exports.exports = function (e) {
      if (anObject(e)) return e;
      if (i(e)) {
        for (var module = e.length, require = [], uncurryThis = 0; uncurryThis < module; uncurryThis++) {
          var c = e[uncurryThis];
          "string" == typeof c
            ? l(require, c)
            : ("number" != typeof c &&
                "Number" !== r(c) &&
                "String" !== r(c)) ||
              l(require, requireObjectCoercible(c));
        }
        var d = require.length,
          u = true;
        return function (e, t) {
          if (u) return (u = false), t;
          if (i(this)) return t;
          for (var uncurryThis = 0; uncurryThis < d; uncurryThis++) if (require[uncurryThis] === e) return t;
        };
      }
    };
  }