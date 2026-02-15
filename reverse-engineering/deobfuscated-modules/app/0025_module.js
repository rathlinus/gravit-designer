/**
 * Webpack Module #25
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(23) /* globalThis */,
      i = require(222) /* objectGetOwnPropertyDescriptor */.f,
      a = require(100) /* createProperty */,
      r = require(79) /* defineBuiltIn */,
      s = require(298) /* defineGlobalProperty */,
      l = require(341) /* copyConstructorProperties */,
      c = require(277) /* module_277 */;
    exports.exports = function (e, t) {
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