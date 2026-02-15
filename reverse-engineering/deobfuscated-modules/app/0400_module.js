/**
 * Webpack Module #400
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(49) /* module_49 */,
      i = n(21) /* module_21 */;
    e.exports =
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