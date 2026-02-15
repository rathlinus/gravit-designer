/**
 * Webpack Module #240
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(27) /* uncurryThis */,
      i = require(21) /* tryCall */,
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