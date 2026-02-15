/**
 * Webpack Module #129
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var globalThis = require(23) /* globalThis */.navigator,
      i = globalThis && globalThis.userAgent;
    exports.exports = i ? String(i) : "";
  }