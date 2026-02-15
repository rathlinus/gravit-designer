/**
 * Webpack Module #1051
 * Type: unknown
 */

function (exports, module, require) {
  var CryptoJSCore;
  exports.exports =
    ((CryptoJSCore = require(55)) /* CryptoJSCore */,
    require(98) /* CryptoJSCipherBase */,
    (CryptoJSCore.mode.CFB = (function () {
      var e = CryptoJSCore.lib.BlockCipherMode.extend();
      function module(e, t, n, CryptoJSCore) {
        var i = this._iv;
        if (i) {
          var a = i.slice(0);
          this._iv = undefined;
        } else a = this._prevBlock;
        CryptoJSCore.encryptBlock(a, 0);
        for (var r = 0; r < n; r++) e[t + r] ^= a[r];
      }
      return (
        (e.Encryptor = e.extend({
          processBlock: function (e, n) {
            var CryptoJSCore = this._cipher,
              i = CryptoJSCore.blockSize;
            (module.call(this, e, n, i, CryptoJSCore), (this._prevBlock = e.slice(n, n + i)));
          },
        })),
        (e.Decryptor = e.extend({
          processBlock: function (e, n) {
            var CryptoJSCore = this._cipher,
              i = CryptoJSCore.blockSize,
              a = e.slice(n, n + i);
            (module.call(this, e, n, i, CryptoJSCore), (this._prevBlock = a));
          },
        })),
        e
      );
    })()),
    CryptoJSCore.mode.CFB);
}
