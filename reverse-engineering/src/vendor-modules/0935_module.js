/**
 * chunk.vendor.js Module #935
 * Type: unknown
 */

function (e, t, i) {
      var n = i(6);

      function r() {
        ((this._yStrips = []), (this._intervals = []));
      }
      ((r.prototype._yStrips = null),
        (r.prototype._intervals = null),
        (r.prototype.reset = function () {
          ((this._yStrips = []), (this._intervals = []));
        }),
        (r.prototype.subtract = function (e) {
          if (this._yStrips.length) {
            var t = e.getX(),
              i = e.getX() + e.getWidth(),
              n = e.getY(),
              r = e.getY() + e.getHeight(),
              o = this._locate(this._yStrips, n);
            if (o.idx !== this._yStrips.length) {
              var a,
                s,
                l,
                h = this._locate(this._yStrips, r),
                A = new Array(2),
                c = o.idx,
                p = h.idx;
              if (
                ((A[0] = n),
                o.outside ||
                  ((l = this._yStrips[c][1]),
                  (this._yStrips[c][1] = n),
                  (A[0] = n),
                  (A[1] = Math.min(l, r)),
                  (c += 1),
                  h.outside || (p += 1),
                  this._yStrips.splice(c, 0, A),
                  this._intervals.splice(c, 0, C(this._intervals[c - 1]))),
                (A = new Array(2)),
                h.outside)
              );
              else {
                var u = this._yStrips[p][0];
                ((this._yStrips[p][0] = r),
                  void 0 !== l &&
                    (this._yStrips[p][1] = Math.max(l, this._yStrips[p][1])),
                  (A[0] = Math.max(u, n)),
                  (A[1] = r),
                  this._yStrips.splice(p, 0, A),
                  this._intervals.splice(p, 0, C(this._intervals[p])));
              }
              if (c !== p || !o.outside || !h.outside) {
                ((p = Math.min(p, this._yStrips.length - 1)),
                  (a = Math.max(0, c - 2)),
                  (s = Math.min(p + 1, this._yStrips.length - 1)));
                for (var d = c; d <= p; d++) {
                  var g = this._intervals[d],
                    f = this._locate(g, t),
                    m = this._locate(g, i),
                    y = void 0,
                    _ = void 0,
                    v = void 0,
                    b = void 0;
                  (f.outside
                    ? (_ = f.idx)
                    : ((b = g[f.idx][1]), (g[f.idx][1] = t), (_ = f.idx + 1)),
                    m.outside ||
                      (void 0 !== b && f.idx == m.idx
                        ? (y = [i, b])
                        : (g[m.idx][0] = i)),
                    (v = m.idx),
                    y ? g.splice(_, v - _, y) : g.splice(_, v - _));
                }
              }
              this._consolidate(a, s);
            }
          }

          function C(e) {
            return e.map(function (e) {
              return [e[0], e[1]];
            });
          }
        }),
        (r.prototype._locateSmall = function (e, t) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i][0],
              r = e[i][1];
            if (t < n)
              return {
                idx: i,
                outside: !0,
              };
            if (t >= n && t < r)
              return {
                idx: i,
                outside: !1,
              };
          }
          return {
            idx: e.length,
            outside: !0,
          };
        }),
        (r.prototype._locate = function (e, t) {
          if (e.length < 10) return this._locateSmall(e, t);
          for (var i = 0, n = e.length - 1, r = Math.floor(n / 2); i <= n; ) {
            var o = e[r][0],
              a = e[r][1];
            if (t < o) n = r - 1;
            else {
              if (t >= o && t < a)
                return {
                  idx: r,
                  outside: !1,
                };
              i = r + 1;
            }
            r = Math.floor((i + n) / 2);
          }
          return i > e.length - 1
            ? {
                idx: e.length,
                outside: !0,
              }
            : {
                idx: i,
                outside: !0,
              };
        }),
        (r.prototype.merge = function (e, t) {
          if (!this._yStrips.length)
            return (
              this._yStrips.push([e.getY(), e.getY() + e.getHeight()]),
              void this._intervals.push([[e.getX(), e.getX() + e.getWidth()]])
            );

          function i(e) {
            return e.map(function (e) {
              return [e[0], e[1]];
            });
          }
          var n,
            r,
            o = e.getX(),
            a = e.getX() + e.getWidth(),
            s = e.getY(),
            l = e.getY() + e.getHeight(),
            h = this._locate(this._yStrips, s);
          if (h.idx === this._yStrips.length)
            return (
              this._yStrips.push([s, l]),
              void this._intervals.push([[o, a]])
            );
          var A,
            c = this._locate(this._yStrips, l),
            p = new Array(2),
            u = h.idx,
            d = c.idx;
          if (
            ((p[0] = s),
            h.outside
              ? ((p[0] = s),
                (p[1] = Math.min(this._yStrips[u][0], l)),
                this._yStrips.splice(u, 0, p),
                this._intervals.splice(u, 0, [[o, a]]),
                (u += 1),
                (d += 1))
              : ((A = this._yStrips[u][1]),
                (this._yStrips[u][1] = s),
                (p[0] = s),
                (p[1] = Math.min(A, l)),
                (u += 1),
                (d += 1),
                this._yStrips.splice(u, 0, p),
                this._intervals.splice(u, 0, i(this._intervals[u - 1]))),
            (p = new Array(2)),
            c.outside)
          )
            ((p[0] = d > 0 ? Math.max(this._yStrips[d - 1][1], s) : s),
              (p[1] = l),
              this._yStrips.splice(d, 0, p),
              this._intervals.splice(d, 0, [[o, a]]));
          else {
            var g = this._yStrips[d][0];
            ((this._yStrips[d][0] = l),
              void 0 !== A &&
                (this._yStrips[d][1] = Math.max(A, this._yStrips[d][1])),
              (p[0] = Math.max(g, s)),
              (p[1] = l),
              this._yStrips.splice(d, 0, p),
              this._intervals.splice(d, 0, i(this._intervals[d])));
          }
          ((n = Math.max(0, u - 2)),
            (r = Math.min(d + 1, this._yStrips.length - 1)));
          for (var f = u; f <= d; f++) {
            var m = this._intervals[f],
              y = this._locate(m, o),
              _ = this._locate(m, a),
              v = new Array(2);
            (y.outside ? (v[0] = o) : (v[0] = m[y.idx][0]),
              _.outside ? (v[1] = a) : (v[1] = m[_.idx][0]),
              m.splice(y.idx, _.idx - y.idx, v));
          }
          for (f = u; f < d; f++) {
            var b = this._yStrips[f],
              C = this._yStrips[f + 1];
            (s = b[1]) !== (l = C[0]) &&
              (((p = new Array(2))[0] = s),
              (p[1] = l),
              this._yStrips.splice(f + 1, 0, p),
              this._intervals.splice(f + 1, 0, [[o, a]]),
              (f += 1),
              (d += 1));
          }
          t || this._consolidate(n, r);
        }),
        (r.prototype._consolidate = function (e, t) {
          for (var i = t; i >= e; i--) {
            var n = this._yStrips[i];
            if (n[0] !== n[1]) {
              var r = this._intervals[i];
              if (r.length) {
                this._intervals[i] = r.filter(function (e) {
                  return !(e[0] >= e[1]);
                });
                for (var o = (r = this._intervals[i]).length - 1; o > 0; o--) {
                  var a = r[o - 1],
                    s = r[o];
                  a[1] == s[0] && (r.splice(o, 1), (a[1] = s[1]));
                }
                if (
                  i < this._intervals.length - 1 &&
                  this._yStrips[i][1] === this._yStrips[i + 1][0]
                ) {
                  var l = this._intervals[i + 1];
                  a = this._intervals[i];
                  if (l.length === a.length) {
                    for (
                      o = 0;
                      o < a.length && a[o][0] == l[o][0] && a[o][1] == l[o][1];
                      o++
                    );
                    o == a.length &&
                      ((this._yStrips[i][1] = this._yStrips[i + 1][1]),
                      this._yStrips.splice(i + 1, 1),
                      this._intervals.splice(i + 1, 1));
                  }
                }
              } else (this._yStrips.splice(i, 1), this._intervals.splice(i, 1));
            } else (this._yStrips.splice(i, 1), this._intervals.splice(i, 1));
          }
        }),
        (r.prototype.getRects = function (e) {
          e && this._consolidate(0, this._yStrips.length - 1);
          for (var t = [], i = 0; i < this._yStrips.length; i++)
            for (
              var r = this._intervals[i], o = this._yStrips[i], a = 0;
              a < r.length;
              a++
            ) {
              var s = r[a];
              t.push(new n(s[0], o[0], s[1] - s[0], o[1] - o[0]));
            }
          return t;
        }),
        (e.exports = r));
    }