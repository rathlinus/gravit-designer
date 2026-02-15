/**
 * Webpack Module #43
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var globalThis = require(23) /* globalThis */,
    i = require(296) /* module_296 */,
    a = require(61) /* module_61 */,
    DataModule_258 = require(258) /* DataModule_258 */,
    DataModule_295 = require(295) /* DataModule_295 */,
    _typeof = require(398) /* _typeof */,
    c = globalThis.Symbol,
    d = i('wks'),
    u = _typeof ? c.for || c : (c && c.withoutSetter) || DataModule_258;
  exports.exports = function (e) {
    return (a(d, e) || (d[e] = DataModule_295 && a(c, e) ? c[e] : u('Symbol.' + e)), d[e]);
  };
}
