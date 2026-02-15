/**
 * Webpack Module #129
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(23) /* globalThis */.navigator,
      i = o && o.userAgent;
    exports.exports = i ? String(i) : "";
  }