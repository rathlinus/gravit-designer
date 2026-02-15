/**
 * Webpack Module #124
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(223) /* module_223 */,
      i = n(65) /* module_65 */,
      a = n(239) /* module_239 */,
      r = o(o.bind);
    e.exports = function (e, t) {
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