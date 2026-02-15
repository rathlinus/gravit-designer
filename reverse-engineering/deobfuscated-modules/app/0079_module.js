/**
 * Webpack Module #79
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(35) /* module_35 */,
      i = require(88) /* module_88 */,
      a = require(401) /* module_401 */,
      r = require(298) /* module_298 */;
    exports.exports = function (e, t, n, s) {
      s || (s = {});
      var l = s.enumerable,
        c = undefined !== s.name ? s.name : t;
      if ((o(n) && a(n, c, s), s.global)) l ? (e[t] = n) : r(t, n);
      else {
        try {
          s.unsafe ? e[t] && (l = true) : delete e[t];
        } catch (e) {}
        l
          ? (e[t] = n)
          : i.f(e, t, {
              value: n,
              enumerable: false,
              configurable: !s.nonConfigurable,
              writable: !s.nonWritable,
            });
      }
      return e;
    };
  }