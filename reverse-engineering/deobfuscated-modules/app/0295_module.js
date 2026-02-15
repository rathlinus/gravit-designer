/**
 * Webpack Module #295
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(213) /* module_213 */,
      tryCall = require(21) /* tryCall */,
      globalThis = require(23) /* globalThis */.String;
    exports.exports =
      !!Object.getOwnPropertySymbols &&
      !tryCall(function () {
        var e = Symbol("symbol detection");
        return (
          !globalThis(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && o && o < 41)
        );
      });
  }