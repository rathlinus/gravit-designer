/**
 * Webpack Module #1051
 * Type: unknown
 */

function (exports, module, require) {
    var o;
    exports.exports =
      ((o = require(55) /* module_55 */),
      require(98) /* module_98 */,
      (o.mode.CFB = (function () {
        var e = o.lib.BlockCipherMode.extend();
        function module(e, t, n, o) {
          var i = this._iv;
          if (i) {
            var a = i.slice(0);
            this._iv = undefined;
          } else a = this._prevBlock;
          o.encryptBlock(a, 0);
          for (var r = 0; r < n; r++) e[t + r] ^= a[r];
        }
        return (
          (e.Encryptor = e.extend({
            processBlock: function (e, n) {
              var o = this._cipher,
                i = o.blockSize;
              module.call(this, e, n, i, o), (this._prevBlock = e.slice(n, n + i));
            },
          })),
          (e.Decryptor = e.extend({
            processBlock: function (e, n) {
              var o = this._cipher,
                i = o.blockSize,
                a = e.slice(n, n + i);
              module.call(this, e, n, i, o), (this._prevBlock = a);
            },
          })),
          e
        );
      })()),
      o.mode.CFB);
  }