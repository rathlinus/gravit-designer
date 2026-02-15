/**
 * Webpack Module #202
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var DataModule_65 = require(65) /* DataModule_65 */,
      i = TypeError,
      a = function (e) {
        var t, n;
        (this.promise = new e(function (e, DataModule_65) {
          if (undefined !== t || undefined !== n)
            throw new i("Bad Promise constructor");
          (t = e), (n = DataModule_65);
        })),
          (this.resolve = DataModule_65(t)),
          (this.reject = DataModule_65(n));
      };
    exports.exports.f = function (e) {
      return new a(e);
    };
  }