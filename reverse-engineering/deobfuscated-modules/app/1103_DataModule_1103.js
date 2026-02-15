/**
 * Webpack Module #1103
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var DataModule_116 = require(116) /* DataModule_116 */,
      toIndexedObject = require(184) /* toIndexedObject */,
      a = require(243) /* module_243 */.f,
      r = require(157) /* stub_requires_27 */,
      s =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    exports.exports.f = function (e) {
      return s && "Window" === DataModule_116(e)
        ? (function (e) {
            try {
              return a(e);
            } catch (e) {
              return r(s);
            }
          })(e)
        : a(toIndexedObject(e));
    };
  }