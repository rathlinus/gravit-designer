/**
 * Module 1009
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (e, t) {
  function i() {
  }
  i.getCurve = function (e) {
    var t, i, r = [], o = [], a = [];
    for (i = 0; i < e.length; i++)
      t = e[i], o.push(t[0]), a.push(t[1]);
    for (cubicSpline = new n(o, a), i = 0; i <= 256; i++)
      r[i] = Math.round(cubicSpline.interpolate(i)) || 0;
    return r;
  }, i.getCurves = function (e) {
    var t, n, r = [], o = {}, a = 0;
    for (a in (Array.prototype.getLowestAbove = function (e) {
        return Math.min.apply(0, this.filter(function (e) {
          return e > this;
        }, e)) || 0;
      }, e))
      r.push(i.getCurve(e[a]));
    for (a in (o.a = r[0], o.r = r[1], o.g = r[2], o.b = r[3], o))
      for (t = o[a].getLowestAbove(0) - 1, n = 0; n <= o[a].length; n++)
        0 == o[a][n] && (o[a][n] = t);
    return o;
  }, i.apply = function (e, t, n, r) {
    var o = i.getCurves(r);
    if (o) {
      for (var a = e.length, s = 0; s < a; s += 4)
        e[s] = o.r[e[s]], e[s + 1] = o.g[e[s + 1]], e[s + 2] = o.b[e[s + 2]];
      for (s = 0; s < a; s += 4)
        e[s] = o.a[e[s]], e[s + 1] = o.a[e[s + 1]], e[s + 2] = o.a[e[s + 2]];
    }
  };
  var n = function () {
    function e(e, t) {
      var i, n, r, o, a, s, l, h, A, c, p, u, d, g, f, m, y;
      for (r = [], s = [], i = [], n = [], o = [], h = [], a = 0, g = (l = e.length) - 1; 0 <= g ? a < g : a > g; 0 <= g ? a += 1 : a -= 1)
        r[a] = (t[a + 1] - t[a]) / (e[a + 1] - e[a]), a > 0 && (s[a] = (r[a - 1] + r[a]) / 2);
      for (s[0] = r[0], s[l - 1] = r[l - 2], A = [], a = 0, f = l - 1; 0 <= f ? a < f : a > f; 0 <= f ? a += 1 : a -= 1)
        0 === r[a] && A.push(a);
      for (c = 0, u = A.length; c < u; c++)
        s[a = A[c]] = s[a + 1] = 0;
      for (a = 0, m = l - 1; 0 <= m ? a < m : a > m; 0 <= m ? a += 1 : a -= 1)
        i[a] = s[a] / r[a], n[a] = s[a + 1] / r[a], o[a] = Math.pow(i[a], 2) + Math.pow(n[a], 2), h[a] = 3 / Math.sqrt(o[a]);
      for (A = [], a = 0, y = l - 1; 0 <= y ? a < y : a > y; 0 <= y ? a += 1 : a -= 1)
        o[a] > 9 && A.push(a);
      for (p = 0, d = A.length; p < d; p++)
        s[a = A[p]] = h[a] * i[a] * r[a], s[a + 1] = h[a] * n[a] * r[a];
      this.x = e.slice(0, l), this.y = t.slice(0, l), this.m = s;
    }
    return e.prototype.interpolate = function (e) {
      var t, i, n, r, o, a, s, l, h;
      for (o = h = this.x.length - 2; (h <= 0 ? o <= 0 : o >= 0) && !(this.x[o] <= e); h <= 0 ? o += 1 : o -= 1);
      return t = this.x[o + 1] - this.x[o], a = (e - this.x[o]) / t, s = Math.pow(a, 2), n = (l = Math.pow(a, 3)) - 2 * s + a, i = -2 * l + 3 * s, r = l - s, (2 * l - 3 * s + 1) * this.y[o] + n * t * this.m[o] + i * this.y[o + 1] + r * t * this.m[o + 1];
    }, e;
  }();
  e.exports = i;
}
