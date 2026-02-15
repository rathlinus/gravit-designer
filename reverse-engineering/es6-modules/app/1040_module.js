/**
 * Webpack Module #1040
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var createPropertyDescriptor = require(88) /* createPropertyDescriptor */.f;
  exports.exports = function (e, t, n) {
    n in e ||
      createPropertyDescriptor(e, n, {
        configurable: true,
        get: function () {
          return t[n];
        },
        set: function (e) {
          t[n] = e;
        },
      });
  };
}
