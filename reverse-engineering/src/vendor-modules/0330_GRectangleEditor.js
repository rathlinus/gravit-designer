/**
 * chunk.vendor.js Module #330
 * Type: class
 * Name: GRectangleEditor
 */

function (e, t, i) {
      var n = i(0),
        r = i(11),
        o = (i(22), i(56)),
        a = (i(128), i(36)),
        s = i(39),
        l = i(5),
        h = i(24),
        A = i(6),
        c = i(45),
        p = i(155),
        u = i(7),
        d = i(73),
        g = i(12),
        f = i(81),
        m = i(17);

      function y(e) {
        p.call(this, e);
      }
      (n.inherit(y, p),
        a.exports(y, d),
        (y.SHOULDER_PART_ID = r.uuid()),
        (y.prototype.getBBoxMargin = function () {
          var e = p.prototype.getBBoxMargin.call(this);
          return this._showSegmentDetails()
            ? Math.max(
                f.getAnnotationPaintMargin(h.annotationHandles.rectangle.size),
                e,
              )
            : e;
        }),
        (y.prototype.createElementPreview = function () {
          this._elementPreview ||
            (this._setElementPreview(new d()),
            this._elementPreview.transferProperties(this._element, [
              o.GeometryProperties,
              d.GeometryProperties,
              c.MetaProperties,
            ]));
        }),
        (y.prototype.getPointPreview = function (e) {
          this._elementPreview || this.createElementPreview();
          var t = e.getParent().getIndexOfChild(e);
          return this._elementPreview.getAnchorPoints().getChildByIndex(t);
        }),
        (y.prototype.movePart = function (e, t, i, n, r, o, a) {
          var s = p.prototype.movePart.call(this, e, t, i, n, r, o, a);
          if (e.id === y.SHOULDER_PART_ID) {
            this.createElementPreview();
            var A = this.getPaintElement(),
              c = A.getTransform(),
              f = this.getPointPreview(e.ap),
              m = new l(f.getProperty("x"), f.getProperty("y")),
              _ = c || new u(),
              v = n.inverted(),
              b = (_ = _.multiplied(v)).mapPoint(m),
              C = A.getProperty("uf"),
              w = this._getShoulderLimits(f, C, c, v, b);
            if (w) {
              var E = _.inverted().mapPoint(i),
                B = this._element.getAnchorPoints().getPreviousPoint(e.ap),
                x = new l(B.getProperty("x"), B.getProperty("y")),
                P = g.getVectorProjection(
                  m.getX(),
                  m.getY(),
                  x.getX(),
                  x.getY(),
                  E.getX(),
                  E.getY(),
                  !0,
                ),
                S =
                  ((B = this._element.getAnchorPoints().getNextPoint(e.ap)),
                  new l(B.getProperty("x"), B.getProperty("y"))),
                T = g.getVectorProjection(
                  m.getX(),
                  m.getY(),
                  S.getX(),
                  S.getY(),
                  E.getX(),
                  E.getY(),
                  !0,
                ),
                I = _.mapPoint(P),
                F = _.mapPoint(T),
                R = g.ptDist(I.getX(), I.getY(), b.getX(), b.getY()),
                D = g.ptDist(F.getX(), F.getY(), b.getX(), b.getY()),
                k = (R - h.annotationHandles.rectangle.margin) / w.sLeft,
                G = (D - h.annotationHandles.rectangle.margin) / w.sRight,
                Q = g.getPointAtLength(
                  b.getX(),
                  b.getY(),
                  w.limLPos.getX(),
                  w.limLPos.getY(),
                  k,
                ),
                M = g.getPointAtLength(
                  b.getX(),
                  b.getY(),
                  w.limRPos.getX(),
                  w.limRPos.getY(),
                  G,
                ),
                N = n.mapPoint(Q),
                U = n.mapPoint(M),
                V = c ? c.mapPoint(m) : m,
                O = g.ptDist(N.getX(), N.getY(), V.getX(), V.getY()),
                L = g.ptDist(U.getX(), U.getY(), V.getX(), V.getY()),
                Y = d.getGeometryPropertiesSidePrefix(e.side);
              (o
                ? null !== L && null !== O
                  ? L > O
                    ? (L = O)
                    : (O = L)
                  : null !== L
                    ? (O = L)
                    : (L = O)
                : this.getPaintElement().getProperty(Y + "_uf") &&
                  (null !== L && null !== O
                    ? L > O
                      ? (O = L)
                      : (L = O)
                    : null !== L
                      ? (O = L)
                      : (L = O)),
                this.getPaintElement().setProperties(
                  [Y + "_sx", Y + "_sy"],
                  [O, L],
                ),
                this.requestInvalidation());
            }
          }
          return s;
        }),
        (y.prototype._applyPartMove = function (e, t, i, n) {
          if (e.id === y.SHOULDER_PART_ID) {
            (this._element.transferProperties(this._elementPreview, [
              d.GeometryProperties,
            ]),
              this.resetPartMove(e, t));
            for (var r = [], o = 0; o < this._partSelection.length; ++o)
              this._partSelection[o].id === y.SHOULDER_PART_ID &&
                r.push(this._partSelection[o]);
            this.updatePartSelection(!0, r);
          }
          p.prototype._applyPartMove.call(this, e, t, i, n);
        }),
        (y.prototype.canApplyTransform = function () {
          return (
            (this._elementPreview &&
              this._elementPreview.getTransform().invertible()) ||
            p.prototype.canApplyTransform.call(this)
          );
        }),
        (y.prototype._hasCenterCross = function () {
          return !0;
        }),
        (y.prototype._postPaint = function (e, t) {
          (p.prototype._postPaint.call(this, e, t),
            this.getPaintElement().iterateSegments(
              function (i, n, r, o, a, s) {
                var l = {
                  id: y.SHOULDER_PART_ID,
                  side: n,
                };
                if (
                  (this._showSegmentDetails() || this.isPartSelected(l)) &&
                  (this._processCornerVisualization(
                    e,
                    s,
                    n,
                    function (e, i, n, r, o, a) {
                      var s = r.mapPoint(n);
                      (this._element.getProperty("uf") &&
                        !this.isPartSelected(l)) ||
                        (t.canvas.strokeLine(
                          o.getX(),
                          o.getY(),
                          s.getX(),
                          s.getY(),
                          h.outlineWidth,
                          t.selectionOutlineColor,
                          !0,
                        ),
                        t.canvas.strokeLine(
                          a.getX(),
                          a.getY(),
                          s.getX(),
                          s.getY(),
                          h.outlineWidth,
                          t.selectionOutlineColor,
                          !0,
                        ));
                      var A = h.annotationHandles.rectangle,
                        c = this.isPartSelected(l);
                      (A.inverted &&
                        (c = A.hasOwnProperty("selectable") ? A.inverted : !c),
                        f.paintAnnotation(
                          t,
                          null,
                          s,
                          A.type,
                          c,
                          A.size,
                          m.WHITE,
                          t.annotationColor,
                          A.outlineWidth,
                          A.shadowColor,
                          A.outsideStroke,
                        ));
                    }.bind(this),
                  ),
                  this._element.getProperty("uf") &&
                    h.annotationHandles.suppressRedundantCorners)
                )
                  return !0;
              }.bind(this),
              !0,
            ));
        }),
        (y.prototype._partIdAreEqual = function (e, t) {
          var i = e === t || e.id === t.id;
          return (i && e.id && (i = e.side === t.side), i);
        }),
        (y.prototype._getPartInfoAt = function (e, t, i) {
          if (this._showSegmentDetails()) {
            var n = this._getDetailsPartInfoAt(e, t, i);
            if (n) return n;
          }
          return p.prototype._getPartInfoAt.call(this, e, t, i);
        }),
        (y.prototype._getDetailsPartInfoAt = function (e, t, i) {
          var n = null;
          return (
            this.getPaintElement().iterateSegments(
              function (i, r, o, a, l, A) {
                if (
                  (this._processCornerVisualization(
                    t,
                    A,
                    r,
                    function (t, i, r, o, a, l) {
                      f
                        .getAnnotationBBox(
                          o,
                          r,
                          h.annotationHandles.rectangle.size,
                          !1,
                        )
                        .expanded(
                          h.annotPickDistance,
                          h.annotPickDistance,
                          h.annotPickDistance,
                          h.annotPickDistance,
                        )
                        .containsPoint(e) &&
                        (n = new s.PartInfo(
                          this,
                          {
                            id: y.SHOULDER_PART_ID,
                            side: i,
                            ap: t,
                            point: r,
                          },
                          null,
                          !0,
                          !0,
                        ));
                    }.bind(this),
                  ),
                  n)
                )
                  return !0;
              }.bind(this),
              !0,
            ),
            n
          );
        }),
        (y.prototype._getShoulderLimits = function (e, t, i, n, r) {
          var o = null,
            a = e.getLeftShoulderLimitPoint(i, t),
            s = e.getRightShoulderLimitPoint(i, t),
            l = n ? n.mapPoint(a) : a,
            A = n ? n.mapPoint(s) : s,
            c = g.ptDist(l.getX(), l.getY(), r.getX(), r.getY()),
            p = g.ptDist(A.getX(), A.getY(), r.getX(), r.getY()),
            u =
              h.annotationHandles.rectangle.margin +
              h.annotationHandles.rectangle.size;
          c > u &&
            p > u &&
            (o = {
              limLPos: l,
              sLeft: (c - u) / c,
              limRPos: A,
              sRight: (p - u) / p,
            });
          return o;
        }),
        (y.prototype._processCornerVisualization = function (e, t, i, n) {
          var r = this.getPaintElement(),
            o = r.getAnchorPoints().getChildByIndex(t),
            a = r.getTransform(),
            s = new l(o.getProperty("x"), o.getProperty("y")),
            c = a || new u(),
            p = (c = e ? c.multiplied(e) : c).mapPoint(s),
            d = r.getProperty("uf"),
            f = this._getShoulderLimits(o, d, a, e, p);
          if (f) {
            var m = a
              ? o.getLeftShoulderPointTransformed(a, !0)
              : o.getLeftShoulderPoint(!0);
            m ||
              ((m = new l(o.getProperty("x"), o.getProperty("y"))),
              (m = a ? a.mapPoint(m) : m));
            var y = a
              ? o.getRightShoulderPointTransformed(a, !0)
              : o.getRightShoulderPoint(!0);
            (y ||
              ((y = new l(o.getProperty("x"), o.getProperty("y"))),
              (y = a ? a.mapPoint(y) : y)),
              (m = e ? e.mapPoint(m) : m),
              (y = e ? e.mapPoint(y) : y));
            var _,
              v = g.ptDist(m.getX(), m.getY(), p.getX(), p.getY()),
              b = g.ptDist(y.getX(), y.getY(), p.getX(), p.getY()),
              C = h.annotationHandles.rectangle.margin + f.sLeft * v,
              w = h.annotationHandles.rectangle.margin + f.sRight * b,
              E = g.getPointAtLength(
                p.getX(),
                p.getY(),
                f.limLPos.getX(),
                f.limLPos.getY(),
                C,
              ),
              B = g.getPointAtLength(
                p.getX(),
                p.getY(),
                f.limRPos.getX(),
                f.limRPos.getY(),
                w,
              ),
              x = c.inverted(),
              P = x.mapPoint(E),
              S = x.mapPoint(B);
            switch (i) {
              case A.Side.TOP_LEFT:
                _ = new l(S.getX(), P.getY());
                break;
              case A.Side.TOP_RIGHT:
                _ = new l(P.getX(), S.getY());
                break;
              case A.Side.BOTTOM_RIGHT:
                _ = new l(S.getX(), P.getY());
                break;
              case A.Side.BOTTOM_LEFT:
                _ = new l(P.getX(), S.getY());
            }
            _ && n(o, i, (_ = a ? a.mapPoint(_) : _), e, m, y);
          }
        }),
        (y.prototype._showSegmentDetails = function () {
          return (
            this._showAnnotations() &&
            this.hasFlag(s.Flag.Detail) &&
            !this._elementPreview
          );
        }),
        (y.prototype.toString = function () {
          return "[Object GRectangleEditor]";
        }),
        (e.exports = y));
    }