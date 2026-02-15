/**
 * Webpack Module #1103
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(116) /* module_116 */,
      i = n(184) /* module_184 */,
      a = n(243) /* module_243 */.f,
      r = n(157) /* module_157 */,
      s =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    e.exports.f = function (e) {
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