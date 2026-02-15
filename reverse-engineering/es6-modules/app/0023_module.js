/**
 * Webpack Module #23
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (function (t) {
    var n = function (e) {
      return e && e.Math === Math && e;
    };
    exports.exports =
      n('object' == typeof globalThis && globalThis) ||
      n('object' == typeof window && window) ||
      n('object' == typeof self && self) ||
      n('object' == typeof t && t) ||
      n('object' == typeof this && this) ||
      (function () {
        return this;
      })() ||
      Function('return this')();
  }).call(this, require(109) /* module_109 */);
}
