/**
 * Webpack Module #1040
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(88) /* module_88 */.f;
    e.exports = function (e, t, n) {
      n in e ||
        o(e, n, {
          configurable: true,
          get: function () {
            return t[n];
          },
          set: function (e) {
            t[n] = e;
          },
        });
    };
  }