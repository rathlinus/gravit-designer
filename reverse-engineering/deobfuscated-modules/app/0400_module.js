/**
 * Webpack Module #400
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(49) /* hasOwnProperty_wrapper */,
      i = require(21) /* tryCall */;
    exports.exports =
      o &&
      i(function () {
        return (
          42 !==
          Object.defineProperty(function () {}, "prototype", {
            value: 42,
            writable: false,
          }).prototype
        );
      });
  }