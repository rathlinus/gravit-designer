/**
 * Webpack Module #91
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(25) /* module_25 */,
      i = require(262) /* module_262 */.trim;
    o(
      { target: "String", proto: true, forced: require(461) /* module_461 */("trim") },
      {
        trim: function () {
          return i(this);
        },
      }
    );
  }