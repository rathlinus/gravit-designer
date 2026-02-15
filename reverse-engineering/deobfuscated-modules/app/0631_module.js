/**
 * Webpack Module #631
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* module_25 */,
      i = require(110) /* module_110 */,
      a = require(74) /* module_74 */,
      r = require(186) /* module_186 */,
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