/**
 * Webpack Module #1196
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      i = require(1375) /* module_1375 */,
      a = require(93) /* stub_requires_92 */,
      r = require(101) /* stub_requires_117 */,
      lengthOfArrayLike = require(130) /* lengthOfArrayLike */,
      l = require(573) /* module_573 */;
    core_export(
      { target: "Array", proto: true },
      {
        flat: function () {
          var e = arguments.length ? arguments[0] : undefined,
            t = a(this),
            n = r(t),
            core_export = l(t, 0);
          return (core_export.length = i(core_export, t, t, n, 0, undefined === e ? 1 : lengthOfArrayLike(e))), core_export;
        },
      }
    );
  }