/**
 * Webpack Module #124
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(223) /* module_223 */,
      i = require(65) /* module_65 */,
      a = require(239) /* module_239 */,
      r = o(o.bind);
    exports.exports = function (e, t) {
      return (
        i(e),
        undefined === t
          ? e
          : a
          ? r(e, t)
          : function () {
              return e.apply(t, arguments);
            }
      );
    };
  }