/**
 * Webpack Module #611
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    (function (e) {
      require.d(module, "a", function () {
        return o;
      });
      var o = function () {
        return "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof self
          ? self
          : undefined !== e
          ? e
          : undefined;
      };
    }).call(this, require(109) /* module_109 */);
  }