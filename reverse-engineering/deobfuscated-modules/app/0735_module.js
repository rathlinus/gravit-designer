/**
 * Webpack Module #735
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(262) /* module_262 */.start,
      i = require(461) /* module_461 */;
    exports.exports = i("trimStart")
      ? function () {
          return o(this);
        }
      : "".trimStart;
  }