/**
 * Webpack Module #631
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* core_export */,
      i = require(110) /* module_110 */,
      a = require(74) /* createNonEnumerableProperty */,
      r = require(186) /* stub_requires_23 */,
      s = require(201) /* module_201 */.CONSTRUCTOR,
      l = require(453) /* module_453 */,
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