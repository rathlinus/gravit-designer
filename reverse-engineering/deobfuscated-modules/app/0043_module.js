/**
 * Webpack Module #43
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(23) /* module_23 */,
      i = require(296) /* module_296 */,
      a = require(61) /* module_61 */,
      r = require(258) /* module_258 */,
      s = require(295) /* module_295 */,
      l = require(398) /* module_398 */,
      c = o.Symbol,
      d = i("wks"),
      u = l ? c.for || c : (c && c.withoutSetter) || r;
    exports.exports = function (e) {
      return a(d, e) || (d[e] = s && a(c, e) ? c[e] : u("Symbol." + e)), d[e];
    };
  }