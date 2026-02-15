/**
 * Webpack Module #426
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var lengthOfArrayLike = require(130) /* lengthOfArrayLike */,
      toStringTagSupport = require(117) /* toStringTagSupport */,
      a = RangeError;
    exports.exports = function (e) {
      if (undefined === e) return 0;
      var t = lengthOfArrayLike(e),
        n = toStringTagSupport(t);
      if (t !== n) throw new a("Wrong length or index");
      return n;
    };
  }