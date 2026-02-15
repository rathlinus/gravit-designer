/**
 * Webpack Module #694
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(46) /* module_46 */,
      i = Math.floor;
    e.exports =
      Number.isInteger ||
      function (e) {
        return !o(e) && isFinite(e) && i(e) === e;
      };
  }