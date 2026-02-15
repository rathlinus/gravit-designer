/**
 * Webpack Module #117
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(130) /* lengthOfArrayLike */,
      i = Math.min;
    exports.exports = function (e) {
      var t = o(e);
      return t > 0 ? i(t, 9007199254740991) : 0;
    };
  }