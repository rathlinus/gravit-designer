/**
 * Module 28 - GStylable
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This code is minified. Variable names like e, t, n, i, o, a, r, s
 * have been compressed. Refer to the original open-source Gravit code
 * for better understanding of the logic.
 */

function (e, t, i) {
      var n = i(2),
        r = i(56),
        o = i(54),
        a = i(12),
        s = i(45),
        l = i(14),
        h = i(59),
        A = i(6),
        c = i(5),
        p = i(28),
        u = i(11),
        d = i(9);

      function g(e, t, i) {
        s.call(this, t, i),
          this._setDefaultProperties(g.GeometryProperties),
          e && this.setProperty("closed", e),
          (this._paintSharp = !0);
      }
      n.inherit("path", g, s),
        (g.GeometryProperties = {
          closed: !1,
        }),
        (g.MetaProperties = {
          rtxt: null,
        }),
        (g.VisualProperties = {}),
        (g.prototype.clone = function (e) {
          var t = s.prototype.clone.call(this, e);
          if (t)
            for (
              var i = this.getAnchorPoints().queryAll(":selected"), r = 0;
              r < i.length;
              ++r
            ) {
              var o = this.getAnchorPoints().getIndexOfChild(i[r]),
                a = t.getAnchorPoints().getChildByIndex(o);
              a && a.setFlag(n.Flag.Selected);
            }
          return t;
        }),
        (g.prototype.getNodeNameTranslated = function () {
          return d.getValue("GPath", "name", this.getNodeName());
        }),
        (g.prototype.assignFrom = function (e) {
          e instanceof g && this.transferProperties(e, [g.GeometryProperties]),
            s.prototype.assignFrom.call(this, e);
        }),
        (g.prototype.validateInsertion = function (e, t) {
          return (
            "layer" === n.getName(e) ||
            "group" === n.getName(e) ||
            "page" === n.getName(e) ||
            e instanceof r ||
            "compoundpath.paths" === n.getName(e) ||
            "[GSymbol]" === e.toString()
          );
        }),
        (g.prototype.findPivots = function (e, t) {
          for (
            var i = null,
              n = this.$trf,
              r = this.getAnchorPoints().getFirstChild();
            r;
            r = r.getNext()
          ) {
            var o = r.$tp;
            if (
              e ||
              (o != s.AnchorPoint.Type.Symmetric &&
                o != s.AnchorPoint.Type.Mirror)
            ) {
              var a = new c(r.$x, r.$y),
                l = n ? n.mapPoint(a) : a;
              e &&
                (l = {
                  point: l,
                  ptType: o,
                  autoH: r.$ah,
                }),
                i ? i.push(l) : (i = [l]);
            }
          }
          return i;
        }),
        (g.prototype.getSegmentMiddle = function (e) {
          var t = new o();
          return (
            this.getAnchorPoints()._generateVertices(t, this.$trf, !1),
            h.getSegmentPoint(t, e, 0.5)
          );
        }),
        (g.prototype.isLine = function () {
          var e = this.getAnchorPoints().getFirstChild();
          if (!e) return !1;
          var t = e.getNext();
          if (!t) return !1;
          if (t.getNext()) return !1;
          var i = e.getProperty("x"),
            n = e.getProperty("y"),
            r = e.getProperty("hrx"),
            o = e.getProperty("hry");
          if (
            !(
              null == r ||
              null == o ||
              (a.isEqualEps(r, i) && a.isEqualEps(o, n))
            )
          )
            return !1;
          var s = t.getProperty("x"),
            l = t.getProperty("y"),
            h = t.getProperty("hlx"),
            A = t.getProperty("hly");
          return !!(
            null == h ||
            null == A ||
            (a.isEqualEps(h, s) && a.isEqualEps(A, l))
          );
        }),
        (g.prototype.isMultiPointsLine = function () {
          var e = this.getAnchorPoints().getFirstChild();
          if (!e) return !1;
          var t = e.getNext();
          if (!t) return !1;
          if (!t.getNext()) return this.isLine();
          var i,
            n,
            r,
            o,
            s,
            l,
            h = e,
            A = e.getProperty("x"),
            c = t.getProperty("x"),
            p = e.getProperty("y"),
            u = t.getProperty("y");
          do {
            if (
              ((i = h.getProperty("x")),
              (n = h.getProperty("y")),
              (r = h.getProperty("hrx")),
              (o = h.getProperty("hry")),
              (s = h.getProperty("hlx")),
              (l = h.getProperty("hly")),
              !(
                null == r ||
                null == o ||
                null == s ||
                null == l ||
                (a.isEqualEps(r, i) &&
                  a.isEqualEps(o, n) &&
                  a.isEqualEps(s, i) &&
                  a.isEqualEps(l, n))
              ))
            )
              return !1;
            if (h !== e && h !== t) {
              var d = (n - p) * (c - A) - (i - A) * (u - p);
              if (!a.isEqualEps(d, 0)) return !1;
            }
          } while ((h = h.getNext()));
          return !0;
        }),
        (g.prototype.insertHitPoint = function (e) {
          if (
            !e ||
            !e.slope ||
            a.isEqualEps(e.slope, 0) ||
            a.isEqualEps(e.slope, 1)
          )
            return null;
          for (
            var t = e.slope, i = 1, n = this.getAnchorPoints().getFirstChild();
            null != n && i < e.segment;

          )
            (n = n.getNext()), i++;
          var r = n,
            o = r ? this.getAnchorPoints().getNextPoint(r) : null;
          if (r && o) {
            this.beginUpdate(),
              r.setProperty("ah", !1),
              o.setProperty("ah", !1);
            var l,
              h = r.getProperty("tp"),
              A = o.getProperty("tp");
            l =
              h == s.AnchorPoint.Type.Connector ||
              h == s.AnchorPoint.Type.Symmetric ||
              h == s.AnchorPoint.Type.Mirror ||
              A == s.AnchorPoint.Type.Connector ||
              A == s.AnchorPoint.Type.Symmetric ||
              A == s.AnchorPoint.Type.Mirror ||
              (h == s.AnchorPoint.Type.Asymmetric &&
                A == s.AnchorPoint.Type.Asymmetric)
                ? s.AnchorPoint.Type.Asymmetric
                : h != s.AnchorPoint.Type.Symmetric &&
                  h != s.AnchorPoint.Type.Mirror &&
                  h != s.AnchorPoint.Type.Connector &&
                  h != s.AnchorPoint.Type.Asymmetric
                ? h
                : A;
            var c,
              p,
              u,
              d,
              f,
              m,
              y,
              _,
              v = null;
            (c = r.getProperty("x")),
              (f = r.getProperty("y")),
              (p = r.getProperty("hrx")),
              (m = r.getProperty("hry")),
              (d = o.getProperty("x")),
              (_ = o.getProperty("y")),
              (u = o.getProperty("hlx")),
              (y = o.getProperty("hly"));
            var b =
                null == p ||
                null == m ||
                (a.isEqualEps(p, c) && a.isEqualEps(m, f)),
              C =
                null == u ||
                null == y ||
                (a.isEqualEps(u, d) && a.isEqualEps(y, _));
            if (b && C)
              (v = new g.AnchorPoint()).setProperties(
                ["x", "y", "tp"],
                [c + t * (d - c), f + t * (_ - f), l]
              ),
                this.getAnchorPoints().insertChild(v, o);
            else if (b || C) {
              var w = b ? u : p,
                E = b ? y : m,
                B = new Float64Array(3),
                x = new Float64Array(3),
                P = new Float64Array(3),
                S = new Float64Array(3);
              a.divideQuadraticCurve(c, w, d, t, B, P),
                a.divideQuadraticCurve(f, E, _, t, x, S),
                (v = new g.AnchorPoint()).setProperties(
                  ["x", "y", "tp"],
                  [B[2], x[2], l]
                ),
                this.getAnchorPoints().insertChild(v, o),
                b
                  ? (a.isEqualEps(B[1], B[2]) && a.isEqualEps(x[1], x[2])
                      ? v.setProperties(["hlx", "hly"], [null, null])
                      : v.setProperties(["hlx", "hly"], [B[1], x[1]]),
                    (p = P[0] + (2 / 3) * (P[1] - P[0])),
                    (m = S[0] + (2 / 3) * (S[1] - S[0])),
                    (u = P[2] + (2 / 3) * (P[1] - P[2])),
                    (y = S[2] + (2 / 3) * (S[1] - S[2])),
                    a.isEqualEps(p, P[0]) && a.isEqualEps(m, S[0])
                      ? v.setProperties(["hrx", "hry"], [null, null])
                      : v.setProperties(["hrx", "hry"], [p, m]),
                    a.isEqualEps(u, P[2]) && a.isEqualEps(y, S[2])
                      ? o.setProperties(["hlx", "hly"], [null, null])
                      : o.setProperties(["hlx", "hly"], [u, y]))
                  : (a.isEqualEps(P[0], P[1]) && a.isEqualEps(S[0], S[1])
                      ? v.setProperties(["hrx", "hry"], [null, null])
                      : v.setProperties(["hrx", "hry"], [P[1], S[1]]),
                    (p = B[0] + (2 / 3) * (B[1] - B[0])),
                    (m = x[0] + (2 / 3) * (x[1] - x[0])),
                    (u = B[2] + (2 / 3) * (B[1] - B[2])),
                    (y = x[2] + (2 / 3) * (x[1] - x[2])),
                    a.isEqualEps(u, B[2]) && a.isEqualEps(y, x[2])
                      ? v.setProperties(["hlx", "hly"], [null, null])
                      : v.setProperties(["hlx", "hly"], [u, y]),
                    a.isEqualEps(p, B[0]) && a.isEqualEps(m, x[0])
                      ? r.setProperties(["hrx", "hry"], [null, null])
                      : r.setProperties(["hrx", "hry"], [p, m]));
            } else {
              (B = new Float64Array(4)),
                (x = new Float64Array(4)),
                (P = new Float64Array(4)),
                (S = new Float64Array(4));
              a.getCtrlPtsCasteljau(c, p, u, d, t, 1, B),
                a.getCtrlPtsCasteljau(f, m, y, _, t, 1, x),
                a.getCtrlPtsCasteljau(c, p, u, d, t, 2, P),
                a.getCtrlPtsCasteljau(f, m, y, _, t, 2, S),
                a.isEqualEps(B[1], c) && a.isEqualEps(x[1], f)
                  ? r.setProperties(["hrx", "hry"], [null, null])
                  : r.setProperties(["hrx", "hry"], [B[1], x[1]]),
                (v = new g.AnchorPoint()).setProperties(
                  ["x", "y", "tp"],
                  [B[3], x[3], l]
                ),
                this.getAnchorPoints().insertChild(v, o),
                a.isEqualEps(B[2], B[3]) && a.isEqualEps(x[2], x[3])
                  ? v.setProperties(["hlx", "hly"], [null, null])
                  : v.setProperties(["hlx", "hly"], [B[2], x[2]]),
                a.isEqualEps(P[0], P[1]) && a.isEqualEps(S[0], S[1])
                  ? v.setProperties(["hrx", "hry"], [null, null])
                  : v.setProperties(["hrx", "hry"], [P[1], S[1]]),
                a.isEqualEps(P[2], P[3]) && a.isEqualEps(S[2], S[3])
                  ? o.setProperties(["hlx", "hly"], [null, null])
                  : o.setProperties(["hlx", "hly"], [P[2], S[2]]);
            }
            return this.endUpdate(), v;
          }
          return null;
        }),
        (g.prototype.correctClosedAttribute = function () {
          var e = this.getAnchorPoints().getFirstChild(),
            t = this.getAnchorPoints().getLastChild();
          e == t ||
            !a.isEqualEps(e.getProperty("x"), t.getProperty("x")) ||
            !a.isEqualEps(e.getProperty("y"), t.getProperty("y")) ||
            e.getProperty("tp") !== t.getProperty("tp") ||
            (null !== e.getProperty("hlx") && null !== e.getProperty("hly")) ||
            (null !== t.getProperty("hrx") && null !== t.getProperty("hry")) ||
            (this.beginUpdate(),
            e.setProperties(
              ["hlx", "hly"],
              [t.getProperty("hlx"), t.getProperty("hly")]
            ),
            this.getAnchorPoints().removeChild(t),
            this.$closed || this.setProperty("closed", !0),
            this.endUpdate());
        }),
        (g.prototype.getAngle = function () {
          if (!this.isMultiPointsLine())
            return s.prototype.getAngle.apply(this, arguments);
          var e = 0,
            t = this.getSourceBBox();
          if (t) {
            var i = t.getWidth(),
              n = t.getHeight();
            (i < 1 || n < 1) &&
              (t = new A(t.getX(), t.getY(), i > 0 ? i : 1, n > 0 ? n : 1));
            var r = t.getSide(A.Side.BOTTOM_LEFT),
              o = t.getSide(A.Side.BOTTOM_RIGHT);
            this.$trf &&
              ((r = this.$trf.mapPoint(r)), (o = this.$trf.mapPoint(o))),
              (e = a.normalizeAngleRadians(
                -Math.atan2(o.getY() - r.getY(), o.getX() - r.getX())
              )) > Math.PI && (e -= a.PI2);
          }
          return e;
        }),
        (g.prototype._handleChange = function (e, t) {
          e === n._Change.PrepareRestore
            ? t.blob.hasOwnProperty("rtxt") &&
              (t.blob.hasOwnProperty("refs") || (t.blob.refs = t.blob.rtxt))
            : e === n._Change.Store
            ? (this.storeProperties(t.blob, g.GeometryProperties),
              this.storeProperties(t.blob, g.MetaProperties),
              (t.blob.pts = this.getAnchorPoints().serialize()))
            : e === n._Change.Restore &&
              (this.restoreProperties(t.blob, g.GeometryProperties),
              this.restoreProperties(t.blob, g.MetaProperties),
              t.blob.hasOwnProperty("pts") &&
                this.getAnchorPoints().deserialize(t.blob.pts)),
            s.prototype._handleChange.call(this, e, t),
            this._handleGeometryChangeForProperties(e, t, g.GeometryProperties),
            this._handleGeometryChangeForProperties(e, t, s.GeometryProperties);
        }),
        (g.prototype._requireMiterLimitApproximation = function () {
          return !this.isLine();
        }),
        (g.addIntersectionPoints = function (e, t, i, n) {
          for (
            var r,
              o,
              s = [],
              l = [e, t],
              h = function (e, t) {
                return e.seg < t.seg
                  ? -1
                  : e.seg > t.seg
                  ? 1
                  : e.slope - t.slope;
              },
              A = 0;
            A < l.length;
            A++
          ) {
            var c = l[A],
              p = null;
            if (c) {
              c.$trf && (p = c.$trf.inverted());
              for (
                var u = 0,
                  d = void 0,
                  g = void 0,
                  f = void 0,
                  m = [],
                  y = [],
                  _ = 0;
                _ < i.length;
                _++
              ) {
                var v = i[_];
                y.push({
                  pt: v.pt,
                  seg: v["polySeg" + A].seg,
                  slope: v["slope" + A],
                });
              }
              y.sort(h);
              for (_ = 0; _ < y.length; _++) {
                var b = null,
                  C = y[_];
                d === C.seg
                  ? f
                    ? ((r = (C.slope - g) / (1 - g)), (o = f++))
                    : ((r = (C.slope - g) / (1 - g)), (o = C.seg + u))
                  : ((f = 0), (r = C.slope), (o = C.seg + u));
                var w = {
                  segment: o,
                  x: C.pt.getX(),
                  y: C.pt.getY(),
                  slope: r,
                };
                if ((b = c.insertHitPoint(w)))
                  if (
                    (u++,
                    b === c.getAnchorPoints().getFirstChild() && (f = 1),
                    p)
                  ) {
                    var E = p.mapPoint(C.pt);
                    b.setProperty("x", E.getX()),
                      b.setProperty("y", E.getY()),
                      (b = b._getTransformedCopy(c.$trf));
                  } else
                    b.setProperty("x", C.pt.getX()),
                      b.setProperty("y", C.pt.getY());
                else {
                  if (n) {
                    var B,
                      x = c.getAnchorPoints().getFirstChild();
                    if (!x) return null;
                    B = p ? p.mapPoint(C.pt) : C.pt;
                    do {
                      if (
                        a.isEqualEps(x.$x, B.getX(), 0) &&
                        a.isEqualEps(x.$y, B.getY(), 0)
                      ) {
                        b = p ? x._getTransformedCopy(c.$trf) : x;
                        break;
                      }
                      x = x.getNext();
                    } while (x);
                  }
                  if (!b) return null;
                }
                m.push(b), (d = C.seg), (g = C.slope);
              }
              s.push(m);
            }
          }
          return s;
        }),
        (g.prototype._calculatePaintBBox = function (e, t) {
          var i = this.getGeometryBBox(t);
          if (!i) return null;
          var n = this.getEffects(),
            r = i,
            o = new A(i.getX(), i.getY(), i.getWidth(), i.getHeight());
          if (this.hasStyleFill()) {
            var s = n.getEffectsBBox(i, p.StyleLayer.Fill, o);
            r = r.united(s);
          }
          var h = null;
          return (
            this.hasStyleBorder() &&
              u.each(
                this.getPaintLayers().getBorderLayers(!0),
                function (e, t) {
                  var o = i,
                    s = this.getStyleBorderPadding(t);
                  if (s)
                    if (this.isLine()) {
                      var A = s,
                        u = s,
                        d = s,
                        g = s;
                      if (
                        t.$_blc === l.LineCap.Butt ||
                        t.$_blc === l.LineCap.Square
                      ) {
                        var f = this.getAnchorPoints().getFirstChild(),
                          m =
                            ((g = f.getNext()),
                            new c(f.getProperty("x"), f.getProperty("y"))),
                          y = new c(g.getProperty("x"), g.getProperty("y"));
                        this.$trf &&
                          ((m = this.$trf.mapPoint(m)),
                          (y = this.$trf.mapPoint(y)));
                        var _ = a.normalizeAngleRadians(
                          -Math.atan2(y.getY() - m.getY(), y.getX() - m.getX())
                        );
                        if (
                          ((A = d = s * Math.abs(Math.sin(_))),
                          (g = u = s * Math.abs(Math.cos(_))),
                          t.$_blc === l.LineCap.Square)
                        ) {
                          var v = t.$_bw / 2,
                            b = a.normalizePoint(y.subtract(m)).scale(v);
                          (A += Math.abs(b.getX())),
                            (u += Math.abs(b.getY())),
                            (d += Math.abs(b.getX())),
                            (g += Math.abs(b.getY()));
                        }
                      }
                      o = o.expanded(A, u, d, g);
                    } else o = o.expanded(s, s, s, s);
                  o = this._calculateMarkersBorderBBox(o, t);
                  var C = n.getEffectsBBox(o, p.StyleLayer.Border, o);
                  (r = r.united(C)), (h = h ? h.united(o) : o);
                }.bind(this)
              ),
            (r = n.getEffectsBBox(r, null, h || o))
          );
        }),
        (g.prototype.toString = function () {
          return "[GPath]";
        }),
        (e.exports = g);
    }
