/**
 * Module 264 - GVertexPolyBoolean
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

function (e, t, n) {
  var r = n(187), o = n(5), a = n(48), s = n(54), l = n(12), h = n(59), A = n(647), c = Math.sqrt(1e-10), p = Math.pow(10, 11);
  function u(e) {
    return Math.round(e * p) / p;
  }
  function d(e, t, i, n) {
    this.pip_check_policy = d.PIP_CHECK_ODDEVEN, this.common_segments_policy = t || d.AUTO, this._intersector = new r(!0, !0, i, i ? 0.125 : 4, n), this._lastUnprocessed = null, this._firstIntersect = null, this._initialized = !1, this._sourceHead = null, this.clipHead = null, this.originalSource = null, this.didNotClip = !1, this._useIntersector = i, this._blockIntersector = n;
  }
  d.PolyLineExtended = function () {
    this.x = 0, this.y = 0, this.nextCurve = null, this.prevCurve = null, this.isIsect = !1, this.next = null, this.prev = null, this.corresponding = null, this.visited = !1, this.prevInside = 0, this.nextInside = 0, this.isEntry = !1, this.isectPoly = null;
  }, d.PolyLineExtended.prototype.y = 0, d.PolyLineExtended.prototype.x = 0, d.PolyLineExtended.prototype.cy1 = void 0, d.PolyLineExtended.prototype.cx1 = void 0, d.PolyLineExtended.prototype.cy2 = void 0, d.PolyLineExtended.prototype.cx2 = void 0, d.PolyLineExtended.prototype.nextCurve = null, d.PolyLineExtended.prototype.prevCurve = null, d.PolyLineExtended.prototype.currCurve = null, d.PolyLineExtended.prototype.isIsect = !1, d.PolyLineExtended.prototype.next = null, d.PolyLineExtended.prototype.prev = null, d.PolyLineExtended.prototype.visited = !1, d.PolyLineExtended.prototype.corresponding = null, d.PolyLineExtended.prototype.prevInside = 0, d.PolyLineExtended.prototype.nextInside = 0, d.PolyLineExtended.prototype.isEntry = !1, d.PolyLineExtended.prototype.isectPoly = null, d.PolyLineExtended.prototype.isLast = !1, d.PolyLineExtended.prototype.index = 0, d.PolyLineExtended.prototype.tmpIdx = 0, d.PolyLineExtended.generateCorresponding = function (e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      if (i.polySeg0.corresponding = i.polySeg1, i.polySeg1.corresponding = i.polySeg0, null == i.polySeg1.corresponding)
        return null;
      if (null == i.polySeg0.corresponding)
        return null;
    }
  }, d.PolyLineExtended.fromVertexSource = function (e) {
    var t, i = null, n = i, r = new a(), s = t = new d.PolyLineExtended(), l = !0;
    for (e.rewindVertices(0); l && e.readVertex(r);)
      switch (r.command) {
      case a.Command.Move:
        i ? (i = r, n = r, r = new a()) : (i = n = r, r = new a());
        break;
      case a.Command.Line:
        n ? (s.x = n.x, s.y = n.y, s.next = new d.PolyLineExtended(), s.next.prev = s, s = s.next, n = r, r = new a()) : (n = r, r = new a());
        break;
      case a.Command.Curve:
        if (n) {
          var h = new o(n.x, n.y);
          n = r, r = new a(), e.readVertex(r) && (s.x = h.getX(), s.y = h.getY(), s.cx1 = r.x, s.cy1 = r.y, s.next = new d.PolyLineExtended(), s.next.prev = s, s = s.next, r = new a());
        } else
          n = r, r = new a();
        break;
      case a.Command.Curve2:
        if (n) {
          h = new o(n.x, n.y), new o(r.x, r.y);
          n = r, r = new a();
          var A = new a();
          e.readVertex(r) && e.readVertex(A) && (s.cx1 = r.x, s.cy1 = r.y, s.cx2 = A.x, s.cy2 = A.y, s.x = h.getX(), s.y = h.getY(), s.next = new d.PolyLineExtended(), s.next.prev = s, s = s.next, r = new a());
        } else
          n = r, r = new a();
        break;
      case a.Command.Close:
        i && n && (n.x != i.x || n.y != i.y) ? (s.x = n.x, s.y = n.y, s.next = t, t.prev = s) : ((s = s.prev).next = t, t.prev = s), n = null, l = !1;
        break;
      default:
        throw new Error("Unknown vertex command: " + vertex.command.toString());
      }
    return n && i && (s.x = n.x, s.y = n.y), t;
  }, d.PolyLineExtended.fromPolyLine = function (e, t, i) {
    for (var n, r, o, a = null, s = null, h = e.point; e.point;) {
      if (!e.next.point && l.isEqualEps(e.point.getX(), h.getX()) && l.isEqualEps(e.point.getY(), h.getY())) {
        null !== a && a === e && (s.nextCurve = n);
        break;
      }
      if (r = new d.PolyLineExtended(), n ? (r.prev = o, o.next = r) : n = r, r.x = u(e.point.getX()), r.y = u(e.point.getY()), null !== a && a === e && (s.nextCurve = r), e.nextCurve && (a = e.nextCurve, s = r, r.cx1 = e.cp1.getX(), r.cy1 = e.cp1.getY(), e.cp2 && (r.cx2 = e.cp2.getX(), r.cy2 = e.cp2.getY())), r.isLast = e.isLast, r.isIsect = e.isIsect, r.isIsect) {
        var A = !1;
        if (0 === i)
          for (var c = 0; c < t.length; c++) {
            if ((p = t[c]).polySeg0 === e) {
              p.polySeg0 = r, r.isectPoly = p, A = !0;
              break;
            }
          }
        else if (1 === i)
          for (c = 0; c < t.length; c++) {
            var p;
            if ((p = t[c]).polySeg1 === e) {
              p.polySeg1 = r, r.isectPoly = p, A = !0;
              break;
            }
          }
        if (!A)
          return null;
      }
      o = r, e = e.next;
    }
    return n ? (r.next = n, n.prev = r, null === a || a.point || (s.nextCurve = n), n) : null;
  }, d.PolyLineExtended.prototype.colinear = function (e, t, i, n, r, o) {
    var a = n || this.prev.currCurve || this.prev, s = r || this.nextCurve || this.next, A = o || this;
    function p(e, t, i, n) {
      var r = (t - i.y) * (n.x - i.x) - (e - i.x) * (n.y - i.y);
      if (l.isEqualEps(r, 0, 1e-10)) {
        var o = (n.x - i.x) * (e - i.x), a = (n.y - i.y) * (t - i.y);
        if (o >= 0 && a >= 0)
          return !0;
      }
      return !1;
    }
    function u(e, t, i, n) {
      var r = (t - i.y) * (n.x - i.x) - (e - i.x) * (n.y - i.y);
      return !!l.isEqualEps(r, 0, 1e-10);
    }
    function d(t, i, n, r) {
      if (4 === n.length) {
        var o = l.getCubicCurveAtT(n[0], n[3], n[1], n[2], 0.25), a = l.getCubicCurveAtT(r[0], r[3], r[1], r[2], 0.25), s = l.getCubicCurveAtT(n[0], n[3], n[1], n[2], 0.75), A = l.getCubicCurveAtT(r[0], r[3], r[1], r[2], 0.75);
        if (void 0 !== t.cx2) {
          if (h._hitTestCurve2(t.x, t.y, i.x, i.y, t.cx1, t.cy1, t.cx2, t.cy2, o, a, c, 0, {}) && h._hitTestCurve2(t.x, t.y, i.x, i.y, t.cx1, t.cy1, t.cx2, t.cy2, s, A, c, 0, {}) && h._hitTestCurve2(t.x, t.y, i.x, i.y, t.cx1, t.cy1, t.cx2, t.cy2, e.x, e.y, c, 0, {}))
            return !0;
        } else if (h._hitTestCurve(t.x, t.y, i.x, i.y, t.cx1, t.cy1, o, a, c, 0, {}) && h._hitTestCurve(t.x, t.y, i.x, i.y, t.cx1, t.cy1, s, A, c, 0, {}) && h._hitTestCurve(t.x, t.y, i.x, i.y, t.cx1, t.cy1, e.x, e.y, c, 0, {}))
          return !0;
      } else if (3 === n.length) {
        o = l.getCurveAtT(n[0], n[2], n[1], 0.5), a = l.getCurveAtT(r[0], r[2], r[1], 0.5);
        if (void 0 !== t.cx2) {
          if (h._hitTestCurve2(t.x, t.y, i.x, i.y, t.cx1, t.cy1, t.cx2, t.cy2, o, a, c, 0, {}) && h._hitTestCurve2(t.x, t.y, i.x, i.y, t.cx1, t.cy1, t.cx2, t.cy2, e.x, e.y, c, 0, {}))
            return !0;
        } else if (h._hitTestCurve(t.x, t.y, i.x, i.y, t.cx1, t.cy1, o, a, c, 0, {}) && h._hitTestCurve(t.x, t.y, i.x, i.y, t.cx1, t.cy1, e.x, e.y, c, 0, {}))
          return !0;
      }
    }
    if (t) {
      if (A.nextCurve) {
        if (d(A, s, t, i))
          return !0;
      } else if (i) {
        if (u(t[1], i[1], {
            x: t[0],
            y: i[0]
          }, {
            x: t[3],
            y: i[3]
          }) && u(t[2], i[2], {
            x: t[0],
            y: i[0]
          }, {
            x: t[3],
            y: i[3]
          }) && p(e.x, e.y, A, s))
          return !0;
      } else if (u(t[1], i[1], {
          x: t[0],
          y: i[0]
        }, {
          x: t[2],
          y: i[2]
        }) && p(e.x, e.y, A, s))
        return !0;
      if (a.currCurve) {
        if (d(a, A, t, i))
          return !0;
      } else if (i) {
        if (u(t[1], i[1], {
            x: t[0],
            y: i[0]
          }, {
            x: t[3],
            y: i[3]
          }) && u(t[2], i[2], {
            x: t[0],
            y: i[0]
          }, {
            x: t[3],
            y: i[3]
          }) && p(e.x, e.y, A, a))
          return !0;
      } else if (u(t[1], i[1], {
          x: t[0],
          y: i[0]
        }, {
          x: t[2],
          y: i[2]
        }) && p(e.x, e.y, A, a))
        return !0;
    } else {
      if (A.nextCurve) {
        if (void 0 !== A.cx1 && void 0 !== A.cx2) {
          if (u(A.cx1, A.cy1, A, s) && u(A.cx2, A.cy2, A, s) && p(e.x, e.y, A, s))
            return !0;
        } else if (u(A.cx1, A.cy1, A, s) && p(e.x, e.y, A, s))
          return !0;
      } else if (p(e.x, e.y, A, s))
        return !0;
      if (a.currCurve) {
        if (void 0 !== a.cx1 && void 0 !== a.cx2) {
          if (u(a.cx1, a.cy1, A, a) && u(a.cx2, a.cy2, A, a) && p(e.x, e.y, A, a))
            return !0;
        } else if (u(a.cx1, a.cy1, A, a) && p(e.x, e.y, A, a))
          return !0;
      } else if (p(e.x, e.y, A, a))
        return !0;
    }
    return !1;
  }, d.PolyLineExtended.prototype._lastCurvePt = function () {
    return this.currCurve ? this.currCurve.nextCurve.prev : null;
  }, d.PolyLineExtended.prototype._connect = function (e, t) {
    e.currCurve && (e.currCurve.prevCurve = this), t ? (e.currCurve && (e.currCurve.prevCurve = this.currCurve), e.prev = t, t.next = e, this.currCurve.nextCurve = e) : (e.currCurve && (e.currCurve.prevCurve = this), this.next = e, e.prev = this);
  }, d.PolyLineExtended.prototype._fixCycles = function (e) {
    var t = d.PIP_CHECK_ODDEVEN, i = this._lastInLoop(), n = i, r = !1;
    if (i.isLast) {
      var o = [], a = [], s = null, l = this._firstInLoop(), h = 0, A = 0, c = 0, p = 0;
      do {
        if (!i.isIsect && e.isInside(i, t)) {
          for (var u = i.prev.currCurve || i.prev, g = null; !u.isLast && u !== i;) {
            if (!u.isIsect && !e.isInside(u, t)) {
              g = u;
              break;
            }
            u = u.prev.currCurve || u.prev;
          }
          g ? o.push([
            l,
            i,
            g
          ]) : (r = !0, A++), p++;
        }
        i = (l = i.next)._lastInLoop(), h++;
      } while (i !== n);
      if (!(h <= 1) && p !== h) {
        if (r) {
          do {
            if (!i.isIsect && !e.isInside(i, t)) {
              for (u = i.prev.currCurve || i.prev, g = null; !u.isLast && u !== i;) {
                if (!u.isIsect && e.isInside(u, t)) {
                  g = u;
                  break;
                }
                u = u.prev.currCurve || u.prev;
              }
              g ? a.push([
                l,
                i,
                g
              ]) : c++;
            }
            i = (l = i.next)._lastInLoop();
          } while (i !== n);
          s = c < A ? a : o;
        } else
          s = o;
        for (var f = 0; f < s.length; f++) {
          var m = s[f];
          l = m[0], i = m[1];
          g = m[2];
          var y = i.nextCurve || i.next, _ = g.nextCurve || g.next, v = l.prev.currCurve || l.prev, b = i.prev.currCurve || i.prev, C = new d.PolyLineExtended();
          if (C.isLast = !0, C.x = _.x, C.y = _.y, g === b)
            0;
          else {
            0;
            var w = v._lastCurvePt(), E = b._lastCurvePt(), B = g._lastCurvePt();
            v._connect(_, w), b._connect(l, E), g._connect(C, B), C._connect(y);
          }
        }
      }
    }
  }, d.PolyLineExtended.prototype._stitch = function () {
    if (this.next === this)
      return this;
    var e, t = [], i = [], n = [], r = this._firstInLoop(), o = r;
    do {
      (e = o._lastInLoop()).x === o.x && e.y === o.y ? i.push([
        o,
        e
      ]) : t.push([
        o,
        e
      ]), o = e.next;
    } while (o !== r);
    var a, s, l = t.length;
    if (1 === l && 0 === i.length || 0 === l)
      return r;
    for (var h = 0; h < l; h++) {
      a = t[h];
      for (var A = h; A < l; A++) {
        if (s = t[(h + A + 1) % l], a[0].x === s[0].x && a[0].y === s[0].y) {
          a[0]._reverseLoop(), n.push([
            a[1],
            a[0]
          ]);
          break;
        }
        if (a[0].x === s[1].x && a[0].y === s[1].y) {
          a[0]._reverseLoop(), n.push([
            a[1],
            a[0]
          ]);
          break;
        }
        if (a[1].x === s[1].x && a[1].y === s[1].y || a[1].x === s[0].x && a[1].y === s[0].y) {
          n.push(a);
          break;
        }
      }
    }
    if (t.length !== n.length)
      return console.log("ERROR WHILE STITCHING"), this._firstInLoop();
    l = (n = n.concat(i)).length;
    var c = [];
    for (h = 0; h < l; h++)
      c.push(n[h][1]._lastCurvePt());
    for (h = 0; h < l; h++) {
      var p = n[h][1], u = n[(h + 1) % l][0];
      p.x === u.x && p.y === u.y && (p.isLast = !1), p._connect(u, c[h]);
    }
    return this._firstInLoop();
  }, d.PolyLineExtended.prototype._reverseLoop = function () {
    if (this.next != this) {
      var e, t, i, n, r, o, a, s, l, h = this._firstInLoop(), A = h.prev, c = this._lastInLoop(), p = c.next, u = h;
      do {
        if (e = u.next, u.next = u.prev, u.prev = e, o = u.cx1, a = u.cx2, s = u.cy1, l = u.cy2, void 0 !== t && void 0 !== i ? (u.cx1 = i, u.cx2 = t, u.cy1 = r, u.cy2 = n) : (u.cx1 = t, u.cx2 = void 0, u.cy1 = n, u.cy2 = void 0), t = o, i = a, n = s, r = l, (u = e) === h)
          break;
      } while (u !== p);
      A.next = c, c.prev = A, p.prev = h, h.next = p, h.isLast = !0, c.isLast = !1;
    }
  }, d.PolyLineExtended.prototype._firstInLoop = function () {
    var e = this.currCurve || this, t = e;
    do {
      if ((e = e.prevCurve || e.prev) === t) {
        t.isLast || (e = e.prevCurve || e.prev);
        break;
      }
    } while (!e.isLast);
    return e.nextCurve || e.next;
  }, d.PolyLineExtended.prototype._lastInLoop = function () {
    for (var e = this.currCurve || this, t = e; !e.isLast;)
      if ((e = e.nextCurve || e.next) === t) {
        e = e.prevCurve || e.prev;
        break;
      }
    return e;
  }, d.PolyLineExtended.prototype.prevInLoop = function () {
    var e = this.prev.currCurve || this.prev;
    if (e.isLast) {
      this._lastInLoop();
      return this._lastInLoop();
    }
    return e;
  }, d.PolyLineExtended.prototype.nextInLoop = function () {
    return this.isLast ? this._firstInLoop() : this.currCurve ? this.currCurve.nextCurve : this.next;
  }, d.PolyLineExtended.prototype.cleanForwards = function () {
    var e = this;
    do {
      if ((e = e.nextCurve || e.next).isLast)
        return !0;
    } while (!e.isIsect);
    return !1;
  }, d.PolyLineExtended.prototype.cleanBackwards = function () {
    var e = this;
    do {
      if ((e = e.prev.currCurve || e.prev).isLast)
        return !0;
    } while (!e.isIsect);
    return !1;
  }, d.PolyLineExtended.prototype.markIndices = function (e) {
    var t = this.currCurve || this, i = t, n = (e = e || 0) || 0;
    do {
      i.index = n, i.isLast && n++, i = i.nextCurve || i.next;
    } while (i !== t);
    return n === e && n++, n;
  }, d.PolyLineExtended.prototype.area = function () {
    var e = 0, t = this, i = t.next;
    do {
      t.isLast || (e += t.x * i.y, e -= t.y * i.x), i = (t = t.next).next;
    } while (t !== this);
    return (e /= 2) < 0 ? -e : e;
  }, d.PolyLineExtended.prototype._equalsEps = function (e, t, i) {
    if (!l.isEqualEps(this.x, e.x, i) || !l.isEqualEps(this.y, e.y, i))
      return !1;
    var n = this;
    if (t || (n = e, e = this), n.currCurve) {
      if (l.isEqualEps(n.x, n.next.x, i) && l.isEqualEps(n.y, n.next.y, i)) {
        var r = e.prev;
        if ((r.currCurve && r.currCurve.isLast || r.isLast) && (r = e._lastInLoop()).nextCurve && (r = r.nextCurve.prev), !r.currCurve)
          return !0;
        if (l.isEqualEps(e.x, r.x, i) && l.isEqualEps(e.y, r.y, i))
          return !0;
      }
      return !1;
    }
    return !0;
  }, d.PolyLineExtended._getPrevDifferentPoint = function (e) {
    var t, i = e, n = 2 * A.LARGE_EPS;
    do {
      t = i, i = i.prevInLoop(), n /= 2;
    } while (e !== i && !i.isIsect && t._equalsEps(i, !1, n));
    return i.isIsect && t._equalsEps(i, !1, n) ? null : i;
  }, d.PolyLineExtended._getNextDifferentPoint = function (e, t) {
    var i, n = e, r = 2 * A.LARGE_EPS;
    do {
      i = n, n = n.nextInLoop(), r /= 2;
    } while (e !== n && !n.isIsect && i._equalsEps(n, !0, r));
    return t[0] = i, n.isIsect && i._equalsEps(n, !1, r) ? null : n;
  }, d.PolyLineExtended._getClosestTime = function (e, t, i, n) {
    var r = Math.abs(e - i), o = Math.abs(t - n), a = Math.max(r, o);
    return Math.min(0.5, c / a);
  }, d.PolyLineExtended.disableBadIntersections = function (e, t, i, n, r) {
    var o, a = [
        [],
        []
      ];
    if (!e.length)
      return !1;
    for (o = 0; o < e.length; o++) {
      var s = e[o];
      a[0].push(s.polySeg0), a[1].push(s.polySeg1);
    }
    for (var h = n; h <= r; h++) {
      var A = a[h];
      for (o = 0; o < A.length; o++) {
        var c, p = {
            x: (k = a[h][o]).x,
            y: k.y
          }, g = {
            x: k.x,
            y: k.y
          }, f = null, m = null, y = null, _ = null, v = [k], b = d.PolyLineExtended._getPrevDifferentPoint(k), C = d.PolyLineExtended._getNextDifferentPoint(k, v), w = v[0];
        b && (b.currCurve ? void 0 === b.currCurve.cx2 ? (c = 0.5, f = new Float64Array(3), m = new Float64Array(3), l.getCtrlPtsQuadratic(b.currCurve.x, k.x, b.cx1, 0, c, f), p.x = u(f[2]), l.getCtrlPtsQuadratic(b.currCurve.y, k.y, b.cy1, 0, c, m), p.y = u(m[2])) : (c = 0.5, f = new Float64Array(4), m = new Float64Array(4), l.getCtrlPts(b.currCurve.x, k.x, b.cx1, b.cx2, 0, c, f), p.x = u(f[3]), l.getCtrlPts(b.currCurve.y, k.y, b.cy1, b.cy2, 0, c, m), p.y = u(m[3])) : (c = 0.5, p.x = u(k.x + c * (b.x - k.x)), p.y = u(k.y + c * (b.y - k.y)))), C && (w.currCurve ? (c = 0.5, void 0 === w.currCurve.cx2 ? (y = new Float64Array(3), _ = new Float64Array(3), l.getCtrlPtsQuadratic(w.currCurve.x, C.x, w.currCurve.cx1, 0, c, y), g.x = u(y[2]), l.getCtrlPtsQuadratic(w.currCurve.y, C.y, w.currCurve.cy1, 0, c, _), g.y = u(_[2])) : (y = new Float64Array(4), _ = new Float64Array(4), l.getCtrlPts(w.currCurve.x, C.x, w.currCurve.cx1, w.currCurve.cx2, 0, c, y), g.x = u(y[3]), l.getCtrlPts(w.currCurve.y, C.y, w.currCurve.cy1, w.currCurve.cy2, 0, c, _), g.y = u(_[3]))) : (c = 0.5, g.x = u(w.x + c * (C.x - w.x)), g.y = u(w.y + c * (C.y - w.y))));
        for (var E, B = a[(h + 1) % 2], x = [], P = 0; P < B.length; P++)
          (o === P || l.isEqualEps(B[P].x, k.x, 1e-10) && l.isEqualEps(B[P].y, k.y, 1e-10)) && x.push(B[P]);
        t >= 0 && (E = t, t = -10);
        for (P = 0; P < x.length; P++) {
          var S = x[P], T = d.PolyLineExtended._getPrevDifferentPoint(S), I = d.PolyLineExtended._getNextDifferentPoint(S, v), F = v[0];
          k.prevInside >= 0 && (T && b ? S.colinear(p, f, m, T, I, F) ? k.prevInside = t : 0 === k.prevInside && (k.prevInside = S.isInsideBezier(p, d.PIP_CHECK_ODDEVEN, !0) > 0 ? 1 : 0) : k.prevInside = t), k.nextInside >= 0 && (I && C ? S.colinear(g, y, _, T, I, F) ? k.nextInside = t : 0 === k.nextInside && (k.nextInside = S.isInsideBezier(g, d.PIP_CHECK_ODDEVEN, !0) > 0 ? 1 : 0) : k.nextInside = t);
        }
        -10 === t && (t = E, -10 === k.prevInside && (k.prevInside = E), -10 === k.nextInside && (k.nextInside = E));
      }
    }
    var R, D = [
        [],
        []
      ];
    for (h = n; h <= r; h++) {
      var k, G = (k = a[h][0])._firstInLoop(), Q = [];
      k = G;
      do {
        k.isIsect ? Q.push(k) : k.isLast && Q.length && (D[h].push(Q), Q = []), k = k.next;
      } while (k !== G);
      Q.length && D[h][D[h].length - 1] !== Q && D[h].push(Q);
    }
    for (h = n; h <= r; h++) {
      var M = D[h];
      if (t < 0)
        for (var N = 0; N < M.length; N++) {
          var U = M[N], V = U.length;
          for (o = 0; o < V && !((H = U[o]).nextInside >= 0); o++);
          if (H.nextInside < 0 && (o = 0, (H = U[0]).nextInside = t === d.AUTO ? d.OUTSIDE : d.INSIDE, U[1 % V].prevInside = H.nextInside), H.nextInside >= 0) {
            var O = H.nextInside;
            if (t === d.AUTO)
              for (P = 1; P < V; P++) {
                (H = U[(P + o) % V]).prevInside < 0 ? H.prevInside = O : O = H.prevInside, H.nextInside < 0 ? H.nextInside = O : O = H.nextInside;
              }
            else {
              var L = 0;
              for (P = 1; P < V; P++) {
                if (((H = U[(P + o) % V]).prevInside >= 0 || H.nextInside >= 0) && (L = 0), H.prevInside >= 0 && H.nextInside >= 0)
                  if (h > 0) {
                    var Y = H.corresponding.prevInside >= 0 && H.corresponding.prevInside === H.corresponding.nextInside;
                    Y !== (H.prevInside === H.nextInside) ? Y ? (H.prevInside = O, H.nextInside = O) : (H.prevInside = O, O ^= 1, H.nextInside = O) : O = H.nextInside;
                  } else
                    O = H.nextInside;
                else if (H.prevInside >= 0 && H.nextInside < 0)
                  h > 0 && H.corresponding.prevInside === H.corresponding.nextInside ? (H.prevInside = O, H.nextInside = O) : (H.prevInside = O, O ^= 1, H.nextInside = O);
                else if (H.prevInside < 0 && H.nextInside >= 0)
                  h > 0 && H.corresponding.prevInside === H.corresponding.nextInside ? (H.prevInside = O, H.nextInside = O) : (H.prevInside = 1 ^ H.nextInside, O !== H.prevInside && (H.prevInside = O), O = H.nextInside);
                else if (H.prevInside < 0 && H.nextInside < 0)
                  if (h > 0)
                    H.corresponding.prevInside === H.corresponding.nextInside ? H.prevInside = H.nextInside = O : (H.prevInside = O, O ^= 1, H.nextInside = O);
                  else {
                    var X = U[(P + o + 1) % V];
                    X !== H && X.prevInside < 0 && X.nextInside < 0 && 0 === L ? (H.prevInside = O, O ^= 1, H.nextInside = O) : X !== H && (X.prevInside >= 0 || X.nextInside >= 0) && L > 0 ? (H.prevInside = O, X.prevInside >= 0 ? (H.nextInside = X.prevInside, O = H.nextInside) : (O ^= 1, H.nextInside = O)) : X !== H && X.nextInside >= 0 && X.prevInside < 0 ? (H.prevInside = O, O === X.nextInside && (O ^= 1), H.nextInside = O) : H.prevInside = H.nextInside = O, L += 1;
                  }
              }
            }
            if ((H = U[o]).prevInside < 0 && (H.prevInside = O), O = H.prevInside, t !== d.AUTO_MAX_PASSTHROUGH)
              for (P = 1; P < V; P++) {
                (H = U[(o - P + V) % V]).nextInside != O && (H.nextInside = O), O = H.prevInside;
              }
          }
        }
      for (R = 0, V = 0, o = 0; o < M.length; o++)
        for (N = M[o], P = 0; P < N.length; P++) {
          var H;
          V++, (H = N[P]).prevInside === H.nextInside && (H.isIsect = !1, H.corresponding.isIsect = !1, R++);
        }
      if (R === V)
        return !1;
    }
    return !0;
  }, d.PolyLineExtended.generatePrevCurveCurrCurve = function (e) {
    for (var t = e, i = t.next, n = (i.next, t.nextCurve ? t : null), r = !!n; i !== t;) {
      if (i.nextCurve) {
        r = !0;
        break;
      }
      i = i.next;
    }
    if (r) {
      i = t;
      var o = null, a = null;
      do {
        if (i.nextCurve) {
          o || (o = i), n = i.nextCurve, a = i;
          do {
            if (i.currCurve = a, (i = i.next) === t && i !== n)
              return null;
          } while (i !== n);
        } else
          i = i.next;
      } while (i !== t);
      if (!o)
        return t;
      i = o.next;
      n = o;
      do {
        i.nextCurve ? (i.prevCurve = n, n = i) : i.currCurve || (n = i), i = i.nextCurve || i.next;
      } while (i !== o);
      o.prevCurve = n;
    }
    return t;
  }, d.PolyLineExtended.removeDuplicates = function (e, t) {
    for (var i = e, n = i.next, r = n.next, o = i.nextCurve ? i : null; n !== i;) {
      if (!n.isLast && l.isEqualEps(n.x, r.x, 1e-10) && l.isEqualEps(n.y, r.y, 1e-10)) {
        if (o && o.nextCurve === n && (o.nextCurve = r), n.nextCurve && n.nextCurve !== r && !r.nextCurve && (r.nextCurve = n.nextCurve, r.cx1 = n.cx1, r.cy1 = n.cy1, r.cx2 = n.cx2, r.cy2 = n.cy2, !0), n.isIsect)
          if (r.isIsect = !0, r.corresponding = n.corresponding, r.isectPoly = n.isectPoly, 0 == t) {
            if (n.isectPoly.polySeg0 !== n)
              return null;
            r.isectPoly.polySeg0 = r;
          } else {
            if (n.isectPoly.polySeg1 !== n)
              return null;
            r.isectPoly.polySeg1 = r;
          }
        var a = n.prev;
        a.next = r, r.prev = a, n = r;
      } else
        n.nextCurve && (o = n, !0), n = n.next;
      r = n.next;
    }
    if (l.isEqualEps(i.x, r.x, 1e-10) && l.isEqualEps(i.y, r.y, 1e-10)) {
      if (o && o.nextCurve === r && (o.nextCurve = null, o.cx1 = o.cx2 = o.cy1 = o.cy2 = void 0), r.nextCurve && r.nextCurve !== i && (i.nextCurve = r.nextCurve, i.cx1 = r.cx1, i.cy1 = r.cy1, i.cx2 = r.cx2, i.cy2 = r.cy2), r.isIsect)
        if (i.isIsect = !0, i.corresponding = r.corresponding, i.isectPoly = r.isectPoly, 0 == t) {
          if (r.isectPoly.polySeg0 !== r)
            return null;
          n.isectPoly.polySeg0 = i;
        } else {
          if (r.isectPoly.polySeg1 !== r)
            return null;
          i.isectPoly.polySeg1 = i;
        }
      var s = r.next;
      i.next = s, s.prev = i;
    }
    return i;
  }, d.PolyLineExtended.prototype.getPoints = function (e) {
    var t = new s();
    t.addVertex(a.Command.Move, this.x, this.y);
    var i = this;
    if (e) {
      var n = i = i.currCurve || i;
      do {
        void 0 !== i.cx1 && void 0 !== i.cx2 ? (t.addVertex(a.Command.Curve2, i.nextCurve.x, i.nextCurve.y), t.addVertex(a.Command.Curve2, i.cx1, i.cy1), t.addVertex(a.Command.Curve2, i.cx2, i.cy2), i = i.nextCurve) : void 0 !== i.cx1 ? (t.addVertex(a.Command.Curve, i.nextCurve.x, i.nextCurve.y), t.addVertex(a.Command.Curve, i.cx1, i.cy1), i = i.nextCurve) : void 0 !== i.cx2 ? (t.addVertex(a.Command.Curve, i.nextCurve.x, i.nextCurve.y), t.addVertex(a.Command.Curve, i.cx2, i.cy2), i = i.nextCurve) : i.isLast ? (i = i.next, t.addVertex(a.Command.Move, i.x, i.y)) : (i = i.next, t.addVertex(a.Command.Line, i.x, i.y));
      } while (i && i !== n);
    } else
      do {
        void 0 !== i.cx1 && void 0 !== i.cx2 ? (t.addVertex(a.Command.Curve2, i.next.x, i.next.y), t.addVertex(a.Command.Curve2, i.cx1, i.cy1), t.addVertex(a.Command.Curve2, i.cx2, i.cy2), i = i.next) : void 0 !== i.cx1 ? (t.addVertex(a.Command.Curve, i.next.x, i.next.y), t.addVertex(a.Command.Curve, i.cx1, i.cy1), i = i.next) : void 0 !== i.cx2 ? (t.addVertex(a.Command.Curve, i.next.x, i.next.y), t.addVertex(a.Command.Curve, i.cx2, i.cy2), i = i.next) : (i = i.next) && (i.prev.isLast ? t.addVertex(a.Command.Move, i.x, i.y) : t.addVertex(a.Command.Line, i.x, i.y));
      } while (i && i !== this);
    return i && t.addVertex(a.Command.Close, 0, 0), t;
  }, d.PolyLineExtended.prototype.getSimplePolyLines = function () {
    var e, t, i, n, r = new d.PolyLineExtended(), o = [], a = this;
    do {
      a.nextCurve ? (e = a.cx1, i = a.cx2, t = a.cy1, n = a.cy2) : e = i = t = n = void 0;
      var s = r.appendPoint(a.x, a.y, e, t, i, n);
      s.index = a.index, s.corresponding = a.corresponding, s.prevInside = a.prevInside, s.nextInside = a.nextInside, a.isLast && (o.push(r), r = new d.PolyLineExtended()), a = a.nextCurve || a.next || this;
    } while (a !== this);
    return r.next && !o.length && o.push(r), o;
  }, d.PolyLineExtended.prototype.appendPoint = function (e, t, i, n, r, o) {
    if (null == this.prev)
      return this.x = e, this.y = t, void 0 !== i && (this.cx1 = i, this.cy1 = n), void 0 !== r && (this.cx2 = r, this.cy2 = o), this.next = this, this.prev = this, this;
    var a = this.prev, s = new d.PolyLineExtended();
    return s.x = e, s.y = t, void 0 !== i && (s.cx1 = i, s.cy1 = n), void 0 !== r && (s.cx2 = r, s.cy2 = o), this.prev = s, s.next = this, s.prev = a, a.next = s, s;
  }, d.PolyLineExtended.prototype.visit = function () {
    this.visited = !0, null === this.corresponding || this.corresponding.visited || this.corresponding.visit();
  }, d.PolyLineExtended.prototype.isInside = function (e, t) {
    return t === d.PIP_CHECK_ODDEVEN ? this.getOddEven(e) : this.getWinding(e);
  }, d.PolyLineExtended.prototype.isInsideBezier = function (e, t, i) {
    var n = 0, r = this, o = r, a = r.next, s = (e.x, e.y);
    t = void 0 === t ? d.PIP_CHECK_WINDING : d.PIP_CHECK_ODDEVEN;
    var l = !1;
    do {
      if (void 0 !== r.cx1) {
        l = !0;
        break;
      }
      a = (r = r.next).next || o;
    } while (r !== o);
    if (l)
      return this._isInsideBezier(e, t, i);
    if (i && t === d.PIP_CHECK_ODDEVEN)
      return this.getOddEven(e);
    do {
      r.y <= s ? a.y > s && this.isLeft(r, a, e) > 0 && ++n : a.y <= s && this.isLeft(r, a, e) < 0 && --n, r = r.next, a = i && r.isLast ? r._firstInLoop() : r.next || o;
    } while (r !== o);
    return t === d.PIP_CHECK_ODDEVEN ? Math.abs(n) % 2 : Math.abs(n);
  }, d.PolyLineExtended.prototype._isInsideBezier = function (e, t, i) {
    var n = this, r = n, o = n.next, a = (e.x, e.y, 0);
    i && r.isLast && (o = r._firstInLoop());
    do {
      var s, l, h, A;
      if (void 0 === n.cx1 ? (s = 0.5 * (n.x + o.x), l = 0.5 * (n.y + o.y)) : (s = n.cx1, l = n.cy1), void 0 === n.cx2) {
        var c = s, p = l;
        s = n.x + 2 / 3 * (c - n.x), l = n.y + 2 / 3 * (p - n.y), h = o.x + 2 / 3 * (c - o.x), A = o.y + 2 / 3 * (p - o.y);
      } else
        h = n.cx2, A = n.cy2;
      a += this._windingAngle(e, n.x, n.y, s, l, h, A, o.x, o.y), n = n.next, o = i && n.isLast ? n._firstInLoop() : n.next || r;
    } while (n !== r);
    return t === d.PIP_CHECK_ODDEVEN ? Math.floor(Math.abs(a) / (2 * Math.PI - 1e-10)) % 2 : Math.abs(a) > 2 * Math.PI - 1e-10 ? 1 : 0;
  }, d.PolyLineExtended.prototype._windingAngle = function (e, t, i, n, r, a, s, h, A) {
    var c = l.ptSqrDist(e.x, e.y, t, i);
    if (c < 1e-10 * 1e-10)
      return 0;
    var p = l.ptSqrDist(e.x, e.y, h, A);
    if (p < 1e-10 * 1e-10)
      return 0;
    var u = l.ptDist(t, i, n, r), d = l.ptDist(n, r, a, s), g = l.ptDist(a, s, h, A);
    if (c = Math.sqrt(c), p = Math.sqrt(p), u + d + g > Math.max(c, p)) {
      var f = new Float64Array(4), m = new Float64Array(4), y = new Float64Array(4), _ = new Float64Array(4);
      return l.getCtrlPtsCasteljau(t, n, a, h, 0.5, null, f, y), l.getCtrlPtsCasteljau(i, r, s, A, 0.5, null, m, _), this._windingAngle(e, f[0], m[0], f[1], m[1], f[2], m[2], f[3], m[3]) + this._windingAngle(e, y[0], _[0], y[1], _[1], y[2], _[2], y[3], _[3]);
    }
    var v = new o(e.x, e.y);
    return l.getTurnAngle(v, new o(t, i), v, new o(h, A));
  }, d.PolyLineExtended.prototype.hasPoint = function (e) {
    var t = this, i = (t.next, e.x), n = e.y;
    this.isLast && this._firstInLoop();
    do {
      if (l.sqrSegmentDist(t.x, t.y, t.next.x, t.next.y, i, n) < 1e-10 * 1e-10)
        return !0;
      (t = t.next).isLast ? t._firstInLoop() : t.next || this;
    } while (t !== this);
    return !1;
  }, d.PolyLineExtended.prototype.getOddEven = function (e) {
    var t = this, i = !1, n = t, r = t.next, o = e.x, a = e.y;
    n.isLast && (r = n._firstInLoop());
    do {
      (t.y < a && r.y >= a || r.y < a && t.y >= a) && (t.x <= o || r.x <= o) && (i ^= t.x + (a - t.y) / (r.y - t.y) * (r.x - t.x) < o), r = (t = t.next).isLast ? t._firstInLoop() : t.next || n;
    } while (t !== n);
    return i ? 1 : 0;
  }, d.PolyLineExtended.prototype.isLeft = function (e, t, i) {
    return (t.x - e.x) * (i.y - e.y) - (i.x - e.x) * (t.y - e.y);
  }, d.PolyLineExtended.prototype.getWinding = function (e) {
    var t = 0, i = this, n = i, r = i.next, o = (e.x, e.y);
    n.isLast && (r = n._firstInLoop());
    do {
      i.y <= o ? r.y > o && this.isLeft(i, r, e) > 0 && ++t : r.y <= o && this.isLeft(i, r, e) < 0 && --t, r = (i = i.next).isLast ? i._firstInLoop() : i.next || n;
    } while (i !== n);
    return Math.abs(t);
  }, d.joinVertices = function (e) {
    var t = new a(), n = 0, r = null, o = null, l = null;
    for (n = 0; n < e.length; n++) {
      var h = e[n];
      for (h.rewindVertices(0); h.readVertex(t);)
        switch (t.command) {
        case a.Command.Move:
          o ? i > 0 && ((o = new a()).x = t.x, o.y = t.y, r.addVertex(-1, t.x, t.y)) : ((o = new a()).x = t.x, o.y = t.y, (r = new s()).addVertex(a.Command.Move, t.x, t.y));
          break;
        case a.Command.Line:
          (l = new a()).x = t.x, l.y = t.y, r.addVertex(a.Command.Line, t.x, t.y);
          break;
        case a.Command.Curve:
          (l = new a()).x = t.x, l.y = t.y, r.addVertex(a.Command.Curve, t.x, t.y), h.readVertex(t), r.addVertex(a.Command.Curve, t.x, t.y);
          break;
        case a.Command.Curve2:
          (l = new a()).x = t.x, l.y = t.y, r.addVertex(a.Command.Curve2, t.x, t.y), h.readVertex(t), r.addVertex(a.Command.Curve2, t.x, t.y), h.readVertex(t), r.addVertex(a.Command.Curve2, t.x, t.y);
          break;
        case a.Command.Close:
          n < e.length - 1 && l.x !== o.x && l.y !== o.y && r.addVertex(a.Command.Line, o.x, o.y);
        }
    }
  }, d.OR = 1, d.XOR = 2, d.AND = 3, d.SUB = 4, d.PIP_CHECK_ODDEVEN = 1, d.PIP_CHECK_WINDING = 0, d.AUTO_MAX_PASSTHROUGH = -2, d.AUTO = -1, d.OUTSIDE = 0, d.INSIDE = 1, d.prototype.common_segments_policy = null, d.prototype.pip_check_policy = null, d.prototype._lastUnprocessed = null, d.prototype._firstIntersect = null, d.prototype._initialized = !1, d.prototype._useIntersector = !1, d.prototype.sourceHead = null, d.prototype.clipHead = null, d.prototype.originalSource = null, d.prototype.didNotClip = !1, d.prototype._numIntersections = !1, d.prototype._intersectsArray = [], d.prototype.hassHoles = !1, d.prototype.initializeSources = function (e, t) {
    var i = this._intersector.intersect(e, t);
    this.originalSource = e;
    var n = this._intersector.getFirstPoly(), r = this._intersector.getSecondPoly(), o = n.markIndices();
    r.markIndices(o), i.sort(function (e, t) {
      return e.pt.getX() - t.pt.getX() || e.pt.getY() - t.pt.getY();
    });
    for (var a = i.length - 1; a > 0; a--) {
      var s = i[a].pt, h = i[a - 1].pt;
      if (s === h || l.isEqualEps(s.getX(), h.getX(), 1e-10) && l.isEqualEps(s.getY(), h.getY(), 1e-10)) {
        var A = i[a].polySeg0.index, c = i[a].polySeg1.index, p = i[a - 1].polySeg0.index, u = i[a - 1].polySeg1.index;
        A === p && c === u && i.splice(a, 1);
      }
    }
    if (this._intersector.addIntersectionsToPolygon(i), this.sourceHead = d.PolyLineExtended.fromPolyLine(n, i, 0), this.clipHead = d.PolyLineExtended.fromPolyLine(r, i, 1), !this.sourceHead || !this.clipHead)
      return !1;
    if (this.sourceHead = d.PolyLineExtended.generatePrevCurveCurrCurve(this.sourceHead), this.clipHead = d.PolyLineExtended.generatePrevCurveCurrCurve(this.clipHead), !this.sourceHead || !this.clipHead)
      return !1;
    if (this.sourceHead._fixCycles(this.clipHead), this.clipHead._fixCycles(this.sourceHead), d.PolyLineExtended.generateCorresponding(i), !this.checkSanity(this.sourceHead))
      return !1;
    if (!this.checkSanity(this.clipHead))
      return !1;
    if (!this.checkSanity(null, i))
      return !1;
    if (d.PolyLineExtended.disableBadIntersections(i, this.common_segments_policy, this.pip_check_policy, 0, 1)) {
      this._numIntersections = 0;
      for (a = 0; a < i.length; a++)
        i[a].polySeg0.isIsect && this._numIntersections++;
    }
    return !(!this.clipHead || !this.sourceHead) && (this._intersectsArray = this.getIntersectionArray(this.sourceHead, this.clipHead), this._initialized = !0, !0);
  }, d.prototype.numIntersections = function () {
    return this._numIntersections;
  }, d.prototype.checkSanity = function (e, t, i) {
    var n = !0;
    if (t)
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        if (!(o.polySeg0 && o.polySeg0 instanceof d.PolyLineExtended)) {
          0, n = !1;
          break;
        }
        if (!(o.polySeg1 && o.polySeg1 instanceof d.PolyLineExtended)) {
          0, n = !1;
          break;
        }
        if (o.polySeg1.next.prev !== o.polySeg1) {
          0, n = !1;
          break;
        }
        if (o.polySeg0.next.prev !== o.polySeg0) {
          0, n = !1;
          break;
        }
        if (o.isLast) {
          0, n = !1;
          break;
        }
        if (o.polySeg0.currCurve && !o.polySeg0.nextCurve) {
          0, n = !1;
          break;
        }
        if (o.polySeg1.currCurve && !o.polySeg1.nextCurve) {
          0, n = !1;
          break;
        }
      }
    if (e) {
      var a = e, s = 0, l = e.nextCurve || e.next;
      if (a.currCurve && a.currCurve !== a)
        n = !1;
      else {
        do {
          if (e.next.prev !== e) {
            0, n = !1;
            break;
          }
          if (e.prev.next !== e) {
            0, n = !1;
            break;
          }
          if (e.nextCurve && e.nextCurve.next.prev !== e.nextCurve) {
            0, n = !1;
            break;
          }
          if (e.nextCurve && (Number.isNaN(e.cx1) || Number.isNaN(e.cx2) || Number.isNaN(e.cy1) || Number.isNaN(e.cy2))) {
            0, n = !1;
            break;
          }
          if (Number.isNaN(e.x) || Number.isNaN(e.y)) {
            0, n = !1;
            break;
          }
          if ((void 0 !== e.cx1 || void 0 !== e.cy1) && !e.nextCurve) {
            0, n = !1;
            break;
          }
          if ((void 0 === e.cx1 || void 0 === e.cy1) && e.nextCurve) {
            0, n = !1;
            break;
          }
          if (e.currCurve && (!e.currCurve.nextCurve || !e.currCurve.prevCurve)) {
            0, n = !1;
            break;
          }
          if (e.nextCurve && e.nextCurve.prev.next !== e.nextCurve) {
            0, n = !1;
            break;
          }
          if (e.prevCurve && e.prevCurve.next.prev !== e.prevCurve) {
            0, n = !1;
            break;
          }
          if (e.prevCurve && e.prevCurve.prev.next !== e.prevCurve) {
            0, n = !1;
            break;
          }
          i && e.isIsect && s++, e = e.next, l !== a && (l = l.nextCurve || l.next);
        } while (e !== a);
        i && s !== t.length && (n = !1), l !== a && n && (n = !1);
      }
    }
    return n;
  }, d.prototype.getIntersectionArray = function (e, t) {
    var i = [], n = e.markIndices();
    t.markIndices(n);
    var r, o = e;
    do {
      if (o.isIsect) {
        r = o.corresponding;
        var a = o.currCurve ? o.currCurve.index : o.index, s = r.currCurve ? r.currCurve.index : r.index, l = i[a];
        l || (l = i[a] = []);
        var h = i[s];
        h || (h = i[s] = []), l.indexOf(s) < 0 && l.push(s), h.indexOf(a) < 0 && h.push(a);
      }
      o = o.next;
    } while (o !== e);
    return i;
  }, d.prototype.getFirstIntersect = function (e) {
    var t = this._firstIntersect || e;
    do {
      if (t.isIsect && !t.visited)
        break;
      t = t.next;
    } while (t !== e);
    return this._firstIntersect = t, t;
  }, d.prototype.hasUnprocessed = function (e) {
    var t = this._lastUnprocessed || e;
    do {
      if (t.isIsect && !t.visited)
        return this._lastUnprocessed = t, !0;
      t = t.next;
    } while (t !== e);
    return this._lastUnprocessed = null, !1;
  }, d.prototype.unvisit = function (e) {
    var t = e;
    do {
      t.isIsect && t.visited && (t.visited = !1, t.corresponding && (t.corresponding.visited = !1)), t = t.next;
    } while (t !== e);
    this._lastUnprocessed = null;
  }, d.prototype.union = function () {
    return this.clip(!1, !1);
  }, d.prototype.intersection = function () {
    return this.clip(!0, !0);
  }, d.prototype.diff = function () {
    return this.clip(!1, !0);
  }, d.prototype.xor = function () {
    var e = this.union();
    if (!e)
      return null;
    this.unvisit(this.sourceHead), this.unvisit(this.clipHead);
    var t = this.intersection();
    if (!t)
      return null;
    var i = new d(this.pip_check_policy, this.common_segments_policy, this._useIntersector, this._blockIntersector), n = e.length > 1 ? s.mergeVertexSources(e) : e[0], r = t.length > 1 ? s.mergeVertexSources(t, null) : t[0];
    return n ? r ? i.initializeSources(n, r) ? i.diff() : null : [n] : [];
  }, d.prototype.clipOp = function (e) {
    switch (e) {
    case d.AND:
      return this.intersection();
    case d.XOR:
      return this.xor();
    case d.OR:
      return this.union();
    case d.SUB:
      return this.diff();
    }
    return [this.originalSource];
  }, d.prototype.determineInside = function (e, t, i, n, r) {
    var o = e;
    do {
      if (!e.corresponding && !t.hasPoint(e))
        return i[0] = e, t.isInside(e, this.pip_check_policy) > 0 ? 1 : 0;
      e = e.nextCurve || e.next;
    } while (e !== o);
    if (r)
      do {
        if (e.corresponding)
          return i[0] = e, e.prevInside ? 1 : 0;
        e = e.nextCurve || e.next;
      } while (e !== o);
    return i[0] = o, -1;
  }, d.prototype.clip = function (e, t) {
    if (!this._initialized)
      return null;
    var i = this.sourceHead, n = this.clipHead, r = !e && t, o = !e && !t, a = i.getSimplePolyLines(), l = n.getSimplePolyLines(), h = this._mergeNonIntersecting(a, l, o, r), A = [], c = [];
    h.children.forEach(function (e) {
      e.visited || h.traverse(e, function (e) {
        return A.push(e.item.index), !1;
      });
    });
    for (var p = a.length + l.length, u = 0; u < p; u++)
      A.indexOf(u) < 0 && c.push(u);
    this._lastUnprocessed = null, this._firstIntersect = null, this.didNotClip = !1;
    for (var g, f, m, y, _, v, b, C = [], w = [], E = !0; this.hasUnprocessed(i);) {
      var B = this.getFirstIntersect(i), x = new d.PolyLineExtended();
      do {
        if (B.visit(), B.isIsect && (b = E ? e ? !B.prevInside : !B.nextInside : t ? !B.prevInside : !B.nextInside), b)
          do {
            if (B.nextCurve ? (g = B.cx1, m = B.cx2, f = B.cy1, y = B.cy2) : g = m = f = y = void 0, c.indexOf(B.index) < 0 && x.appendPoint(B.x, B.y, g, f, m, y), w.indexOf(B.index) < 0 && w.push(B.index), B.isLast) {
              if (B.visited) {
                console.warn("loop had no intersections???");
                break;
              }
              B.visited = !0, B = B._firstInLoop();
            } else
              B = B.nextCurve || B.next;
          } while (!B.isIsect);
        else
          do {
            if (B.prev.currCurve)
              _ = B.x, v = B.y, g = (B = B.prev.currCurve).cx1, m = B.cx2, f = B.cy1, y = B.cy2;
            else if (_ = B.x, v = B.y, g = m = f = y = void 0, B.prev.isLast) {
              if ((B = B._lastInLoop()).visited) {
                console.warn("Loop had no intersections???");
                break;
              }
              B.visited = !0;
            } else
              B = B.prev;
            c.indexOf(B.index) < 0 && x.appendPoint(_, v, m, y, g, f), w.indexOf(B.index) < 0 && w.push(B.index);
          } while (!B.isIsect);
        if (E = !E, !(B = B.corresponding)) {
          0;
          break;
        }
      } while (!B.visited);
      C.push(x);
    }
    return 0 === C.length && (this.didNotClip = !0), this.hassHoles = a.concat(l).some(function (e) {
      return e.isHole;
    }), (C = C.concat(a.filter(function (e) {
      return w.indexOf(e.index) < 0 && c.indexOf(e.index) < 0;
    })).concat(l.filter(function (e) {
      return w.indexOf(e.index) < 0 && c.indexOf(e.index) < 0;
    })).map(function (e) {
      return e.getPoints(!1);
    })).length > 1 && (C = [s.mergeVertexSources(C)]), C;
  }, d.prototype._mergeNonIntersecting = function (e, t, i, n) {
    var r = this._getContainment(e), o = this._getContainment(t), a = function (e, t, i) {
        for (var n = !1, r = 0; r < t.length; r++)
          t[r].indexOf(i) >= 0 && (n = !n);
        return n;
      }, s = this._intersectsArray;
    e.forEach(function (e) {
      e.fromSource = 1, e.isHole = a(0, r, e), e.isIntersecting = s[e.index] || null;
    }), t.forEach(function (e) {
      e.fromSource = 0, e.isHole = a(0, o, e), e.isIntersecting = s[e.index] || null, n && (e.isHole = !e.isHole);
    });
    for (var l = e.concat(t), h = new Array(l.length), A = 0; A < l.length; A++) {
      h[A] = new Array(l.length);
      for (var c = 0; c < l.length; c++)
        A < e.length && c < e.length ? r[e[c].tmpIdx].indexOf(e[A]) >= 0 ? h[A][c] = !0 : h[A][c] = !1 : A >= e.length && c >= e.length ? o[t[c - e.length].tmpIdx].indexOf(t[A - e.length]) >= 0 ? h[A][c] = !0 : h[A][c] = !1 : h[A][c] = void 0;
    }
    var p = this._getContainment(l, h), u = {
        children: [],
        parents: [],
        item: null,
        traverse: null,
        unvisit: null,
        isRoot: !0
      }, d = l.slice(), g = [];
    d.forEach(function (e) {
      g.push({
        parents: [],
        item: e,
        isHole: e.isHole,
        fromSource: e.fromSource,
        children: [],
        visited: !1,
        isIntersecting: e.isIntersecting
      });
    }), g.forEach(function (e) {
      var t = function (e) {
        for (var t = [], i = Number.POSITIVE_INFINITY, n = 0; n < p.length; n++) {
          var r = p[n];
          r.indexOf(e) >= 0 && (i > r.length ? (i = r.length, t = [n]) : i === r.length && t.push(n));
        }
        if (0 === t.length)
          return t;
        var o = [];
        for (n = 0; n < l.length; n++)
          t.indexOf(l[n].tmpIdx) >= 0 && o.push(l[n]);
        return o;
      }(e.item);
      (t = t.map(function (e) {
        var t;
        return g.some(function (i) {
          return i.item === e && (t = i, !0);
        }), t;
      })).length ? e.parents = t : (e.parents = [u], u.children.push(e));
    }), g.forEach(function (e) {
      g.forEach(function (t) {
        t !== e && t.parents.indexOf(e) >= 0 && e.children.push(t);
      });
    });
    var f = function (e, t, i) {
        if (i) {
          if (i > 512)
            return !1;
        } else
          i = 1;
        e.children || (e.children = []);
        for (var n = 0; n < e.children.length; n++) {
          var r = e.children[n];
          if (!r.visited && f(r, t, ++i))
            return !0;
        }
        return e.visited = !0, !(!e.item || !t(e)) && (function (e) {
          var t = e.parents;
          t.length && t.forEach(function (t) {
            t.children.splice(t.children.indexOf(e), 1);
          }), e.children.forEach(function (i) {
            i.parents.splice(i.parents.indexOf(e), 1), t.forEach(function (e) {
              i.parents.indexOf(e) < 0 && i.parents.push(e), e.children.push(i);
            });
          }), e.children = null, e.parent = null;
        }(e), !0);
      }, m = function () {
        g.forEach(function (e) {
          e.visited = !1;
        });
      }, y = null;
    for (y = i ? function (e) {
        if (e.fromSource < 0)
          return !1;
        if (null !== e.isIntersecting)
          return !1;
        if (e.isHole)
          for (var t = 0; t < e.children.length; t++)
            if (e.children[t].isHole)
              return e.children[t].fromSource = -1, !0;
        return !(e.isHole || !e.parents.some(function (e) {
          return e.item && !e.isHole;
        })) || !(!e.isHole || !e.parents.some(function (t) {
          return t.item && !t.isHole && e.fromSource !== t.fromSource;
        })) || !(!e.isHole || !e.parents.some(function (e) {
          return !e.item;
        }));
      } : n ? function (e) {
        if (e.fromSource < 0)
          return !1;
        if (null !== e.isIntersecting)
          return !1;
        var t;
        if (e.parents.some(function (i) {
            return !(!i.isHole || e.fromSource === i.fromSource) && (t = i.fromSource, !0);
          })) {
          for (var i = 0; i < e.children.length; i++)
            e.children[i].fromSource === t && (e.children[i].fromSource = -1);
          return !0;
        }
        return !(!e.isHole || !e.parents.some(function (e) {
          return !e.item;
        }));
      } : function (e) {
        if (!(e.fromSource < 0)) {
          if (null !== e.isIntersecting)
            return !1;
          if (!e.isHole)
            for (var t = 0; t < e.children.length; t++)
              if (!e.children[t].isHole && e.children[t].fromSource !== e.fromSource)
                return e.children[t].fromSource = -1, !0;
          return !!e.parents.some(function (t) {
            return t.isRoot || t.isHole && e.fromSource !== t.fromSource;
          }) || !(!e.isHole || !e.parents.some(function (e) {
            return !e.item;
          }));
        }
      }; f(u, y);)
      m();
    return m(), u.unvisit = m, u.traverse = f, u;
  }, d.prototype._getContainment = function (e, t) {
    function i(e, t) {
      var i = t;
      if (!t.corresponding) {
        var n = t, r = t, o = function (e, t, i, n, r) {
            return l.isEqualEps(e[t], e[i], 1e-10) && l.isEqualEps(e[n], e[r], 1e-10);
          }, a = function (e, t) {
            return !!(function (e, t) {
              return l.isEqualEps(e.x, t.x, 1e-10) && l.isEqualEps(e.y, t.y, 1e-10);
            }(e, t) && (void 0 === e.cx1 && void 0 === e.cy1 || o(e, "x", "cx1", "y", "cy1")) && (void 0 === e.cx2 && void 0 === e.cy2 || o(e, "x", "cx2", "y", "cy2"))) && (!t.corresponding || t);
          }, s = n;
        do {
          if (!a(s, n = n.next))
            break;
          if (n.corresponding) {
            i = n;
            break;
          }
          s = n;
        } while (n && n !== r);
        if (!i.corresponding) {
          s = n = t;
          do {
            if (!a(n = n.prev, s))
              break;
            if (n.corresponding) {
              i = n;
              break;
            }
            s = n;
          } while (n && n !== r);
        }
      }
      return i.corresponding ? i.prevInside !== i.nextInside ? e.isInsideBezier(t) : i.prevInside : e.isInsideBezier(t);
    }
    for (var n = Array(e.length), r = 0; r < e.length; r++)
      n[r] = [], e[r].tmpIdx = r;
    if (t)
      for (r = 0; r < e.length; r++)
        for (var o = e[r], a = 0; a < r; a++) {
          var s, h = e[a];
          if ((A = this._intersectsArray[o.index]) && A.indexOf(h.index) >= 0);
          else
            (void 0 === (s = t[a][r]) && i(o, h) || void 0 !== s && s) && n[r].push(h), (void 0 === (s = t[r][a]) && i(h, o) || void 0 !== s && s) && n[a].push(o);
        }
    else
      for (r = 0; r < e.length; r++)
        for (o = e[r], a = 0; a < r; a++) {
          var A;
          h = e[a];
          (A = this._intersectsArray[o.index]) && A.indexOf(h.index) >= 0 || (i(o, h) ? n[r].push(h) : i(h, o) && n[a].push(o));
        }
    return e.sort(function (e, t) {
      return n[e.tmpIdx].length - n[t.tmpIdx].length;
    }), n;
  }, e.exports = d;
}
