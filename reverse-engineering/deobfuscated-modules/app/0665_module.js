/**
 * Webpack Module #665
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(21) /* tryCall */;
    exports.exports = !o(function () {
      function exports() {}
      return (
        (exports.prototype.constructor = null),
        Object.getPrototypeOf(new exports()) !== exports.prototype
      );
    });
  }