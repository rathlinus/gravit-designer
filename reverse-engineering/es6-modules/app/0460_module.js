/**
 * Webpack Module #460
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var isCallable = require(29) /* isCallable */,
    i = require(61) /* module_61 */,
    a = require(144) /* stub_requires_27 */,
    DataModule_307 = require(307) /* DataModule_307 */,
    s = RegExp.prototype;
  exports.exports = function (e) {
    var t = e.flags;
    return undefined !== t || 'flags' in s || i(e, 'flags') || !a(s, e)
      ? t
      : isCallable(DataModule_307, e);
  };
}
