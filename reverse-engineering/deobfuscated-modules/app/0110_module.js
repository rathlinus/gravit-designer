/**
 * Webpack Module #110
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(23) /* globalThis */,
      i = require(35) /* anObject */,
      a = function (e) {
        return i(e) ? e : undefined;
      };
    exports.exports = function (e, t) {
      return arguments.length < 2 ? a(o[e]) : o[e] && o[e][t];
    };
  }