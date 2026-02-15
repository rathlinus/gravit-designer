/**
 * Webpack Module #1104
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var tryCall = require(21) /* tryCall */,
      toLength = require(46) /* toLength */,
      DataModule_116 = require(116) /* DataModule_116 */,
      DataModule_1105 = require(1105) /* DataModule_1105 */,
      s = Object.isExtensible,
      l = tryCall(function () {
        s(1);
      });
    exports.exports =
      l || DataModule_1105
        ? function (e) {
            return !!toLength(e) && (!DataModule_1105 || "ArrayBuffer" !== DataModule_116(e)) && (!s || s(e));
          }
        : s;
  }