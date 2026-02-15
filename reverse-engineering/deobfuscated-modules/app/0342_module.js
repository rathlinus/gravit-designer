/**
 * Webpack Module #342
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var toString_default = require(37) /* toString_default */,
      i = require(408) /* module_408 */,
      a = require(194) /* module_194 */,
      wellKnownSymbol = require(43) /* wellKnownSymbol */("species");
    exports.exports = function (e, t) {
      var n,
        s = toString_default(e).constructor;
      return undefined === s || a((n = toString_default(s)[wellKnownSymbol])) ? t : i(n);
    };
  }