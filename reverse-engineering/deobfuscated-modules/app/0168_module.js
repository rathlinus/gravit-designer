/**
 * Webpack Module #168
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      DataModule_681 = require(681) /* DataModule_681 */.left,
      a = require(350) /* module_350 */,
      DataModule_213 = require(213) /* DataModule_213 */;
    core_export(
      {
        target: "Array",
        proto: true,
        forced: (!require(245) /* stub_requires_407 */ && DataModule_213 > 79 && DataModule_213 < 83) || !a("reduce"),
      },
      {
        reduce: function (e) {
          var t = arguments.length;
          return DataModule_681(this, e, t, t > 1 ? arguments[1] : undefined);
        },
      }
    );
  }