/**
 * Webpack Module #459
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var tryCall = require(21) /* tryCall */,
      globalThis = require(23) /* globalThis */.RegExp;
    exports.exports = tryCall(function () {
      var e = globalThis("(?<a>b)", "g");
      return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c");
    });
  }