/**
 * Webpack Module #1104
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(21) /* tryCall */,
      i = require(46) /* toLength */,
      a = require(116) /* module_116 */,
      r = require(1105) /* module_1105 */,
      s = Object.isExtensible,
      l = o(function () {
        s(1);
      });
    exports.exports =
      l || r
        ? function (e) {
            return !!i(e) && (!r || "ArrayBuffer" !== a(e)) && (!s || s(e));
          }
        : s;
  }