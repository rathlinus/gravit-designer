/**
 * Module 380
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

function (exports, module, require) {
  var r = require(5) /* GPoint */, o = require(12) /* GMath */, a = require(59) /* GVertexInfo */;
  function s(e, t) {
    this.error = e || 0.000001, this.tolerance = t || Math.sqrt(this.error + l), this.polys = [];
  }
  var l = 1e-9;
  function h(e) {
    var t = 1 - e;
    return t * t * t;
  }
  function A(e) {
    var t = 1 - e;
    return 3 * e * (t * t);
  }
  function c(e) {
    return 3 * e * e * (1 - e);
  }
  function p(e) {
    return e * e * e;
  }
  s.prototype.polys = null, s.prototype.tolerance = 0, s.prototype.error = 0, s.prototype.force = false, s.prototype.fitCurve = function (e, t, i, n) {
    var o, a, s = e.length;
    o = i || new r(0, 0), a = n || new r(0, 0);
    var l = [];
    return this._fitCubic(e, 0, s - 1, o, a, l, t) >= 0 ? l : null;
  }, s.prototype._fitCubic = function (e, t, i, n, a, s, l) {
    var h, A, c, p, u, d, g = [], f = e;
    if (l < 1)
      return -1;
    if ((u = i - t + 1) < 2)
      return 0;
    var m = new r(0, 0);
    if (2 == u) {
      var y = o.ptDist(f[i].getX(), f[i].getY(), f[t].getX(), f[t].getY()) / 3;
      return (h = new Array(4))[0] = f[t], h[3] = f[i], h[1] = r.equals(m, n) ? h[0].scale(2).add(h[3]).scale(1 / 3) : h[0].add(n.scale(y)), h[2] = r.equals(m, a) ? h[0].add(h[3].scale(2)).scale(1 / 3) : h[3].add(a.scale(y)), s.push(h), 1;
    }
    if (!(A = this._chordLengthParameterize(f, t, i)))
      return 0;
    if (h = this._generateBezier_err(f, t, i, A, n, a), p = this._computeMaxError(f, t, i, h, A, g), Math.abs(p) <= 1)
      return s.push(h), 1;
    if (0 <= p && p <= 3)
      for (d = 0; d < 4; d++) {
        if (h = this._generateBezier_err(f, t, i, A, n, a), c = this._reparameterize(f, t, i, A, h), p = this._computeMaxError(f, t, i, h, c, g), Math.abs(p) <= 1)
          return s.push(h), 1;
        A = c;
      }
    var _ = p < 0;
    if (_)
      if (g[0] == t) {
        if (!r.equals(m, n))
          return this._fitCubic(f, t, i, m, a, s, l);
        g[0] = g[0] + 1;
      } else if (g[0] == i) {
        if (!r.equals(m, a))
          return this._fitCubic(f, t, i, n, m, s, l);
        g[0] = g[0] - 1;
      }
    if (1 < l) {
      var v, b;
      if (_) {
        if (!(t < g[0] && g[0] < i))
          return -1;
        v = b = m;
      } else
        v = (b = this._computeCenterTangent(f, g[0])).scale(-1);
      this._computeCenterTangent(f, g[0]);
      var C = this._fitCubic(f, t, g[0], n, b, s, l - 1);
      if (C < 0)
        return -1;
      var w = this._fitCubic(f, g[0], i, v, a, s, l - C);
      return w < 0 ? -1 : C + w;
    }
    return -1;
  }, s.prototype._estimate_bi = function (e, t, i, n, o, a) {
    if (1 <= t && t <= 2) {
      for (var s = 3 - t, l = new r(0, 0), u = 0, d = a - o + 1, g = 0; g < d; ++g) {
        var f = n[g], m = [
            h(f),
            A(f),
            c(f),
            p(f)
          ];
        l = l.add(e[0].scale(m[0]).add(e[s].scale(m[s])).add(e[3].scale(m[3])).subtract(i[g + o]).scale(m[t])), u -= m[t] * m[t];
      }
      e[t] = 0 != u ? l.scale(1 / u) : e[0].scale(s).add(e[3].scale(t)).scale(1 / 3);
    }
  }, s.prototype._darray_left_tangent = function (e, t, n, r) {
    var o = n - t + 1;
    for (i = 1;;) {
      var a = e[t + i].subtract(e[t]), s = a.dot(a);
      if (r < s)
        return a.scale(1 / Math.sqrt(s));
      if (++i, i == o)
        return 0 == s ? this._computeLeftTangent(e, t) : a.scale(1 / Math.sqrt(s));
    }
  }, s.prototype._darray_right_tangent = function (e, t, i, n) {
    for (var r = i - 1;; r--) {
      var o = e[r].subtract(e[i]), a = o.dot(o);
      if (n < a)
        return o.scale(1 / Math.sqrt(a));
      if (r == t)
        return 0 == a ? this._computeRightTangent(e, i) : o.scale(1 / Math.sqrt(a));
    }
  }, s.prototype._generateBezier_err = function (e, t, i, n, o, a) {
    var s = 0 == o.getX() && 0 == o.getY(), l = 0 == a.getX() && 0 == a.getY(), h = s ? this._darray_left_tangent(e, t, i, this.error) : o, A = l ? this._darray_right_tangent(e, t, i, this.error) : a, c = this._generateBezier(e, t, i, n, h, A);
    if (s) {
      if (this._estimate_bi(c, 1, e, n, t, i), !r.equals(c[1], c[0])) {
        var p = c[1].subtract(c[0]);
        h = p.scale(1 / Math.sqrt(p.dot(p)));
      }
      c = this._generateBezier(e, t, i, n, h, A);
    }
    return c;
  }, s.prototype._generateBezier = function (e, t, i, n, r, a) {
    var s, l, u, d, g, f, m, y, _, v = new Array(2), b = new Float64Array(2);
    for (_ = new Array(4), l = i - t + 1, v[0] = [
        0,
        0
      ], v[1] = [
        0,
        0
      ], b[0] = 0, b[1] = 0, s = 0; s < l; s++) {
      var C = r.scale(A(n[s])), w = a.scale(c(n[s]));
      v[0][0] += C.dot(C), v[0][1] += C.dot(w), v[1][0] = v[0][1], v[1][1] += w.dot(w), y = e[t + s].subtract(e[t].scale(h(n[s])).add(e[t].scale(A(n[s])).add(e[i].scale(c(n[s])).add(e[i].scale(p(n[s])))))), b[0] += C.dot(y), b[1] += w.dot(y);
    }
    if (u = v[0][0] * v[1][1] - v[1][0] * v[0][1], d = v[0][0] * b[1] - v[0][1] * b[0], g = b[0] * v[1][1] - b[1] * v[0][1], 0 == u) {
      var E = v[0][0] + v[0][1];
      if (0 != E)
        f = m = b[0] / E;
      else {
        var B = v[1][0] + v[1][1];
        f = m = 0 != B ? b[1] / B : 0;
      }
    } else
      f = g / u, m = d / u;
    if (f < 0.000001 || m < 0.000001) {
      var x = o.ptDist(e[i], e[t]) / 3;
      return _[0] = e[t], _[3] = e[i], _[1] = _[0].add(r.scale(x)), _[2] = _[3].add(a.scale(x)), _;
    }
    return _[0] = e[t], _[3] = e[i], _[1] = _[0].add(r.scale(f)), _[2] = _[3].add(a.scale(m)), _;
  }, s.prototype._reparameterize = function (e, t, i, n, r) {
    var o, s;
    for (s = new Float64Array(i - t + 1), o = t; o <= i; o++) {
      var l = {}, h = a._hitTestCurve2(r[0].getX(), r[0].getY(), r[3].getX(), r[3].getY(), r[1].getX(), r[1].getY(), r[2].getX(), r[2].getY(), e[o].getX(), e[o].getY(), 100, 0, l);
      s[o - t] = h ? l.slope : n[o - t];
    }
    return s;
  }, s.prototype._newtonRaphsonRootFind = function (e, t, i) {
    var n, r, o, a, s, l, h = new Array(3), A = new Array(2);
    o = this._evalBezier(3, e, i), h[0] = e[1].subtract(e[0]).scale(3), h[1] = e[2].subtract(e[1]).scale(3), h[2] = e[3].subtract(e[2]).scale(3), A[0] = h[1].subtract(h[0]).scale(2), A[1] = h[2].subtract(h[1]).scale(2), a = this._evalBezier(2, h, i), s = this._evalBezier(1, A, i);
    var c = o.subtract(t);
    n = c.dot(a), l = (r = a.dot(a) + c.dot(s)) > 0 ? i - n / r : n > 0 ? 0.98 * i - 0.01 : n < 0 ? 0.031 + 0.98 * i : i, isNaN(l) ? l = i : l < 0 ? l = 0 : l > 1 && (l = 1);
    for (var p = c.dot(c), u = 0.125;; u += 0.125) {
      var d = this._evalBezier(3, e, l).subtract(t);
      if (!(d.dot(d) > p))
        break;
      if (u > 1) {
        l = i;
        break;
      }
      l = (1 - u) * l + u * i;
    }
    return l;
  }, s.prototype._evalBezier = function (e, t, i) {
    var n, r, o;
    for (o = new Array(e + 1), n = 0; n <= e; n++)
      o[n] = t[n];
    for (n = 1; n <= e; n++)
      for (r = 0; r <= e - n; r++)
        o[r] = o[r].scale(1 - i).add(o[r + 1].scale(i));
    return o[0];
  }, s.prototype._computeLeftTangent = function (e, t) {
    var i;
    return i = (i = e[t + 1].subtract(e[t])).scale(1 / Math.sqrt(i.dot(i)));
  }, s.prototype._computeRightTangent = function (e, t) {
    var i;
    return i = (i = e[t - 1].subtract(e[t])).scale(1 / Math.sqrt(i.dot(i)));
  }, s.prototype._computeCenterTangent = function (e, t) {
    var i;
    if (r.equals(e[t - 1], e[t + 1])) {
      var require = e[t].subtract(e[t - 1]);
      i = new r(-require.getY(), require.getX());
    } else
      i = e[t - 1].subtract(e[t + 1]);
    return i = i.scale(1 / Math.sqrt(i.dot(i)));
  }, s.prototype._chordLengthParameterize = function (e, t, i) {
    var n, r;
    for ((r = new Array(i - t + 1))[0] = 0, n = t + 1; n <= i; n++) {
      var o = e[n].subtract(e[n - 1]);
      r[n - t] = r[n - t - 1] + Math.sqrt(o.dot(o));
    }
    var a = r[i - t];
    if (!a)
      return null;
    for (n = t + 1; n <= i; n++)
      r[n - t] = r[n - t] / a;
    return 1 != r[i - t] && (console.log("non1"), r[i - t] = 1), r;
  }, s.prototype._computeHook = function (e, t, i, n) {
    var r = this._evalBezier(3, n, i), o = e.add(t).scale(0.5).subtract(r), a = Math.sqrt(o.dot(o));
    return a < this.tolerance ? 0 : (o = e.subtract(t), a / (Math.sqrt(o.dot(o)) + this.tolerance));
  }, s.prototype._computeMaxError = function (e, t, i, n, r, o) {
    var a, s, l, h, A, c, p, u = 0;
    o[0] = (i - t + 1) / 2, s = 0;
    var d = n[0];
    for (a = t + 1; a < i; a++)
      (l = (A = (h = this._evalBezier(3, n, r[a - t])).subtract(e[a])).dot(A)) >= s && (s = l, o[0] = a), u < (p = this._computeHook(d, h, 0.5 * (r[a - t - 1] + r[a - t]), n)) && (u = p, c = a), d = h;
    var g, f = Math.sqrt(s) / this.tolerance;
    return u <= f ? g = f : (g = -u, o[0] = c - 1), g;
  }, s.prototype.toString = function () {
    return "[Object GVertexFitter]";
  }, exports.exports = s;
}
