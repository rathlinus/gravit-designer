/**
 * Webpack Module #91
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(25) /* module_25 */,
      i = n(262) /* module_262 */.trim;
    o(
      { target: "String", proto: true, forced: n(461) /* module_461 */("trim") },
      {
        trim: function () {
          return i(this);
        },
      }
    );
  }