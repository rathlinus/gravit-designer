/**
 * Webpack Module #49
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(21) /* module_21 */;
    e.exports = !o(function () {
      return (
        7 !==
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  }