/**
 * Webpack Module #200
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var DataModule_239 = require(239) /* DataModule_239 */,
      i = Function.prototype,
      a = i.apply,
      r = i.call;
    exports.exports =
      ("object" == typeof Reflect && Reflect.apply) ||
      (DataModule_239
        ? r.bind(a)
        : function () {
            return r.apply(a, arguments);
          });
  }