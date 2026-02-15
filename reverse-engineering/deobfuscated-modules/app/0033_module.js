/**
 * Webpack Module #33
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(23) /* module_23 */,
      i = n(421) /* module_421 */,
      a = n(422) /* module_422 */,
      r = n(671) /* module_671 */,
      s = n(100) /* module_100 */,
      l = function (e) {
        if (e && e.forEach !== r)
          try {
            s(e, "forEach", r);
          } catch (t) {
            e.forEach = r;
          }
      };
    for (var c in i) i[c] && l(o[c] && o[c].prototype);
    l(a);
  }