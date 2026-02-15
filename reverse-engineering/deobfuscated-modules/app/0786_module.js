/**
 * Webpack Module #786
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(21) /* module_21 */;
    exports.exports = !o(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  }