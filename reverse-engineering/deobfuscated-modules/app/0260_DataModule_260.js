/**
 * Webpack Module #260
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(110) /* module_110 */,
      i = require(120) /* module_120 */,
      wellKnownSymbol = require(43) /* wellKnownSymbol */,
      hasOwnProperty_wrapper = require(49) /* hasOwnProperty_wrapper */,
      s = wellKnownSymbol("species");
    exports.exports = function (e) {
      var t = o(e);
      hasOwnProperty_wrapper &&
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