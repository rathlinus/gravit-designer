/**
 * Webpack Module #260
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(110) /* module_110 */,
      i = n(120) /* module_120 */,
      a = n(43) /* module_43 */,
      r = n(49) /* module_49 */,
      s = a("species");
    e.exports = function (e) {
      var t = o(e);
      r &&
        t &&
        !t[s] &&
        i(t, s, {
          configurable: true,
          get: function () {
            return this;
          },
        });
    };
  }