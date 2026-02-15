/**
 * Webpack Module #1050
 * Type: unknown
 */

function (exports, module, require) {
    var o, i, a, r, s, l, c, d, u;
    exports.exports =
      ((u = require(55) /* module_55 */),
      require(537) /* module_537 */,
      require(538) /* module_538 */,
      (i = (o = u).lib),
      (a = i.Base),
      (r = i.WordArray),
      (s = o.algo),
      (l = s.SHA1),
      (c = s.HMAC),
      (d = s.PBKDF2 =
        a.extend({
          cfg: a.extend({ keySize: 4, hasher: l, iterations: 1 }),
          init: function (e) {
            this.cfg = this.cfg.extend(e);
          },
          compute: function (e, t) {
            for (
              var require = this.cfg,
                o = c.create(require.hasher, e),
                i = r.create(),
                a = r.create([1]),
                s = i.words,
                l = a.words,
                d = require.keySize,
                u = require.iterations;
              s.length < d;

            ) {
              var p = o.update(t).finalize(a);
              o.reset();
              for (var g = p.words, h = g.length, f = p, m = 1; m < u; m++) {
                (f = o.finalize(f)), o.reset();
                for (var y = f.words, v = 0; v < h; v++) g[v] ^= y[v];
              }
              i.concat(p), l[0]++;
            }
            return (i.sigBytes = 4 * d), i;
          },
        })),
      (o.PBKDF2 = function (e, t, n) {
        return d.create(n).compute(e, t);
      }),
      u.PBKDF2);
  }