/**
 * Webpack Module #1058
 * Type: unknown
 */

function (exports, module, require) {
    var CryptoJSCore;
    exports.exports =
      ((CryptoJSCore = require(55) /* CryptoJSCore */),
      require(98) /* CryptoJSCipherBase */,
      (CryptoJSCore.pad.Iso97971 = {
        pad: function (e, t) {
          e.concat(CryptoJSCore.lib.WordArray.create([2147483648], 1)),
            CryptoJSCore.pad.ZeroPadding.pad(e, t);
        },
        unpad: function (e) {
          CryptoJSCore.pad.ZeroPadding.unpad(e), e.sigBytes--;
        },
      }),
      CryptoJSCore.pad.Iso97971);
  }