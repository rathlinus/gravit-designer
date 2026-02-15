/**
 * Webpack Module #91
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(25) /* module_25 */,
      i = n(262) /* module_262 */.trim;
    o(
      { target: "String", proto: !0, forced: n(461) /* module_461 */("trim") },
      {
        trim: function () {
          return i(this);
        },
      }
    );
  }