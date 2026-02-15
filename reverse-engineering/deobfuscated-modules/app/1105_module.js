/**
 * Webpack Module #1105
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(21) /* tryCall */;
    exports.exports = o(function () {
      if ("function" == typeof ArrayBuffer) {
        var exports = new ArrayBuffer(8);
        Object.isExtensible(exports) && Object.defineProperty(exports, "a", { value: 8 });
      }
    });
  }