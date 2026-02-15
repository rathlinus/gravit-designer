/**
 * Webpack Module #616
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = Math.ceil,
      i = Math.floor;
    exports.exports =
      Math.trunc ||
      function (e) {
        var t = +e;
        return (t > 0 ? i : o)(t);
      };
  }