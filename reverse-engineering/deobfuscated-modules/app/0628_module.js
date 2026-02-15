/**
 * Webpack Module #628
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(25) /* module_25 */,
      i = n(74) /* module_74 */,
      a = n(201) /* module_201 */.CONSTRUCTOR,
      r = n(186) /* module_186 */,
      s = n(110) /* module_110 */,
      l = n(35) /* module_35 */,
      c = n(79) /* module_79 */,
      d = r && r.prototype;
    if (
      (o(
        { target: "Promise", proto: true, forced: a, real: true },
        {
          catch: function (e) {
            return this.then(undefined, e);
          },
        }
      ),
      !i && l(r))
    ) {
      var u = s("Promise").prototype.catch;
      d.catch !== u && c(d, "catch", u, { unsafe: true });
    }
  }