/**
 * Webpack Module #428
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var DataModule_576 = require(576) /* DataModule_576 */,
      i = RangeError;
    exports.exports = function (e, t) {
      var n = DataModule_576(e);
      if (n % t) throw new i("Wrong offset");
      return n;
    };
  }