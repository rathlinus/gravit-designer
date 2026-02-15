/**
 * Webpack Module #1055
 * Type: unknown
 */

function (exports, module, require) {
    var o, CryptoJSCore;
    exports.exports =
      ((CryptoJSCore = require(55) /* CryptoJSCore */),
      require(98) /* CryptoJSCipherBase */,
      (CryptoJSCore.mode.ECB =
        (((o = CryptoJSCore.lib.BlockCipherMode.extend()).Encryptor = o.extend({
          processBlock: function (e, t) {
            this._cipher.encryptBlock(e, t);
          },
        })),
        (o.Decryptor = o.extend({
          processBlock: function (e, t) {
            this._cipher.decryptBlock(e, t);
          },
        })),
        o)),
      CryptoJSCore.mode.ECB);
  }