/**
 * Webpack Module #202
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(65) /* module_65 */,
      i = TypeError,
      a = function (e) {
        var t, n;
        (this.promise = new e(function (e, o) {
          if (undefined !== t || undefined !== n)
            throw new i("Bad Promise constructor");
          (t = e), (n = o);
        })),
          (this.resolve = o(t)),
          (this.reject = o(n));
      };
    e.exports.f = function (e) {
      return new a(e);
    };
  }