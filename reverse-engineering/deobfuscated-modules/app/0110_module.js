/**
 * Webpack Module #110
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(23) /* module_23 */,
      i = require(35) /* module_35 */,
      a = function (e) {
        return i(e) ? e : undefined;
      };
    exports.exports = function (e, t) {
      return arguments.length < 2 ? a(o[e]) : o[e] && o[e][t];
    };
  }