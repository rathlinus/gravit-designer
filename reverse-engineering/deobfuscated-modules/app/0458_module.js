/**
 * Webpack Module #458
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(21) /* tryCall */,
      i = require(23) /* globalThis */.RegExp;
    exports.exports = o(function () {
      var e = i(".", "s");
      return !(e.dotAll && e.test("\n") && "s" === e.flags);
    });
  }