/**
 * Webpack Module #1046
 * Type: unknown
 */

function (exports, module, require) {
    var o, i, a, r, s, CryptoJSCore;
    exports.exports =
      ((CryptoJSCore = require(55) /* CryptoJSCore */),
      require(736) /* Exports_SHA256 */,
      (i = (o = CryptoJSCore).lib.WordArray),
      (a = o.algo),
      (r = a.SHA256),
      (s = a.SHA224 =
        r.extend({
          _doReset: function () {
            this._hash = new i.init([
              3238371032, 914150663, 812702999, 4144912697, 4290775857,
              1750603025, 1694076839, 3204075428,
            ]);
          },
          _doFinalize: function () {
            var e = r._doFinalize.call(this);
            return (e.sigBytes -= 4), e;
          },
        })),
      (o.SHA224 = r._createHelper(s)),
      (o.HmacSHA224 = r._createHmacHelper(s)),
      CryptoJSCore.SHA224);
  }