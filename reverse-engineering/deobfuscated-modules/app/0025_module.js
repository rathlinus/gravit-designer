/**
 * Webpack Module #25
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var globalThis = require(23) /* globalThis */,
      objectGetOwnPropertyDescriptor = require(222) /* objectGetOwnPropertyDescriptor */.f,
      createProperty = require(100) /* createProperty */,
      defineBuiltIn = require(79) /* defineBuiltIn */,
      defineGlobalProperty = require(298) /* defineGlobalProperty */,
      copyConstructorProperties = require(341) /* copyConstructorProperties */,
      DataModule_277 = require(277) /* DataModule_277 */;
    exports.exports = function (e, t) {
      var n,
        d,
        u,
        p,
        g,
        h = e.target,
        f = e.global,
        m = e.stat;
      if ((n = f ? globalThis : m ? globalThis[h] || defineGlobalProperty(h, {}) : globalThis[h] && globalThis[h].prototype))
        for (d in t) {
          if (
            ((p = t[d]),
            (u = e.dontCallGetSet ? (g = objectGetOwnPropertyDescriptor(n, d)) && g.value : n[d]),
            !DataModule_277(f ? d : h + (m ? "." : "#") + d, e.forced) && undefined !== u)
          ) {
            if (typeof p == typeof u) continue;
            copyConstructorProperties(p, u);
          }
          (e.sham || (u && u.sham)) && createProperty(p, "sham", true), defineBuiltIn(n, d, p, e);
        }
    };
  }