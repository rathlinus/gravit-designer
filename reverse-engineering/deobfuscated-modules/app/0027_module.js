/**
 * Webpack Module #27
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var DataModule_239 = require(239) /* DataModule_239 */,
      i = Function.prototype,
      a = i.call,
      r = DataModule_239 && i.bind.bind(a, a);
    exports.exports = DataModule_239
      ? r
      : function (e) {
          return function () {
            return a.apply(e, arguments);
          };
        };
  }