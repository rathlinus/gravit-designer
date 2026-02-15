/**
 * Webpack Module #137
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(88) /* createPropertyDescriptor */.f,
      i = n(61) /* module_61 */,
      a = n(43) /* wellKnownSymbol */("toStringTag");
    e.exports = function (e, t, n) {
      e && !n && (e = e.prototype),
        e && !i(e, a) && o(e, a, { configurable: !0, value: t });
    };
  }