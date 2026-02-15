/**
 * Webpack Module #25
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(23) /* module_23 */,
      i = n(222) /* module_222 */.f,
      a = n(100) /* module_100 */,
      r = n(79) /* module_79 */,
      s = n(298) /* module_298 */,
      l = n(341) /* module_341 */,
      c = n(277) /* module_277 */;
    e.exports = function (e, t) {
      var n,
        d,
        u,
        p,
        g,
        h = e.target,
        f = e.global,
        m = e.stat;
      if ((n = f ? o : m ? o[h] || s(h, {}) : o[h] && o[h].prototype))
        for (d in t) {
          if (
            ((p = t[d]),
            (u = e.dontCallGetSet ? (g = i(n, d)) && g.value : n[d]),
            !c(f ? d : h + (m ? "." : "#") + d, e.forced) && undefined !== u)
          ) {
            if (typeof p == typeof u) continue;
            l(p, u);
          }
          (e.sham || (u && u.sham)) && a(p, "sham", true), r(n, d, p, e);
        }
    };
  }