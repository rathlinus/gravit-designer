/**
 * Webpack Module #1525
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var lengthOfArrayLike = require(130) /* lengthOfArrayLike */,
    requireObjectCoercible = require(62) /* requireObjectCoercible */,
    classof = require(92) /* classof */,
    r = RangeError;
  exports.exports = function (e) {
    var t = requireObjectCoercible(classof(this)),
      n = '',
      s = lengthOfArrayLike(e);
    if (s < 0 || s === 1 / 0) throw new r('Wrong number of repetitions');
    for (; s > 0; (s >>>= 1) && (t += t)) 1 & s && (n += t);
    return n;
  };
}
