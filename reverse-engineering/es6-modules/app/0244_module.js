/**
 * Webpack Module #244
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var lengthOfArrayLike = require(130) /* lengthOfArrayLike */,
    i = Math.max,
    a = Math.min;
  exports.exports = function (e, t) {
    var n = lengthOfArrayLike(e);
    return n < 0 ? i(n + t, 0) : a(n, t);
  };
}
