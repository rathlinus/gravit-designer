/**
 * Webpack Module #408
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var DataModule_302 = require(302) /* DataModule_302 */,
      DataModule_185 = require(185) /* DataModule_185 */,
      a = TypeError;
    exports.exports = function (e) {
      if (DataModule_302(e)) return e;
      throw new a(DataModule_185(e) + " is not a constructor");
    };
  }