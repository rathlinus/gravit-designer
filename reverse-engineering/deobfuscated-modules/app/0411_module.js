/**
 * Webpack Module #411
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(23) /* module_23 */,
      i = require(49) /* module_49 */,
      a = Object.getOwnPropertyDescriptor;
    exports.exports = function (e) {
      if (!i) return o[e];
      var t = a(o, e);
      return t && t.value;
    };
  }