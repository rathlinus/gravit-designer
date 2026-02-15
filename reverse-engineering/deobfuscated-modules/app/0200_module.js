/**
 * Webpack Module #200
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(239) /* module_239 */,
      i = Function.prototype,
      a = i.apply,
      r = i.call;
    exports.exports =
      ("object" == typeof Reflect && Reflect.apply) ||
      (o
        ? r.bind(a)
        : function () {
            return r.apply(a, arguments);
          });
  }