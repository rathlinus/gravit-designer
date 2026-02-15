/**
 * Webpack Module #137
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(88) /* module_88 */.f,
      i = require(61) /* module_61 */,
      a = require(43) /* module_43 */("toStringTag");
    exports.exports = function (e, t, n) {
      e && !n && (e = e.prototype),
        e && !i(e, a) && o(e, a, { configurable: true, value: t });
    };
  }