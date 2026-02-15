/**
 * Webpack Module #43
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var globalThis = require(23) /* globalThis */,
      i = require(296) /* module_296 */,
      a = require(61) /* module_61 */,
      r = require(258) /* module_258 */,
      s = require(295) /* module_295 */,
      _typeof = require(398) /* _typeof */,
      c = globalThis.Symbol,
      d = i("wks"),
      u = _typeof ? c.for || c : (c && c.withoutSetter) || r;
    exports.exports = function (e) {
      return a(d, e) || (d[e] = s && a(c, e) ? c[e] : u("Symbol." + e)), d[e];
    };
  }