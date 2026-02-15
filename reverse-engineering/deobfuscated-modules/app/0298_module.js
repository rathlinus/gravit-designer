/**
 * Webpack Module #298
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var globalThis = require(23) /* globalThis */,
      i = Object.defineProperty;
    exports.exports = function (e, t) {
      try {
        i(globalThis, e, { value: t, configurable: true, writable: true });
      } catch (n) {
        globalThis[e] = t;
      }
      return t;
    };
  }