/**
 * Webpack Module #596
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(25) /* module_25 */,
      i = n(27) /* module_27 */,
      a = n(348) /* module_348 */,
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