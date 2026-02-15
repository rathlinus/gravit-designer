/**
 * Webpack Module #246
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(29) /* module_29 */,
      i = n(65) /* module_65 */,
      a = n(37) /* module_37 */,
      r = n(185) /* module_185 */,
      s = n(204) /* module_204 */,
      l = TypeError;
    e.exports = function (e, t) {
      var n = arguments.length < 2 ? s(e) : t;
      if (i(n)) return a(o(n, e));
      throw new l(r(e) + " is not iterable");
    };
  }