/**
 * Webpack Module #665
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var tryCall = require(21) /* tryCall */;
    exports.exports = !tryCall(function () {
      function exports() {}
      return (
        (exports.prototype.constructor = null),
        Object.getPrototypeOf(new exports()) !== exports.prototype
      );
    });
  }