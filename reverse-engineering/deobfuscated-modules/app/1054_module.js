/**
 * Webpack Module #1054
 * Type: unknown
 */

function (exports, module, require) {
    var o, i, a;
    exports.exports =
      ((a = require(55) /* module_55 */),
      require(98) /* module_98 */,
      (a.mode.OFB =
        ((o = a.lib.BlockCipherMode.extend()),
        (i = o.Encryptor =
          o.extend({
            processBlock: function (e, t) {
              var n = this._cipher,
                o = n.blockSize,
                i = this._iv,
                a = this._keystream;
              i && ((a = this._keystream = i.slice(0)), (this._iv = undefined)),
                n.encryptBlock(a, 0);
              for (var r = 0; r < o; r++) e[t + r] ^= a[r];
            },
          })),
        (o.Decryptor = i),
        o)),
      a.mode.OFB);
  }