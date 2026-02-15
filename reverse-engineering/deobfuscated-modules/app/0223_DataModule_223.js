/**
 * Webpack Module #223
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var DataModule_116 = require(116) /* DataModule_116 */,
      uncurryThis = require(27) /* uncurryThis */;
    exports.exports = function (e) {
      if ("Function" === DataModule_116(e)) return uncurryThis(e);
    };
  }