/**
 * Webpack Module #65
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var anObject = require(35) /* anObject */,
      DataModule_185 = require(185) /* DataModule_185 */,
      a = TypeError;
    exports.exports = function (e) {
      if (anObject(e)) return e;
      throw new a(DataModule_185(e) + " is not a function");
    };
  }