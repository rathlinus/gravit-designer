/**
 * Webpack Module #631
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      i = require(110) /* module_110 */,
      createNonEnumerableProperty = require(74) /* createNonEnumerableProperty */,
      r = require(186) /* stub_requires_23 */,
      DataModule_201 = require(201) /* DataModule_201 */.CONSTRUCTOR,
      l = require(453) /* module_453 */,
      c = i("Promise"),
      d = createNonEnumerableProperty && !DataModule_201;
    core_export(
      { target: "Promise", stat: true, forced: createNonEnumerableProperty || DataModule_201 },
      {
        resolve: function (e) {
          return l(d && this === c ? r : this, e);
        },
      }
    );
  }