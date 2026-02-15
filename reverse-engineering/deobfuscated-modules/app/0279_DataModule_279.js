/**
 * Webpack Module #279
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var isCallable = require(29) /* isCallable */,
      toString_default = require(37) /* toString_default */,
      anObject = require(35) /* anObject */,
      DataModule_116 = require(116) /* DataModule_116 */,
      regexpExec = require(306) /* regexpExec */,
      l = TypeError;
    exports.exports = function (e, t) {
      var n = e.exec;
      if (anObject(n)) {
        var c = isCallable(n, e, t);
        return null !== c && toString_default(c), c;
      }
      if ("RegExp" === DataModule_116(e)) return isCallable(regexpExec, e, t);
      throw new l("RegExp#exec called on incompatible receiver");
    };
  }