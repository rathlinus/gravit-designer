/**
 * Webpack Module #631
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(25) /* module_25 */,
      i = n(110) /* module_110 */,
      a = n(74) /* module_74 */,
      r = n(186) /* module_186 */,
      s = n(201) /* module_201 */.CONSTRUCTOR,
      l = n(453) /* module_453 */,
      c = i("Promise"),
      d = a && !s;
    o(
      { target: "Promise", stat: true, forced: a || s },
      {
        resolve: function (e) {
          return l(d && this === c ? r : this, e);
        },
      }
    );
  }