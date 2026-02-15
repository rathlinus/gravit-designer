/**
 * Webpack Module #1055
 * Type: unknown
 */

function (exports, module, require) {
    var o, i;
    exports.exports =
      ((i = require(55) /* module_55 */),
      require(98) /* module_98 */,
      (i.mode.ECB =
        (((o = i.lib.BlockCipherMode.extend()).Encryptor = o.extend({
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
      i.mode.ECB);
  }