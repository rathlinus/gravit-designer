/**
 * Webpack Module #258
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(27) /* module_27 */,
      i = 0,
      a = Math.random(),
      r = o((1).toString);
    exports.exports = function (e) {
      return "Symbol(" + (undefined === e ? "" : e) + ")_" + r(++i + a, 36);
    };
  }