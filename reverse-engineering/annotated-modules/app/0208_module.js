/**
 * Webpack Module #208
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(61) /* module_61 */,
      i = n(35) /* anObject */,
      a = n(93) /* stub_requires_92 */,
      r = n(300) /* module_300 */,
      s = n(665) /* module_665 */,
      l = r("IE_PROTO"),
      c = Object,
      d = c.prototype;
    e.exports = s
      ? c.getPrototypeOf
      : function (e) {
          var t = a(e);
          if (o(t, l)) return t[l];
          var n = t.constructor;
          return i(n) && t instanceof n
            ? n.prototype
            : t instanceof c
            ? d
            : null;
        };
  }