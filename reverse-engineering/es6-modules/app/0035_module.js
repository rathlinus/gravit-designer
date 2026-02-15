/**
 * Webpack Module #35
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var o = 'object' == typeof document && document.all;
  exports.exports =
    undefined === o && undefined !== o
      ? function (e) {
          return 'function' == typeof e || e === o;
        }
      : function (e) {
          return 'function' == typeof e;
        };
}
