/**
 * Webpack Module #1040
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(88) /* createPropertyDescriptor */.f;
    exports.exports = function (e, t, n) {
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