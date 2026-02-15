/**
 * Webpack Module #1045
 * Type: unknown
 */

function (exports, module, require) {
  var CryptoJSCore;
  exports.exports =
    ((CryptoJSCore = require(55)) /* CryptoJSCore */,
    (function () {
      var e = CryptoJSCore,
        t = e.lib.WordArray,
        n = e.enc;
      function i(e) {
        return ((e << 8) & 4278255360) | ((e >>> 8) & 16711935);
      }
      ((n.Utf16 = n.Utf16BE =
        {
          stringify: function (e) {
            for (var t = e.words, n = e.sigBytes, CryptoJSCore = [], i = 0; i < n; i += 2) {
              var a = (t[i >>> 2] >>> (16 - (i % 4) * 8)) & 65535;
              CryptoJSCore.push(String.fromCharCode(a));
            }
            return CryptoJSCore.join('');
          },
          parse: function (e) {
            for (var n = e.length, CryptoJSCore = [], i = 0; i < n; i++)
              CryptoJSCore[i >>> 1] |= e.charCodeAt(i) << (16 - (i % 2) * 16);
            return t.create(CryptoJSCore, 2 * n);
          },
        }),
        (n.Utf16LE = {
          stringify: function (e) {
            for (var t = e.words, n = e.sigBytes, CryptoJSCore = [], a = 0; a < n; a += 2) {
              var r = i((t[a >>> 2] >>> (16 - (a % 4) * 8)) & 65535);
              CryptoJSCore.push(String.fromCharCode(r));
            }
            return CryptoJSCore.join('');
          },
          parse: function (e) {
            for (var n = e.length, CryptoJSCore = [], a = 0; a < n; a++)
              CryptoJSCore[a >>> 1] |= i(e.charCodeAt(a) << (16 - (a % 2) * 16));
            return t.create(CryptoJSCore, 2 * n);
          },
        }));
    })(),
    CryptoJSCore.enc.Utf16);
}
