/**
 * chunk.vendor.js Module #187
 * Type: unknown
 */

function (e, t, i) {
      var n = i(646),
        r = i(647),
        o = i(5),
        a = i(48),
        s = i(54),
        l = i(59),
        h = i(12),
        A = i(140);

      function c(e, t, i, n, r) {
        ((this._closed = e),
          (this._retainBezier = t),
          (this._useIntersector = i),
          (this._blockIntersector = r),
          void 0 !== n && (this._approximationScale = n));
      }
      ((c.prototype._firstIntersect = !1),
        (c.prototype._polyLine0 = null),
        (c.prototype._polyLine1 = null),
        (c.prototype._slopesAsLengths = !1),
        (c.prototype._closed = !1),
        (c.prototype._retainBezier = !1),
        (c.prototype._useIntersector = !1),
        (c.prototype._blockIntersector = !1),
        (c.prototype._approximationScale = void 0));
      Math.PI;
      ((c.PolyLine = function () {}),
        (c.PolyLine.prototype.next = null),
        (c.PolyLine.prototype.point = null),
        (c.PolyLine.prototype.cp1 = null),
        (c.PolyLine.prototype.cp2 = null),
        (c.PolyLine.prototype.nextCurve = null),
        (c.PolyLine.prototype.currCurve = null),
        (c.PolyLine.prototype.width = 0),
        (c.PolyLine.prototype.height = 0),
        (c.PolyLine.prototype.x = 0),
        (c.PolyLine.prototype.y = 0),
        (c.PolyLine.prototype.m = 0),
        (c.PolyLine.prototype.seg = 0),
        (c.PolyLine.prototype.index = 0),
        (c.PolyLine.prototype.isLast = !1),
        (c.PolyLine.prototype.isLastSegment = !1),
        (c.PolyLine.prototype.isIsect = !1),
        (c.PolyLine.prototype.insertPoint = function (e, t, i, n, r) {
          return (
            (this.point = new o(e, t)),
            (this.m = i),
            (this.seg = n),
            (this.currCurve = r),
            (this.next = new c.PolyLine()),
            this.next
          );
        }),
        (c.PolyLine.prototype.appendPoint = function (e, t, i) {
          if (!i) {
            if (
              !this.isIsect &&
              h.isEqualEps(this.point.getX(), e) &&
              h.isEqualEps(this.point.getY(), t)
            )
              return (
                this.isLast &&
                  console.log("possibly invalid appended intersection"),
                this
              );
            var n = this.next;
            if (
              n &&
              n.point &&
              !n.isIsect &&
              !n.isLast &&
              h.isEqualEps(n.point.getX(), e) &&
              h.isEqualEps(n.point.getY(), t)
            )
              return n;
          }
          var r = new c.PolyLine();
          return (
            (r.point = new o(e, t)),
            (r.next = this.next),
            (this.next = r),
            r
          );
        }),
        (c.PolyLine.prototype.getOddEven = function (e) {
          var t = this,
            i = !1,
            n = t,
            r = t.next;
          if (!e || !r || !r.point) return 0;
          var o = e.getX(),
            a = e.getY();
          do {
            var s = t.point.getX(),
              l = t.point.getY(),
              h = r.point.getX(),
              A = r.point.getY();
            (((l < a && A >= a) || (A < a && l >= a)) &&
              (s <= o || h <= o) &&
              (i ^= s + ((a - l) / (A - l)) * (h - s) < o),
              (r = (t = r).next).point || (r = n));
          } while (t !== n);
          return i ? 1 : 0;
        }),
        (c.PolyLine.prototype.getWinding = function (e) {
          var t = 0,
            i = this,
            n = i,
            r = i.next;
          if (!e || !r || !r.point) return t;
          var o = e.getX(),
            a = e.getY();
          do {
            var s = i.point.getX(),
              l = i.point.getY(),
              A = r.point.getX(),
              c = r.point.getY();
            (l <= a
              ? c > a && h.segmentSide(s, l, A, c, o, a) > 0 && ++t
              : c <= a && h.segmentSide(s, l, A, c, o, a) < 0 && --t,
              (r = (i = r).next).point || (r = n));
          } while (i !== n);
          return Math.abs(t);
        }),
        (c.PolyLine.prototype.collinear = function (e) {
          var t,
            i,
            n = [],
            r = [],
            o = [],
            a = [];
          if (!this.next.point || !e.next.point || this.isLast || e.isLast)
            return !1;
          if (
            ((t = this.currCurve),
            (i = e.currCurve),
            (t && !t.nextCurve.point) || (i && !i.nextCurve.point))
          )
            return !1;
          if (
            (t
              ? (n.push(t.point.getX(), t.cp1.getX()),
                o.push(t.point.getY(), t.cp1.getY()),
                t.cp2 && (n.push(t.cp2.getX()), o.push(t.cp2.getY())),
                n.push(t.nextCurve.point.getX()),
                o.push(t.nextCurve.point.getY()))
              : (n.push(this.point.getX(), this.next.point.getX()),
                o.push(this.point.getY(), this.next.point.getY())),
            i)
          ) {
            var s = e.m,
              A = e.next.m || 1;
            i.cp2
              ? (h.getCtrlPts(
                  i.point.getX(),
                  i.nextCurve.point.getX(),
                  i.cp1.getX(),
                  i.cp2.getX(),
                  s,
                  A,
                  r,
                ),
                h.getCtrlPts(
                  i.point.getY(),
                  i.nextCurve.point.getY(),
                  i.cp1.getY(),
                  i.cp2.getY(),
                  s,
                  A,
                  a,
                ))
              : (h.getCtrlPtsQuadratic(
                  i.point.getX(),
                  i.nextCurve.point.getX(),
                  i.cp1.getX(),
                  s,
                  A,
                  r,
                ),
                h.getCtrlPtsQuadratic(
                  i.point.getY(),
                  i.nextCurve.point.getY(),
                  i.cp1.getY(),
                  s,
                  A,
                  a,
                ));
          } else
            (r.push(e.point.getX(), e.next.point.getX()),
              a.push(e.point.getY(), e.next.point.getY()));
          return l.collinear(n, o, r, a, 1e-10);
        }),
        (c.PolyLine.prototype.generateAABB = function () {
          var e, t;
          if (
            (e = this.point) &&
            this.next &&
            !this.isLastSegment &&
            (t = this.next.point)
          ) {
            var i = e.getX(),
              n = t.getX(),
              r = e.getY(),
              o = t.getY();
            (i < n
              ? ((this.width = n - i), (this.x = i))
              : ((this.width = i - n), (this.x = n)),
              r < o
                ? ((this.height = o - r), (this.y = r))
                : ((this.height = r - o), (this.y = o)));
          }
        }),
        (c.PolyLine.prototype.area = function () {
          var e = 0,
            t = this,
            i = t.next;
          if (!t.point || !i || !i.point) return 0;
          do {
            ((e += t.point.cross(i.point)),
              (i = (t = i).next) && !i.point && (i = this));
          } while (t !== this);
          return (e /= 2) < 0 ? -e : e;
        }),
        (c.PolyLine.prototype.centroid = function () {
          var e,
            t = 0,
            i = this,
            n = i.next,
            r = 0,
            a = 0;
          if (!i.point || !n || !n.point) return new o(0, 0);
          do {
            ((t += e = i.point.cross(n.point)),
              (r += (i.point.getX() + n.point.getX()) * e),
              (a += (i.point.getY() + n.point.getY()) * e),
              (n = (i = n).next) && !n.point && (n = this));
          } while (i !== this);
          return new o(r / (t *= 3), a / t);
        }),
        (c.PolyLine.prototype.markIndices = function (e) {
          var t = this.currCurve || this,
            i = (e = e || 0) || 0;
          do {
            ((t.index = i), t.isLast && i++, (t = t.nextCurve || t.next));
          } while (t && t.point);
          return (i === e && i++, i);
        }),
        (c.RedistributionResult = function () {
          ((this.containers = []), (this.polys = []));
        }),
        (c.RedistributionResult.prototype.containers = null),
        (c.RedistributionResult.prototype.polys = null),
        (c.redistributeVertexSource = function (e, t) {
          for (
            var i = s.splitVertexSource(e, t),
              n = [],
              r = [],
              o = new c(),
              a = 0;
            a < i.length;
            a++
          )
            (n.push(o._makePolygon(i[a])), r.push([]));
          for (a = 0; a < i.length; a++)
            for (var l = a + 1; l < i.length; l++)
              o.intersect(i[a], i[l], !1, !0, n[a], n[l]) ||
                (n[a].getOddEven(n[l].point)
                  ? r[a].push(l)
                  : n[l].getOddEven(n[a].point) && r[l].push(a));
          var h = [],
            A = [];
          for (a = 0; a < r.length; a++) {
            var p = r[a];
            if (p) for (l = 0; l < p.length; l++) r[p[l]] && (r[p[l]] = null);
          }
          for (a = 0; a < r.length; a++)
            if (r[a]) {
              var u = [i[a]],
                d = [n[a]];
              for (l = 0; l < r[a].length; l++)
                (u.push(i[r[a][l]]), d.push(n[r[a][l]]));
              (h.push(u), A.push(d));
            }
          var g = new c.RedistributionResult();
          return ((g.containers = h), (g.polys = A), g);
        }),
        (c.polyFromVertexSource = function (e, t, i) {
          var n = new c(i, !1, !1, 2);
          return ((n._slopesAsLengths = t), n._makePolygon(e));
        }),
        (c.quadTreeFromPolygon = function (e) {
          var t,
            i,
            n = Number.POSITIVE_INFINITY,
            r = Number.POSITIVE_INFINITY,
            o = Number.NEGATIVE_INFINITY,
            a = Number.NEGATIVE_INFINITY;
          if (!e.next) return null;
          for (var s = e; e.point; )
            ((t = e.point.getX()) < n && (n = t),
              t > o && (o = t),
              (i = e.point.getY()) < r && (r = i),
              i > a && (a = i),
              (e = e.next));
          var l = new A(
            {
              x: n,
              y: r,
              width: o - n,
              height: a - r,
            },
            10,
            10,
          );
          for (e = s; e.next.point; )
            (e.isLastSegment || (e.generateAABB(), l.insert(e)), (e = e.next));
          return l;
        }),
        (c.prototype.intersect = function (e, t, i, n, r, o) {
          if (
            e._geometryBBox &&
            t._geometryBBox &&
            !e._geometryBBox.isEmpty() &&
            !t._geometryBBox.isEmpty() &&
            !e._geometryBBox.intersectsRect(t)
          )
            return n ? null : [];
          for (
            var a,
              s,
              l,
              h = r || this._makePolygon(e),
              c = (a = e === t ? h : o || this._makePolygon(t)),
              p = 0,
              u = Number.POSITIVE_INFINITY,
              d = Number.POSITIVE_INFINITY,
              g = Number.NEGATIVE_INFINITY,
              f = Number.NEGATIVE_INFINITY;
            c.point;
          )
            ((p = c.seg),
              (s = c.point.getX()) < u && (u = s),
              s > g && (g = s),
              (l = c.point.getY()) < d && (d = l),
              l > f && (f = l),
              (c = c.next));
          return (
            (this.qtree = new A(
              {
                x: u,
                y: d,
                width: g - u,
                height: f - d,
              },
              10,
              10,
            )),
            this._addPoly(a),
            (this._polyLine0 = h),
            (this._polyLine1 = a),
            (this._firstIntersect = n || !1),
            this._treeIntersect(h, e === t, i, p)
          );
        }),
        (c.prototype._getPlacement = function (e, t) {
          var i = e.point,
            n = h.ptSqrDist(t.getX(), t.getY(), i.getX(), i.getY()),
            r = e,
            o = e.next;
          if (!o.point) return e;
          do {
            if (
              !r.isLastSegment &&
              n <=
                h.ptSqrDist(i.getX(), i.getY(), o.point.getX(), o.point.getY())
            )
              return r;
            o = (r = r.next).next;
          } while (o.point);
          return e;
        }),
        (c.prototype.addIntersectionsToPolygon = function (e) {
          var t, i;
          if (this._retainBezier)
            for (var n = 0; n < 2; n++) {
              for (
                var r = "polySeg" + n, a = [], s = e.length - 1;
                s >= 0;
                s--
              ) {
                var l = (t = e[s])[r];
                if (t[r].currCurve)
                  a[l.seg] ? a[l.seg].push(t) : (a[l.seg] = [t]);
                else if (((i = t.pt), o.equals(i, l.point))) t[r].isIsect = !0;
                else {
                  var A = this._getPlacement(l, i);
                  A.currCurve
                    ? ((t[r] = A),
                      a[A.seg] ? a[A.seg].push(t) : (a[A.seg] = [t]))
                    : ((t[r] = A.appendPoint(i.getX(), i.getY())),
                      (t[r].isIsect = !0));
                }
              }
              a.forEach(function (e) {
                if (e) {
                  0 === n
                    ? e.sort(function (e, t) {
                        return e.slope0 - t.slope0;
                      })
                    : e.sort(function (e, t) {
                        return e.slope1 - t.slope1;
                      });
                  var t,
                    a = e[0][r].currCurve,
                    s = a.point,
                    l = a.nextCurve.point,
                    A = a.nextCurve,
                    c = 0;
                  if (a.cp1 && a.cp2) {
                    for (
                      var p = new Float64Array(4),
                        u = new Float64Array(4),
                        d = a.cp1,
                        g = a.cp2,
                        f = 0;
                      f < e.length;
                      f++
                    ) {
                      var m = (_ = e[f])["slope" + n];
                      for (
                        i = _.pt, t = a;
                        a.next !== A && !(m <= a.next.m || a.next === A);
                      )
                        a = a.next;
                      (((a = _[r] =
                        a.appendPoint(i.getX(), i.getY(), !0)).isIsect = !0),
                        t !== a &&
                          (h.isEqualEps(c, m, 1e-8)
                            ? t.nextCurve &&
                              (t.nextCurve = t.cp1 = t.cp2 = null)
                            : (h.getCtrlPts(
                                s.getX(),
                                l.getX(),
                                d.getX(),
                                g.getX(),
                                c,
                                m,
                                p,
                              ),
                              h.getCtrlPts(
                                s.getY(),
                                l.getY(),
                                d.getY(),
                                g.getY(),
                                c,
                                m,
                                u,
                              ),
                              (t.cp1 = new o(p[1], u[1])),
                              (t.cp2 = new o(p[2], u[2])),
                              (t.nextCurve = a))));
                      for (var y = t; y !== a; )
                        ((y.currCurve = t), (y = y.next));
                      if (((c = m), a === A)) break;
                    }
                    A !== a
                      ? h.isEqualEps(c, 1, 1e-8)
                        ? a.nextCurve && (a.nextCurve = a.cp1 = a.cp2 = null)
                        : (h.getCtrlPts(
                            s.getX(),
                            l.getX(),
                            d.getX(),
                            g.getX(),
                            c,
                            1,
                            p,
                          ),
                          h.getCtrlPts(
                            s.getY(),
                            l.getY(),
                            d.getY(),
                            g.getY(),
                            c,
                            1,
                            u,
                          ),
                          (a.cp1 = new o(p[1], u[1])),
                          (a.cp2 = new o(p[2], u[2])),
                          (a.nextCurve = A))
                      : console.log("huuu huuu");
                    for (y = a; y !== A; ) ((y.currCurve = a), (y = y.next));
                  } else {
                    for (
                      p = new Float64Array(3),
                        u = new Float64Array(3),
                        d = a.cp1,
                        f = 0;
                      f < e.length;
                      f++
                    ) {
                      var _;
                      m = (_ = e[f])["slope" + n];
                      for (
                        i = _.pt, t = a;
                        a.next !== A && !(m <= a.next.m || a.next === A);
                      )
                        a = a.next;
                      (((a = _[r] =
                        a.appendPoint(i.getX(), i.getY(), !0)).isIsect = !0),
                        t !== a &&
                          (h.isEqualEps(c, m, 1e-8)
                            ? t.nextCurve &&
                              (t.nextCurve = t.cp1 = t.cp2 = null)
                            : (h.getCtrlPtsQuadratic(
                                s.getX(),
                                l.getX(),
                                d.getX(),
                                c,
                                m,
                                p,
                              ),
                              h.getCtrlPtsQuadratic(
                                s.getY(),
                                l.getY(),
                                d.getY(),
                                c,
                                m,
                                u,
                              ),
                              (t.cp1 = new o(p[1], u[1])),
                              (t.cp2 = null),
                              (t.nextCurve = a))));
                      for (y = t; y !== a; ) ((y.currCurve = t), (y = y.next));
                      if (((c = m), a === A)) break;
                    }
                    A !== a
                      ? h.isEqualEps(c, 1, 1e-8)
                        ? a.nextCurve && (a.nextCurve = a.cp1 = a.cp2 = null)
                        : (h.getCtrlPtsQuadratic(
                            s.getX(),
                            l.getX(),
                            d.getX(),
                            c,
                            1,
                            p,
                          ),
                          h.getCtrlPtsQuadratic(
                            s.getY(),
                            l.getY(),
                            d.getY(),
                            c,
                            1,
                            u,
                          ),
                          (a.cp1 = new o(p[1], u[1])),
                          (a.cp2 = null),
                          (a.nextCurve = A))
                      : console.log("huu huu 2");
                    for (y = a; y !== A; ) ((y.currCurve = a), (y = y.next));
                  }
                }
              });
            }
          else
            for (s = e.length - 1; s >= 0; s--)
              ((t = e[s]),
                (i = t.pt),
                o.equals(i, t.polySeg0.point) ||
                  (t.polySeg0 = this._getPlacement(t.polySeg0, i).appendPoint(
                    i.getX(),
                    i.getY(),
                  )),
                (t.polySeg0.isIsect = !0),
                o.equals(i, t.polySeg1.point) ||
                  (t.polySeg1 = this._getPlacement(t.polySeg1, i).appendPoint(
                    i.getX(),
                    i.getY(),
                  )),
                (t.polySeg1.isIsect = !0));
        }),
        (c.prototype.getFirstPoly = function () {
          return this._polyLine0;
        }),
        (c.prototype.getSecondPoly = function () {
          return this._polyLine1;
        }),
        (c.prototype._veq = function (e, t) {
          return h.isEqualEps(e.x, t.x) && h.isEqualEps(e.y, t.y);
        }),
        (c.prototype._makePolygon = function (e) {
          var t,
            i = null,
            n = i,
            r = new a(),
            s = (t = new c.PolyLine()),
            l = 0,
            h = l,
            A = !1,
            p = null;
          for (e.rewindVertices(0); e.readVertex(r); )
            switch (r.command) {
              case a.Command.Move:
                if (!A && this._closed && i && t.point)
                  (n &&
                    !this._veq(n, i) &&
                    ((s = s.insertPoint(n.x, n.y, 0, l)), (n = null)),
                    (s.isLast = !0),
                    (s.firstSegNum = h),
                    (s.isLastSegment = !0),
                    (s = s.insertPoint(i.x, i.y, 0, ++l)));
                else if (i && p) {
                  if (((p.isLast = !0), (f = p) === s))
                    ((f.isLastSegment = !0), (f.firstSegNum = h));
                  else
                    for (; f !== s; )
                      (f.next === s &&
                        ((f.isLastSegment = !0), (f.firstSegNum = h)),
                        (f = f.next));
                }
                (i && t.point
                  ? ((i = r), (n = r), (r = new a()))
                  : ((i = n = r), (r = new a())),
                  (h = l + 1),
                  (A = !1));
                break;
              case a.Command.Line:
                n
                  ? ((p = s),
                    (s = s.insertPoint(n.x, n.y, 0, ++l)),
                    (n = r),
                    (r = new a()))
                  : ((n = r), (r = new a()));
                break;
              case a.Command.Curve:
                if (n) {
                  var u = new o(n.x, n.y);
                  ((n = r),
                    (r = new a()),
                    e.readVertex(r) &&
                      ((p = s),
                      (s = this._subdivideBezier(
                        s,
                        u.getX(),
                        u.getY(),
                        r.x,
                        r.y,
                        n.x,
                        n.y,
                        void 0,
                        void 0,
                        ++l,
                      )),
                      (r = new a())));
                } else ((n = r), (r = new a()));
                break;
              case a.Command.Curve2:
                if (n) {
                  u = new o(n.x, n.y);
                  var d = new o(r.x, r.y);
                  ((n = r), (r = new a()));
                  var g = new a();
                  e.readVertex(r) &&
                    e.readVertex(g) &&
                    ((p = s),
                    (s = this._subdivideBezier(
                      s,
                      u.getX(),
                      u.getY(),
                      r.x,
                      r.y,
                      g.x,
                      g.y,
                      d.getX(),
                      d.getY(),
                      ++l,
                    )),
                    (r = new a()));
                } else ((n = r), (r = new a()));
                break;
              case a.Command.Close:
                ((A = !0),
                  i &&
                    (n &&
                      !this._veq(n, i) &&
                      ((s = s.insertPoint(n.x, n.y, 0, l)), (n = null)),
                    (p = s),
                    (s = s.insertPoint(i.x, i.y, 0, ++l))));
                break;
              default:
                throw new Error(
                  "Unknown vertex command: " + vertex.command.toString(),
                );
            }
          if (!A && this._closed && i && t.point)
            (n &&
              !this._veq(i, n) &&
              ((s = s.insertPoint(n.x, n.y, 0, l)), (n = null)),
              (s.isLast = !0),
              (s.isLastSegment = !0),
              (s.firstSegNum = h),
              (s = s.insertPoint(i.x, i.y, 0, ++l)));
          else if (!A && n && t.point)
            ((s.isLast = !0),
              (s.isLastSegment = !0),
              (s.firstSegNum = h),
              (s = s.insertPoint(n.x, n.y, 0, l)));
          else if (p) {
            var f;
            if (((p.isLast = !0), (f = p) === s))
              ((f.isLastSegment = !0), (f.firstSegNum = h));
            else
              for (; f !== s; )
                (f.next === s && ((f.isLastSegment = !0), (f.firstSegNum = h)),
                  (f = f.next));
          }
          return t;
        }),
        (c.prototype._addPoly = function (e) {
          if (e.next)
            for (; e.next.point; )
              (e.isLastSegment || (e.generateAABB(), this.qtree.insert(e)),
                (e = e.next));
        }),
        (c.prototype._treeIntersect = function (e, t, i, o) {
          var a,
            s,
            l,
            A,
            c,
            p,
            u,
            d,
            g,
            f = [],
            m = {};
          if (!e.next) return this._firstIntersect ? null : f;

          function y(e, t, i, n, r, o, a, s, l) {
            var A = r.getX(),
              c = r.getY(),
              p = Math.sqrt(h.ptSqrDist(o, a, A, c) / h.ptSqrDist(o, a, s, l));
            return (
              t < e && (t = 1),
              p > 1 && (p = 1),
              (i !== n || (0 == e && 0 == t)) && (t = 1),
              e + p * (t - e)
            );
          }
          for (; e.next.point; )
            if (e.isLastSegment) e = e.next;
            else {
              ((s = e.point.getX()),
                (l = e.point.getY()),
                (A = e.next.point.getX()),
                (c = e.next.point.getY()),
                t || e.generateAABB());
              var _ = this.qtree.retrieve(e);
              if (i)
                for (var v = 0; v < _.length; v++) {
                  if (
                    ((p = (b = _[v]).point.getX()),
                    (u = b.point.getY()),
                    (d = b.next.point.getX()),
                    (g = b.next.point.getY()),
                    !(
                      (s === p && l === u) ||
                      (s === d && l === g) ||
                      (A === p && c === u) ||
                      (A === d && c === g)
                    ) && (a = h.getIntersectionPoint(s, l, A, c, p, u, d, g)))
                  ) {
                    if (this._firstIntersect) return f;
                    m["" + s + A + l + c + p + d + u + g] ||
                      (f.push(
                        new n(
                          a,
                          y(e.m, e.next.m, e.seg, e.next.seg, a, s, l, A, c),
                          y(b.m, b.next.m, b.seg, b.next.seg, a, p, u, d, g),
                          e,
                          b,
                        ),
                      ),
                      (m["" + p + d + u + g + s + A + l + c] = 1));
                  }
                }
              else
                for (v = 0; v < _.length; v++) {
                  var b, C, w;
                  if ((b = _[v]).isLastSegment)
                    throw new Error("QuadTree has invalid objects");
                  var E = !0;
                  if (
                    (b.currCurve &&
                      e.currCurve &&
                      b.currCurve.cp2 &&
                      e.currCurve.cp2 &&
                      (E = !1),
                    this._retainBezier &&
                      (this._useIntersector || E) &&
                      !this._blockIntersector)
                  ) {
                    if (!(w = m[(C = (o + 1) * e.seg + b.seg)] || 0)) {
                      if (
                        ((a = r.intersect(e, b)), (m[C] = 1), !a || !a.length)
                      )
                        continue;
                      for (var B = 0; B < a.length; B++)
                        this._addIsect(f, a[B]);
                      if (this._firstIntersect && f.length) return f;
                    }
                  } else if (this._retainBezier) {
                    if (
                      ((p = b.point.getX()),
                      (u = b.point.getY()),
                      (d = b.next.point.getX()),
                      (g = b.next.point.getY()),
                      !(a = h.getIntersectionPoint(s, l, A, c, p, u, d, g)))
                    )
                      continue;
                    if (this._firstIntersect) return f;
                    var x = 0;
                    if (666 === (w = m[(C = (o + 1) * e.seg + b.seg)] || 0))
                      continue;
                    if (b.collinear(e) || e.collinear(b)) {
                      ((x = 0), (m[C] = 666));
                      for (var P = f.length - 1; P >= 0; P--) {
                        var S = f[P];
                        (o + 1) * S.polySeg0.seg + S.polySeg1.seg === C &&
                          f.splice(P);
                      }
                      continue;
                    }
                    if (e.currCurve || b.currCurve)
                      if (e.currCurve)
                        if (b.currCurve) {
                          var T = e.currCurve,
                            I = b.currCurve;
                          x = T.cp2 ? (I.cp2 ? w < 9 : w < 6) : I.cp2 ? 6 : 4;
                        } else {
                          x = e.currCurve.cp2 ? w < 3 : w < 2;
                        }
                      else {
                        x = b.currCurve.cp2 ? w < 3 : w < 2;
                      }
                    else ((x = w < 1), (m[C] = 1));
                    (x &&
                      this._addIsect(
                        f,
                        new n(
                          a,
                          y(e.m, e.next.m, e.seg, e.next.seg, a, s, l, A, c),
                          y(b.m, b.next.m, b.seg, b.next.seg, a, p, u, d, g),
                          e,
                          b,
                        ),
                      ),
                      x &&
                        (e.currCurve || b.currCurve) &&
                        (m[C] = w ? w + 1 : 1));
                  } else if (
                    ((p = b.point.getX()),
                    (u = b.point.getY()),
                    (d = b.next.point.getX()),
                    (g = b.next.point.getY()),
                    (a = h.getIntersectionPoint(s, l, A, c, p, u, d, g)))
                  ) {
                    if (this._firstIntersect) return f;
                    this._addIsect(
                      f,
                      new n(
                        a,
                        y(e.m, e.next.m, e.seg, e.next.seg, a, s, l, A, c),
                        y(b.m, b.next.m, b.seg, b.next.seg, a, p, u, d, g),
                        e,
                        b,
                      ),
                    );
                  }
                }
              e = e.next;
            }
          return this._firstIntersect ? null : f;
        }),
        (c.prototype._addIsect = function (e, t) {
          var i = 1e-10;
          e.some(function (e) {
            if (!o.equals(e.pt, t.pt, 1e-9)) return !1;
            var n = e.slope0,
              r = t.slope0,
              a = e.polySeg0.seg,
              s = e.polySeg1.seg,
              l = t.polySeg0.seg,
              A = t.polySeg1.seg;
            (h.isEqualEps(n, 1, i) &&
              ((n = 0),
              (a = e.polySeg0.next.isLastSegment
                ? e.polySeg0.next.firstSegNum
                : e.polySeg0.next.seg)),
              h.isEqualEps(r, 1, i) &&
                ((r = 0),
                (l = t.polySeg0.next.isLastSegment
                  ? t.polySeg0.next.firstSegNum
                  : t.polySeg0.next.seg)));
            var c = e.slope1,
              p = t.slope1;
            return (
              h.isEqualEps(c, 1, i) &&
                ((c = 0),
                (s = e.polySeg1.next.isLastSegment
                  ? e.polySeg1.next.firstSegNum
                  : e.polySeg1.next.seg)),
              h.isEqualEps(p, 1, i) &&
                ((p = 0),
                (A = t.polySeg1.next.isLastSegment
                  ? t.polySeg1.next.firstSegNum
                  : t.polySeg1.next.seg)),
              a === l &&
                s === A &&
                h.isEqualEps(n, r, i) &&
                h.isEqualEps(c, p, i)
            );
          }) || e.push(t);
        }),
        (c.prototype._subdivideBezier = function (
          e,
          t,
          i,
          n,
          r,
          a,
          s,
          l,
          A,
          c,
        ) {
          if (
            Number.isNaN(t) ||
            Number.isNaN(n) ||
            Number.isNaN(a) ||
            Number.isNaN(l) ||
            Number.isNaN(i) ||
            Number.isNaN(r) ||
            Number.isNaN(s) ||
            Number.isNaN(A)
          )
            return e;
          (void 0 !== this._approximationScale
            ? (this.bezierToleranceSq = 0.5 / this._approximationScale)
            : (this.bezierToleranceSq = 0.25),
            (this.bezierToleranceSq *= this.bezierToleranceSq));
          var p = e;
          if (
            ((e = e.insertPoint(t, i, 0, c, p)),
            (e =
              void 0 !== l && void 0 !== A
                ? this._recursive_bezier4(
                    e,
                    t,
                    i,
                    n,
                    r,
                    a,
                    s,
                    l,
                    A,
                    0,
                    1,
                    c,
                    p,
                    0,
                  )
                : this._recursive_bezier3(e, t, i, n, r, a, s, 0, 1, c, p, 0)),
            this._slopesAsLengths)
          ) {
            var u = p,
              d = 0;
            for (u.m = 0; u.next.point; )
              ((d += h.ptSqrDist(
                u.point.getX(),
                u.point.getY(),
                u.next.point.getX(),
                u.next.point.getY(),
              )),
                (u.next.m = d),
                (u = u.next));
            for (u = p; u.point; ) ((u.m /= d), (u = u.next));
          }
          return (
            this._retainBezier &&
              ((p.nextCurve = e),
              (p.cp1 = new o(n, r)),
              void 0 !== l && void 0 !== A && (p.cp2 = new o(a, s))),
            e
          );
        }),
        (c.prototype._recursive_bezier4 = function (
          e,
          t,
          i,
          n,
          r,
          o,
          a,
          s,
          l,
          A,
          c,
          p,
          u,
          d,
        ) {
          if (d > 32) return e;
          var g,
            f = (t + n) / 2,
            m = (i + r) / 2,
            y = (n + o) / 2,
            _ = (r + a) / 2,
            v = (o + s) / 2,
            b = (a + l) / 2,
            C = (f + y) / 2,
            w = (m + _) / 2,
            E = (y + v) / 2,
            B = (_ + b) / 2,
            x = (C + E) / 2,
            P = (w + B) / 2,
            S = s - t,
            T = l - i,
            I = Math.abs((n - s) * T - (r - l) * S),
            F = Math.abs((o - s) * T - (a - l) * S);
          switch ((Number(I > 1e-8) << 1) + Number(F > 1e-8)) {
            case 0:
              if (0 == (g = S * S + T * T))
                ((I = h.ptSqrDist(t, i, n, r)), (F = h.ptSqrDist(s, l, o, a)));
              else {
                if (
                  ((I = (g = 1 / g) * ((n - t) * S + (r - i) * T)),
                  (F = g * ((o - t) * S + (a - i) * T)),
                  I > 0 && I < 1 && F > 0 && F < 1)
                )
                  return e;
                ((I =
                  I <= 0
                    ? h.ptSqrDist(n, r, t, i)
                    : I >= 1
                      ? h.ptSqrDist(n, r, s, l)
                      : h.ptSqrDist(n, r, t + I * S, i + I * T)),
                  (F =
                    F <= 0
                      ? h.ptSqrDist(o, a, t, i)
                      : F >= 1
                        ? h.ptSqrDist(o, a, s, l)
                        : h.ptSqrDist(o, a, t + F * S, i + F * T)));
              }
              if (I > F) {
                if (I < this.bezierToleranceSq)
                  return (e = e.insertPoint(n, r, A, p, u));
              } else if (F < this.bezierToleranceSq)
                return (c < 1 && (e = e.insertPoint(o, a, c, p, u)), e);
              break;
            case 1:
              if (F * F <= this.bezierToleranceSq * (S * S + T * T))
                return (e = e.insertPoint(y, _, A + (c - A) / 2, p, u));
              break;
            case 2:
              if (I * I <= this.bezierToleranceSq * (S * S + T * T))
                return (e = e.insertPoint(y, _, A + (c - A) / 2, p, u));
              break;
            case 3:
              if ((I + F) * (I + F) <= this.bezierToleranceSq * (S * S + T * T))
                return (e = e.insertPoint(y, _, A + (c - A) / 2, p, u));
          }
          return (
            (e = this._recursive_bezier4(
              e,
              t,
              i,
              f,
              m,
              C,
              w,
              x,
              P,
              A,
              A + (c - A) / 2,
              p,
              u,
              d + 1,
            )),
            (e = this._recursive_bezier4(
              e,
              x,
              P,
              E,
              B,
              v,
              b,
              s,
              l,
              A + (c - A) / 2,
              c,
              p,
              u,
              d + 1,
            ))
          );
        }),
        (c.prototype._recursive_bezier3 = function (
          e,
          t,
          i,
          n,
          r,
          o,
          a,
          s,
          l,
          A,
          c,
          p,
        ) {
          if (p > 32) return e;
          var u,
            d = (t + n) / 2,
            g = (i + r) / 2,
            f = (n + o) / 2,
            m = (r + a) / 2,
            y = (d + f) / 2,
            _ = (g + m) / 2,
            v = o - t,
            b = a - i,
            C = Math.abs((n - o) * b - (r - a) * v);
          if (C > 1e-8) {
            if (C * C <= this.bezierToleranceSq * (v * v + b * b))
              return (e = e.insertPoint(y, _, s + (l - s) / 2, A, c));
          } else {
            if (0 == (u = v * v + b * b)) ((C = h.ptSqrDist(t, i, n, r)), s);
            else {
              if ((C = ((n - t) * v + (r - i) * b) / u) > 0 && C < 1) return e;
              C <= 0
                ? ((C = h.ptSqrDist(n, r, t, i)), s)
                : C >= 1
                  ? ((C = h.ptSqrDist(n, r, o, a)), l)
                  : ((C = h.ptSqrDist(n, r, t + C * v, i + C * b)), l);
            }
            if (C < this.bezierToleranceSq)
              return (l < 1 && (e = e.insertPoint(n, r, l, A, c)), e);
          }
          return (
            (e = this._recursive_bezier3(
              e,
              t,
              i,
              d,
              g,
              y,
              _,
              s,
              s + (l - s) / 2,
              A,
              c,
              p + 1,
            )),
            (e = this._recursive_bezier3(
              e,
              y,
              _,
              f,
              m,
              o,
              a,
              s + (l - s) / 2,
              l,
              A,
              c,
              p + 1,
            ))
          );
        }),
        (e.exports = c));
    }