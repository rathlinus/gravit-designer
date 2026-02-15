/**
 * Webpack Module #208
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(61) /* module_61 */,
      i = require(35) /* module_35 */,
      a = require(93) /* module_93 */,
      r = require(300) /* module_300 */,
      s = require(665) /* module_665 */,
      l = r("IE_PROTO"),
      c = Object,
      d = c.prototype;
    exports.exports = s
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