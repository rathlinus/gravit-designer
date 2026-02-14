/**
 * Module 1079
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

function (e, t, i) {
  var n = i(54), r = i(48), o = i(12);
  function a(e) {
    this.cutterSource = e;
  }
  a.UNCHANGED = 1, a.ALLOW_ODD_CLOSED = !0, a.prototype.performCut = function (e, t, i, n, r, o, s) {
    var l = null, h = null;
    if (r && (this.cutterSource = r), n && (a.ALLOW_ODD_CLOSED && 0 === t.length || !a.ALLOW_ODD_CLOSED && t.length % 2 != 0) || 0 == i.length || !n && (0 === t.length || 0 === i.length))
      return a.UNCHANGED;
    for (var A = 0; A < i.length; A++) {
      var c;
      if (!(c = i[A]))
        return null;
      if (l = {
          x: c.getProperty("x"),
          y: c.getProperty("y"),
          next: l
        }, c = t[A])
        h = {
          x: c.getProperty("x"),
          y: c.getProperty("y"),
          next: h
        };
    }
    this.isectsCutter = l, this.isectsCut = h, this.isClosed = n;
    var p = e, u = (this.cutterSource, []), d = this._breakApart(this.cutterSource, n, u), g = 0, f = u.length;
    if (0 === f || !d)
      return null;
    for (A = 0; A < f; A++)
      g += u[A].getCount();
    if (g - (f - 1) != this.cutterSource._vertices.getCount())
      return null;
    var m = [], y = n ? -1 : 0, _ = !1;
    for (A = p.length - 1; A >= 0; A--)
      if (p[A]) {
        var v = [];
        _ = this._breakApart(p[A], !1, v) || _, m = m.concat(v), f = v.length, g = 0;
        for (var b = 0; b < f; b++)
          g += v[b].getCount();
        if (g - (f - 1) != p[A]._vertices.getCount() + y)
          return null;
      }
    if (1 == m.length && !_)
      return a.UNCHANGED;
    if (void 0 === o && (o = n), o) {
      if (!this._fitVertices(m, u, s))
        return null;
    } else if (!this._distributeSides(m, u))
      return null;
    return m;
  }, a.prototype.checkSideOfUncut = function (e, t) {
    var i = null, o = null, a = null, s = null;
    if (e.rewindVertices(0))
      for (var l = new r(); e.readVertex(l);)
        switch (l.command) {
        case r.Command.Move:
          i = l.x, o = l.y;
          break;
        case r.Command.Line:
          a = l.x, s = l.y;
          break;
        case r.Command.Curve:
          a = l.x, s = l.y, e.readVertex(l);
          break;
        case r.Command.Curve2:
          a = l.x, s = l.y, e.readVertex(l) && e.readVertex(l);
          break;
        case r.Command.Close:
          break;
        default:
          throw new Error("Unknown vertex command: " + l.command.toString());
        }
    var h = 2;
    if (null !== i && null !== a) {
      var A = new n();
      A.addVertex(r.Command.Move, i, o), A.addVertex(r.Command.Line, a, s), h = this._getSide(A, t, null, 0);
    }
    return h;
  }, a.prototype._checkEnds = function (e) {
    for (var t = e.length - 1; t >= 0; t--) {
      var i = e[t].path0, n = e[t].path1, r = e[t].pt;
      if (i && !s(l(i), r))
        return !1;
      if (n && !s(h(n), r))
        return !1;
    }
    return !0;
  }, a.prototype._vertexHasIsect = function (e, t) {
    if (!t)
      return !1;
    do {
      if ((e.x === t.x || o.isEqualEps(e.x, t.x, 0.05)) && (e.y === t.y || o.isEqualEps(e.y, t.y, 0.05)))
        return !0;
    } while (t = t.next);
    return !1;
  }, a.prototype._getSegment = function (e, t) {
    var i = [], n = new r(), o = null, a = !0;
    for (e.rewindVertices(0); a && e.readVertex(n);) {
      switch (1 === t && (i = []), n.command) {
      case r.Command.Move:
        o = n, n = new r();
        break;
      case r.Command.Line:
        o && (i.push(o.x, o.y), i.push(n.x, n.y)), o = n, n = new r();
        break;
      case r.Command.Curve:
        if (o) {
          var s = new r();
          e.readVertex(s) && (i.push(o.x, o.y), i.push(s.x, s.y), i.push(n.x, n.y));
        }
        o = n, n = new r();
        break;
      case r.Command.Curve2:
        if (o) {
          s = new r();
          var l = new r();
          e.readVertex(s) && e.readVertex(l) && (i.push(o.x, o.y), i.push(s.x, s.y), i.push(l.x, l.y), i.push(n.x, n.y));
        }
        o = n, n = new r();
        break;
      case r.Command.Close:
        a = !1;
      }
      if (0 === t && i.length)
        break;
    }
    return i;
  }, a.prototype._getSide = function (e, t, i, n, r) {
    var a, s, l, h = n >> 1, A = 1 & n, c = this._getSegment(e, n >> 1), p = this._getSegment(t, 1 & n);
    return 0 == c.length || 0 == p.length ? 2 : (1 == h ? 4 == c.length ? a = [
      c[0],
      c[1],
      c[2],
      c[3]
    ] : 6 == c.length ? a = [
      c[2],
      c[3],
      c[4],
      c[5]
    ] : 8 == c.length && (a = [
      c[4],
      c[5],
      c[6],
      c[7]
    ]) : a = [
      c[0],
      c[1],
      c[2],
      c[3]
    ], 0 == A ? (4 == p.length || 6 == p.length || 8 == p.length) && (s = [
      p[2],
      p[3]
    ]) : 4 == p.length ? s = [
      p[0],
      p[1]
    ] : 6 == p.length ? s = [
      p[2],
      p[3]
    ] : 8 == p.length && (s = [
      p[4],
      p[5]
    ]), 0 == (l = r ? o.segmentSide(a[2], a[3], a[0], a[1], s[0], s[1]) : o.segmentSide(a[0], a[1], a[2], a[3], s[0], s[1])) ? 2 : 1 == l ? 0 : 1);
  }, a.prototype._closePath = function (e) {
    if (0 === e.getCount())
      return e;
    e.rewindVertices(e.getCount() - 1);
    var t = new r();
    return e.readVertex(t), t.command !== r.Command.Close && e.addVertex(r.Command.Close, 0, 0), e;
  }, a.prototype._appendVertices = function (e, t) {
    var i = new n();
    i.appendVertices(e), i.appendVertices(t, 1), e.clearVertices(), e.appendVertices(i);
  }, a.prototype._prependVertices = function (e, t) {
    var i = new n();
    i.appendVertices(t), i.appendVertices(e, 1), e.clearVertices(), e.appendVertices(i);
  }, a.prototype._correctMoveTo = function (e) {
    var t = new r(), i = null;
    e.rewindVertices(0);
    for (var a = new n(); e.readVertex(t);)
      t.command === r.Command.Move && i && o.isEqualEps(t.x, i.x) && o.isEqualEps(t.y, i.y) || a.addVertex(t.command, t.x, t.y), i = t, t = new r();
    e.clearVertices(), e.appendVertices(a);
  }, a.prototype._cloneV = function (e) {
    var t = new r();
    return t.x = e.x, t.y = e.y, t.command = e.command, t;
  }, a.prototype._breakApart = function (e, t, i) {
    var o, a, s = new r(), l = new r(), h = !0, A = new n();
    i.length = 0, i.push(A);
    var c = !1;
    for (e.rewindVertices(0); h && e.readVertex(s);)
      switch (s.command) {
      case r.Command.Move:
        o = this._vertexHasIsect(s, this.isectsCut), t && (a = this._vertexHasIsect(s, this.isectsCutter)), (A.getCount() || o || a) && ((o || a) && (A = new n()), i.push(A), c = !0), A.addVertex(s.command, s.x, s.y);
        break;
      case r.Command.Line:
        A.addVertex(s.command, s.x, s.y), o = this._vertexHasIsect(s, this.isectsCut), t && (a = this._vertexHasIsect(s, this.isectsCutter)), (o || a) && ((A = new n()).addVertex(r.Command.Move, s.x, s.y), i.push(A), c = !0);
        break;
      case r.Command.Curve:
        var p = {
          command: s.command,
          x: s.x,
          y: s.y
        };
        e.readVertex(s) && (A.addVertex(p.command, p.x, p.y), A.addVertex(s.command, s.x, s.y), o = this._vertexHasIsect(p, this.isectsCut), t && (a = this._vertexHasIsect(p, this.isectsCutter)), (o || a) && (A = new n(), i.push(A), A.addVertex(r.Command.Move, p.x, p.y), c = !0));
        break;
      case r.Command.Curve2:
        p = {
          command: s.command,
          x: s.x,
          y: s.y
        };
        e.readVertex(s) && e.readVertex(l) && (A.addVertex(p.command, p.x, p.y), A.addVertex(s.command, s.x, s.y), A.addVertex(l.command, l.x, l.y), o = this._vertexHasIsect(p, this.isectsCut), t && (a = this._vertexHasIsect(p, this.isectsCutter)), (o || a) && (A = new n(), i.push(A), A.addVertex(r.Command.Move, p.x, p.y), c = !0));
        break;
      case r.Command.Close:
        h = !1;
        break;
      default:
        throw new Error("Unknown vertex command: " + s.command.toString());
      }
    if (i[0].getCount() || i.shift(), this.isClosed && !t && i.length > 1) {
      var u;
      u = i[0];
      var d = i[i.length - 1];
      this._appendVertices(d, u), i.shift();
    }
    return c;
  };
  var s = function (e, t) {
      return e === t || !(!o.isEqualEps(e.x, t.x, 0.05) || !o.isEqualEps(e.y, t.y, 0.05));
    }, l = function (e) {
      var t = e.getCount(), i = new r();
      return e.rewindVertices(t - 1), e.readVertex(i), i.command === r.Command.Curve ? (e.rewindVertices(t - 2), e.readVertex(i)) : i.command === r.Command.Curve2 && (e.rewindVertices(t - 3), e.readVertex(i)), i;
    }, h = function (e) {
      var t = new r();
      return e.rewindVertices(0), e.readVertex(t), t;
    };
  a.prototype._distributeSides = function (e, t) {
    for (var i, r = [
          [],
          [],
          []
        ], o = e.length, a = t.length, A = o - 1; A >= 0; A--) {
      var c = e[A], p = h(c), u = l(c);
      i = !1;
      for (var d = a - 1; d >= 0; d--) {
        var g = t[d];
        if (g.getCount()) {
          var f = h(g), m = l(g), y = d === a - 1, _ = 0 === d;
          if (s(m, p)) {
            r[this._getSide(g, c, null, 2)].push(c), i = !0;
            break;
          }
          if (s(f, u)) {
            r[this._getSide(g, c, null, 1)].push(c), i = !0;
            break;
          }
          if (y && s(m, u)) {
            r[this._getSide(g, c, null, 3)].push(n.clone(c, !0)), i = !0;
            break;
          }
          if (_ && s(f, p)) {
            r[this._getSide(g, c, null, 0)].push(n.clone(c, !0)), i = !0;
            break;
          }
        }
      }
      if (!i)
        return !1;
    }
    return e.splice(0, e.length), e.push(r[0], r[1], r[2]), !0;
  }, a.prototype._fitVertices = function (e, t, i) {
    var r = [
        [],
        [],
        []
      ], o = e.length, a = t, A = a.length, c = i ? 1 : 2;
    if (1 == c && A > 3) {
      for (var p = n.clone(t[1]), u = 2; u < A - 1; u += 1) {
        var d = n.clone(t[u]);
        this._appendVertices(p, d);
      }
      a = [p];
      for (u = 2; u < A - 1; u += 2)
        a.push(n.clone(t[u]));
    } else
      c = 2;
    A = a.length;
    for (var g, f, m = 1 == c ? 0 : 1, y = 0; y < 2; ++y)
      for (u = m; u < A; u += c) {
        d = a[u];
        for (var _ = h(d), v = l(d), b = o - 1; b >= 0; b--) {
          var C = e[b];
          if (C) {
            var w = h(C), E = l(C), B = !1;
            if (s(_, w) && this._getSide(d, C, null, 0) == y) {
              if (B = !0, f = n.clone(C, !0), R = r[y][u]) {
                g = R.path;
                var x = h(g);
                if (!s(x, _))
                  return console.log("second source to same path?"), !1;
              } else
                g = n.clone(d);
              this._prependVertices(g, f), _ = E, r[y][u] = {
                startPoint: E,
                endPoint: l(g),
                path: g
              };
            } else if (s(_, E) && this._getSide(d, C, null, 1) == y) {
              if (B = !0, f = n.clone(C), R = r[y][u]) {
                g = R.path;
                x = h(g);
                if (!s(x, _))
                  return console.log("second source to same path?"), !1;
              } else
                g = n.clone(d);
              this._prependVertices(g, f), _ = w, r[y][u] = {
                startPoint: w,
                endPoint: l(g),
                path: g
              };
            } else if (s(v, w) && this._getSide(d, C, null, 2) == y) {
              if (B = !0, f = n.clone(C), R = r[y][u]) {
                g = R.path;
                var P = l(g);
                if (!s(P, v))
                  return console.log("second source to same path?"), !1;
              } else
                g = n.clone(d);
              this._appendVertices(g, f), v = E, r[y][u] = {
                startPoint: h(g),
                endPoint: E,
                path: g
              };
            } else if (s(v, E) && this._getSide(d, C, null, 3) == y) {
              if (B = !0, f = n.clone(C, !0), R = r[y][u]) {
                g = R.path;
                P = l(g);
                if (!s(P, v))
                  return console.log("second source to same path?"), !1;
              } else
                g = n.clone(d);
              this._appendVertices(g, f), v = w, r[y][u] = {
                startPoint: h(g),
                endPoint: w,
                path: g
              };
            }
            B && (e[b] = null);
          }
        }
      }
    for (u = 1; u < A; u += 2)
      r[2][u] || (r[0][u] || (r[0][u] = {
        startPoint: _,
        endPoint: v,
        path: n.clone(d)
      }), r[1][u] || (r[1][u] = {
        startPoint: _,
        endPoint: v,
        path: n.clone(d)
      }));
    for (y = 0; y < 3; y++) {
      var S = r[y].length;
      for (b = 0; b < S; b++)
        if (r[y][b])
          for (var T = b + 1; T < S; T++)
            if (r[y][T] && r[y][b]) {
              var I = r[y][b], F = r[y][T], R = null;
              if (I.path === F.path)
                continue;
              if (s(I.startPoint, F.startPoint)) {
                if (!(R = n.clone(F.path, !0)))
                  return !1;
                this._prependVertices(I.path, R), I.startPoint = F.endPoint, r[y][T] = null;
              } else if (s(I.endPoint, F.endPoint)) {
                if (!(R = n.clone(F.path, !0)))
                  return !1;
                this._appendVertices(I.path, R), I.endPoint = F.startPoint, r[y][T] = null;
              } else if (s(I.startPoint, F.endPoint)) {
                if (!(R = n.clone(F.path, !1)))
                  return !1;
                this._prependVertices(I.path, R), I.startPoint = F.startPoint, r[y][T] = null;
              } else if (s(I.endPoint, F.startPoint)) {
                if (!(R = n.clone(F.path, !1)))
                  return !1;
                this._appendVertices(I.path, R), I.endPoint = F.endPoint, r[y][T] = null;
              }
            }
    }
    e.splice(0, e.length);
    for (y = 0; y < 3; y++) {
      S = r[y].length;
      var D = [];
      for (b = 0; b < S; b++)
        r[y][b] && r[y][b].path && r[y][b].path.getCount() > 2 && (r[y][b].path.getCount(), D.push(this._closePath(r[y][b].path)));
      e.push(D);
    }
    for (u = e.length - 1; u >= 0; u--)
      for (b = e[u].length - 1; b >= 0; b--)
        this._correctMoveTo(e[u][b]);
    return !0;
  }, e.exports = a;
}
