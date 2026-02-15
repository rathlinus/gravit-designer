/**
 * Webpack Module #58
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      i = require(403) /* module_403 */.includes,
      tryCall = require(21) /* tryCall */,
      internalObjectKeys = require(360) /* internalObjectKeys */;
    core_export(
      {
        target: "Array",
        proto: true,
        forced: tryCall(function () {
          return !Array(1).includes();
        }),
      },
      {
        includes: function (e) {
          return i(this, e, arguments.length > 1 ? arguments[1] : undefined);
        },
      }
    ),
      internalObjectKeys("includes");
  }