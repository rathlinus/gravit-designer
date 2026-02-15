/**
 * Webpack Module #241
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var o = require(110) /* module_110 */,
    anObject = require(35) /* anObject */,
    a = require(144) /* stub_requires_27 */,
    _typeof = require(398) /* _typeof */,
    s = Object;
  exports.exports = _typeof
    ? function (e) {
        return 'symbol' == typeof e;
      }
    : function (e) {
        var t = o('Symbol');
        return anObject(t) && a(t.prototype, s(e));
      };
}
