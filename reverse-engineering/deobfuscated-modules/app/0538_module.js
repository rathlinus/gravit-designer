/**
 * Webpack Module #538
 * Type: unknown
 */

function (exports, module, require) {
    var CryptoJSCore, i, a, r;
    exports.exports =
      ((CryptoJSCore = require(55) /* CryptoJSCore */),
      (a = (i = CryptoJSCore).lib.Base),
      (r = i.enc.Utf8),
      void (i.algo.HMAC = a.extend({
        init: function (e, t) {
          (e = this._hasher = new e.init()),
            "string" == typeof t && (t = r.parse(t));
          var n = e.blockSize,
            CryptoJSCore = 4 * n;
          t.sigBytes > CryptoJSCore && (t = e.finalize(t)), t.clamp();
          for (
            var i = (this._oKey = t.clone()),
              a = (this._iKey = t.clone()),
              s = i.words,
              l = a.words,
              c = 0;
            c < n;
            c++
          )
            (s[c] ^= 1549556828), (l[c] ^= 909522486);
          (i.sigBytes = a.sigBytes = CryptoJSCore), this.reset();
        },
        reset: function () {
          var e = this._hasher;
          e.reset(), e.update(this._iKey);
        },
        update: function (e) {
          return this._hasher.update(e), this;
        },
        finalize: function (e) {
          var t = this._hasher,
            n = t.finalize(e);
          return t.reset(), t.finalize(this._oKey.clone().concat(n));
        },
      })));
  }