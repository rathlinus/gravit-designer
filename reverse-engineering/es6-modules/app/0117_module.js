/**
 * Webpack Module #117
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var lengthOfArrayLike = require(130) /* lengthOfArrayLike */,
    i = Math.min;
  exports.exports = function (e) {
    var t = lengthOfArrayLike(e);
    return t > 0 ? i(t, 9007199254740991) : 0;
  };
}
