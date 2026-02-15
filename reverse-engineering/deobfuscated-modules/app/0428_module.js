/**
 * Webpack Module #428
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(576) /* module_576 */,
      i = RangeError;
    exports.exports = function (e, t) {
      var n = o(e);
      if (n % t) throw new i("Wrong offset");
      return n;
    };
  }