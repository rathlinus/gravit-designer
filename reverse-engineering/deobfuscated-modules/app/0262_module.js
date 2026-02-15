/**
 * Webpack Module #262
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(27) /* uncurryThis */,
      i = require(92) /* classof */,
      a = require(62) /* requireObjectCoercible */,
      r = require(248) /* module_248 */,
      s = o("".replace),
      l = RegExp("^[" + r + "]+"),
      c = RegExp("(^|[^" + r + "])[" + r + "]+$"),
      d = function (e) {
        return function (t) {
          var n = a(i(t));
          return 1 & e && (n = s(n, l, "")), 2 & e && (n = s(n, c, "$1")), n;
        };
      };
    exports.exports = { start: d(1), end: d(2), trim: d(3) };
  }