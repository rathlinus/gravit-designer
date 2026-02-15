/**
 * Webpack Module #185
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = String;
    exports.exports = function (e) {
      try {
        return o(e);
      } catch (e) {
        return "Object";
      }
    };
  }