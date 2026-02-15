/**
 * Webpack Module #1105
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(21) /* module_21 */;
    e.exports = o(function () {
      if ("function" == typeof ArrayBuffer) {
        var e = new ArrayBuffer(8);
        Object.isExtensible(e) && Object.defineProperty(e, "a", { value: 8 });
      }
    });
  }