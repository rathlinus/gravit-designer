/**
 * Webpack Module #262
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(27) /* module_27 */,
      i = require(92) /* module_92 */,
      a = require(62) /* module_62 */,
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