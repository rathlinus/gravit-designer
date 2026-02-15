/**
 * Webpack Module #341
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(61) /* module_61 */,
      i = require(615) /* module_615 */,
      a = require(222) /* objectGetOwnPropertyDescriptor */,
      r = require(88) /* createPropertyDescriptor */;
    exports.exports = function (e, t, n) {
      for (var s = i(t), l = r.f, c = a.f, d = 0; d < s.length; d++) {
        var u = s[d];
        o(e, u) || (n && o(n, u)) || l(e, u, c(t, u));
      }
    };
  }