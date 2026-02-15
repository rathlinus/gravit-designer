/**
 * Webpack Module #576
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(130) /* lengthOfArrayLike */,
      i = RangeError;
    exports.exports = function (e) {
      var t = o(e);
      if (t < 0) throw new i("The argument can't be less than 0");
      return t;
    };
  }