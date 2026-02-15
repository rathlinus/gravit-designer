/**
 * Webpack Module #461
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var GURABLE = require(199) /* Exports_GURABLE */.PROPER,
      tryCall = require(21) /* tryCall */,
      a = require(248) /* module_248 */;
    exports.exports = function (e) {
      return tryCall(function () {
        return !!a[e]() || "​᠎" !== "​᠎"[e]() || (GURABLE && a[e].name !== e);
      });
    };
  }