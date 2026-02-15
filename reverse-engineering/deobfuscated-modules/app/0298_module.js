/**
 * Webpack Module #298
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(23) /* module_23 */,
      i = Object.defineProperty;
    e.exports = function (e, t) {
      try {
        i(o, e, { value: t, configurable: true, writable: true });
      } catch (n) {
        o[e] = t;
      }
      return t;
    };
  }