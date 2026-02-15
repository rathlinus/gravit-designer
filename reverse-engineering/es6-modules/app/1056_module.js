/**
 * Webpack Module #1056
 * Type: unknown
 */

function (exports, module, require) {
  var CryptoJSCore;
  exports.exports =
    ((CryptoJSCore = require(55)) /* CryptoJSCore */,
    require(98) /* CryptoJSCipherBase */,
    (CryptoJSCore.pad.AnsiX923 = {
      pad: function (e, t) {
        var n = e.sigBytes,
          CryptoJSCore = 4 * t,
          i = CryptoJSCore - (n % CryptoJSCore),
          a = n + i - 1;
        (e.clamp(), (e.words[a >>> 2] |= i << (24 - (a % 4) * 8)), (e.sigBytes += i));
      },
      unpad: function (e) {
        var t = 255 & e.words[(e.sigBytes - 1) >>> 2];
        e.sigBytes -= t;
      },
    }),
    CryptoJSCore.pad.Ansix923);
}
