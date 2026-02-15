/**
 * Webpack Module #537
 * Type: unknown
 */

function (exports, module, require) {
  var o, i, a, r, s, l, c, CryptoJSCore;
  exports.exports =
    ((CryptoJSCore = require(55)) /* CryptoJSCore */,
    (i = (o = CryptoJSCore).lib),
    (a = i.WordArray),
    (r = i.Hasher),
    (s = o.algo),
    (l = []),
    (c = s.SHA1 =
      r.extend({
        _doReset: function () {
          this._hash = new a.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
        },
        _doProcessBlock: function (e, t) {
          for (
            var require = this._hash.words,
              o = require[0],
              i = require[1],
              a = require[2],
              r = require[3],
              s = require[4],
              c = 0;
            c < 80;
            c++
          ) {
            if (c < 16) l[c] = 0 | e[t + c];
            else {
              var CryptoJSCore = l[c - 3] ^ l[c - 8] ^ l[c - 14] ^ l[c - 16];
              l[c] = (CryptoJSCore << 1) | (CryptoJSCore >>> 31);
            }
            var u = ((o << 5) | (o >>> 27)) + s + l[c];
            ((u +=
              c < 20
                ? 1518500249 + ((i & a) | (~i & r))
                : c < 40
                  ? 1859775393 + (i ^ a ^ r)
                  : c < 60
                    ? ((i & a) | (i & r) | (a & r)) - 1894007588
                    : (i ^ a ^ r) - 899497514),
              (s = r),
              (r = a),
              (a = (i << 30) | (i >>> 2)),
              (i = o),
              (o = u));
          }
          ((require[0] = (require[0] + o) | 0),
            (require[1] = (require[1] + i) | 0),
            (require[2] = (require[2] + a) | 0),
            (require[3] = (require[3] + r) | 0),
            (require[4] = (require[4] + s) | 0));
        },
        _doFinalize: function () {
          var e = this._data,
            t = e.words,
            n = 8 * this._nDataBytes,
            o = 8 * e.sigBytes;
          return (
            (t[o >>> 5] |= 128 << (24 - (o % 32))),
            (t[14 + (((o + 64) >>> 9) << 4)] = Math.floor(n / 4294967296)),
            (t[15 + (((o + 64) >>> 9) << 4)] = n),
            (e.sigBytes = 4 * t.length),
            this._process(),
            this._hash
          );
        },
        clone: function () {
          var e = r.clone.call(this);
          return ((e._hash = this._hash.clone()), e);
        },
      })),
    (o.SHA1 = r._createHelper(c)),
    (o.HmacSHA1 = r._createHmacHelper(c)),
    CryptoJSCore.SHA1);
}
