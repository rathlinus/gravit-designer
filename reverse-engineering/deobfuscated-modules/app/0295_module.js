/**
 * Webpack Module #295
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(213) /* module_213 */,
      i = require(21) /* module_21 */,
      a = require(23) /* module_23 */.String;
    exports.exports =
      !!Object.getOwnPropertySymbols &&
      !i(function () {
        var e = Symbol("symbol detection");
        return (
          !a(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && o && o < 41)
        );
      });
  }