/**
 * Webpack Module #411
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var globalThis = require(23) /* globalThis */,
      hasOwnProperty_wrapper = require(49) /* hasOwnProperty_wrapper */,
      a = Object.getOwnPropertyDescriptor;
    exports.exports = function (e) {
      if (!hasOwnProperty_wrapper) return globalThis[e];
      var t = a(globalThis, e);
      return t && t.value;
    };
  }