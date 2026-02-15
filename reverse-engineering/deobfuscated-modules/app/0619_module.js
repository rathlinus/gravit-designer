/**
 * Webpack Module #619
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(27) /* module_27 */,
      i = require(65) /* module_65 */;
    exports.exports = function (e, t, n) {
      try {
        return o(i(Object.getOwnPropertyDescriptor(e, t)[n]));
      } catch (e) {}
    };
  }