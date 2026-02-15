/**
 * Webpack Module #1103
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(116) /* module_116 */,
      i = require(184) /* module_184 */,
      a = require(243) /* module_243 */.f,
      r = require(157) /* module_157 */,
      s =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    exports.exports.f = function (e) {
      return s && "Window" === o(e)
        ? (function (e) {
            try {
              return a(e);
            } catch (e) {
              return r(s);
            }
          })(e)
        : a(i(e));
    };
  }