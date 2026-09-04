/**
 * chunk.vendor.js Module #56
 * Type: unknown
 */

function (e, t, i) {
      var n = i(264),
        r = i(2),
        o = i(187),
        a = i(11),
        s = i(265),
        l = i(139),
        h = i(141),
        A = i(69),
        c = i(5),
        p = i(87),
        u = i(14),
        d = i(104),
        g = i(28),
        f = i(132),
        m = i(68),
        y = i(59),
        _ = i(0),
        v = i(17),
        b = i(6),
        C = i(54),
        w = i(22),
        E = i(7),
        B = i(63),
        x = i(112),
        P = i(48),
        S = i(12),
        T = i(229),
        I = i(283),
        F = i(9);

      function R() {
        (d.call(this),
          this._setDefaultProperties(R.GeometryProperties),
          this._setDefaultProperties(R.MetaProperties));
      }
      (_.inheritAndMix(R, d, [
        r.Container,
        w.Transform,
        w.Layout,
        w.Stylable,
        w.Accelerated,
        p,
      ]),
        (R.GeometryProperties = {
          trf: null,
          bool: n.OR,
        }),
        (R.VisualProperties = {}),
        (R.MetaProperties = {
          scc: !0,
        }),
        (R.MARKER_CACHE = {}),
        (R.MARKER_SIZE = 10),
        (R.HitResult = function (e, t) {
          ((this.type = e), (this.vertex = t));
        }),
        (R.HitResult.Type = {
          Stroke: 0,
          Fill: 1,
          Outline: 2,
          Other: 3,
        }),
        (R.HitResult.prototype.type = null),
        (R.HitResult.prototype.vertexHit = null),
        (R.prototype.getNodeNameTranslated = function () {
          return F.getValue("GShape", "name", this.getNodeName());
        }),
        (R.prototype._paintSharp = !1),
        (R.prototype.assignFrom = function (e) {
          (e instanceof R &&
            this.transferProperties(e, [
              R.GeometryProperties,
              R.MetaProperties,
            ]),
            (this._paintSharp = e._paintSharp),
            d.prototype.assignFrom.call(this, e));
        }),
        (R.prototype.getTransform = function () {
          return this.$trf;
        }),
        (R.prototype.getAngle = function () {
          var e = 0,
            t = this.getSourceBBox();
          if (t && !t.isEmpty()) {
            var i = t.getSide(b.Side.BOTTOM_LEFT),
              n = t.getSide(b.Side.BOTTOM_RIGHT);
            (this.$trf &&
              ((i = this.$trf.mapPoint(i)), (n = this.$trf.mapPoint(n))),
              (e = S.normalizeAngleRadians(
                -Math.atan2(n.getY() - i.getY(), n.getX() - i.getX()),
              )) > Math.PI && (e -= S.PI2));
          }
          return e;
        }),
        (R.prototype.setTransform = function (e) {
          this.setProperty("trf", e);
        }),
        (R.prototype.transform = function (e, t, i) {
          e &&
            !e.isIdentity() &&
            ((this._layoutTransform = e),
            (this._relayoutNow = !this._relayout),
            (this._relayout = !0),
            this.setProperty("trf", this.$trf ? this.$trf.multiplied(e) : e),
            w.Transform.prototype.transform.call(this, e, t, i),
            this._relayoutNow &&
              (this._layoutAnchorContents(null, null, this._layoutTransform),
              (this._layoutTransform = null)));
        }),
        (R.prototype.preTransform = function (e, t, i) {
          e &&
            !e.isIdentity() &&
            ((this._layoutTransform =
              this.$trf && this.$trf.invertible()
                ? this.$trf.inverted().multiplied(e).multiplied(this.$trf)
                : e),
            (this._relayoutNow = !this._relayout),
            (this._relayout = !0),
            this.setProperty("trf", this.$trf ? e.multiplied(this.$trf) : e),
            w.Transform.prototype.preTransform.call(this, e, t, i),
            this._relayoutNow &&
              (this._layoutAnchorContents(null, null, this._layoutTransform),
              (this._layoutTransform = null)));
        }),
        (R.prototype.getHeadMarkerVertices = function (e) {
          return this._getMarkerVertices(
            y.getSegmentPoint(this, 1, 0),
            y.getSegmentPoint(this, 1, 0.01),
            e.$_bhm,
            e.$_bhms,
            e.$_bw,
            e.$_bhmi,
            e.$_blc,
            e.$_bhmo,
          );
        }),
        (R.prototype.getTailMarkerVertices = function (e) {
          return this._getMarkerVertices(
            y.getSegmentPoint(this, null, 1),
            y.getSegmentPoint(this, null, 0.99),
            e.$_btm,
            e.$_btms,
            e.$_bw,
            e.$_btmi,
            e.$_blc,
            e.$_btmo,
          );
        }),
        (R.prototype.getCenter = function (e) {
          var t = this.getSourceBBox(),
            i = t ? t.getSide(b.Side.CENTER) : null;
          return (i && e && this.$trf && (i = this.$trf.mapPoint(i)), i);
        }),
        (R.prototype.getOrigHalfWidth = function () {
          return 1;
        }),
        (R.prototype.getOrigHalfHeight = function () {
          return 1;
        }),
        (R.prototype.isFakeContainer = function () {
          return !1;
        }),
        (R.prototype.getSubnodeIds = function (e) {
          r.Container.prototype.getSubnodeIds.call(this, e);
          var t = this.getEffects();
          t &&
            (e[t.getMultireferenceId()] && t.resetMultireference(),
            (e[t.getMultireferenceId()] = t),
            t.getSubnodeIds(e));
          var i = this.getPaintLayers();
          i &&
            (e[i.getMultireferenceId()] && i.resetMultireference(),
            (e[i.getMultireferenceId()] = i),
            i.getSubnodeIds(e));
        }),
        (R.prototype.getStyleBorderPadding = function (e) {
          var t = g.prototype.getStyleBorderPadding.call(this, e);
          return (
            t &&
              this._requireMiterLimitApproximation() &&
              e.$_blj === u.LineJoin.Miter &&
              e.$_bml > 0 &&
              (t *= this.calculateMitterLimit(e)),
            t
          );
        }),
        (R.prototype._checkPartialCollision = function (e, t, i, n, r, a) {
          if (e.intersectsRect(t, n)) {
            i.rewindVertices(0);
            for (var s = [], l = new P(); i.readVertex(l); )
              if (l.command <= P.Command.Line) s.push(new c(l.x, l.y));
              else if (l.command !== P.Command.Close) {
                s = null;
                break;
              }
            if (s && b.equals(b.fromPoints.apply(this, s), e)) {
              var h = this.getGeometryBBox();
              if (!b.equals(h, t)) {
                var A, p, u, d;
                ((u = h.getY() - t.getY()),
                  (A = h.getX() - t.getX()),
                  (p = t.getWidth() - (A + h.getWidth())),
                  (d = t.getHeight() - (u + h.getHeight())));
                var g = e.expanded(A, u, p, d),
                  f = g.getX(),
                  m = g.getY(),
                  y = f + g.getWidth(),
                  _ = m + g.getHeight();
                ((i = new C()).addVertex(P.Command.Move, f, m),
                  i.addVertex(P.Command.Line, y, m),
                  i.addVertex(P.Command.Line, y, _),
                  i.addVertex(P.Command.Line, f, _),
                  i.addVertex(P.Command.Close, 0, 0));
              }
            }
            for (
              var v = function (e, t) {
                  if (this._isEvenOddFill()) {
                    if (e.getOddEven(t)) return !0;
                  } else if (e.getWinding(t)) return !0;
                  return !1;
                }.bind(this),
                E = r & w.CollisionFlag.CollisionInfo,
                B = C.splitVertexSource(this),
                x = null,
                S = new o(),
                T = 0;
              T < B.length;
              T++
            ) {
              if (S.intersect(i, B[T], !1, !0, x))
                return void (
                  r & w.CollisionFlag.FullyContained ||
                  a(
                    E
                      ? {
                          element: this,
                          intersects: !0,
                          containsArea: !1,
                          separate: !1,
                        }
                      : this,
                  )
                );
              x = S._polyLine0;
            }
            var I = null;
            if (r & w.CollisionFlag.FullyContained) {
              var F = this._isEvenOddFill() && E;
              if (1 === B.length)
                v((I = S.getSecondPoly()), S.getFirstPoly().point)
                  ? a(
                      E
                        ? {
                            element: this,
                            separate: !1,
                            containsArea: !0,
                            intersects: !1,
                          }
                        : this,
                    )
                  : F &&
                    (v(S.getFirstPoly(), I.point) ||
                      a({
                        element: this,
                        separate: !0,
                        containsArea: !1,
                        intersects: !1,
                      }));
              else {
                var R = v((I = S._makePolygon(this)), S.getFirstPoly().point);
                if (R || F) {
                  var D = !1;
                  if (this._isEvenOddFill())
                    for (l = new P(), T = 0; T < B.length; T++) {
                      (B[T].rewindVertices(0), B[T].readVertex(l));
                      var k = new c(l.x, l.y);
                      if (v(S.getFirstPoly(), k)) {
                        D = !0;
                        break;
                      }
                    }
                  D ||
                    (R
                      ? a(
                          E
                            ? {
                                element: this,
                                separate: !1,
                                containsArea: !0,
                                intersects: !1,
                              }
                            : this,
                        )
                      : F &&
                        a({
                          element: this,
                          separate: !0,
                          containsArea: !1,
                          intersects: !1,
                        }));
                }
              }
            } else {
              var G = v(S.getFirstPoly(), S.getSecondPoly().point);
              G
                ? a(
                    E
                      ? {
                          element: this,
                          separate: !1,
                          containsArea: !1,
                          intersects: !1,
                        }
                      : this,
                  )
                : this.hasStyleFill() &&
                  (G = v(
                    (I =
                      1 === B.length
                        ? S.getSecondPoly()
                        : S._makePolygon(this)),
                    S.getFirstPoly().point,
                  )) &&
                  a(
                    E
                      ? {
                          element: this,
                          separate: !1,
                          containsArea: !0,
                          intersects: !1,
                        }
                      : this,
                  );
            }
          }
        }),
        (R.prototype._paintStyleLayer = function (e, t, i) {
          if (t === g.StyleLayer.Fill) {
            var n = this.getPaintLayers().getFillLayers(!0);
            (n.length || n.push(new g.FillPaintLayer()),
              this.getPaintLayers().hasFillMaskLayers()
                ? this._paintFillMaskLayers(e, i, n)
                : this._paintFillLayers(e, i, n),
              e._ignoreContents
                ? "function" == typeof e._ignoreContents &&
                  e._ignoreContents(e, t)
                : this._paintContents(e, i));
          } else
            t === g.StyleLayer.Border &&
              (e.configuration.isOutline(e)
                ? this._paintBorder(e, i, null)
                : a.each(
                    this.getPaintLayers().getBorderLayers(!0),
                    function (t, n) {
                      this._paintBorder(e, i, n);
                    }.bind(this),
                  ));
        }),
        (R.prototype._paintFillLayers = function (e, t, i) {
          a.each(
            i,
            function (i, n) {
              this._paintFill(e, t, n);
            }.bind(this),
          );
        }),
        (R.prototype._paintFillMaskLayers = function (e, t, i) {
          var n = this._createStyleCanvas(e, this.getPaintBBox()),
            r = i.filter(function (e) {
              return e.isMask();
            });
          if (
            (a.each(
              r,
              function (i, r) {
                var o = this._createStyleCanvas(e, this.getPaintBBox());
                e.pushCanvas(o);
                try {
                  (this._paintFill(e, t, r),
                    n.drawCanvas(
                      o,
                      0,
                      0,
                      null,
                      i > 0 ? u.CompositeOperator.DestinationIn : null,
                    ));
                } finally {
                  (o.finish(), e.popCanvas());
                }
              }.bind(this),
            ),
            (i = i.filter(function (e) {
              return !e.isMask();
            })).length)
          ) {
            var o = this._createStyleCanvas(e, this.getPaintBBox());
            e.pushCanvas(o);
            try {
              this._paintFillLayers(e, t, i);
            } finally {
              e.popCanvas();
            }
            (n.drawCanvas(o, 0, 0, null, u.CompositeOperator.SourceIn),
              o.finish());
          }
          (e.canvas.drawCanvas(n), n.finish());
        }),
        (R.prototype._isStyleSeparate = function () {
          return this.getPaintLayers().hasSeparateFillLayer();
        }),
        (R.prototype._isSeparateStylePaintLayer = function (e, t) {
          if (w.Stylable.prototype._isSeparateStylePaintLayer.call(this, e, t))
            return !0;
          var i = this.getPaintLayers().getBorderLayers(!0),
            n = function (e, t) {
              for (var n = 0; n < i.length; n++)
                if (t.apply(null, i[n].getProperties(e, null, null, !0)))
                  return !0;
              return !1;
            };
          if (t === g.StyleLayer.Border) {
            if (!this.hasStyleBorder()) return !1;
            if (
              n(["_ba"], function (e) {
                return e !== g.BorderAlignment.Center;
              })
            )
              return !0;
            if (
              n(["_pt"], function (e) {
                return !(e instanceof m);
              })
            )
              return !0;
            if (
              n(["_bhm", "_btm", "_op"], function (e, t, i) {
                return (e || t) && i < 1;
              })
            )
              return !0;
          }
          return !!(
            t === g.StyleLayer.Fill &&
            this.hasStyleFill() &&
            this.hasStyleBorder() &&
            n(["_ba"], function (e) {
              return e === g.BorderAlignment.Outside;
            })
          );
        }),
        (R.prototype._calculateGeometryBBox = function (e) {
          return y.calculateBounds(this, !0);
        }),
        (R.prototype._calculatePaintBBox = function (e, t) {
          var i = this.getGeometryBBox(t);
          if (!i) return null;
          var n = this.getEffects(),
            r = i,
            o = new b(i.getX(), i.getY(), i.getWidth(), i.getHeight());
          if (this.hasStyleFill()) {
            var s = n.getEffectsBBox(i, g.StyleLayer.Fill, o);
            r = r.united(s);
          }
          var l = null;
          return (
            this.hasStyleBorder() &&
              a.each(
                this.getPaintLayers().getBorderLayers(!0),
                function (e, t) {
                  var o = i,
                    a = this.getStyleBorderPadding(t);
                  (a && (o = o.expanded(a, a, a, a)),
                    (o = this._calculateMarkersBorderBBox(o, t)));
                  var s = n.getEffectsBBox(o, g.StyleLayer.Border, o);
                  ((r = r.united(s)), (l = l ? l.united(o) : o));
                }.bind(this),
              ),
            (r = n.getEffectsBBox(r, null, l || o))
          );
        }),
        (R.prototype._calculateMarkersBorderBBox = function (e, t) {
          var i = this.getHeadMarkerVertices(t),
            n = this.getTailMarkerVertices(t),
            r = t.$_bw;
          return (
            i && (e = e.united(y.calculateBounds(i, !0).expanded(r, r, r, r))),
            n && (e = e.united(y.calculateBounds(n, !0).expanded(r, r, r, r))),
            e
          );
        }),
        (R.prototype._requireMiterLimitApproximation = function () {
          return !1;
        }),
        (R.prototype._isEvenOddFill = function () {
          return !1;
        }),
        (R.prototype.createShapePaint = function (e, t, i) {
          var n = e.isIncludingInvisible();
          if (e.configuration.noWebGL && t && t.isWebGL()) {
            var r = t.getAverageColor(),
              o = new v(r);
            return e.canvas.createPatternPaint(o, i);
          }
          if (t instanceof s) {
            var a = e.getRootCanvas();
            if (!a) return null;
            var h = a.getOrigin(),
              A = a.getScale(),
              c = new E().translated(h.getX(), h.getY()).scaled(1 / A, 1 / A);
            return (
              this.$trf &&
                this.$trf.invertible() &&
                (c = c.multiplied(this.$trf.inverted())),
              this._resetFxCacheAndState(),
              {
                paint: e.canvas.createTexture(a, l.RepeatMode.None),
                transform: c,
              }
            );
          }
          if (t instanceof l) {
            var p = this.$trf || new E(),
              u = this.getSourceBBox(n),
              d = t.createTextureTransform(u, p, e.canvas.getScale());
            return (
              t.addEventListener(
                l.UpdateEvent,
                this._requestInvalidation.bind(this),
                this,
              ),
              e.canvas.createPatternPaint(t, this.getGeometryBBox(n), d)
            );
          }
          if (t instanceof I) {
            var g = i || this.getSourceBBox(n),
              f = E.getNativeRectTransformation(g),
              m = this.getGeometryBBox(n),
              y = Math.max(m.getWidth(), m.getHeight()),
              _ = new b(0, 0, y, y),
              C = E.getNativeRectTransformation(_).inverted();
            d = C ? C.multiplied(f) : f;
            return e.canvas.createPatternPaint(t, _, d);
          }
          return t ? e.canvas.createPatternPaint(t, i) : null;
        }),
        (R.prototype.getPatternBBox = function (e) {
          var t = this.getSourceBBox(e);
          return (
            (t && !t.isEmpty()) ||
              ((t = this.getGeometryBBox(e)),
              this.$trf &&
                this.$trf.invertible() &&
                (t = this.$trf.inverted().mapRect(t))),
            t
          );
        }),
        (R.prototype.makeSharp = function (e, t, i, n) {
          if (
            this._paintSharp &&
            (!e.configuration || e.configuration.paintSharp) &&
            t instanceof u &&
            this._scene &&
            this._scene.getProperty("ut") === f.Unit.PX
          ) {
            var r = 0;
            (n
              ? (r = 1)
              : this.hasStyleBorder() &&
                ((r = 0),
                a.each(
                  this.getPaintLayers().getBorderLayers(!0),
                  function (e, t) {
                    var i = t.$_bw;
                    (t.$_ba !== g.BorderAlignment.Center && (i *= 2),
                      (r = Math.max(r, i)));
                  },
                ),
                (r *= t.getScale())),
              (i = new h(
                i,
                t.getTransform(),
                Math.ceil(r) % 2 == 0,
                this.getGeometryBBox(e.isIncludingInvisible()),
              )));
          }
          return i;
        }),
        (R.prototype._getAlignTransformation = function (e) {
          var t,
            i = this.getGeometryBBox(context.isIncludingInvisible()),
            n = new E();
          (a.each(this.getPaintLayers().getBorderLayers(!0), function (e, i) {
            i.$_ba !== g.BorderAlignment.Inside &&
              (t =
                i.$_ba === g.BorderAlignment.Center
                  ? Math.max(t || 0, i.$_bw / 2)
                  : Math.max(t || 0, i.$_bw));
          }),
            t &&
              (n = E.getResizeTransform(i, b.Side.BOTTOM_RIGHT, t, t, !1, !0)));
          var r = e.getTransform(),
            o = (n = n.multiplied(r)).mapRect(i).toAlignedRect(),
            s = n.inverted(),
            l = s ? s.mapRect(o) : i,
            h = E.getResizeTransform(
              i,
              b.Side.TOP_LEFT,
              l.getX() - i.getX(),
              l.getY() - i.getY(),
              !1,
              !1,
            ),
            A = h.mapRect(i);
          return (h = h.multiplied(
            E.getResizeTransform(
              A,
              b.Side.BOTTOM_RIGHT,
              l.getX() + l.getWidth() - i.getX() - i.getWidth(),
              l.getY() + l.getHeight() - i.getY() - i.getHeight(),
              !1,
              !1,
            ),
          ));
        }),
        (R.prototype._paintFill = function (e, t, i) {
          if (!e.configuration.isOutline(e) && this.hasStyleFill()) {
            var n = e.isIncludingInvisible(),
              r = this.createShapePaint(e, i.$_pt, this.getPatternBBox(n));
            if (r) {
              var o = this,
                s = e.canvas;
              if (
                (r.transform &&
                  (this.$trf &&
                    (r.transform = r.transform.multiplied(this.$trf)),
                  i.$_px &&
                    !i.$_px.isIdentity() &&
                    (r.transform = r.transform.preMultiplied(i.$_px))),
                s.hasClip() &&
                  ((i.isSeparateLayer() && s.isClipped()) ||
                    (t &&
                      this.hasStyleFill() &&
                      this.hasStyleBorder() &&
                      this.$_ba === g.BorderAlignment.Outside)))
              ) {
                if (void 0 !== s.putVertices(o)) {
                  s.clipVertices();
                  var l = this.getPaintBBox(!1, null, n),
                    h = this._createStyleCanvas(e, l);
                  e.pushCanvas(h);
                  try {
                    if (
                      t &&
                      this.hasStyleFill() &&
                      this.hasStyleBorder() &&
                      this.$_ba === g.BorderAlignment.Outside
                    )
                      a.each(
                        this.getPaintLayers().getBorderLayers(!0),
                        function (e, t) {
                          (h.putVertices(o),
                            h.strokeVertices(
                              v.BLACK,
                              t.$_bw,
                              t.$_bds,
                              t.$_blc,
                              t.$_blj,
                              t.$_bml,
                              1,
                            ));
                          var a = this.getGeometryBBox(n);
                          if (
                            ((a = a.expanded(t.$_bw, t.$_bw, t.$_bw, t.$_bw)),
                            r.transform && r.transform.invertible())
                          ) {
                            a = r.transform.inverted().mapRect(a);
                            var s = h.setTransform(
                              h.getTransform(!0).multiplied(r.transform),
                            );
                            (h.fillVertices(
                              v.BLACK,
                              1,
                              null,
                              this._isEvenOddFill(),
                            ),
                              h.fillRect(
                                a.getX(),
                                a.getY(),
                                a.getWidth(),
                                a.getHeight(),
                                r.paint,
                                i.$_op,
                                u.CompositeOperator.SourceIn,
                              ),
                              h.setTransform(s));
                          } else
                            (h.fillVertices(
                              v.BLACK,
                              1,
                              null,
                              this._isEvenOddFill(),
                            ),
                              h.fillRect(
                                a.getX(),
                                a.getY(),
                                a.getWidth(),
                                a.getHeight(),
                                r.paint,
                                i.$_op,
                                u.CompositeOperator.SourceIn,
                              ));
                        }.bind(this),
                      );
                    else if (void 0 !== h.putVertices(o))
                      if (r.transform) {
                        var A = h.setTransform(
                          h.getTransform(!0).preMultiplied(r.transform),
                        );
                        (h.fillVertices(
                          r.paint,
                          i.$_op,
                          null,
                          this._isEvenOddFill(),
                        ),
                          s.setTransform(A));
                      } else
                        h.fillVertices(
                          r.paint,
                          i.$_op,
                          null,
                          this._isEvenOddFill(),
                        );
                    (s.drawCanvas(h, 0, 0, i.$_op, i.getBlendingForContext(e)),
                      h.finish());
                  } finally {
                    e.popCanvas();
                  }
                  s.resetClip();
                }
              } else if (
                ((o = this.makeSharp(e, s, this)), void 0 !== s.putVertices(o))
              )
                if (r.transform) {
                  A = s.setTransform(
                    s.getTransform(!0).preMultiplied(r.transform),
                  );
                  (s.fillVertices(
                    r.paint,
                    i.$_op,
                    i.getBlendingForContext(e),
                    this._isEvenOddFill(),
                  ),
                    s.setTransform(A));
                } else
                  s.fillVertices(
                    r.paint,
                    i.$_op,
                    i.getBlendingForContext(e),
                    this._isEvenOddFill(),
                  );
            }
          }
        }),
        (R.prototype._paintContents = function (e, t) {
          if (this.getFirstChild()) {
            var i = this.getChildrenPaintBBox(),
              n = this.getGeometryBBox(e.isIncludingInvisible());
            if (!i || i.isEmpty()) return;
            if (n.containsRect(i)) {
              if (void 0 === this._collidesWithChildren) {
                var r = new C();
                (r.addVertex(P.Command.Move, i.getX(), i.getY()),
                  r.addVertex(
                    P.Command.Line,
                    i.getX(),
                    i.getY() + i.getHeight(),
                  ),
                  r.addVertex(
                    P.Command.Line,
                    i.getX() + i.getWidth(),
                    i.getY() + i.getHeight(),
                  ),
                  r.addVertex(
                    P.Command.Line,
                    i.getX() + i.getWidth(),
                    i.getY(),
                  ),
                  r.addVertex(P.Command.Close, 0, 0));
                var o = [],
                  a = [];
                (this.getCollisions(
                  r,
                  w.CollisionFlag.Partial |
                    w.CollisionFlag.GeometryBBox |
                    w.CollisionFlag.FullyContained |
                    w.CollisionFlag.CollisionInfo,
                  function (e) {
                    return (e.separate ? o.push(e) : a.push(e), !0);
                  },
                  null,
                  function (e) {
                    return !1;
                  },
                ),
                  (this._collidesWithChildren = a.length > 0),
                  (this._collidesWithChildrenSeparate =
                    0 === a.length && o.length > 0));
              }
              if (this._collidesWithChildren) {
                for (var s = this.getFirstChild(); null !== s; s = s.getNext())
                  s instanceof w && s.paint(e);
                return;
              }
              if (this._collidesWithChildrenSeparate) return;
            }
            var l = n.intersected(i);
            if (e.canvas.hasClip()) {
              var h = e.canvas;
              if (!t) {
                h = this._createStyleCanvas(e, l);
                var A = e.pushCanvas(h);
              }
              try {
                void 0 !== h.putVertices(this) &&
                  h.clipVertices(this._isEvenOddFill());
                try {
                  for (s = this.getFirstChild(); null !== s; s = s.getNext())
                    s instanceof w && s.paint(e);
                } finally {
                  h.resetClip();
                }
                A && (A.drawCanvas(h), h.finish());
              } finally {
                A && e.popCanvas();
              }
            } else {
              var c = null;
              for (s = this.getFirstChild(); null !== s; s = s.getNext())
                s instanceof w &&
                  (c || (c = e.pushCanvas(e.canvas.createCanvas(l))),
                  s.paint(e));
              c &&
                (void 0 !== e.canvas.putVertices(this) &&
                  (e.canvas.fillVertices(
                    v.BLACK,
                    1,
                    u.CompositeOperator.DestinationIn,
                  ),
                  c.drawCanvas(e.canvas)),
                e.canvas.finish(),
                e.popCanvas());
            }
          }
        }),
        (R.prototype._paintBorder = function (e, t, i) {
          var n = e.configuration.isOutline(e);
          if (n) {
            var r = e.canvas.resetTransform(),
              o = new B(this, r);
            return (
              (o = this.makeSharp(e, e.canvas, o, n)),
              e.canvas.putVertices(o),
              e.canvas.strokeVertices(e.getOutlineColor()),
              void e.canvas.setTransform(r)
            );
          }
          if (this.hasStyleBorder()) {
            var s = e.isIncludingInvisible(),
              l = this.getPatternBBox(s);
            if (l && i.$_ba !== g.BorderAlignment.Inside) {
              var h = i.$_bw;
              if (
                (i.$_ba === g.BorderAlignment.Center && (h *= 0.5), this.$trf)
              )
                ((h /= this.$trf.getScaleFactor()),
                  (l = l.expanded(h, h, h, h)));
              else l = l.expanded(h, h, h, h);
            }
            var A = i.$_bw;
            if (
              (i.$_ba !== g.BorderAlignment.Center && (A *= 2),
              t &&
                this.hasStyleFill() &&
                i.$_ba === g.BorderAlignment.Outside &&
                e.canvas.hasClip())
            ) {
              var c = e.canvas,
                p = this._createStyleCanvas(e, this.getPaintBBox(!1, null, s));
              e.pushCanvas(p);
              try {
                var d = this.getGeometryBBox(s),
                  f = this.getStyleBorderPadding(i);
                f && (d = d.expanded(f, f, f, f));
                var m = (d = this._calculateMarkersBorderBBox(d, i)),
                  y = this,
                  _ = e.canvas,
                  b = this.getPaintLayers().getFillLayers(!0);
                a.each(
                  b,
                  function (t, n) {
                    var r = this.createShapePaint(
                      e,
                      n.$_pt,
                      this.getPatternBBox(s),
                    );
                    if (r && r.paint) {
                      (_.putVertices(y),
                        _.strokeVertices(
                          r.paint,
                          A / 2,
                          i.$_bds,
                          i.$_blc,
                          i.$_blj,
                          i.$_bml,
                          1,
                        ),
                        _.fillVertices(
                          v.BLACK,
                          1,
                          null,
                          this._isEvenOddFill(),
                        ));
                      var o = i.$_op
                        ? n.$_op && n.$_op < i.$_op
                          ? n.$_op / i.$_op
                          : 1
                        : n.$_op;
                      _.fillRect(
                        m.getX(),
                        m.getY(),
                        m.getWidth(),
                        m.getHeight(),
                        r.paint,
                        o,
                        u.CompositeOperator.SourceIn,
                      );
                    }
                  }.bind(this),
                );
                var C = this._createStyleCanvas(
                  e,
                  this.getPaintBBox(!1, null, s),
                );
                e.pushCanvas(C);
                try {
                  (this._paintBorderSeparate(e, !1, !0, !1, i),
                    _.drawCanvas(C));
                } finally {
                  e.popCanvas();
                }
                (p.putVertices(y),
                  p.clipVertices(!0),
                  p.clear(),
                  p.resetClip(),
                  c.drawCanvas(
                    p,
                    null,
                    null,
                    i.$_op,
                    i.getBlendingForContext(e),
                  ),
                  p.finish());
              } finally {
                e.popCanvas();
              }
            } else if (t) {
              ((C = this._createStyleCanvas(e, this.getPaintBBox(!1, null, s))),
                (c = e.pushCanvas(C)));
              try {
                (this._paintBorderSeparate(e, !0, !0, !0, i),
                  c.drawCanvas(C, null, null, 1, i.getBlendingForContext(e)),
                  C.finish());
              } finally {
                e.popCanvas();
              }
            } else {
              ((_ = e.canvas), (y = this));
              y = this.makeSharp(e, _, this);
              var w = this.createShapePaint(e, i.$_pt, l);
              if (w && w.paint && void 0 !== _.putVertices(y)) {
                var E = this.calculateMitterLimit(i);
                (_.strokeVertices(
                  w.paint,
                  A,
                  i.$_bds,
                  i.$_blc,
                  i.$_blj,
                  E,
                  i.$_op,
                  i.getBlendingForContext(e),
                ),
                  this._paintBorderMarkers(e, w.paint, i));
              }
            }
          }
        }),
        (R.prototype.calculateMitterLimit = function (e) {
          return e.$_bml;
        }),
        (R.prototype._paintBorderSeparate = function (e, t, i, n, r) {
          if (this.hasStyleBorder()) {
            var o = e.canvas,
              a = this;
            t && (a = this.makeSharp(e, o, this));
            var s = e.isIncludingInvisible(),
              l = this.getPatternBBox(s);
            if (l && r.$_ba !== g.BorderAlignment.Inside) {
              var h = r.$_bw;
              if (
                (r.$_ba === g.BorderAlignment.Center && (h *= 0.5), this.$trf)
              )
                ((h /= this.$trf.getScaleFactor()),
                  (l = l.expanded(h, h, h, h)));
              else l = l.expanded(h, h, h, h);
            }
            var A = this.createShapePaint(e, r.$_pt, l);
            if (A && A.paint && void 0 !== o.putVertices(a)) {
              var c = r.$_bw;
              r.$_ba !== g.BorderAlignment.Center && (c *= 2);
              var p = this.getGeometryBBox(s),
                d = this.getStyleBorderPadding(r);
              (d && (p = p.expanded(d, d, d, d)),
                i && (p = this._calculateMarkersBorderBBox(p, r)));
              var f = p,
                m = null;
              A.transform &&
                A.transform.isValid() &&
                ((m = A.transform),
                this.$trf && (m = m.multiplied(this.$trf)),
                r.$_px &&
                  !r.$_px.isIdentity() &&
                  (m = m.preMultiplied(r.$_px)));
              var y = this.calculateMitterLimit(r);
              if (
                (o.strokeVertices(v.BLACK, c, r.$_bds, r.$_blc, r.$_blj, y, 1),
                r.$_ba === g.BorderAlignment.Inside
                  ? o.fillVertices(
                      v.BLACK,
                      1,
                      u.CompositeOperator.DestinationIn,
                      !0,
                    )
                  : r.$_ba === g.BorderAlignment.Outside &&
                    o.fillVertices(
                      v.BLACK,
                      1,
                      u.CompositeOperator.DestinationOut,
                      !0,
                    ),
                i && this._paintBorderMarkers(e, v.BLACK, r),
                m && m.invertible())
              ) {
                f = m.inverted().mapRect(f);
                var _ = o.setTransform(o.getTransform(!0).multiplied(m));
                (o.fillRect(
                  f.getX(),
                  f.getY(),
                  f.getWidth(),
                  f.getHeight(),
                  A.paint,
                  n ? r.$_op : 1,
                  u.CompositeOperator.SourceIn,
                ),
                  o.setTransform(_));
              } else
                o.fillRect(
                  f.getX(),
                  f.getY(),
                  f.getWidth(),
                  f.getHeight(),
                  A.paint,
                  n ? r.$_op : 1,
                  u.CompositeOperator.SourceIn,
                );
            }
          }
        }),
        (R.prototype._getMarkerVertices = function (e, t, i, n, r, o, a, s) {
          if (!i) return null;
          if (!e || !t) return null;
          var l = null,
            h = this._calculateMarkerVerticeBorderScale(r),
            A = s ? Math.sqrt(2) / 2 : 0,
            c = A;
          if (i instanceof C) {
            if (((l = i), !s)) {
              var p = !1;
              l.rewindVertices(0);
              for (var d = new P(); l.readVertex(d); )
                d.command !== P.Command.Close ||
                  l.hasVertexForRead() ||
                  (p = !0);
              (l.rewindVertices(0), p || (c = A = Math.sqrt(2) / 2));
            }
            l = new B(l, new E((v = h * n), 0, 0, v, 0, 0));
          } else {
            var f = null,
              m = 1;
            if (R.MARKER_CACHE.hasOwnProperty(i)) {
              var _ = R.MARKER_CACHE[i];
              switch (((f = _.vertices), (m = _.scaleFactor), i)) {
                case g.BorderMarker.Circle:
                default:
                case g.BorderMarker.Bullet:
                case g.BorderMarker.Diamond:
                  s && ((A = 0.5), (c = 0.5));
                  break;
                case g.BorderMarker.Line:
                case g.BorderMarker.LineDouble:
                  ((A = 0.5), (c = 0.5));
                  break;
                case g.BorderMarker.Arrow:
                case g.BorderMarker.ArrowPointer:
                  s && ((A = 1), (c = 0.5));
                  break;
                case g.BorderMarker.ArrowFat:
                  break;
                case g.BorderMarker.ArrowLine:
                case g.BorderMarker.ArrowLineBar:
                case g.BorderMarker.ArrowDoubleLine:
                  ((A = 1), (c = 0.25));
              }
            } else {
              switch (((f = new C()), i)) {
                case g.BorderMarker.Circle:
                default:
                  (f.addVertex(P.Command.Move, -1, -1),
                    f.addVertex(P.Command.Curve2, 0, -2),
                    f.addVertex(P.Command.Curve2, -1, -1.5519150295025124),
                    f.addVertex(P.Command.Curve2, -0.5519150295025124, -2),
                    f.addVertex(P.Command.Curve2, 1, -1),
                    f.addVertex(P.Command.Curve2, 0.5519150295025124, -2),
                    f.addVertex(P.Command.Curve2, 1, -1.5519150295025126),
                    f.addVertex(P.Command.Curve2, 0, 0),
                    f.addVertex(P.Command.Curve2, 1, -0.44808497049748786),
                    f.addVertex(P.Command.Curve2, 0.5519150295025124, 0),
                    f.addVertex(P.Command.Curve2, -1, -1),
                    f.addVertex(P.Command.Curve2, -0.5519150295025121, 0),
                    f.addVertex(P.Command.Curve2, -1, -0.4480849704974874),
                    f.addVertex(P.Command.Close),
                    s && ((A = 0.5), (c = 0.5)));
                  break;
                case g.BorderMarker.Bullet:
                  (f.addVertex(P.Command.Move, -1, -2),
                    f.addVertex(P.Command.Line, 1, -2),
                    f.addVertex(P.Command.Line, 1, 0),
                    f.addVertex(P.Command.Line, -1, 0),
                    f.addVertex(P.Command.Close),
                    s && ((A = 0.5), (c = 0.5)));
                  break;
                case g.BorderMarker.Diamond:
                  (f.addVertex(P.Command.Move, -1, -1),
                    f.addVertex(P.Command.Line, 0, -2),
                    f.addVertex(P.Command.Line, 1, -1),
                    f.addVertex(P.Command.Line, 0, 0),
                    f.addVertex(P.Command.Close),
                    (m = Math.cos(Math.PI / 4)),
                    s && ((A = 0.5), (c = 0.5)));
                  break;
                case g.BorderMarker.Line:
                  (f.addVertex(P.Command.Move, -1, 0),
                    f.addVertex(P.Command.Line, 1, 0),
                    (A = 0.5),
                    (c = 0.5));
                  break;
                case g.BorderMarker.LineDouble:
                  (f.addVertex(P.Command.Move, -2, 0),
                    f.addVertex(P.Command.Line, 2, 0),
                    f.addVertex(P.Command.Move, -2, -1),
                    f.addVertex(P.Command.Line, 2, -1),
                    (A = 0.5),
                    (c = 0.5));
                  break;
                case g.BorderMarker.Arrow:
                  (f.addVertex(P.Command.Move, -1, -2),
                    f.addVertex(P.Command.Line, 0, 0),
                    f.addVertex(P.Command.Line, 1, -2),
                    f.addVertex(P.Command.Close),
                    s && ((A = 1), (c = 0.5)));
                  break;
                case g.BorderMarker.ArrowPointer:
                  (f.addVertex(P.Command.Move, -1, -2),
                    f.addVertex(P.Command.Line, 0, 0),
                    f.addVertex(P.Command.Line, 1, -2),
                    f.addVertex(P.Command.Line, 0, -1.2),
                    f.addVertex(P.Command.Line, -1, -2),
                    f.addVertex(P.Command.Close),
                    s && ((A = 1), (c = 0.5)));
                  break;
                case g.BorderMarker.ArrowFat:
                  (f.addVertex(P.Command.Move, -2, -2),
                    f.addVertex(P.Command.Line, 0, 0),
                    f.addVertex(P.Command.Line, 2, -2),
                    f.addVertex(P.Command.Close));
                  break;
                case g.BorderMarker.ArrowLine:
                  (f.addVertex(P.Command.Move, -1, -2),
                    f.addVertex(P.Command.Line, 0, 0),
                    f.addVertex(P.Command.Line, 1, -2),
                    (A = 1),
                    (c = 0.25));
                  break;
                case g.BorderMarker.ArrowLineBar:
                  (f.addVertex(P.Command.Move, -1, -2),
                    f.addVertex(P.Command.Line, 0, 0),
                    f.addVertex(P.Command.Line, 1, -2),
                    f.addVertex(P.Command.Move, -2, 0),
                    f.addVertex(P.Command.Line, 2, 0),
                    (A = 1),
                    (c = 0.25));
                  break;
                case g.BorderMarker.ArrowDoubleLine:
                  (f.addVertex(P.Command.Move, -1, -2),
                    f.addVertex(P.Command.Line, 0, 0),
                    f.addVertex(P.Command.Line, 1, -2),
                    f.addVertex(P.Command.Move, -1, -3),
                    f.addVertex(P.Command.Line, 0, -1),
                    f.addVertex(P.Command.Line, 1, -3),
                    (A = 1),
                    (c = 0.25));
              }
              R.MARKER_CACHE[i] = {
                scaleFactor: m,
                vertices: f,
              };
            }
            var v = (R.MARKER_SIZE / 2 / m) * h * n;
            l = new B(f, new E(v, 0, 0, v, 0, 0));
          }
          var b = y.calculateBounds(l, !0);
          (a != u.LineCap.Square && a != u.LineCap.Round) || (c += 0.5);
          var w =
              -(b = b.expanded(0, r * c, 0, r * A)).getY() - b.getHeight() * o,
            x = -Math.atan2(t.getX() - e.getX(), t.getY() - e.getY()),
            S = new E(1, 0, 0, 1, 0, 0)
              .translated(0, w)
              .rotated(Math.PI + x)
              .translated(e.getX(), e.getY());
          return new B(l, S);
        }),
        (R.prototype._calculateMarkerVerticeBorderScale = function (e) {
          return e >= 1 ? Math.sqrt(e) : e;
        }),
        (R.prototype._paintBorderMarkers = function (e, t, i) {
          var n = this.getHeadMarkerVertices(i),
            r = this.getTailMarkerVertices(i);
          (n && this._paintBorderMarker(e, n, t, i, i.$_bhmo),
            r && this._paintBorderMarker(e, r, t, i, i.$_btmo));
        }),
        (R.prototype._paintBorderMarker = function (e, t, i, n, r) {
          var o = e.canvas.putVertices(t);
          r || !1 === o
            ? e.canvas.strokeVertices(i, n.$_bw)
            : e.canvas.fillVertices(i);
        }),
        (R.prototype._handleChange = function (e, t) {
          if (
            (this._handleGeometryChangeForProperties(
              e,
              t,
              R.GeometryProperties,
            ),
            e === r._Change.Store)
          )
            (this.storeProperties(
              t.blob,
              R.GeometryProperties,
              function (e, t) {
                return "trf" === e && t ? E.serialize(t) : t;
              },
            ),
              this.storeProperties(t.blob, R.MetaProperties));
          else if (e === r._Change.Restore)
            (this.restoreProperties(
              t.blob,
              R.GeometryProperties,
              function (e, t) {
                return "trf" === e && t ? E.deserialize(t).makeInvertible() : t;
              },
            ),
              this.restoreProperties(t.blob, R.MetaProperties));
          else if (
            e == r._Change.AfterPropertiesChange &&
            !this.isRecordedTransaction() &&
            t.properties.indexOf("scc") >= 0 &&
            !this.isRestoring() &&
            !this.getProperty("scc")
          )
            for (var i = this.getFirstChild(); null !== i; i = i.getNext())
              i.hasMixin(w.Anchor) &&
                (i.getProperty("vacr") ||
                  i.setProperty("vacr", w.Anchor.AnchorType.Start),
                i.getProperty("hacr") ||
                  i.setProperty("hacr", w.Anchor.AnchorType.Start));
          d.prototype._handleChange.call(this, e, t);
        }),
        (R.prototype._invalidateGeometryForChildUpdate = function (e) {
          e &&
            ((this._childrenPaintBBox = null),
            (this._collidesWithChildren = void 0),
            (this._collidesWithChildrenSeparate = void 0));
        }),
        (R.prototype._invalidatePaintBoxForChildUpdate = function () {
          ((this._childrenPaintBBox = null),
            (this._collidesWithChildren = void 0),
            (this._collidesWithChildrenSeparate = void 0));
        }),
        (R.prototype._styleFinishGeometryChange = function (e) {
          if (
            (w.Stylable.prototype._styleFinishGeometryChange.call(this, e), e)
          ) {
            var t = null;
            if (
              (this.getParent() instanceof R &&
                this.getParent().isFakeContainer() &&
                (t = this.getParent()),
              t)
            ) {
              var i = t,
                n = this.getEffects(),
                o = i.getEffects(),
                s = [],
                l = !1;
              (this._beginBlockChanges([
                r._Change.BeforePropertiesChange,
                r._Change.AfterPropertiesChange,
              ]),
                o._beginBlockChanges([
                  r._Change.BeforeChildRemove,
                  r._Change.AfterChildRemove,
                  r._Change.BeforeChildInsert,
                  r._Change.AfterChildInsert,
                ]));
              try {
                for (
                  var h = 0, A = n.getFirstChild();
                  null !== A;
                  A = A.getNext()
                ) {
                  if ((m = o.getChildByIndex(h)))
                    if (A.constructor.equals(m, A)) {
                      var c = [g.Effect.GeometryProperties];
                      if (
                        (A.constructor.GeometryProperties &&
                          c.push(A.constructor.GeometryProperties),
                        A.constructor.VisualProperties &&
                          c.push(A.constructor.VisualProperties),
                        c)
                      )
                        e: for (var p = 0; p < c.length; p++)
                          for (var u in c[p]) {
                            var d = A.getProperty(c[p][u]),
                              f = i.getProperty(c[p][u]);
                            if (a.equals(d, f, !0)) {
                              (s.push(m),
                                m._beginBlockChanges([
                                  r._Change.BeforePropertiesChange,
                                  r._Change.AfterPropertiesChange,
                                ]),
                                m.transferProperties(A, c, !0),
                                m._endBlockChanges([
                                  r._Change.BeforePropertiesChange,
                                  r._Change.AfterPropertiesChange,
                                ]));
                              break e;
                            }
                          }
                    } else
                      (l ||
                        (i._notifyChange(w._Change.PrepareGeometryUpdate),
                        (l = !0)),
                        o.insertChild(A.clone(), m),
                        o.removeChild(m));
                  else (o.insertChild(A.clone()), s.push(o.getLastChild()));
                  h++;
                }
                for (var m = o.getChildByIndex(h); null !== m; m = o.getNext())
                  (l ||
                    (i._notifyChange(w._Change.PrepareGeometryUpdate),
                    (l = !0)),
                    o.removeChild(m));
              } finally {
                if (
                  (o._endBlockChanges([
                    r._Change.BeforeChildRemove,
                    r._Change.AfterChildRemove,
                    r._Change.BeforeChildInsert,
                    r._Change.AfterChildInsert,
                  ]),
                  l)
                )
                  (i._resetFxCacheAndState(),
                    i._notifyChange(w._Change.FinishGeometryUpdate, 1));
                else if (s.length) {
                  for (var y = 0; y < s.length; y++)
                    i._resetFxCacheAndState(s[y], !0);
                  i._notifyChange(w._Change.FinishGeometryUpdate, 1);
                }
              }
              this._endBlockChanges([
                r._Change.BeforePropertiesChange,
                r._Change.AfterPropertiesChange,
              ]);
            }
          }
        }),
        (R.prototype._stylePropertiesUpdated = function (e, t) {
          var i = null;
          if (
            (this.getParent() instanceof R &&
              this.getParent().isFakeContainer() &&
              (i = this.getParent()),
            i)
          ) {
            for (
              var n = this.getProperties(e), o = [], s = [], l = 0;
              l < e.length;
              l++
            )
              a.equals(t[l], n[l]) || (o.push(e[l]), s.push(n[l]));
            o.length &&
              (this._beginBlockChanges([
                r._Change.BeforePropertiesChange,
                r._Change.AfterPropertiesChange,
              ]),
              i.setProperties(o, s),
              this._endBlockChanges([
                r._Change.BeforePropertiesChange,
                r._Change.AfterPropertiesChange,
              ]));
          }
        }),
        (R.prototype._getVertexHitCandidates = function (e, t, i) {
          return [this];
        }),
        (R.prototype._detailHitTest = function (e, t, i, n, r) {
          if (this.hasStyleBorder()) {
            var o = 0;
            a.each(this.getPaintLayers().getBorderLayers(!0), function (e, t) {
              o = Math.max(o, t.$_bw);
            });
            for (
              var s = o * t.getScaleFactor() + 2 * i,
                l = new T(),
                h = this._getVertexHitCandidates(e, t, i),
                c = 0;
              c < h.length;
              c++
            )
              if (y.hitTest(e.getX(), e.getY(), new B(h[c], t), s, !1, l))
                return new x(h[c], new R.HitResult(R.HitResult.Type.Stroke, l));
          }
          if (this.hasStyleFill() || n) {
            l = new T();
            var p = e,
              u = t;
            if (
              (t &&
                t.invertible() &&
                ((u = null), (p = t.inverted().mapPoint(e))),
              (h = h || this._getVertexHitCandidates(e, t, i)),
              this._hitInside(p, u, l, h))
            )
              return new x(
                this,
                new R.HitResult(
                  this.hasStyleFill()
                    ? R.HitResult.Type.Fill
                    : R.HitResult.Type.Other,
                  l,
                ),
              );
          }
          if (i) {
            h = h || this._getVertexHitCandidates(e, t, i);
            for (l = new T(), c = 0; c < h.length; c++)
              if (
                y.hitTest(
                  e.getX(),
                  e.getY(),
                  new B(h[c], t),
                  t.getScaleFactor() + 2 * i,
                  !1,
                  l,
                )
              )
                return new x(
                  this,
                  new R.HitResult(R.HitResult.Type.Outline, l),
                );
          }
          return this.hasMixin(A.LabelHolder) ? this._hitTestLabel(t, i) : null;
        }),
        (R.prototype._hitInside = function (e, t, i, n) {
          n = n || [this];
          for (var r = 0; r < n.length; r++) {
            var o = t ? new B(n[r], t) : n[r];
            if (y.hitTest(e.getX(), e.getY(), o, 0, !0, i)) {
              if (!i.outline) return !0;
              ((i.x = null),
                (i.y = null),
                (i.slope = null),
                (i.outline = null),
                (i.segment = null));
            }
          }
          return !1;
        }),
        (R.prototype.toString = function () {
          return "[GShape]";
        }),
        (e.exports = R));
    }