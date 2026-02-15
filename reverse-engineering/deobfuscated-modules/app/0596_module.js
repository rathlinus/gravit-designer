/**
 * Webpack Module #596
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      uncurryThis = require(27) /* uncurryThis */,
      DataModule_348 = require(348) /* DataModule_348 */,
      r = uncurryThis([].reverse),
      s = [1, 2];
    core_export(
      { target: "Array", proto: true, forced: String(s) === String(s.reverse()) },
      {
        reverse: function () {
          return DataModule_348(this) && (this.length = this.length), r(this);
        },
      }
    );
  }