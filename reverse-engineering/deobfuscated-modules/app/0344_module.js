/**
 * Webpack Module #344
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(21) /* tryCall */,
      i = require(23) /* globalThis */.RegExp,
      a = o(function () {
        var e = i("a", "y");
        return (e.lastIndex = 2), null !== e.exec("abcd");
      }),
      r =
        a ||
        o(function () {
          return !i("a", "y").sticky;
        }),
      s =
        a ||
        o(function () {
          var e = i("^r", "gy");
          return (e.lastIndex = 2), null !== e.exec("str");
        });
    exports.exports = { BROKEN_CARET: s, MISSED_STICKY: r, UNSUPPORTED_Y: a };
  }