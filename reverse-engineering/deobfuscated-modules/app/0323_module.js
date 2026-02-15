/**
 * Webpack Module #323
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var toString_default = require(37) /* toString_default */,
      i = require(102) /* module_102 */;
    exports.exports = function (e, t, n, a) {
      try {
        return a ? t(toString_default(n)[0], n[1]) : t(n);
      } catch (t) {
        i(e, "throw", t);
      }
    };
  }