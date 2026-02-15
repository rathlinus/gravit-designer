/**
 * Webpack Module #244
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(130) /* module_130 */,
      i = Math.max,
      a = Math.min;
    exports.exports = function (e, t) {
      var n = o(e);
      return n < 0 ? i(n + t, 0) : a(n, t);
    };
  }