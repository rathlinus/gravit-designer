/**
 * Webpack Module #1057
 * Type: unknown
 */

function (exports, module, require) {
  var CryptoJSCore;
  exports.exports =
    ((CryptoJSCore = require(55)) /* CryptoJSCore */,
    require(98) /* CryptoJSCipherBase */,
    (CryptoJSCore.pad.Iso10126 = {
      pad: function (e, t) {
        var n = 4 * t,
          i = n - (e.sigBytes % n);
        e.concat(CryptoJSCore.lib.WordArray.random(i - 1)).concat(
          CryptoJSCore.lib.WordArray.create([i << 24], 1)
        );
      },
      unpad: function (e) {
        var t = 255 & e.words[(e.sigBytes - 1) >>> 2];
        e.sigBytes -= t;
      },
    }),
    CryptoJSCore.pad.Iso10126);
}
