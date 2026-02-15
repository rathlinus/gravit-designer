/**
 * Webpack Module #619
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var uncurryThis = require(27) /* uncurryThis */,
      i = require(65) /* module_65 */;
    exports.exports = function (e, t, n) {
      try {
        return uncurryThis(i(Object.getOwnPropertyDescriptor(e, t)[n]));
      } catch (e) {}
    };
  }