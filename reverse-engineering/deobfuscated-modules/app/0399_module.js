/**
 * Webpack Module #399
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(49) /* hasOwnProperty_wrapper */,
      i = require(21) /* tryCall */,
      a = require(242) /* module_242 */;
    exports.exports =
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