/**
 * Webpack Module #311
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = (function () {
      for (var exports, module = [], require = 0; require < 256; require++) {
        exports = require;
        for (var o = 0; o < 8; o++)
          exports = 1 & exports ? 3988292384 ^ (exports >>> 1) : exports >>> 1;
        module[require] = exports;
      }
      return module;
    })();
    exports.exports = function (e, t, n, i) {
      var a = o,
        r = i + n;
      e ^= -1;
      for (var s = i; s < r; s++) e = (e >>> 8) ^ a[255 & (e ^ t[s])];
      return -1 ^ e;
    };
  }