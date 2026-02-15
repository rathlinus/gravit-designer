/**
 * Webpack Module #628
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* module_25 */,
      i = require(74) /* module_74 */,
      a = require(201) /* module_201 */.CONSTRUCTOR,
      r = require(186) /* module_186 */,
      s = require(110) /* module_110 */,
      l = require(35) /* module_35 */,
      c = require(79) /* module_79 */,
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