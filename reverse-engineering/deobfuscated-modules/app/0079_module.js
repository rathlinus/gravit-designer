/**
 * Webpack Module #79
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(35) /* module_35 */,
      i = n(88) /* module_88 */,
      a = n(401) /* module_401 */,
      r = n(298) /* module_298 */;
    e.exports = function (e, t, n, s) {
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