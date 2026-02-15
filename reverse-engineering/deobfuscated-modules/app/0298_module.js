/**
 * Webpack Module #298
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(23) /* module_23 */,
      i = Object.defineProperty;
    exports.exports = function (e, t) {
      try {
        i(o, e, { value: t, configurable: true, writable: true });
      } catch (n) {
        o[e] = t;
      }
      return t;
    };
  }