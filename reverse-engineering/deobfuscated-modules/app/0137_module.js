/**
 * Webpack Module #137
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(88) /* createPropertyDescriptor */.f,
      i = require(61) /* module_61 */,
      a = require(43) /* wellKnownSymbol */("toStringTag");
    exports.exports = function (e, t, n) {
      e && !n && (e = e.prototype),
        e && !i(e, a) && o(e, a, { configurable: true, value: t });
    };
  }