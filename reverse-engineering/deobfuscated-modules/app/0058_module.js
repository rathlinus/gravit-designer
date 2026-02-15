/**
 * Webpack Module #58
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* core_export */,
      i = require(403) /* module_403 */.includes,
      a = require(21) /* tryCall */,
      r = require(360) /* internalObjectKeys */;
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