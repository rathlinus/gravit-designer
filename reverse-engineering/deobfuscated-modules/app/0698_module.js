/**
 * Webpack Module #698
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(101) /* module_101 */;
    exports.exports = function (e, t, n) {
      for (
        var i = 0, a = arguments.length > 2 ? n : o(t), r = new e(a);
        a > i;

      )
        r[i] = t[i++];
      return r;
    };
  }