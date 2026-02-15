/**
 * Webpack Module #234
 * Type: unknown
 */

function (exports, module, require) {
    var o, i, a, r, s, l, c, CryptoJSCore;
    exports.exports =
      ((CryptoJSCore = require(55) /* CryptoJSCore */),
      require(537) /* module_537 */,
      require(538) /* module_538 */,
      (i = (o = CryptoJSCore).lib),
      (a = i.Base),
      (r = i.WordArray),
      (s = o.algo),
      (l = s.MD5),
      (c = s.EvpKDF =
        a.extend({
          cfg: a.extend({ keySize: 4, hasher: l, iterations: 1 }),
          init: function (e) {
            this.cfg = this.cfg.extend(e);
          },
          compute: function (e, t) {
            for (
              var require = this.cfg,
                o = require.hasher.create(),
                i = r.create(),
                a = i.words,
                s = require.keySize,
                l = require.iterations;
              a.length < s;

            ) {
              c && o.update(c);
              var c = o.update(e).finalize(t);
              o.reset();
              for (var CryptoJSCore = 1; CryptoJSCore < l; CryptoJSCore++) (c = o.finalize(c)), o.reset();
              i.concat(c);
            }
            return (i.sigBytes = 4 * s), i;
          },
        })),
      (o.EvpKDF = function (e, t, n) {
        return c.create(n).compute(e, t);
      }),
      CryptoJSCore.EvpKDF);
  }