/**
 * Webpack Module #628
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      createNonEnumerableProperty = require(74) /* createNonEnumerableProperty */,
      DataModule_201 = require(201) /* DataModule_201 */.CONSTRUCTOR,
      r = require(186) /* stub_requires_23 */,
      s = require(110) /* module_110 */,
      anObject = require(35) /* anObject */,
      defineBuiltIn = require(79) /* defineBuiltIn */,
      d = r && r.prototype;
    if (
      (core_export(
        { target: "Promise", proto: true, forced: DataModule_201, real: true },
        {
          catch: function (e) {
            return this.then(undefined, e);
          },
        }
      ),
      !createNonEnumerableProperty && anObject(r))
    ) {
      var u = s("Promise").prototype.catch;
      d.catch !== u && defineBuiltIn(d, "catch", u, { unsafe: true });
    }
  }