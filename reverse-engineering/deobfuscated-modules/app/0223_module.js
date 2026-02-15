/**
 * Webpack Module #223
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(116) /* module_116 */,
      uncurryThis = require(27) /* uncurryThis */;
    exports.exports = function (e) {
      if ("Function" === o(e)) return uncurryThis(e);
    };
  }