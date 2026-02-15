/**
 * Webpack Module #596
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var core_export = require(25) /* core_export */,
      uncurryThis = require(27) /* uncurryThis */,
      a = require(348) /* module_348 */,
      r = uncurryThis([].reverse),
      s = [1, 2];
    core_export(
      { target: "Array", proto: true, forced: String(s) === String(s.reverse()) },
      {
        reverse: function () {
          return a(this) && (this.length = this.length), r(this);
        },
      }
    );
  }