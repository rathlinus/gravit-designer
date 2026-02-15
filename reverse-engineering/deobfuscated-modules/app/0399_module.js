/**
 * Webpack Module #399
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(49) /* module_49 */,
      i = n(21) /* module_21 */,
      a = n(242) /* module_242 */;
    e.exports =
      !o &&
      !i(function () {
        return (
          7 !==
          Object.defineProperty(a("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  }