/**
 * Webpack Module #694
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(46) /* toLength */,
      i = Math.floor;
    exports.exports =
      Number.isInteger ||
      function (e) {
        return !o(e) && isFinite(e) && i(e) === e;
      };
  }