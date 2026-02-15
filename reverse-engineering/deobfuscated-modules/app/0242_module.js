/**
 * Webpack Module #242
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(23) /* globalThis */,
      i = require(46) /* toLength */,
      a = o.document,
      r = i(a) && i(a.createElement);
    exports.exports = function (e) {
      return r ? a.createElement(e) : {};
    };
  }