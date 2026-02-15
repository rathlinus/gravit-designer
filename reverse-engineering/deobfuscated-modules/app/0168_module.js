/**
 * Webpack Module #168
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      i = require(681) /* module_681 */.left,
      a = require(350) /* module_350 */,
      r = require(213) /* module_213 */;
    core_export(
      {
        target: "Array",
        proto: true,
        forced: (!require(245) /* stub_requires_407 */ && r > 79 && r < 83) || !a("reduce"),
      },
      {
        reduce: function (e) {
          var t = arguments.length;
          return i(this, e, t, t > 1 ? arguments[1] : undefined);
        },
      }
    );
  }