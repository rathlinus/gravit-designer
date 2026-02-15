/**
 * Webpack Module #689
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    e.exports =
      Math.sign ||
      function (e) {
        var t = +e;
        return 0 === t || t != t ? t : t < 0 ? -1 : 1;
      };
  }