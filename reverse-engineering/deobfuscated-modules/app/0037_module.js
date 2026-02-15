/**
 * Webpack Module #37
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var toLength = require(46) /* toLength */,
      i = String,
      a = TypeError;
    exports.exports = function (e) {
      if (toLength(e)) return e;
      throw new a(i(e) + " is not an object");
    };
  }