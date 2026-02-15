/**
 * Webpack Module #260
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(110) /* module_110 */,
      i = require(120) /* module_120 */,
      a = require(43) /* wellKnownSymbol */,
      r = require(49) /* hasOwnProperty_wrapper */,
      s = a("species");
    exports.exports = function (e) {
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