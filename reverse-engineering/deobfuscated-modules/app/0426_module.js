/**
 * Webpack Module #426
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(130) /* module_130 */,
      i = require(117) /* module_117 */,
      a = RangeError;
    exports.exports = function (e) {
      if (undefined === e) return 0;
      var t = o(e),
        n = i(t);
      if (t !== n) throw new a("Wrong length or index");
      return n;
    };
  }