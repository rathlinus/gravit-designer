/**
 * Webpack Module #240
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(27) /* module_27 */,
      i = require(21) /* module_21 */,
      a = require(116) /* module_116 */,
      r = Object,
      s = o("".split);
    exports.exports = i(function () {
      return !r("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" === a(e) ? s(e, "") : r(e);
        }
      : r;
  }