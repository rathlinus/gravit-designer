/**
 * Webpack Module #459
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(21) /* tryCall */,
      i = n(23) /* globalThis */.RegExp;
    e.exports = o(function () {
      var e = i("(?<a>b)", "g");
      return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c");
    });
  }