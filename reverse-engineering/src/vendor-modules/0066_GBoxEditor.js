/**
 * chunk.vendor.js Module #66
 * Type: class
 * Name: GBoxEditor
 */

function (e, t, i) {
      var n = i(0),
        r = i(17),
        o = i(11),
        a = i(52),
        s = i(5),
        l = i(24),
        h = i(14),
        A = i(6),
        c = i(7),
        p = i(12),
        u = i(81),
        d = i(542),
        g = i(543),
        f = i(39);

      function m() {
        (f.call(this),
          (this._flags =
            m.Flag.ResizeAll | m.Flag.RotateCorners | m.Flag.RotateHandle),
          (this._rotCornerDist = l.annotationHandles.resize.rotateDistance));
      }
      (n.inherit(m, f),
        (m.Flag = {
          ResizeEdges: 1024,
          ResizeCenters: 2048,
          RotateCorners: 4096,
          RotateHandle: 8192,
          ResizeAll: 3072,
        }),
        (m.OutlineAlignment = {
          Inside: -1,
          Center: 0,
          Outside: 1,
        }),
        (m.ROT_CORNER_DIST = 4),
        (m.RESIZE_HANDLE_PART_ID = o.uuid()),
        (m.ROTATION_HANDLE_PART_ID = o.uuid()),
        (m.EdTransformOptions = function () {}),
        n.inherit(m.EdTransformOptions, n),
        (m.EdTransformOptions.prototype.isMultiPage = !1),
        (m.EdTransformOptions.prototype.fullContentsTransform = !1),
        (m.EdTransformOptions.prototype.storedMoveData = null),
        (m.EdTransformOptions.prototype.doCollisionlessTransform = null),
        (m.prototype._rotCornerDist = 0),
        (m.prototype._alignment = 0),
        (m.prototype._storedMoveData = null),
        (m.prototype._computedOutlineColor = null),
        (m.prototype.getBox = function () {
          return null;
        }),
        (m.prototype.getBoxTransform = function () {
          return null;
        }),
        (m.prototype.transformBox = function (e, t) {
          this.edTransform(e, null, null, t);
        }),
        (m.prototype.movePart = function (e, t, i, n, r, o, a, s) {
          f.prototype.movePart.call(this, e, t, i, n, r, o, a);
          var h = null;
          if (((this._storedMoveData = null), e === m.RESIZE_HANDLE_PART_ID)) {
            var p = n.mapPoint(i);
            if (
              ((p = r.mapPoint(p, null, this._getGuideExclusions())),
              (C = this.getBox()))
            ) {
              if ((w = this.getBoxTransform())) {
                var u = w.inverted();
                u && (p = u.mapPoint(p));
              }
              t.offset && (p = p.add(t.offset));
              var d = C.getSide(t.side),
                g = p.getX() - d.getX(),
                y = p.getY() - d.getY(),
                _ = {
                  side: t.side,
                  position: r.mapPoint(
                    n.mapPoint(i),
                    null,
                    this._getGuideExclusions(),
                  ),
                  shift: o,
                  option: a,
                  dx: g,
                  dy: y,
                };
              (h = new m.EdTransformOptions()).storedMoveData = _;
              var v = o;
              l.isPreserveAspectRatioEnabledForSide(t.side) && (v = !0);
              var b = c.getResizeTransform(C, t.side, g, y, v, a);
              return (s && (h.isMultiPage = !0), this.transformBox(b, h), b);
            }
          } else if (e === m.ROTATION_HANDLE_PART_ID) {
            var C;
            if ((C = this.getBox())) {
              p = n.mapPoint(i);
              var w,
                E = C.getSide(A.Side.CENTER);
              (w = this.getBoxTransform()) && (E = w.mapPoint(E));
              d = n.mapPoint(t.point);
              if (t.corrPoint) {
                var B = c.getRotationTransform(
                  d.getX(),
                  d.getY(),
                  p.getX(),
                  p.getY(),
                  E.getX(),
                  E.getY(),
                  !1,
                );
                ((d = n.mapPoint(t.corrPoint)), (p = B.mapPoint(d)));
              }
              var x = c.getRotationTransform(
                d.getX(),
                d.getY(),
                p.getX(),
                p.getY(),
                E.getX(),
                E.getY(),
                o || l.snapRotate,
                o ? Math.PI / 12 : l.snapRotate ? Math.PI / 180 : null,
                l.snapRotate ? Math.PI / 45 : null,
              );
              return (
                ((h = new m.EdTransformOptions()).isMultiPage = !!s),
                (h.fullContentsTransform = !0),
                this.edTransform(x, e, t, h),
                x
              );
            }
          }
          return null;
        }),
        (m.prototype._applyPartMove = function (e, t, i, n) {
          (f.prototype._applyPartMove.call(this, e, t, i, n),
            (this._storedMoveData = null));
        }),
        (m.prototype.edTransform = function (e, t, i, n) {
          (f.prototype.edTransform.call(this, e, t, i, n),
            n && (this._storedMoveData = n.storedMoveData));
        }),
        (m.prototype.resetTransform = function () {
          (f.prototype.resetTransform.call(this),
            (this._storedMoveData = null));
        }),
        (m.prototype.resize = function (e, t) {
          var i = this.getBox();
          if (i) {
            var n = t.getX(),
              r = t.getY(),
              o = this.getBoxTransform();
            if (o) {
              var a = i.getSide(e),
                s = o.mapPoint(a).add(t),
                l = o.inverted(),
                h = l ? l.mapPoint(s) : s;
              ((n = h.getX() - a.getX()), (r = h.getY() - a.getY()));
            }
            var A = c.getResizeTransform(i, e, n, r);
            this.transformBox(A);
          }
        }),
        (m.prototype._showEditor = function () {
          return (
            this.hasFlag(f.Flag.Selected) && !this.hasFlag(f.Flag.HideEditor)
          );
        }),
        (m.prototype._computeOutlineColor = function (e, t) {
          return e.selectionShapeOutlineColor;
        }),
        (m.prototype._getOutlineColor = function (e, t) {
          return (
            this._computedOutlineColor || this._computeOutlineColor(e, t),
            this._computedOutlineColor
          );
        }),
        (m.prototype.paint = function (e, t) {
          if (
            (this._paintChildren.call(this, e, t, function (e) {
              return e.hasFlag(f.Flag.BackEditor);
            }),
            this._showEditor(t))
          ) {
            var i = e;
            if (
              (this._transform && (i = this._transform.multiplied(e)),
              this._showOutline())
            ) {
              var n =
                this.getColor() ||
                (this.hasFlag(f.Flag.Highlighted)
                  ? null
                  : this._getOutlineColor(t, e));
              this._paintOutline(i, t, !1, n, e);
            }
            (this._showRotationHandle() && this._paintRotationHandle(e, t),
              this._showResizeBox() &&
                this._paintResizeBoxOutline(i, t, !1, this.getColor() || null),
              this._showResizeHandles() && this._paintResizeHandles(e, t),
              this._postPaint(i, t));
          }
          this._paintChildren.call(this, e, t, function (e) {
            return !e.hasFlag(f.Flag.BackEditor);
          });
        }),
        (m.prototype.getCustomBBox = function (e, t) {
          var i = f.prototype.getCustomBBox.call(this, e, t);
          if (
            this._showResizeHandles() ||
            this._showRotationCorners() ||
            this._showRotationHandle()
          ) {
            var n = e;
            (t &&
              this._transform &&
              (n = n ? this._transform.multiplied(n) : this._transform),
              this._showResizeHandles() &&
                this._iterateResizeHandles(function (e, t, r) {
                  var o = u.getAnnotationBBox(
                    n,
                    e,
                    l.annotationHandles.resize.size,
                    !0,
                  );
                  o && !o.isEmpty() && (i = i ? i.united(o) : o);
                }, n),
              this._showRotationHandle() &&
                this._processRotationHandle(function (e) {
                  var t = d.getAnnotationBBox(null, e, !0);
                  t && !t.isEmpty() && (i = i ? i.united(t) : t);
                }, n),
              this._showRotationCorners() &&
                this._processRotationCorners(
                  function (e) {
                    var t = u.getAnnotationBBox(
                      null,
                      e,
                      l.annotationHandles.resize.size,
                      !0,
                    );
                    (t = t.expanded(
                      this._rotCornerDist,
                      this._rotCornerDist,
                      this._rotCornerDist,
                      this._rotCornerDist,
                    )) &&
                      !t.isEmpty() &&
                      (i = i ? i.united(t) : t);
                  }.bind(this),
                  n,
                ));
          }
          return i;
        }),
        (m.prototype.getBBox = function (e) {
          var t = this._getBBox(e, !0);
          if (t) {
            var i = this.getBBoxMargin();
            t = t.expanded(i, i, i, i);
          }
          return t;
        }),
        (m.prototype._getBBox = function (e, t) {
          if (
            this.hasFlag(f.Flag.Selected) ||
            this.hasFlag(f.Flag.Highlighted)
          ) {
            var i = e;
            this._transform && t && (i = this._transform.multiplied(e));
            var n = this.getBox();
            if (n) {
              var r = this.getBoxTransform();
              n = r ? r.multiplied(i).mapRect(n) : i.mapRect(n);
              var o = this.getCustomBBox(i, !1);
              o && (n = n.united(o));
            }
            return n;
          }
          return null;
        }),
        (m.prototype.getBoxQuadrilateral = function (e, t) {
          var i = this.getBox();
          if (i && !i.isEmpty()) {
            var n = this.getBoxTransform();
            return (
              t && (n = this._transform ? n.multiplied(this._transform) : n),
              (n = n ? n.multiplied(e) : e).mapQuadrilateral(i)
            );
          }
          return null;
        }),
        (m.prototype.getBBoxMargin = function () {
          var e = this._alignment > 0 ? 2 : 0;
          return Math.max(f.prototype.getBBoxMargin.call(this), e);
        }),
        (m.prototype.getCursor = function (e, t) {
          var i = null;
          return (
            e === m.ROTATION_HANDLE_PART_ID
              ? (i = t.handle
                  ? a.SelectRotateRound
                  : a.SelectRotate[t.rotSegment])
              : e === m.RESIZE_HANDLE_PART_ID &&
                t &&
                null !== t.resizeSegment &&
                (1 == t.resizeSegment || 5 == t.resizeSegment
                  ? (i = a.SelectResizeVert)
                  : 3 == t.resizeSegment || 7 == t.resizeSegment
                    ? (i = a.SelectResizeHoriz)
                    : 0 == t.resizeSegment || 4 == t.resizeSegment
                      ? (i = a.SelectResizeUpLeftDownRight)
                      : (2 != t.resizeSegment && 6 != t.resizeSegment) ||
                        (i = a.SelectResizeUpRightDownLeft)),
            i || null
          );
        }),
        (m.prototype._getPartInfoAt = function (e, t, i) {
          var n;
          if (
            this._showResizeHandles() &&
            (n = this._getResizePartInfoAt(e, t, i))
          )
            return n;
          if (
            this._showRotationCorners() &&
            (n = this._getRotationCornerPartInfoAt(e, t, i))
          )
            return n;
          if (
            this._showRotationHandle() &&
            (n = this._getRotationHandlePartInfoAt(e, t, i))
          )
            return n;
          return f.prototype._getPartInfoAt.call(this, e, t, i);
        }),
        (m.prototype._getResizePartInfoAt = function (e, t, i) {
          var n = null;
          return (
            this._iterateResizeHandles(
              function (i, r, o) {
                if (
                  u
                    .getAnnotationBBox(
                      t,
                      i,
                      l.annotationHandles.resize.size,
                      !1,
                    )
                    .expanded(
                      l.annotPickDistance,
                      l.annotPickDistance,
                      l.annotPickDistance,
                      l.annotPickDistance,
                    )
                    .containsPoint(e)
                ) {
                  var a = this._getResizePartInfoOffsetAt(i, r, t);
                  return (
                    (n = new f.PartInfo(
                      this,
                      m.RESIZE_HANDLE_PART_ID,
                      {
                        side: r,
                        point: i,
                        resizeSegment: o,
                        offset: a,
                      },
                      !0,
                      !1,
                    )),
                    !0
                  );
                }
              }.bind(this),
              t,
            ),
            n
          );
        }),
        (m.prototype._getResizePartInfoOffsetAt = function (e, t, i) {
          if (!l.adaptiveResizeHandles) return null;
          var n = this.getBox();
          if (!n || n.isEmpty()) return null;
          var r = (this.getBoxTransform() || new c()).inverted();
          if (!r) return null;
          var o = this._getResizeHandlesBBox(i);
          return o && A.equals(o, n)
            ? null
            : n.getSide(t).subtract(r.mapPoint(e));
        }),
        (m.prototype._getRotationCornerPartInfoAt = function (e, t, i) {
          var n = null;
          return (
            this._processRotationCorners(
              function (t, i) {
                if (
                  u
                    .getAnnotationBBox(
                      null,
                      t,
                      l.annotationHandles.resize.size,
                      !1,
                    )
                    .expanded(
                      this._rotCornerDist,
                      this._rotCornerDist,
                      this._rotCornerDist,
                      this._rotCornerDist,
                    )
                    .containsPoint(e)
                ) {
                  var r = p.getRotationSegment(t, e);
                  return (
                    (n = new f.PartInfo(
                      this,
                      m.ROTATION_HANDLE_PART_ID,
                      {
                        point: e,
                        rotSegment: r,
                        corrPoint: i,
                        noRelayout: !0,
                      },
                      !0,
                      !1,
                    )),
                    !0
                  );
                }
              }.bind(this),
              t,
              e,
            ),
            n
          );
        }),
        (m.prototype._getRotationHandlePartInfoAt = function (e, t, i) {
          var n = null;
          return (
            this._processRotationHandle(
              function (t, i, r) {
                var o = d.getAnnotationBBox(null, t, !1);
                if (o && o.containsPoint(e))
                  return (
                    (n = new f.PartInfo(
                      this,
                      m.ROTATION_HANDLE_PART_ID,
                      {
                        point: t,
                        handle: !0,
                        corrPoint: r,
                        noRelayout: !0,
                      },
                      !0,
                      !1,
                    )),
                    !0
                  );
              }.bind(this),
              t,
            ),
            n
          );
        }),
        (m.prototype._paintResizeHandles = function (e, t) {
          var i = l.annotationHandles.resize;
          this._iterateResizeHandles(
            function (n, o, a) {
              l.isPreserveAspectRatioEnabledForSide(o)
                ? g.paintAnnotation(
                    t,
                    e,
                    n,
                    0,
                    this.getColor() || this._getOutlineColor(t, e),
                  )
                : u.paintAnnotation(
                    t,
                    e,
                    n,
                    i.type,
                    i.inverted,
                    i.size,
                    this.getColor() || this._getOutlineColor(t, e),
                    r.WHITE,
                    i.outlineWidth,
                    i.shadowColor,
                    i.outsideStroke,
                  );
            }.bind(this),
            e,
            t.configuration.multiPageView,
          );
        }),
        (m.prototype._paintRotationHandle = function (e, t) {
          this._processRotationHandle(
            function (i, n) {
              var r = 0;
              l.outlineWidth % 2 != 0 && (r = 0.5);
              var o = i,
                a = d.getAnnotHalfWidth();
              o = p.getPointAtLength(o.getX(), o.getY(), n.getX(), n.getY(), a);
              var h = new s(Math.floor(n.getX()) + r, Math.floor(n.getY()) + r);
              ((o = new s(Math.floor(o.getX()) + r, Math.floor(o.getY()) + r)),
                t.canvas.strokeLine(
                  h.getX(),
                  h.getY(),
                  o.getX(),
                  o.getY(),
                  l.outlineWidth,
                  this.getColor() || this._getOutlineColor(t, e),
                ),
                d.paintAnnotation(
                  t,
                  null,
                  i,
                  d.isIconVisible() ? this.getRotationAngle() : 0,
                  this.getColor() || this._getOutlineColor(t, e),
                ));
            }.bind(this),
            e,
          );
        }),
        (m.prototype._showOutline = function () {
          return !1;
        }),
        (m.prototype._getGuideExclusions = function () {
          return null;
        }),
        (m.prototype._showAnnotations = function () {
          return (
            f.prototype._showAnnotations.call(this) &&
            this._showEditor() &&
            this.hasFlag(f.Flag.Selected) &&
            !this.hasFlag(f.Flag.Outline)
          );
        }),
        (m.prototype._postPaint = function (e, t) {}),
        (m.prototype._showResizeHandles = function () {
          return (
            !(
              this.hasFlag(f.Flag.Detail) &&
              !this._showResizeHandlesInDetailMode()
            ) &&
            this._showAnnotations() &&
            l.resizeHandles &&
            (this.hasFlag(m.Flag.ResizeEdges) ||
              this.hasFlag(m.Flag.ResizeCenters))
          );
        }),
        (m.prototype._showResizeHandlesInDetailMode = function () {
          return l.resizeHandlesInDetailMode;
        }),
        (m.prototype._showResizeBox = function () {
          return this._showResizeHandles() && l.resizeBox;
        }),
        (m.prototype._showRotationCorners = function () {
          return (
            this._showResizeHandles() &&
            this.hasFlag(m.Flag.RotateCorners) &&
            l.cornerRotate
          );
        }),
        (m.prototype._showRotationHandle = function () {
          return (
            !(this.hasFlag(f.Flag.Detail) && !l.rotateHandleInDetailMode) &&
            this._showResizeHandles() &&
            this.hasFlag(m.Flag.RotateHandle) &&
            l.rotateHandle
          );
        }),
        (m.prototype._iterateResizeHandles = function (e, t) {
          var i = this._getResizeHandlesBBox(t);
          if (i && !i.isEmpty()) {
            var n = this.getBoxTransform() || new c(),
              r = t ? n.multiplied(t) : n,
              o = l.annotationHandles.resize,
              a = u.getAnnotationPaintMargin(o.size),
              s = [],
              h = r.mapRect(i),
              d =
                l.adaptiveResizeHandles ||
                (h.getHeight() > a && h.getWidth() > a);
            (this.hasFlag(m.Flag.ResizeEdges) &&
              d &&
              (s = s.concat([
                A.Side.TOP_LEFT,
                A.Side.TOP_RIGHT,
                A.Side.BOTTOM_LEFT,
                A.Side.BOTTOM_RIGHT,
              ])),
              this.hasFlag(m.Flag.ResizeCenters) &&
                (s = s.concat([
                  A.Side.TOP_CENTER,
                  A.Side.BOTTOM_CENTER,
                  A.Side.RIGHT_CENTER,
                  A.Side.LEFT_CENTER,
                ])));
            for (
              var g = r.mapPoint(i.getSide(A.Side.CENTER)),
                f = p.getRotationSegment(
                  g,
                  r.mapPoint(i.getSide(A.Side.TOP_CENTER)),
                ),
                y = p.getRotationSegment(
                  g,
                  r.mapPoint(i.getSide(A.Side.RIGHT_CENTER)),
                ),
                _ =
                  (y >= 3 ? y : f - y >= 4 ? y + 8 : y) >
                  (f >= 3 ? f : y - f >= 4 ? f + 8 : f),
                v = 0;
              v < s.length;
              ++v
            ) {
              var b = s[v];
              if (
                !0 ===
                e(
                  n.mapPoint(i.getSide(b)),
                  b,
                  this._getResizeSegment(b, f, y, _),
                )
              )
                break;
            }
          }
        }),
        (m.prototype._getResizeHandlesBBox = function (e) {
          var t = this.getBox();
          if (!l.adaptiveResizeHandles || !this._showResizeHandles()) return t;
          if (t && !t.isEmpty()) {
            var i = this.getBoxTransform() || new c(),
              n = e ? i.multiplied(e) : i;
            if (n.invertible()) {
              var r = n.mapRect(t),
                o = l.annotationHandles.resize,
                a = 0;
              (this.hasFlag(m.Flag.ResizeEdges) && (a += 2 * o.size + 5),
                this.hasFlag(m.Flag.ResizeCenters) && (a += o.size + 5));
              var s = a,
                h = a,
                A = r.getWidth() > s,
                p = r.getHeight() > h;
              if (!A || !p) {
                if (!A) {
                  var u = s - r.getWidth();
                  r = r.expanded(u / 2, 0, u / 2, 0);
                }
                if (!p) {
                  u = h - r.getHeight();
                  r = r.expanded(0, u / 2, 0, u / 2);
                }
                t = n.inverted().mapRect(r);
              }
            }
          }
          return t;
        }),
        (m.prototype._getResizeSegment = function (e, t, i, n) {
          var r = null;
          switch (e) {
            case A.Side.TOP_CENTER:
              r = t;
              break;
            case A.Side.TOP_RIGHT:
              r = n ? (t + 1) % 8 : (t + 7) % 8;
              break;
            case A.Side.RIGHT_CENTER:
              r = i;
              break;
            case A.Side.BOTTOM_RIGHT:
              r = n ? (i + 1) % 8 : (i + 7) % 8;
              break;
            case A.Side.BOTTOM_CENTER:
              r = (t + 4) % 8;
              break;
            case A.Side.BOTTOM_LEFT:
              r = n ? (t + 5) % 8 : (t + 3) % 8;
              break;
            case A.Side.LEFT_CENTER:
              r = (i + 4) % 8;
              break;
            case A.Side.TOP_LEFT:
              r = n ? (i + 5) % 8 : (i + 3) % 8;
          }
          return r;
        }),
        (m.prototype._processRotationHandle = function (e, t) {
          var i = this._getResizeHandlesBBox(t);
          if (i && !i.isEmpty()) {
            var n = l.annotationHandles.rotate,
              r = this.getBoxTransform();
            r = r || new c();
            var o = (r = t ? r.multiplied(t) : r).mapPoint(
                i.getSide(
                  "top" == l.rotateHandle
                    ? A.Side.TOP_LEFT
                    : A.Side.BOTTOM_RIGHT,
                ),
              ),
              a = r.mapPoint(
                i.getSide(
                  "top" == l.rotateHandle
                    ? A.Side.TOP_CENTER
                    : A.Side.BOTTOM_CENTER,
                ),
              ),
              h = r.mapPoint(
                i.getSide(
                  "top" == l.rotateHandle
                    ? A.Side.TOP_RIGHT
                    : A.Side.BOTTOM_LEFT,
                ),
              ),
              u = p.ptDist(o.getX(), o.getY(), a.getX(), a.getY()),
              d = o.getX() - a.getX(),
              g = o.getY() - a.getY(),
              f = n.distance + n.size * this._alignment,
              m = new s((-g / u) * f, (d / u) * f),
              y = a;
            this._alignment < 0
              ? (y = p.getPointAtLength(
                  a.getX(),
                  a.getY(),
                  o.getX(),
                  o.getY(),
                  -this._alignment,
                ))
              : this._alignment > 0 &&
                (y = p.getPointAtLength(
                  a.getX(),
                  a.getY(),
                  h.getX(),
                  h.getY(),
                  this._alignment,
                ));
            var _ = y.add(m),
              v = r.mapPoint(i.getSide(A.Side.CENTER));
            p.segmentSide(
              o.getX(),
              o.getY(),
              h.getX(),
              h.getY(),
              _.getX(),
              _.getY(),
            ) ==
              p.segmentSide(
                o.getX(),
                o.getY(),
                h.getX(),
                h.getY(),
                v.getX(),
                v.getY(),
              ) && (_ = y.subtract(m));
            var b = i.getSide(A.Side.RIGHT_CENTER);
            e(_, y, (b = r.mapPoint(b)));
          }
        }),
        (m.prototype.getRotationAngle = function () {
          var e = this.getBoxTransform();
          return (
            this._transform &&
              (e = e ? e.multiplied(this._transform) : this._transform),
            e ? e.decomposed().rotate.getRotationFactor() : 0
          );
        }),
        (m.prototype._processRotationCorners = function (e, t, i) {
          var n = this.getBox();
          if (n && !n.isEmpty()) {
            var r = this.getBoxTransform();
            r = r || new c();
            var o = (r = t ? r.multiplied(t) : r).inverted();
            if (!i || !o || !n.containsPoint(o.mapPoint(i))) {
              var a = [
                  A.Side.TOP_LEFT,
                  A.Side.TOP_RIGHT,
                  A.Side.BOTTOM_LEFT,
                  A.Side.BOTTOM_RIGHT,
                ],
                s = n.getSide(A.Side.RIGHT_CENTER);
              s = r.mapPoint(s);
              for (var l = 0; l < a.length; ++l) {
                var h = a[l];
                if (!0 === e(r.mapPoint(n.getSide(h)), s)) break;
              }
            }
          }
        }),
        (m.prototype._paintOutline = function (e, t, i, n, r) {
          this._showResizeBox() || this._paintResizeBoxOutline(e, t, i, n);
        }),
        (m.prototype._paintResizeBoxOutline = function (e, t, i, n, r) {
          var o = this._getResizeHandlesBBox(e);
          if (o) {
            var a = e,
              s = this.getBoxTransform();
            ((a = s ? s.multiplied(a) : a),
              this._paintTransformedQuadrilateral(a, o, t, n, r));
          }
        }),
        (m.prototype._paintTransformedQuadrilateral = function (e, t, i, n, o) {
          var a,
            A,
            p,
            u = null,
            d = o || l.outlineWidth,
            g = d % 2 != 0,
            y = (e = e || new c()).mapQuadrilateral(t);
          (y &&
            y.length &&
            (u = y.map(function (e) {
              var t = Math.floor(e.getX()),
                i = Math.floor(e.getY());
              return (g && ((t += 0.5), (i += 0.5)), new s(t, i));
            })),
          u) &&
            (this._alignment &&
              (a = i.pushCanvas(
                i.canvas.createCanvas(e.mapRect(t).expanded(2, 2, 2, 2)),
              )),
            i.canvas.putVertices(u, !0),
            (A =
              n ||
              (this.hasFlag(f.Flag.Highlighted)
                ? i.highlightOutlineColor
                : this._getOutlineColor(i, e))),
            (p = this._alignment ? (g ? 2 * d + 1 : 2 * d) : d),
            i.canvas.strokeVertices(A, p),
            this._alignment &&
              (this._alignment === m.OutlineAlignment.Outside
                ? i.canvas.fillVertices(
                    r.BLACK,
                    1,
                    h.CompositeOperator.DestinationOut,
                  )
                : this._alignment === m.OutlineAlignment.Inside &&
                  i.canvas.fillVertices(
                    r.BLACK,
                    1,
                    h.CompositeOperator.DestinationIn,
                  ),
              a.drawCanvas(i.canvas),
              i.canvas.finish(),
              i.popCanvas()));
        }),
        (m.prototype.toString = function () {
          return "[Object GBoxEditor]";
        }),
        (e.exports = m));
    }