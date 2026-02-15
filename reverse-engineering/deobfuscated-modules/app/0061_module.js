/**
 * Webpack Module #61
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(27) /* module_27 */,
      i = require(93) /* module_93 */,
      a = o({}.hasOwnProperty);
    exports.exports =
      Object.hasOwn ||
      function (e, t) {
        return a(i(e), t);
      };
  }