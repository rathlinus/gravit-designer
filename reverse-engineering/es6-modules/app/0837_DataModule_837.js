/**
 * Webpack Module #837
 * Type: unknown
 */

function (exports, module) {
  String.prototype.codePointAt ||
    (function () {
      'use strict';
      var e = (function () {
          try {
            var e = {},
              t = Object.defineProperty,
              n = t(e, e, e) && t;
          } catch (e) {}
          return n;
        })(),
        t = function (e) {
          if (null == this) throw TypeError();
          var t = String(this),
            n = t.length,
            o = e ? Number(e) : 0;
          if ((o != o && (o = 0), !(o < 0 || o >= n))) {
            var i,
              a = t.charCodeAt(o);
            return a >= 55296 &&
              a <= 56319 &&
              n > o + 1 &&
              (i = t.charCodeAt(o + 1)) >= 56320 &&
              i <= 57343
              ? 1024 * (a - 55296) + i - 56320 + 65536
              : a;
          }
        };
      e
        ? e(String.prototype, 'codePointAt', {
            value: t,
            configurable: true,
            writable: true,
          })
        : (String.prototype.codePointAt = t);
    })();
}
