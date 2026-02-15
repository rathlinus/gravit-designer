/**
 * Webpack Module #344
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var tryCall = require(21) /* tryCall */,
      globalThis = require(23) /* globalThis */.RegExp,
      a = tryCall(function () {
        var e = globalThis("a", "y");
        return (e.lastIndex = 2), null !== e.exec("abcd");
      }),
      r =
        a ||
        tryCall(function () {
          return !globalThis("a", "y").sticky;
        }),
      s =
        a ||
        tryCall(function () {
          var e = globalThis("^r", "gy");
          return (e.lastIndex = 2), null !== e.exec("str");
        });
    exports.exports = { BROKEN_CARET: s, MISSED_STICKY: r, UNSUPPORTED_Y: a };
  }