/**
 * Webpack Module #341
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(61) /* module_61 */,
      DataModule_615 = require(615) /* DataModule_615 */,
      objectGetOwnPropertyDescriptor = require(222) /* objectGetOwnPropertyDescriptor */,
      createPropertyDescriptor = require(88) /* createPropertyDescriptor */;
    exports.exports = function (e, t, n) {
      for (var s = DataModule_615(t), l = createPropertyDescriptor.f, c = objectGetOwnPropertyDescriptor.f, d = 0; d < s.length; d++) {
        var u = s[d];
        o(e, u) || (n && o(n, u)) || l(e, u, c(t, u));
      }
    };
  }