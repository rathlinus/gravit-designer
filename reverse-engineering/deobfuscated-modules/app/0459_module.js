/**
 * Webpack Module #459
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(21) /* tryCall */,
      i = require(23) /* globalThis */.RegExp;
    exports.exports = o(function () {
      var e = i("(?<a>b)", "g");
      return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c");
    });
  }