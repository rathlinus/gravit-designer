/**
 * Webpack Module #1525
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(130) /* lengthOfArrayLike */,
      i = require(62) /* requireObjectCoercible */,
      a = require(92) /* classof */,
      r = RangeError;
    exports.exports = function (e) {
      var t = i(a(this)),
        n = "",
        s = o(e);
      if (s < 0 || s === 1 / 0) throw new r("Wrong number of repetitions");
      for (; s > 0; (s >>>= 1) && (t += t)) 1 & s && (n += t);
      return n;
    };
  }