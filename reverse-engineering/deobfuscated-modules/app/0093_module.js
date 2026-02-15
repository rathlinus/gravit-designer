/**
 * Webpack Module #93
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var classof = require(92) /* classof */,
      i = Object;
    exports.exports = function (e) {
      return i(classof(e));
    };
  }