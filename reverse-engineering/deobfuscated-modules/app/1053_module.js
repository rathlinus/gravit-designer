/**
 * Webpack Module #1053
 * Type: unknown
 */

function (exports, module, require) {
    var CryptoJSCore;
    exports.exports =
      ((CryptoJSCore = require(55) /* CryptoJSCore */),
      require(98) /* CryptoJSCipherBase */,
      (CryptoJSCore.mode.CTRGladman = (function () {
        var e = CryptoJSCore.lib.BlockCipherMode.extend();
        function module(e) {
          if (255 == ((e >> 24) & 255)) {
            var module = (e >> 16) & 255,
              n = (e >> 8) & 255,
              CryptoJSCore = 255 & e;
            255 === module
              ? ((module = 0),
                255 === n ? ((n = 0), 255 === CryptoJSCore ? (CryptoJSCore = 0) : ++CryptoJSCore) : ++n)
              : ++module,
              (e = 0),
              (e += module << 16),
              (e += n << 8),
              (e += CryptoJSCore);
          } else e += 1 << 24;
          return e;
        }
        var n = (e.Encryptor = e.extend({
          processBlock: function (e, n) {
            var CryptoJSCore = this._cipher,
              i = CryptoJSCore.blockSize,
              a = this._iv,
              r = this._counter;
            a && ((r = this._counter = a.slice(0)), (this._iv = undefined)),
              (function (e) {
                0 === (e[0] = module(e[0])) && (e[1] = module(e[1]));
              })(r);
            var s = r.slice(0);
            CryptoJSCore.encryptBlock(s, 0);
            for (var l = 0; l < i; l++) e[n + l] ^= s[l];
          },
        }));
        return (e.Decryptor = n), e;
      })()),
      CryptoJSCore.mode.CTRGladman);
  }