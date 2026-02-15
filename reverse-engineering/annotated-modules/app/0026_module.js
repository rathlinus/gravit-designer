/**
 * Webpack Module #26
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(23) /* module_23 */,
      i = n(421) /* module_421 */,
      a = n(422) /* module_422 */,
      r = n(19) /* module_19 */,
      s = n(100) /* module_100 */,
      l = n(137) /* module_137 */,
      c = n(43) /* module_43 */("iterator"),
      d = r.values,
      u = function (e, t) {
        if (e) {
          if (e[c] !== d)
            try {
              s(e, c, d);
            } catch (t) {
              e[c] = d;
            }
          if ((l(e, t, !0), i[t]))
            for (var n in r)
              if (e[n] !== r[n])
                try {
                  s(e, n, r[n]);
                } catch (t) {
                  e[n] = r[n];
                }
        }
      };
    for (var p in i) u(o[p] && o[p].prototype, p);
    u(a, "DOMTokenList");
  }