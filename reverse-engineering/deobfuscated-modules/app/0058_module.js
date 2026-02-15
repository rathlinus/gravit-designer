/**
 * Webpack Module #58
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* module_25 */,
      i = require(403) /* module_403 */.includes,
      a = require(21) /* module_21 */,
      r = require(360) /* module_360 */;
    o(
      {
        target: "Array",
        proto: true,
        forced: a(function () {
          return !Array(1).includes();
        }),
      },
      {
        includes: function (e) {
          return i(this, e, arguments.length > 1 ? arguments[1] : undefined);
        },
      }
    ),
      r("includes");
  }