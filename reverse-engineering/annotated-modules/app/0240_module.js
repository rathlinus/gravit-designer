/**
 * Webpack Module #240
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(27) /* module_27 */,
      i = n(21) /* module_21 */,
      a = n(116) /* module_116 */,
      r = Object,
      s = o("".split);
    e.exports = i(function () {
      return !r("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" === a(e) ? s(e, "") : r(e);
        }
      : r;
  }