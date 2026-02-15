/**
 * Webpack Module #61
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(27) /* module_27 */,
      i = n(93) /* module_93 */,
      a = o({}.hasOwnProperty);
    e.exports =
      Object.hasOwn ||
      function (e, t) {
        return a(i(e), t);
      };
  }