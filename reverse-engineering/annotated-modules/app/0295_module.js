/**
 * Webpack Module #295
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    var o = n(213) /* module_213 */,
      i = n(21) /* module_21 */,
      a = n(23) /* module_23 */.String;
    e.exports =
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