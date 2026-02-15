/**
 * Webpack Module #411
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(23) /* globalThis */,
      i = require(49) /* hasOwnProperty_wrapper */,
      a = Object.getOwnPropertyDescriptor;
    exports.exports = function (e) {
      if (!i) return o[e];
      var t = a(o, e);
      return t && t.value;
    };
  }