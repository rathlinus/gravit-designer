/**
 * Webpack Module #241
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(110) /* module_110 */,
      i = n(35) /* anObject */,
      a = n(144) /* stub_requires_27 */,
      r = n(398) /* _typeof */,
      s = Object;
    e.exports = r
      ? function (e) {
          return "symbol" == typeof e;
        }
      : function (e) {
          var t = o("Symbol");
          return i(t) && a(t.prototype, s(e));
        };
  }