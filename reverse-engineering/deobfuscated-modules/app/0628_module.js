/**
 * Webpack Module #628
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* core_export */,
      i = require(74) /* createNonEnumerableProperty */,
      a = require(201) /* module_201 */.CONSTRUCTOR,
      r = require(186) /* stub_requires_23 */,
      s = require(110) /* module_110 */,
      l = require(35) /* anObject */,
      c = require(79) /* defineBuiltIn */,
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