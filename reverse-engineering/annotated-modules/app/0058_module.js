/**
 * Webpack Module #58
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(25) /* core_export */,
      i = n(403) /* module_403 */.includes,
      a = n(21) /* tryCall */,
      r = n(360) /* internalObjectKeys */;
    o(
      {
        target: "Array",
        proto: !0,
        forced: a(function () {
          return !Array(1).includes();
        }),
      },
      {
        includes: function (e) {
          return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
      r("includes");
  }