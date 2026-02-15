/**
 * Webpack Module #1052
 * Type: unknown
 */

function (exports, module, require) {
    var o, i, CryptoJSCore;
    exports.exports =
      ((CryptoJSCore = require(55) /* CryptoJSCore */),
      require(98) /* CryptoJSCipherBase */,
      (CryptoJSCore.mode.CTR =
        ((o = CryptoJSCore.lib.BlockCipherMode.extend()),
        (i = o.Encryptor =
          o.extend({
            processBlock: function (e, t) {
              var n = this._cipher,
                o = n.blockSize,
                i = this._iv,
                CryptoJSCore = this._counter;
              i && ((CryptoJSCore = this._counter = i.slice(0)), (this._iv = undefined));
              var r = CryptoJSCore.slice(0);
              n.encryptBlock(r, 0), (CryptoJSCore[o - 1] = (CryptoJSCore[o - 1] + 1) | 0);
              for (var s = 0; s < o; s++) e[t + s] ^= r[s];
            },
          })),
        (o.Decryptor = i),
        o)),
      CryptoJSCore.mode.CTR);
  }