/**
 * Webpack Module #676
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var uncurryThis = require(27) /* uncurryThis */,
    i = /[^\0-\u007E]/,
    a = /[.\u3002\uFF0E\uFF61]/g,
    r = 'Overflow: input needs wider integers to process',
    s = RangeError,
    l = uncurryThis(a.exec),
    c = Math.floor,
    d = String.fromCharCode,
    u = uncurryThis(''.charCodeAt),
    p = uncurryThis([].join),
    g = uncurryThis([].push),
    h = uncurryThis(''.replace),
    f = uncurryThis(''.split),
    m = uncurryThis(''.toLowerCase),
    y = function (e) {
      return e + 22 + 75 * (e < 26);
    },
    v = function (e, t, n) {
      var uncurryThis = 0;
      for (e = n ? c(e / 700) : e >> 1, e += c(e / t); e > 455; )
        ((e = c(e / 35)), (uncurryThis += 36));
      return c(uncurryThis + (36 * e) / (e + 38));
    },
    _ = function (e) {
      var t,
        n,
        uncurryThis = [],
        i = (e = (function (e) {
          for (var t = [], n = 0, uncurryThis = e.length; n < uncurryThis; ) {
            var i = u(e, n++);
            if (i >= 55296 && i <= 56319 && n < uncurryThis) {
              var a = u(e, n++);
              56320 == (64512 & a) ? g(t, ((1023 & i) << 10) + (1023 & a) + 65536) : (g(t, i), n--);
            } else g(t, i);
          }
          return t;
        })(e)).length,
        a = 128,
        l = 0,
        h = 72;
      for (t = 0; t < e.length; t++) (n = e[t]) < 128 && g(uncurryThis, d(n));
      var f = uncurryThis.length,
        m = f;
      for (f && g(uncurryThis, '-'); m < i; ) {
        var _ = 2147483647;
        for (t = 0; t < e.length; t++) (n = e[t]) >= a && n < _ && (_ = n);
        var b = m + 1;
        if (_ - a > c((2147483647 - l) / b)) throw new s(r);
        for (l += (_ - a) * b, a = _, t = 0; t < e.length; t++) {
          if ((n = e[t]) < a && ++l > 2147483647) throw new s(r);
          if (n === a) {
            for (var w = l, C = 36; ; ) {
              var x = C <= h ? 1 : C >= h + 26 ? 26 : C - h;
              if (w < x) break;
              var S = w - x,
                E = 36 - x;
              (g(uncurryThis, d(y(x + (S % E)))), (w = c(S / E)), (C += 36));
            }
            (g(uncurryThis, d(y(w))), (h = v(l, b, m === f)), (l = 0), m++);
          }
        }
        (l++, a++);
      }
      return p(uncurryThis, '');
    };
  exports.exports = function (e) {
    var t,
      n,
      uncurryThis = [],
      r = f(h(m(e), a, '.'), '.');
    for (t = 0; t < r.length; t++) ((n = r[t]), g(uncurryThis, l(i, n) ? 'xn--' + _(n) : n));
    return p(uncurryThis, '.');
  };
}
