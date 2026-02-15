/**
 * Webpack Module #666
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(27) /* uncurryThis */,
      i = require(348) /* module_348 */,
      a = require(35) /* anObject */,
      r = require(116) /* module_116 */,
      s = require(62) /* requireObjectCoercible */,
      l = o([].push);
    exports.exports = function (e) {
      if (a(e)) return e;
      if (i(e)) {
        for (var module = e.length, require = [], o = 0; o < module; o++) {
          var c = e[o];
          "string" == typeof c
            ? l(require, c)
            : ("number" != typeof c &&
                "Number" !== r(c) &&
                "String" !== r(c)) ||
              l(require, s(c));
        }
        var d = require.length,
          u = true;
        return function (e, t) {
          if (u) return (u = false), t;
          if (i(this)) return t;
          for (var o = 0; o < d; o++) if (require[o] === e) return t;
        };
      }
    };
  }