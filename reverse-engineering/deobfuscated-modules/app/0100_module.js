/**
 * Webpack Module #100
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(49) /* hasOwnProperty_wrapper */,
      i = require(88) /* createPropertyDescriptor */,
      a = require(174) /* module_174 */;
    exports.exports = o
      ? function (e, t, n) {
          return i.f(e, t, a(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        };
  }