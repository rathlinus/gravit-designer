/**
 * Webpack Module #277
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(21) /* module_21 */,
      i = require(35) /* module_35 */,
      a = /#|\.prototype\./,
      r = function (e, t) {
        var n = l[s(e)];
        return n === d || (n !== c && (i(t) ? o(t) : !!t));
      },
      s = (r.normalize = function (e) {
        return String(e).replace(a, ".").toLowerCase();
      }),
      l = (r.data = {}),
      c = (r.NATIVE = "N"),
      d = (r.POLYFILL = "P");
    exports.exports = r;
  }