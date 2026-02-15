/**
 * Webpack Module #110
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(23) /* module_23 */,
      i = n(35) /* module_35 */,
      a = function (e) {
        return i(e) ? e : undefined;
      };
    e.exports = function (e, t) {
      return arguments.length < 2 ? a(o[e]) : o[e] && o[e][t];
    };
  }