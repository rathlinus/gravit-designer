/**
 * Webpack Module #241
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(110) /* module_110 */,
      i = require(35) /* anObject */,
      a = require(144) /* stub_requires_27 */,
      r = require(398) /* _typeof */,
      s = Object;
    exports.exports = r
      ? function (e) {
          return "symbol" == typeof e;
        }
      : function (e) {
          var t = o("Symbol");
          return i(t) && a(t.prototype, s(e));
        };
  }