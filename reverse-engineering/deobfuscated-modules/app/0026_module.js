/**
 * Webpack Module #26
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(23) /* module_23 */,
      i = require(421) /* module_421 */,
      a = require(422) /* module_422 */,
      r = require(19) /* module_19 */,
      s = require(100) /* module_100 */,
      l = require(137) /* module_137 */,
      c = require(43) /* module_43 */("iterator"),
      d = r.values,
      u = function (e, t) {
        if (e) {
          if (e[c] !== d)
            try {
              s(e, c, d);
            } catch (t) {
              e[c] = d;
            }
          if ((l(e, t, true), i[t]))
            for (var require in r)
              if (e[require] !== r[require])
                try {
                  s(e, require, r[require]);
                } catch (t) {
                  e[require] = r[require];
                }
        }
      };
    for (var p in i) u(o[p] && o[p].prototype, p);
    u(a, "DOMTokenList");
  }