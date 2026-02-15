/**
 * Webpack Module #124
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(223) /* DataModule_223 */,
      i = n(65) /* DataModule_65 */,
      a = n(239) /* DataModule_239 */,
      r = o(o.bind);
    e.exports = function (e, t) {
      return (
        i(e),
        void 0 === t
          ? e
          : a
          ? r(e, t)
          : function () {
              return e.apply(t, arguments);
            }
      );
    };
  }