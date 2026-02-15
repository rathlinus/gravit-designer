/**
 * Module 935
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
  var n = require(6) /* GRect */;
  function r() {
    this._yStrips = [], this._intervals = [];
  }
  r.prototype._yStrips = null, r.prototype._intervals = null, r.prototype.reset = function () {
    this._yStrips = [], this._intervals = [];
  }, r.prototype.subtract = function (e) {
    if (this._yStrips.length) {
      var module = e.getX(), require = e.getX() + e.getWidth(), n = e.getY(), r = e.getY() + e.getHeight(), o = this._locate(this._yStrips, n);
      if (o.idx !== this._yStrips.length) {
        var a, s, l, h = this._locate(this._yStrips, r), A = new Array(2), c = o.idx, p = h.idx;
        if (A[0] = n, o.outside || (l = this._yStrips[c][1], this._yStrips[c][1] = n, A[0] = n, A[1] = Math.min(l, r), c += 1, h.outside || (p += 1), this._yStrips.splice(c, 0, A), this._intervals.splice(c, 0, C(this._intervals[c - 1]))), A = new Array(2), h.outside);
        else {
          var u = this._yStrips[p][0];
          this._yStrips[p][0] = r, undefined !== l && (this._yStrips[p][1] = Math.max(l, this._yStrips[p][1])), A[0] = Math.max(u, n), A[1] = r, this._yStrips.splice(p, 0, A), this._intervals.splice(p, 0, C(this._intervals[p]));
        }
        if (c !== p || !o.outside || !h.outside) {
          p = Math.min(p, this._yStrips.length - 1), a = Math.max(0, c - 2), s = Math.min(p + 1, this._yStrips.length - 1);
          for (var d = c; d <= p; d++) {
            var g = this._intervals[d], f = this._locate(g, module), m = this._locate(g, require), y = undefined, _ = undefined, v = undefined, b = undefined;
            f.outside ? _ = f.idx : (b = g[f.idx][1], g[f.idx][1] = module, _ = f.idx + 1), m.outside || (undefined !== b && f.idx == m.idx ? y = [
              require,
              b
            ] : g[m.idx][0] = require), v = m.idx, y ? g.splice(_, v - _, y) : g.splice(_, v - _);
          }
        }
        this._consolidate(a, s);
      }
    }
    function C(e) {
      return e.map(function (e) {
        return [
          e[0],
          e[1]
        ];
      });
    }
  }, r.prototype._locateSmall = function (e, t) {
    for (var require = 0; require < e.length; require++) {
      var n = e[require][0], r = e[require][1];
      if (t < n)
        return {
          idx: require,
          outside: true
        };
      if (t >= n && t < r)
        return {
          idx: require,
          outside: false
        };
    }
    return {
      idx: e.length,
      outside: true
    };
  }, r.prototype._locate = function (e, t) {
    if (e.length < 10)
      return this._locateSmall(e, t);
    for (var require = 0, n = e.length - 1, r = Math.floor(n / 2); require <= n;) {
      var o = e[r][0], a = e[r][1];
      if (t < o)
        n = r - 1;
      else {
        if (t >= o && t < a)
          return {
            idx: r,
            outside: false
          };
        require = r + 1;
      }
      r = Math.floor((require + n) / 2);
    }
    return require > e.length - 1 ? {
      idx: e.length,
      outside: true
    } : {
      idx: require,
      outside: true
    };
  }, r.prototype.merge = function (e, t) {
    if (!this._yStrips.length)
      return this._yStrips.push([
        e.getY(),
        e.getY() + e.getHeight()
      ]), void this._intervals.push([[
          e.getX(),
          e.getX() + e.getWidth()
        ]]);
    function require(e) {
      return e.map(function (e) {
        return [
          e[0],
          e[1]
        ];
      });
    }
    var n, r, o = e.getX(), a = e.getX() + e.getWidth(), s = e.getY(), l = e.getY() + e.getHeight(), h = this._locate(this._yStrips, s);
    if (h.idx === this._yStrips.length)
      return this._yStrips.push([
        s,
        l
      ]), void this._intervals.push([[
          o,
          a
        ]]);
    var A, c = this._locate(this._yStrips, l), p = new Array(2), u = h.idx, d = c.idx;
    if (p[0] = s, h.outside ? (p[0] = s, p[1] = Math.min(this._yStrips[u][0], l), this._yStrips.splice(u, 0, p), this._intervals.splice(u, 0, [[
          o,
          a
        ]]), u += 1, d += 1) : (A = this._yStrips[u][1], this._yStrips[u][1] = s, p[0] = s, p[1] = Math.min(A, l), u += 1, d += 1, this._yStrips.splice(u, 0, p), this._intervals.splice(u, 0, require(this._intervals[u - 1]))), p = new Array(2), c.outside)
      p[0] = d > 0 ? Math.max(this._yStrips[d - 1][1], s) : s, p[1] = l, this._yStrips.splice(d, 0, p), this._intervals.splice(d, 0, [[
          o,
          a
        ]]);
    else {
      var g = this._yStrips[d][0];
      this._yStrips[d][0] = l, undefined !== A && (this._yStrips[d][1] = Math.max(A, this._yStrips[d][1])), p[0] = Math.max(g, s), p[1] = l, this._yStrips.splice(d, 0, p), this._intervals.splice(d, 0, require(this._intervals[d]));
    }
    n = Math.max(0, u - 2), r = Math.min(d + 1, this._yStrips.length - 1);
    for (var f = u; f <= d; f++) {
      var m = this._intervals[f], y = this._locate(m, o), _ = this._locate(m, a), v = new Array(2);
      y.outside ? v[0] = o : v[0] = m[y.idx][0], _.outside ? v[1] = a : v[1] = m[_.idx][0], m.splice(y.idx, _.idx - y.idx, v);
    }
    for (f = u; f < d; f++) {
      var b = this._yStrips[f], C = this._yStrips[f + 1];
      (s = b[1]) !== (l = C[0]) && ((p = new Array(2))[0] = s, p[1] = l, this._yStrips.splice(f + 1, 0, p), this._intervals.splice(f + 1, 0, [[
          o,
          a
        ]]), f += 1, d += 1);
    }
    t || this._consolidate(n, r);
  }, r.prototype._consolidate = function (e, t) {
    for (var require = t; require >= e; require--) {
      var n = this._yStrips[require];
      if (n[0] !== n[1]) {
        var r = this._intervals[require];
        if (r.length) {
          this._intervals[require] = r.filter(function (e) {
            return !(e[0] >= e[1]);
          });
          for (var o = (r = this._intervals[require]).length - 1; o > 0; o--) {
            var a = r[o - 1], s = r[o];
            a[1] == s[0] && (r.splice(o, 1), a[1] = s[1]);
          }
          if (require < this._intervals.length - 1 && this._yStrips[require][1] === this._yStrips[require + 1][0]) {
            var l = this._intervals[require + 1];
            a = this._intervals[require];
            if (l.length === a.length) {
              for (o = 0; o < a.length && a[o][0] == l[o][0] && a[o][1] == l[o][1]; o++);
              o == a.length && (this._yStrips[require][1] = this._yStrips[require + 1][1], this._yStrips.splice(require + 1, 1), this._intervals.splice(require + 1, 1));
            }
          }
        } else
          this._yStrips.splice(require, 1), this._intervals.splice(require, 1);
      } else
        this._yStrips.splice(require, 1), this._intervals.splice(require, 1);
    }
  }, r.prototype.getRects = function (e) {
    e && this._consolidate(0, this._yStrips.length - 1);
    for (var module = [], require = 0; require < this._yStrips.length; require++)
      for (var r = this._intervals[require], o = this._yStrips[require], a = 0; a < r.length; a++) {
        var s = r[a];
        module.push(new n(s[0], o[0], s[1] - s[0], o[1] - o[0]));
      }
    return module;
  }, exports.exports = r;
}
