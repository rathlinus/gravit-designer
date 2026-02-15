/**
 * Webpack Module #1054
 * Type: unknown
 */

function (exports, module, require) {
  var o, i, CryptoJSCore;
  exports.exports =
    ((CryptoJSCore = require(55)) /* CryptoJSCore */,
    require(98) /* CryptoJSCipherBase */,
    (CryptoJSCore.mode.OFB =
      ((o = CryptoJSCore.lib.BlockCipherMode.extend()),
      (i = o.Encryptor =
        o.extend({
          processBlock: function (e, t) {
            var n = this._cipher,
              o = n.blockSize,
              i = this._iv,
              CryptoJSCore = this._keystream;
            (i && ((CryptoJSCore = this._keystream = i.slice(0)), (this._iv = undefined)),
              n.encryptBlock(CryptoJSCore, 0));
            for (var r = 0; r < o; r++) e[t + r] ^= CryptoJSCore[r];
          },
        })),
      (o.Decryptor = i),
      o)),
    CryptoJSCore.mode.OFB);
}
