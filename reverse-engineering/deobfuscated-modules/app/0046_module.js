/**
 * Webpack Module #46
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(35) /* anObject */;
    exports.exports = function (e) {
      return "object" == typeof e ? null !== e : o(e);
    };
  }