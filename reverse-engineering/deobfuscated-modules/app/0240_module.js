/**
 * Webpack Module #240
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var uncurryThis = require(27) /* uncurryThis */,
      tryCall = require(21) /* tryCall */,
      a = require(116) /* module_116 */,
      r = Object,
      s = uncurryThis("".split);
    exports.exports = tryCall(function () {
      return !r("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" === a(e) ? s(e, "") : r(e);
        }
      : r;
  }