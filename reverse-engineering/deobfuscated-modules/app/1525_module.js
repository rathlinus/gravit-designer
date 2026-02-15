/**
 * Webpack Module #1525
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(130) /* module_130 */,
      i = n(62) /* module_62 */,
      a = n(92) /* module_92 */,
      r = RangeError;
    e.exports = function (e) {
      var t = i(a(this)),
        n = "",
        s = o(e);
      if (s < 0 || s === 1 / 0) throw new r("Wrong number of repetitions");
      for (; s > 0; (s >>>= 1) && (t += t)) 1 & s && (n += t);
      return n;
    };
  }