/**
 * Webpack Module #596
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* core_export */,
      i = require(27) /* uncurryThis */,
      a = require(348) /* module_348 */,
      r = i([].reverse),
      s = [1, 2];
    o(
      { target: "Array", proto: true, forced: String(s) === String(s.reverse()) },
      {
        reverse: function () {
          return a(this) && (this.length = this.length), r(this);
        },
      }
    );
  }