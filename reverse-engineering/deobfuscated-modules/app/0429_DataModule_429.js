/**
 * Webpack Module #429
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var DataModule_397 = require(397) /* DataModule_397 */,
      i = TypeError;
    exports.exports = function (e) {
      var t = DataModule_397(e, "number");
      if ("number" == typeof t) throw new i("Can't convert number to bigint");
      return BigInt(t);
    };
  }