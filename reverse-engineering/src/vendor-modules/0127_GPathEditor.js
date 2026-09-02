/**
 * chunk.vendor.js Module #127
 * Type: class
 * Name: GPathEditor
 */

function (e, t, i) {
      var n = i(22),
        r = i(82),
        o = i(2),
        a = i(0),
        s = i(60),
        l = i(56),
        h = i(39),
        A = i(36),
        c = i(5),
        p = i(24),
        u = i(66),
        d = i(155),
        g = i(113),
        f = i(7),
        m = i(45),
        y = i(12),
        _ = i(81),
        v = i(64),
        b = i(59),
        C = i(17),
        w = i(52),
        E = i(6),
        B = i(28),
        x = i(207);

      function P(e) {
        (d.call(this, e), (this._flags = this.filterFlags(this._flags)));
        for (
          var t = e.getAnchorPoints().queryAll(":selected"), i = 0;
          i < t.length;
          ++i
        )
          (this._partSelection || (this._partSelection = []),
            this._partSelection.push({
              type: P.PartType.Point,
              point: t[i],
            }));
      }
      (a.inherit(P, d),
        A.exports(P, s),
        (P.PartType = {
          Segment: 1,
          Point: 2,
          LeftHandle: 3,
          RightHandle: 4,
          LeftShoulder: 5,
          RightShoulder: 6,
        }),
        (P.SegmentData = {
          HitRes: 1,
          Handles: 2,
        }),
        (P.prototype._sourceIndexToPreviewIndex = null),
        (P.prototype._constrainPair = null),
        (P.prototype._constrainPainted = !1),
        (P.prototype._activeExtedingMode = !1),
        (P.prototype.getActiveExtendingMode = function () {
          return this._activeExtedingMode;
        }),
        (P.prototype.setActiveExtendingMode = function (e) {
          this._activeExtedingMode = e;
        }),
        (P.prototype.getPointPreview = function (e) {
          return this.getPathPointPreview(e);
        }),
        (P.prototype.getBBox = function (e) {
          var t = d.prototype.getBBox.call(this, e),
            i = function (e) {
              e && !e.isEmpty() && (t = t ? t.united(e) : e);
            };
          return (
            this._constrainPair &&
              i(
                _.getAnnotationBBox(
                  null,
                  this._constrainPair[0],
                  p.annotationHandles.path.constrain.size,
                  !0,
                ),
              ),
            this._showAnnotations() && !this.hasFlag(u.Flag.ResizeAll)
              ? (this._transform && (e = this._transform.multiplied(e)),
                this._iteratePoints(
                  !0,
                  function (t) {
                    (t.leftHandlePosition &&
                      i(
                        _.getAnnotationBBox(
                          e,
                          t.leftHandlePosition,
                          p.annotationHandles.path.control.size,
                          !0,
                        ),
                      ),
                      t.rightHandlePosition &&
                        i(
                          _.getAnnotationBBox(
                            e,
                            t.rightHandlePosition,
                            p.annotationHandles.path.control.size,
                            !0,
                          ),
                        ),
                      t.leftShoulderPosition &&
                        i(
                          _.getAnnotationBBox(
                            e,
                            t.leftShoulderPosition,
                            p.annotationHandles.path.corner.size,
                            !0,
                          ),
                        ),
                      t.rightShoulderPosition &&
                        i(
                          _.getAnnotationBBox(
                            e,
                            t.rightShoulderPosition,
                            p.annotationHandles.path.corner.size,
                            !0,
                          ),
                        ),
                      i(
                        _.getAnnotationBBox(
                          e,
                          t.position,
                          p.annotationHandles.path.node.size,
                          !0,
                        ),
                      ));
                  }.bind(this),
                ))
              : this.hasFlag(h.Flag.HideEditor) ||
                this.hasFlag(h.Flag.Outline) ||
                (this.hasFlag(u.Flag.ResizeAll) &&
                  this.hasFlag(h.Flag.Selected)) ||
                this._iteratePoints(
                  !0,
                  function (t) {
                    t.anchorPoint.hasFlag(o.Flag.Highlighted) &&
                      i(
                        _.getAnnotationBBox(
                          e,
                          t.position,
                          p.annotationHandles.path.node.size,
                          !0,
                        ),
                      );
                  }.bind(this),
                ),
            t
          );
        }),
        (P.prototype.getElementSelectionBBox = function () {
          var e = null;
          if (this._partSelection && this._partSelection.length)
            for (var t = 0; t < this._partSelection.length; ++t) {
              var i = this._partSelection[t];
              if (i.type == P.PartType.Point) {
                if ((r = this.getPointCoord(i.point))) {
                  var n = new E(r.getX(), r.getY(), 0, 0);
                  e = e ? e.united(n) : n;
                }
              } else if (i.type == P.PartType.Segment) {
                var r;
                ((r = this.getPointCoord(i.apLeft)) &&
                  ((n = new E(r.getX(), r.getY(), 0, 0)),
                  (e = e ? e.united(n) : n)),
                  (r = this.getPointCoord(i.apRight)) &&
                    ((n = new E(r.getX(), r.getY(), 0, 0)), (e = e.united(n))));
              }
            }
          return (e || (e = this._element.getGeometryBBox()), e);
        }),
        (P.prototype.setFlag = function (e, t) {
          (d.prototype.setFlag.call(this, this.filterFlags(e), t),
            this.hasFlag(u.Flag.ResizeAll) && this._handleFinishDrawing());
        }),
        (P.prototype.removeFlag = function (e, t) {
          (d.prototype.removeFlag.call(this, e, t),
            e !== h.Flag.Selected ||
              this._element.hasFlag(o.Flag.Selected) ||
              this._handleFinishDrawing());
        }),
        (P.prototype.filterFlags = function (e) {
          return (
            this._element.isLine() &&
              p.simpleLineMode &&
              (0 != (e & u.Flag.ResizeAll) && (e &= ~u.Flag.ResizeAll),
              0 != (e & u.Flag.RotateHandle) && (e &= ~u.Flag.RotateHandle)),
            e
          );
        }),
        (P.prototype.movePart = function (e, t, i, n, r, o, a) {
          var s = null;
          if (e === u.RESIZE_HANDLE_PART_ID || e === u.ROTATION_HANDLE_PART_ID)
            s = d.prototype.movePart.call(this, e, t, i, n, r, o, a);
          else {
            switch (
              (this.requestInvalidation(),
              this._createPathPreviewIfNecessary(e.point),
              this.extendPreviewToFull(),
              e.type)
            ) {
              case P.PartType.LeftHandle:
                s = this._movePreviewPointCoordinates(
                  e.point,
                  "hlx",
                  "hly",
                  i,
                  n,
                  o,
                  r,
                );
                break;
              case P.PartType.RightHandle:
                s = this._movePreviewPointCoordinates(
                  e.point,
                  "hrx",
                  "hry",
                  i,
                  n,
                  o,
                  r,
                );
                break;
              case P.PartType.LeftShoulder:
              case P.PartType.RightShoulder:
                var l = n.mapPoint(i);
                s = this._movePreviewPointShoulders(e, l, o);
                break;
              case P.PartType.Segment:
                if (t.type == P.SegmentData.Handles) {
                  var h = this.getPathPointPreview(e.apLeft),
                    A = this.getPathPointPreview(e.apRight),
                    p = ((l = n.mapPoint(i)), new c(t.hitRes.x, t.hitRes.y)),
                    g = this._element.getTransform();
                  g && (p = g.mapPoint(p));
                  var m = l.subtract(p),
                    y =
                      (new c(h.getProperty("x"), h.getProperty("y")),
                      new c(A.getProperty("x"), A.getProperty("y")),
                      new f().translated(m.getX() * t.cL, m.getY() * t.cL));
                  this._transformPreviewPointCoordinates(
                    e.apLeft,
                    "hrx",
                    "hry",
                    y,
                    t.apLhr,
                  );
                  y = new f().translated(
                    m.getX() * t.cR + 0.01,
                    m.getY() * t.cR + 0.01,
                  );
                  this._transformPreviewPointCoordinates(
                    e.apRight,
                    "hlx",
                    "hly",
                    y,
                    t.apRhl,
                  );
                }
            }
            this.requestInvalidation();
          }
          return s;
        }),
        (P.prototype.resetPartMove = function (e, t) {
          (this.releasePathPreview(), this.requestInvalidation());
        }),
        (P.prototype._applyPartMove = function (e, t, i, r) {
          if (e === u.RESIZE_HANDLE_PART_ID || e === u.ROTATION_HANDLE_PART_ID)
            d.prototype._applyPartMove.call(this, e, t, i, r);
          else
            switch (e.type) {
              case P.PartType.LeftHandle:
                this._assignPreviewPointPropertiesToSourcePoint(e.point, [
                  "hlx",
                  "hly",
                  "ah",
                  "tp",
                ]);
                break;
              case P.PartType.RightHandle:
                this._assignPreviewPointPropertiesToSourcePoint(e.point, [
                  "hrx",
                  "hry",
                  "ah",
                  "tp",
                ]);
                break;
              case P.PartType.LeftShoulder:
              case P.PartType.RightShoulder:
                this._assignPreviewPointPropertiesToSourcePoint(e.point, [
                  "cl",
                  "cr",
                ]);
                break;
              case P.PartType.Segment:
                (this._element._beginBlockEvents([n.GeometryChangeEvent]),
                  this._element.beginUpdate(),
                  this._element
                    .getAnchorPoints()
                    ._beginBlockCompositeEvents(!1, !0, !1),
                  this._assignPreviewPointPropertiesToSourcePoint(e.apLeft, [
                    "hrx",
                    "hry",
                    "ah",
                    "tp",
                  ]),
                  this._element._endBlockEvents([n.GeometryChangeEvent]),
                  this._element
                    .getAnchorPoints()
                    ._endBlockCompositeEvents(!1, !0, !1),
                  this._assignPreviewPointPropertiesToSourcePoint(e.apRight, [
                    "hlx",
                    "hly",
                    "ah",
                    "tp",
                  ]),
                  this._element.endUpdate());
            }
          this.resetPartMove(e, t);
        }),
        (P.prototype.edTransform = function (e, t, i, n) {
          if (
            this._partSelection &&
            this._partSelection.length > 0 &&
            !this.hasFlag(u.Flag.ResizeAll)
          ) {
            (this.requestInvalidation(), this.extendPreviewToFull());
            for (
              var r = function (t) {
                  (this._transformPreviewPointCoordinates(t, "x", "y", e),
                    t.getProperty("ah") ||
                      (null != t.getProperty("hlx") &&
                        null != t.getProperty("hly") &&
                        this._transformPreviewPointCoordinates(
                          t,
                          "hlx",
                          "hly",
                          e,
                        ),
                      null != t.getProperty("hrx") &&
                        null != t.getProperty("hry") &&
                        this._transformPreviewPointCoordinates(
                          t,
                          "hrx",
                          "hry",
                          e,
                        )));
                }.bind(this),
                o = 0;
              o < this._partSelection.length;
              ++o
            ) {
              var a = this._partSelection[o];
              a.type === P.PartType.Point
                ? r(a.point)
                : a.type === P.PartType.Segment &&
                  t &&
                  this._partIdAreEqual(a, t) &&
                  i.type == P.SegmentData.HitRes &&
                  (r(a.apLeft), r(a.apRight));
            }
            this.requestInvalidation();
          } else d.prototype.edTransform.call(this, e, t, i, n);
        }),
        (P.prototype.resetTransform = function () {
          (this.releasePathPreview(),
            (this._constrainPair = null),
            d.prototype.resetTransform.call(this));
        }),
        (P.prototype.canApplyTransform = function () {
          return (
            (this._partSelection &&
              this._partSelection.length > 0 &&
              !this.hasFlag(u.Flag.ResizeAll)) ||
            (this._transform &&
              !this._transform.isIdentity() &&
              this._transform.invertible()) ||
            (this._elementPreview &&
              this._elementPreview.getTransform().invertible() &&
              !this._elementPreview.getTransform().isIdentity()) ||
            d.prototype.canApplyTransform.call(this)
          );
        }),
        (P.prototype._applyTransform = function (e, t, i, r) {
          if (
            this._partSelection &&
            this._partSelection.length > 0 &&
            !this.hasFlag(u.Flag.ResizeAll)
          ) {
            (e._beginBlockEvents([n.GeometryChangeEvent]),
              e.beginUpdate(),
              e.getAnchorPoints()._beginBlockCompositeEvents(!1, !0, !1));
            for (var o = [], a = 0; a < this._partSelection.length; ++a) {
              var s = this._partSelection[a];
              s.type === P.PartType.Point
                ? (a == this._partSelection.length - 1 &&
                    (e._endBlockEvents([n.GeometryChangeEvent]),
                    e.getAnchorPoints()._endBlockCompositeEvents(!1, !0, !1)),
                  this._transferPreviewProperties(s.point, e),
                  o.push(s))
                : s.type === P.PartType.Segment &&
                  (this._transferPreviewProperties(s.apLeft, e),
                  a == this._partSelection.length - 1 &&
                    (e._endBlockEvents([n.GeometryChangeEvent]),
                    e.getAnchorPoints()._endBlockCompositeEvents(!1, !0, !1)),
                  this._transferPreviewProperties(s.apRight, e),
                  (s.apLeft.getParent().getPreviousPoint(s.apLeft) ||
                    s.apRight.getParent().getNextPoint(s.apRight)) &&
                    (o.push({
                      type: P.PartType.Point,
                      point: s.apLeft,
                    }),
                    o.push({
                      type: P.PartType.Point,
                      point: s.apRight,
                    })));
            }
            (e.endUpdate(),
              this.requestInvalidation(),
              this.resetTransform(),
              this.updatePartSelection(!1, o));
          } else d.prototype._applyTransform.call(this, e, t, i, r);
          this._constrainPair = null;
        }),
        (P.prototype.selectToolDragStartAction = function (e, t) {
          if (e.editor !== this) return null;
          this._constrainPair = null;
          var i = e,
            n = e.isolated,
            r = e.selectable;
          if (e.isolated || e.id.type != P.PartType.Point)
            if (e.id.type != P.PartType.Segment || t)
              e.id.type == P.PartType.Segment &&
                ((i.isolated = e.data.rightButton.isolated),
                (i.selectable = e.data.rightButton.selectable));
            else {
              var a = e.data.hitRes,
                s = e.id.apLeft,
                l = e.id.apRight;
              if (s && l) {
                (this.requestInvalidation(), this.extendPreviewToFull());
                var A = this.getPathPointPreview(s),
                  u = this.getPathPointPreview(l);
                if (A && u)
                  if (y.isEqualEps(a.slope, 0, 0.001))
                    i = new h.PartInfo(
                      this,
                      {
                        type: H,
                        point: s,
                      },
                      {
                        apSelected: !1,
                      },
                      !1,
                      !0,
                    );
                  else if (y.isEqualEps(a.slope, 1, 0.001))
                    i = new h.PartInfo(
                      this,
                      {
                        type: H,
                        point: l,
                      },
                      {
                        apSelected: !1,
                      },
                      !1,
                      !0,
                    );
                  else {
                    var d,
                      g,
                      f = s.getProperty("x"),
                      _ = s.getProperty("y"),
                      b = l.getProperty("x"),
                      C = l.getProperty("y"),
                      w = a;
                    if (
                      (null !== s.getProperty("hrx") &&
                        null !== s.getProperty("hry")) ||
                      (null !== l.getProperty("hlx") &&
                        null !== l.getProperty("hly"))
                    )
                      if (
                        null === s.getProperty("hrx") ||
                        null === s.getProperty("hry")
                      ) {
                        var E = u.getProperty("hlx"),
                          B = u.getProperty("hly");
                        ((W = f + (2 / 3) * (E - f)),
                          (Z = _ + (2 / 3) * (B - _)),
                          (d = b + (2 / 3) * (E - b)),
                          (g = C + (2 / 3) * (B - C)),
                          A.setProperties(["ah", "hrx", "hry"], [!1, W, Z]),
                          u.setProperties(["ah", "hlx", "hly"], [!1, d, g]),
                          this.requestInvalidation(),
                          (T = this._elementPreview.pathHitTest(
                            new c(a.x, a.y),
                            null,
                            !1,
                          )) &&
                            T.data &&
                            !y.isEqualEps(T.data.slope, 0, 0.001) &&
                            !y.isEqualEps(T.data.slope, 1, 0.001) &&
                            (w = T.data));
                      } else if (
                        null === l.getProperty("hlx") ||
                        null === l.getProperty("hly")
                      ) {
                        var x = A.getProperty("hrx"),
                          S = A.getProperty("hry");
                        ((d = b + (2 / 3) * (x - b)),
                          (g = C + (2 / 3) * (S - C)),
                          (W = f + (2 / 3) * (x - f)),
                          (Z = _ + (2 / 3) * (S - _)),
                          A.setProperties(["ah", "hrx", "hry"], [!1, W, Z]),
                          u.setProperties(["ah", "hlx", "hly"], [!1, d, g]),
                          this.requestInvalidation(),
                          (T = this._elementPreview.pathHitTest(
                            new c(a.x, a.y),
                            null,
                            !1,
                          )) &&
                            T.data &&
                            !y.isEqualEps(T.data.slope, 0, 0.001) &&
                            !y.isEqualEps(T.data.slope, 1, 0.001) &&
                            (w = T.data));
                      } else
                        a &&
                          (A.setProperty("ah", !1),
                          u.setProperty("ah", !1),
                          this.requestInvalidation(),
                          (W = A.getProperty("hrx")),
                          (Z = A.getProperty("hry")),
                          (d = u.getProperty("hlx")),
                          (g = u.getProperty("hly")));
                    else {
                      var T,
                        I = (b - f) / 3,
                        F = (C - _) / 3,
                        R = I * a.slope,
                        D = I - R,
                        k = F * a.slope,
                        G = F - k;
                      ((W = a.x - R),
                        (Z = a.y - k),
                        A.setProperties(
                          ["ah", "hrx", "hry"],
                          [!1, a.x - R, a.y - k],
                        ),
                        (d = a.x + D),
                        (g = a.y + G),
                        u.setProperties(
                          ["ah", "hlx", "hly"],
                          [!1, a.x + D, a.y + G],
                        ),
                        this.requestInvalidation(),
                        (T = this._elementPreview.pathHitTest(
                          new c(a.x, a.y),
                          null,
                          !1,
                        )) &&
                          T.data &&
                          !y.isEqualEps(T.data.slope, 0, 0.001) &&
                          !y.isEqualEps(T.data.slope, 1, 0.001) &&
                          (w = T.data));
                    }
                    var Q = 3 * (1 - w.slope) * (1 - w.slope) * w.slope,
                      M = 3 * w.slope * w.slope * (1 - w.slope);
                    i = new h.PartInfo(
                      this,
                      {
                        type: P.PartType.Segment,
                        point: null,
                        apLeft: s,
                        apRight: l,
                      },
                      {
                        type: P.SegmentData.Handles,
                        cL: 1 / (Q + M),
                        apLhr: new c(W, Z),
                        cR: 1 / (Q + M),
                        apRhl: new c(d, g),
                        hitRes: w,
                      },
                      n,
                      r,
                    );
                  }
                else i = null;
              } else i = null;
            }
          else {
            var N = e.id.point,
              U = P.PartType.Point,
              V = N.getProperty("tp");
            if (
              (N.hasFlag(o.Flag.Selected) || this.selectOnePoint(N),
              t &&
                m.isCornerType(V) &&
                null != this._element.getAnchorPoints().getPreviousPoint(N) &&
                null != this._element.getAnchorPoints().getNextPoint(N))
            ) {
              var O = N.getProperty("cl"),
                L = N.getProperty("cr"),
                Y = p.annotationHandles.path.corner.size + p.annotPickDistance;
              if (
                (null == L || L < 2 * Y
                  ? (U = P.PartType.RightShoulder)
                  : (null == O || O < 2 * Y) && (U = P.PartType.LeftShoulder),
                U != P.PartType.Point)
              )
                ((O = null != O ? O : Y),
                  (L = null != L ? L : Y),
                  this.requestInvalidation(),
                  this._createPathPreviewIfNecessary(N),
                  this.extendPreviewToFull(),
                  (X = this.getPathPointPreview(N))
                    ? (X.setProperties(["cl", "cr"], [O, L]),
                      (n = !0),
                      (r = !1),
                      (i = new h.PartInfo(
                        this,
                        {
                          type: U,
                          point: N,
                        },
                        null,
                        n,
                        r,
                      )))
                    : (i = null));
            } else if (t) {
              var X;
              if (m.isCornerType(V))
                i = new h.PartInfo(
                  this,
                  {
                    type: P.PartType.Point,
                    point: N,
                  },
                  {
                    apSelected: !0,
                  },
                  n,
                  r,
                );
              else if (
                (this.requestInvalidation(),
                this._createPathPreviewIfNecessary(N),
                this.extendPreviewToFull(),
                (X = this.getPathPointPreview(N)))
              ) {
                var H = null;
                ((n = !0), (r = !1));
                if (v.modifiers.optionKey) {
                  var W = N.getProperty("hrx"),
                    Z = N.getProperty("hry");
                  (null === W || null === Z
                    ? ((H = P.PartType.RightHandle),
                      X.setProperties(
                        ["ah", "hrx", "hry"],
                        [!1, N.getProperty("x"), N.getProperty("y")],
                      ))
                    : ((H = P.PartType.LeftHandle),
                      X.setProperties(
                        ["ah", "hlx", "hly"],
                        [!1, N.getProperty("x"), N.getProperty("y")],
                      )),
                    (i = new h.PartInfo(
                      this,
                      {
                        type: H,
                        point: N,
                      },
                      {
                        apSelected: !0,
                      },
                      n,
                      r,
                    )),
                    this.updatePartSelection(!0, [i.id]));
                } else {
                  var z = N.getProperty("x"),
                    j = N.getProperty("y");
                  if (V != m.AnchorPoint.Type.Connector)
                    ((H = P.PartType.RightHandle),
                      X.setProperties(
                        ["tp", "ah", "hrx", "hry", "hlx", "hly"],
                        [m.AnchorPoint.Type.Mirror, !1, z, j, z, j],
                      ));
                  else {
                    var J = N.getPrevious();
                    J && !m.isCornerType(J.getProperty("tp"))
                      ? ((H = P.PartType.LeftHandle),
                        X.setProperties(["ah", "hlx", "hly"], [!1, z, j]))
                      : ((H = P.PartType.RightHandle),
                        X.setProperties(["ah", "hrx", "hry"], [!1, z, j]));
                  }
                  i = new h.PartInfo(
                    this,
                    {
                      type: H,
                      point: N,
                    },
                    {
                      apSelected: !0,
                    },
                    n,
                    r,
                  );
                }
              } else i = null;
            }
          }
          return i;
        }),
        (P.prototype.getCursor = function (e, t) {
          return e.type == P.PartType.Segment
            ? w.SelectCurve
            : d.prototype.getCursor.call(this, e, t);
        }),
        (P.prototype.canHandleDblClick = function () {
          return !0;
        }),
        (P.prototype.handleDblClick = function (e, t) {
          if (
            p.toggleAnchorPointType &&
            e &&
            e.type == P.PartType.Point &&
            this.hasFlag(h.Flag.Detail)
          )
            return (
              e.point.getProperty("tp") === m.AnchorPoint.Type.Asymmetric
                ? e.point.setProperties(
                    ["tp", "ah"],
                    [m.AnchorPoint.Type.Symmetric, !0],
                  )
                : e.point.setProperties(
                    ["tp", "ah"],
                    [m.AnchorPoint.Type.Asymmetric, !1],
                  ),
              !0
            );
          return !1;
        }),
        (P.prototype._attach = function () {
          var e = this._element.getScene();
          (null != e &&
            e.addEventListener(
              n.GeometryChangeEvent,
              this._geometryChange,
              this,
            ),
            this._element.addEventListener(
              o.AfterInsertEvent,
              this._afterInsert,
              this,
            ));
        }),
        (P.prototype._detach = function () {
          this.requestInvalidation();
          for (
            var e = this._element.getAnchorPoints().getFirstChild();
            null != e;
            e = e.getNext()
          )
            (e.removeFlag(o.Flag.Selected), e.removeFlag(o.Flag.Highlighted));
          this.requestInvalidation();
          var t = this._element.getScene();
          (null != t &&
            t.removeEventListener(
              n.GeometryChangeEvent,
              this._geometryChange,
              this,
            ),
            this._element.removeEventListener(
              o.AfterInsertEvent,
              this._afterInsert,
              this,
            ),
            d.prototype._detach.call(this));
        }),
        (P.prototype.hitAnchorPoint = function (e, t, i, n) {
          if (e) {
            var r = this._element.getTransform();
            return (
              i && (r = r ? r.multiplied(i) : i),
              _.getAnnotationBBox(
                r,
                new c(e.getProperty("x"), e.getProperty("y")),
                p.annotationHandles.path.node.size,
              )
                .expanded(n, n, n, n)
                .containsPoint(t)
            );
          }
          return !1;
        }),
        (P.prototype.getPointCoord = function (e) {
          var t = null;
          if (
            e.getPath() == this._element ||
            (this._elementPreview && e.getPath() == this._elementPreview)
          ) {
            var i = this._element;
            this._elementPreview &&
              e.getPath() == this._elementPreview &&
              (i = this._elementPreview);
            var n = e.getProperty("x"),
              r = e.getProperty("y");
            t = new c(n, r);
            var o = i.getTransform();
            o && (t = o.mapPoint(t));
          }
          return t;
        }),
        (P.prototype.getPathBasePreview = function () {
          return (this.extendPreviewToFull(), this._elementPreview);
        }),
        (P.prototype._getPartInfoAt = function (e, t, i) {
          if (this._showAnnotations() && !this.hasFlag(u.Flag.ResizeAll)) {
            var n = function (i, n) {
                return (
                  !!i &&
                  _.getAnnotationBBox(t, i, n)
                    .expanded(
                      p.annotPickDistance,
                      p.annotPickDistance,
                      p.annotPickDistance,
                      p.annotPickDistance,
                    )
                    .containsPoint(e)
                );
              }.bind(this),
              r = null;
            if (
              (this._iteratePoints(
                !1,
                function (e) {
                  var t = null,
                    i = !0,
                    a = !1;
                  if (
                    (n(e.position, p.annotationHandles.path.node.size)
                      ? ((t = P.PartType.Point), (i = !1), (a = !0))
                      : n(
                            e.rightHandlePosition,
                            p.annotationHandles.path.control.size,
                          )
                        ? (t = P.PartType.RightHandle)
                        : n(
                              e.leftHandlePosition,
                              p.annotationHandles.path.control.size,
                            )
                          ? (t = P.PartType.LeftHandle)
                          : n(
                                e.rightShoulderPosition,
                                p.annotationHandles.path.corner.size,
                              )
                            ? (t = P.PartType.RightShoulder)
                            : n(
                                e.leftShoulderPosition,
                                p.annotationHandles.path.corner.size,
                              ) && (t = P.PartType.LeftShoulder),
                    t)
                  )
                    return (
                      (r = new h.PartInfo(
                        this,
                        {
                          type: t,
                          point: e.anchorPoint,
                        },
                        {
                          apSelected: e.anchorPoint.hasFlag(o.Flag.Selected),
                        },
                        i,
                        a,
                      )),
                      !0
                    );
                }.bind(this),
              ),
              r)
            )
              return r;
            var a = this._element.pathHitTest(e, t, !1, p.pickDistance);
            if (
              a &&
              !y.isEqualEps(a.data.slope, 0) &&
              !y.isEqualEps(a.data.slope, 1)
            ) {
              var s = a.data,
                l = this._element
                  .getAnchorPoints()
                  .getChildByIndex(s.segment - 1),
                A = l ? this._element.getAnchorPoints().getNextPoint(l) : null;
              return new h.PartInfo(
                this,
                {
                  type: P.PartType.Segment,
                  point: null,
                  apLeft: l,
                  apRight: A,
                },
                {
                  type: P.SegmentData.HitRes,
                  hitRes: s,
                  rightButton: {
                    isolated: !1,
                    selectable: !0,
                  },
                },
                !0,
                !1,
              );
            }
          }
          var c = d.prototype._getPartInfoAt.call(this, e, t, i);
          return c &&
            ((c.id !== u.RESIZE_HANDLE_PART_ID &&
              c.id !== u.ROTATION_HANDLE_PART_ID) ||
              this.hasFlag(u.Flag.ResizeAll))
            ? c
            : null;
        }),
        (P.prototype._postPaint = function (e, t) {
          if (
            (d.prototype._postPaint.call(this, e, t),
            this._constrainPair && !this._constrainPainted)
          ) {
            var i = p.annotationHandles.path.constrain;
            (t.canvas.strokeLine(
              this._constrainPair[0].getX(),
              this._constrainPair[0].getY(),
              this._constrainPair[1].getX(),
              this._constrainPair[1].getY(),
              2 * p.outlineWidth,
              t.highlightOutlineColor,
              !1,
            ),
              _.paintAnnotation(
                t,
                null,
                this._constrainPair[0],
                i.type,
                !1,
                i.size,
                C.WHITE,
                t.highlightOutlineColor,
              ),
              (this._constrainPainted = !0));
          }
          this._showAnnotations() && !this.hasFlag(u.Flag.ResizeAll)
            ? this._iteratePoints(
                !0,
                function (i) {
                  if (
                    (i.leftHandlePosition &&
                      this._paintControlHandle(
                        e,
                        t,
                        i.position,
                        i.leftHandlePosition,
                      ),
                    i.rightHandlePosition &&
                      this._paintControlHandle(
                        e,
                        t,
                        i.position,
                        i.rightHandlePosition,
                      ),
                    i.leftShoulderPosition || i.rightShoulderPosition)
                  ) {
                    var n = p.annotationHandles.path.corner;
                    (i.leftShoulderPosition &&
                      _.paintAnnotation(
                        t,
                        e,
                        i.leftShoulderPosition,
                        n.type,
                        !1,
                        n.size,
                        C.WHITE,
                        t.annotationColor,
                      ),
                      i.rightShoulderPosition &&
                        _.paintAnnotation(
                          t,
                          e,
                          i.rightShoulderPosition,
                          n.type,
                          !1,
                          n.size,
                          C.WHITE,
                          t.annotationColor,
                        ));
                  }
                  var r =
                    (n = p.annotationHandles.path.node).color ||
                    t.selectionOutlineColor;
                  (_.paintAnnotation(
                    t,
                    e,
                    i.position,
                    i.annotation,
                    i.anchorPoint.hasFlag(o.Flag.Selected),
                    n.size,
                    r,
                    C.WHITE,
                    n.outlineWidth,
                  ),
                    i.anchorPoint.hasFlag(o.Flag.Highlighted) &&
                      _.paintAnnotation(
                        t,
                        e,
                        i.position,
                        i.annotation,
                        !0,
                        n.size,
                        t.highlightOutlineColor,
                        C.WHITE,
                        n.outlineWidth,
                      ));
                }.bind(this),
              )
            : this.hasFlag(h.Flag.HideEditor) ||
              this.hasFlag(h.Flag.Outline) ||
              !this._element.hasFlag(o.Flag.Highlighted) ||
              (this.hasFlag(u.Flag.ResizeAll) &&
                this.hasFlag(h.Flag.Selected)) ||
              this._iteratePoints(
                !0,
                function (i) {
                  if (i.anchorPoint.hasFlag(o.Flag.Highlighted)) {
                    var n = p.annotationHandles.path.node;
                    _.paintAnnotation(
                      t,
                      e,
                      i.position,
                      i.annotation,
                      !0,
                      n.size,
                      t.highlightOutlineColor,
                      C.WHITE,
                    );
                  }
                }.bind(this),
              );
        }),
        (P.prototype._partIdAreEqual = function (e, t) {
          var i = e.type === t.type;
          return (
            i && e.type == P.PartType.Point
              ? (i = e.point === t.point)
              : i &&
                e.type == P.PartType.Segment &&
                (i = e.apLeft === t.apLeft && e.apRight == t.apRight),
            i
          );
        }),
        (P.prototype._updatePartSelection = function (e) {
          if (!this.hasFlag(u.Flag.ResizeAll)) {
            this.requestInvalidation();
            var t = this._filterSelection(e),
              i = this._partSelection;
            if (((this._partSelection = t), i))
              for (var n = 0; n < i.length; ++n) {
                var r = i[n],
                  a = !1;
                if (t)
                  for (var s = 0; s < t.length; ++s)
                    if (
                      (t[s].point === r.point && r.point) ||
                      (r.type == P.PartType.Segment &&
                        r.type == t[s].type &&
                        r.apLeft == t[s].apLeft &&
                        r.apRight == t[s].apRight)
                    ) {
                      a = !0;
                      break;
                    }
                a ||
                  (r.point
                    ? r.point.removeFlag(o.Flag.Selected)
                    : r.type == P.PartType.Segment &&
                      (r.apLeft.removeFlag(o.Flag.Selected),
                      r.apRight.removeFlag(o.Flag.Selected)));
              }
            if (t)
              for (n = 0; n < t.length; ++n) {
                (r = t[n]).point
                  ? r.point.setFlag(o.Flag.Selected)
                  : r.type == P.PartType.Segment &&
                    (r.apLeft.setFlag(o.Flag.Selected),
                    r.apRight.setFlag(o.Flag.Selected));
              }
            this.requestInvalidation();
          }
        }),
        (P.prototype._paintControlHandle = function (e, t, i, n) {
          var r = i,
            o = n;
          e && ((r = e.mapPoint(i)), (o = e.mapPoint(n)));
          var a = p.annotationHandles.path.control,
            s = a.color || t.selectionOutlineColor;
          (t.canvas.strokeLine(
            r.getX(),
            r.getY(),
            o.getX(),
            o.getY(),
            p.outlineWidth,
            s,
          ),
            _.paintAnnotation(t, e, n, a.type, !1, a.size, s, s));
        }),
        (P.prototype._iteratePoints = function (e, t) {
          for (
            var i = e ? this.getPaintElement() : this._element,
              n = i.getAnchorPoints(),
              r = i.getTransform(),
              a = n.getFirstChild();
            null != a;
            a = a.getNext()
          ) {
            var s = n.getPreviousPoint(a),
              l = n.getNextPoint(a),
              h = a.getProperty("tp"),
              A = new c(a.getProperty("x"), a.getProperty("y")),
              u = {
                type: h,
                anchorPoint: a,
                position: A,
                annotation: p.annotationHandles.path.node.straightType,
                leftHandlePosition: null,
                rightHandlePosition: null,
                leftShoulderPosition: null,
                rightShoulderPosition: null,
              };
            if (
              ((h !== m.AnchorPoint.Type.Asymmetric &&
                h !== m.AnchorPoint.Type.Symmetric &&
                h !== m.AnchorPoint.Type.Mirror &&
                h !== m.AnchorPoint.Type.Connector) ||
                ((u.annotation = p.annotationHandles.path.node.smoothType),
                !0 === a.getProperty("ah") &&
                  (u.annotation = p.annotationHandles.path.node.autoType)),
              a.hasFlag(o.Flag.Selected) || (s && s.hasFlag(o.Flag.Selected)))
            )
              null !==
                (d = new c(
                  a.getProperty("hlx"),
                  a.getProperty("hly"),
                )).getX() &&
                null !== d.getY() &&
                (u.leftHandlePosition = d);
            if (a.hasFlag(o.Flag.Selected) || (l && l.hasFlag(o.Flag.Selected)))
              null !==
                (d = new c(
                  a.getProperty("hrx"),
                  a.getProperty("hry"),
                )).getX() &&
                null !== d.getY() &&
                (u.rightHandlePosition = d);
            if (
              a.hasFlag(o.Flag.Selected) &&
              h !== m.AnchorPoint.Type.Asymmetric &&
              h !== m.AnchorPoint.Type.Symmetric &&
              h !== m.AnchorPoint.Type.Mirror &&
              h !== m.AnchorPoint.Type.Connector
            ) {
              var d;
              if (a.getProperty("cl") && s)
                (d = a.getLeftShoulderPoint(!0)) &&
                  null !== d.getX() &&
                  null !== d.getY() &&
                  (u.leftShoulderPosition = d);
              if (a.getProperty("cr") && l)
                (d = a.getRightShoulderPoint(!0)) &&
                  null !== d.getX() &&
                  null !== d.getY() &&
                  (u.rightShoulderPosition = d);
            }
            if (r) {
              var g = r.mapPoint(u.position);
              (u.leftHandlePosition &&
                (u.leftHandlePosition = r.mapPoint(u.leftHandlePosition)),
                u.rightHandlePosition &&
                  (u.rightHandlePosition = r.mapPoint(u.rightHandlePosition)),
                u.leftShoulderPosition &&
                  (u.leftShoulderPosition = a.getLeftShoulderPointTransformed(
                    r,
                    !0,
                  )),
                u.rightShoulderPosition &&
                  (u.rightShoulderPosition = a.getRightShoulderPointTransformed(
                    r,
                    !0,
                  )),
                (u.position = g));
            }
            if (!0 === t(u)) break;
          }
        }),
        (P.prototype.createElementPreview = function () {
          this.getPathPreview(!0);
        }),
        (P.prototype.getPathPreview = function (e, t) {
          return (
            this.requestInvalidation(),
            e || this._createPathPreviewIfNecessary(t),
            this.extendPreviewToFull(),
            this.requestInvalidation(),
            this._elementPreview
          );
        }),
        (P.prototype.getPath = function () {
          return this._element;
        }),
        (P.PointsSelectionType = {
          No: "N",
          First: "F",
          Last: "L",
          Middle: "M",
          Several: "S",
        }),
        (P.prototype.getPointsSelectionType = function () {
          var e = P.PointsSelectionType.No;
          if (this._partSelection && !this.hasFlag(u.Flag.ResizeAll))
            if (this._partSelection.length > 1)
              e = P.PointsSelectionType.Several;
            else if (
              this._partSelection[0].point &&
              this._partSelection[0].point.hasFlag(o.Flag.Selected)
            ) {
              var t = this._partSelection[0].point;
              e =
                t === this._element.getAnchorPoints().getLastChild()
                  ? P.PointsSelectionType.Last
                  : t === this._element.getAnchorPoints().getFirstChild()
                    ? P.PointsSelectionType.First
                    : P.PointsSelectionType.Middle;
            }
          return e;
        }),
        (P.prototype.selectOnePoint = function (e) {
          this.updatePartSelection(!1, [
            {
              type: P.PartType.Point,
              point: e,
            },
          ]);
        }),
        (P.prototype.isPartSelectionUnderCollisionAllowed = function () {
          return !0;
        }),
        (P.prototype.updatePartSelectionUnderCollision = function (e, t, i) {
          var n = this._element.getAnchorPoints(),
            r = this._element.getTransform(),
            a = [],
            s = [],
            l = [];
          this.requestInvalidation();
          for (var h = n.getFirstChild(); null != h; h = h.getNext()) {
            !i &&
              h.hasFlag(o.Flag.Highlighted) &&
              h.removeFlag(o.Flag.Highlighted);
            var A = new c(h.getProperty("x"), h.getProperty("y"));
            ((A = r ? r.mapPoint(A) : A),
              b.hitTest(A.getX(), A.getY(), t, 0, !0)
                ? i
                  ? h.hasFlag(o.Flag.Highlighted) ||
                    (e && h.hasFlag(o.Flag.Selected))
                    ? h.hasFlag(o.Flag.Highlighted) &&
                      e &&
                      h.hasFlag(o.Flag.Selected) &&
                      l.push({
                        type: P.PartType.Point,
                        point: h,
                      })
                    : s.push({
                        type: P.PartType.Point,
                        point: h,
                      })
                  : a.push({
                      type: P.PartType.Point,
                      point: h,
                    })
                : i &&
                  (!h.hasFlag(o.Flag.Highlighted) &&
                  e &&
                  h.hasFlag(o.Flag.Selected)
                    ? s.push({
                        type: P.PartType.Point,
                        point: h,
                      })
                    : ((h.hasFlag(o.Flag.Highlighted) && !e) ||
                        !h.hasFlag(o.Flag.Selected)) &&
                      l.push({
                        type: P.PartType.Point,
                        point: h,
                      })));
          }
          if (
            ((!a.length && !s.length) ||
              this._element.hasFlag(o.Flag.Selected) ||
              (i
                ? this._element.hasFlag(o.Flag.Highlighted) ||
                  this._element.setFlag(o.Flag.Highlighted)
                : this._element.setFlag(o.Flag.Selected)),
            i)
          ) {
            if (s.length)
              for (var p = 0; p < s.length; ++p) {
                (u = s[p]).type != P.PartType.Point ||
                  u.point.hasFlag(o.Flag.Highlighted) ||
                  u.point.setFlag(o.Flag.Highlighted);
              }
            if (l.length)
              for (p = 0; p < l.length; ++p) {
                var u;
                (u = l[p]).type == P.PartType.Point &&
                  u.point.hasFlag(o.Flag.Highlighted) &&
                  u.point.removeFlag(o.Flag.Highlighted);
              }
            this.requestInvalidation();
          } else
            (this._element.hasFlag(o.Flag.Highlighted) &&
              this._element.removeFlag(o.Flag.Highlighted),
              this.updatePartSelection(e, a));
          return this._partSelection && this._partSelection.length;
        }),
        (P.prototype._canDeletePart = function (e, t) {
          if (t) {
            var i = t._getMasterSibling(e.getMultireferenceId(), !1, !0);
            if (i && i !== e) return !1;
          }
          return !0;
        }),
        (P.prototype.isDeletePartsAllowed = function () {
          var e = !1;
          if (
            this._partSelection &&
            this._partSelection.length &&
            !this.hasFlag(u.Flag.ResizeAll)
          ) {
            for (
              var t = 0, i = this._element.getParent();
              i && ("symbol" !== o.getName(i) || i.isMaster());
            )
              i = i.getParent();
            for (var n = 0; n < this._partSelection.length; ++n)
              this._partSelection[n].type == P.PartType.Point &&
                this._canDeletePart(this._partSelection[n].point, i) &&
                ++t;
            for (
              var r = 0, a = this._element.getAnchorPoints().getFirstChild();
              null != a;
              a = a.getNext(), ++r
            );
            r > t && (e = !0);
          }
          return e;
        }),
        (P.prototype.deletePartsSelected = function () {
          if (this._partSelection && !this.hasFlag(u.Flag.ResizeAll)) {
            for (
              var e = this._element.getAnchorPoints(),
                t = this._element.getParent();
              t && ("symbol" !== o.getName(t) || t.isMaster());
            )
              t = t.getParent();
            for (var i = 0; i < this._partSelection.length; ++i)
              if (this._partSelection[i].type == P.PartType.Point) {
                var n = this._partSelection[i].point,
                  r = n.getParent();
                r && r === e && this._canDeletePart(n, t) && e.removeChild(n);
              }
            this._partSelection = null;
          }
        }),
        (P.prototype.isAlignPartsAllowed = function () {
          var e = !1;
          if (
            this._partSelection &&
            this._partSelection.length &&
            !this.hasFlag(u.Flag.ResizeAll)
          )
            for (var t = 0; t < this._partSelection.length && !e; ++t)
              this._partSelection[t].type == P.PartType.Point && (e = !0);
          return e;
        }),
        (P.prototype.alignParts = function (e, t, i) {
          if (
            this._partSelection &&
            this._partSelection.length &&
            !this.hasFlag(u.Flag.ResizeAll)
          ) {
            var r = this._element.getTransform();
            (this.requestInvalidation(),
              this._element._beginBlockEvents([n.GeometryChangeEvent]),
              this._element
                .getAnchorPoints()
                ._beginBlockCompositeEvents(!1, !0, !1));
            for (var o = 0; o < this._partSelection.length; ++o)
              if (
                (o == this._partSelection.length - 1 &&
                  (this._element
                    .getAnchorPoints()
                    ._endBlockCompositeEvents(!1, !0, !1),
                  this._element._endBlockEvents([n.GeometryChangeEvent])),
                this._partSelection[o].type === P.PartType.Point)
              ) {
                var a = this._partSelection[o].point,
                  s = new c(a.getProperty("x"), a.getProperty("y"));
                r && (s = r.mapPoint(s));
                var l = new c(
                  null !== t ? t : s.getX(),
                  null !== i ? i : s.getY(),
                );
                this.movePoint(a, l);
              }
          }
        }),
        (P.prototype.validateSelectionChange = function () {
          var e = this._element.getParent();
          return !(e && e instanceof g.Paths);
        }),
        (P.prototype.hasAllPointsSelected = function () {
          var e = !0;
          return (
            this._element.getAnchorPoints().acceptChildren(
              function (t) {
                return (t.hasFlag(o.Flag.Selected) || (e = !1), !0);
              },
              !1,
              !0,
            ),
            e
          );
        }),
        (P.prototype.shiftPreviewTable = function (e, t, i) {
          ((t = null != t ? t : 0),
            (i = null != i ? i : this._sourceIndexToPreviewIndex.length - 1));
          for (var n = t; n < i; ++n) this._sourceIndexToPreviewIndex[n] += e;
        }),
        (P.prototype.extendPreviewToFull = function () {
          this._createPathPreviewIfNecessary();
          var e = this._element.getAnchorPoints(),
            t = this._elementPreview.getAnchorPoints(),
            i = t.getFirstChild(),
            n = e.getFirstChild(),
            r = 0,
            a = null != this._sourceIndexToPreviewIndex[r],
            h = a ? this._sourceIndexToPreviewIndex[r] : 0;
          t._beginBlockChanges([
            o._Change.BeforeChildInsert,
            o._Change.AfterChildInsert,
          ]);
          try {
            for (; !a && n; ) {
              ((c = new m.AnchorPoint()).transferProperties(n, [
                m.AnchorPoint.GeometryProperties,
              ]),
                n.hasFlag(o.Flag.Selected) && c.setFlag(o.Flag.Selected),
                t.insertChild(c, i),
                (this._sourceIndexToPreviewIndex[r] = h),
                (n = n.getNext()),
                ++r,
                ++h,
                (a = null != this._sourceIndexToPreviewIndex[r]));
            }
            for (var A = r - 0; a && n; )
              ((this._sourceIndexToPreviewIndex[r] += A),
                (h = this._sourceIndexToPreviewIndex[r]),
                (n = n.getNext()),
                ++r,
                (a = null != this._sourceIndexToPreviewIndex[r]));
            for (++h; !a && n; ) {
              var c;
              ((c = new m.AnchorPoint()).transferProperties(n, [
                m.AnchorPoint.GeometryProperties,
              ]),
                n.hasFlag(o.Flag.Selected) && c.setFlag(o.Flag.Selected),
                t.appendChild(c),
                (this._sourceIndexToPreviewIndex[r] = h),
                (n = n.getNext()),
                ++r,
                ++h,
                (a = null != this._sourceIndexToPreviewIndex[r]));
            }
          } finally {
            t._endBlockChanges([
              o._Change.BeforeChildInsert,
              o._Change.AfterChildInsert,
            ]);
          }
          this._elementPreview.transferProperties(this._element, [
            l.GeometryProperties,
            s.GeometryProperties,
          ]);
        }),
        (P.prototype.constrainPosition = function (e, t, i) {
          var n = new c(i.getProperty("x"), i.getProperty("y")),
            o = this._element.getTransform();
          n = (o = o ? o.multiplied(t) : t).mapPoint(n);
          var a = r.convertToConstrain(
            n.getX(),
            n.getY(),
            e.getX(),
            e.getY(),
            p.cursorConstraint,
          );
          return (
            (this._constrainPair = [n, a]),
            (this._constrainPainted = !1),
            a
          );
        }),
        (P.prototype._createPathPreviewIfNecessary = function (e) {
          if (!this._elementPreview) {
            ((this._sourceIndexToPreviewIndex = {}),
              this._setElementPreview(new s()),
              this._elementPreview.transferProperties(this._element, [
                l.GeometryProperties,
                s.GeometryProperties,
                m.MetaProperties,
              ]));
            for (
              var t,
                i,
                n,
                r = function (t) {
                  return (e && t === e) || (!e && t.hasFlag(o.Flag.Selected));
                },
                a = this._element.getAnchorPoints(),
                h = this._elementPreview.getAnchorPoints(),
                A = null,
                c = null,
                p = a.getFirstChild();
              !(null == p || (A && c));
              p = p.getNext()
            )
              ((t = a.getPreviousPoint(p)),
                (i = a.getNextPoint(p)),
                A ||
                  (!t && r(p)
                    ? (A = p)
                    : !r(p) &&
                      i &&
                      r(i) &&
                      (r((n = a.getFirstRelatedPoint(i))) ||
                        (a.getPreviousPoint(n) && r(a.getPreviousPoint(n))) ||
                        (A = n))),
                c ||
                  (!i && r(p)
                    ? (c = p)
                    : !r(p) &&
                      t &&
                      r(t) &&
                      (r((n = a.getLastRelatedPoint(t))) ||
                        (a.getNextPoint(n) && r(a.getNextPoint(n))) ||
                        (c = n))));
            if (
              (((A && !c) || (!A && c) || (A && c && A === c)) &&
                ((A = null), (c = null)),
              A && c)
            ) {
              var u = !0;
              for (
                p = a.getNextPoint(c);
                p && p != A && u;
                p = a.getNextPoint(p)
              )
                r(p) && ((u = !1), (A = null), (c = null));
            }
            var d = !1;
            p = A = A || a.getFirstChild();
            h._beginBlockChanges([
              o._Change.BeforeChildInsert,
              o._Change.AfterChildInsert,
            ]);
            try {
              for (; !d; ) {
                var g = new m.AnchorPoint();
                (g.transferProperties(p, [m.AnchorPoint.GeometryProperties]),
                  r(p) && g.setFlag(o.Flag.Selected),
                  h.appendChild(g));
                var f = a.getIndexOfChild(p),
                  y = h.getIndexOfChild(g);
                ((this._sourceIndexToPreviewIndex[f] = y),
                  p == c && (d = !0),
                  ((p = a.getNextPoint(p)) && p != A) || (d = !0));
              }
            } finally {
              h._endBlockChanges([
                o._Change.BeforeChildInsert,
                o._Change.AfterChildInsert,
              ]);
            }
            (this._elementPreview.transferProperties(this._element, [
              l.GeometryProperties,
              s.GeometryProperties,
              m.MetaProperties,
            ]),
              A.getProperty("ah") || (c && c.getProperty("ah"))
                ? this.extendPreviewToFull()
                : this._elementPreview.getProperty("closed") &&
                  c &&
                  this._elementPreview.setProperty("closed", !1));
          }
          return this._elementPreview;
        }),
        (P.prototype.releasePathPreview = function () {
          (this._setElementPreview(null),
            (this._sourceIndexToPreviewIndex = null),
            (this._constrainPair = null));
        }),
        (P.prototype.getPathPointPreview = function (e) {
          if (!e) return null;
          var t = e.getParent();
          if (!t)
            return (
              console.warn(
                "GPathEditor.getPathPointPreview: requested preview for non bound point",
              ),
              null
            );
          var i = t.getIndexOfChild(e);
          ((this._sourceIndexToPreviewIndex &&
            null != this._sourceIndexToPreviewIndex[i]) ||
            this.extendPreviewToFull(),
            this.requestInvalidation());
          var n = this._sourceIndexToPreviewIndex[i];
          return this._elementPreview.getAnchorPoints().getChildByIndex(n);
        }),
        (P.prototype.getTransformFromNative = function (e) {
          var t = this._element.getTransform();
          return (e && (t = t ? t.multiplied(e) : e), t || (t = new f()), t);
        }),
        (P.prototype.movePoint = function (e, t, i, n) {
          var r = this.getTransformFromNative(i),
            o = r.inverted(),
            a = o.mapPoint(t);
          if (e.getProperty("ah"))
            e.setProperties(["x", "y"], [a.getX(), a.getY()]);
          else {
            var s = n || e,
              l = s.getProperty("hlx"),
              h = s.getProperty("hly"),
              A = s.getProperty("hrx"),
              p = s.getProperty("hry");
            if ((null != l && null != h) || (null != A && null != p)) {
              var u,
                d = r.mapPoint(new c(s.getProperty("x"), s.getProperty("y"))),
                g = t.getX() - d.getX(),
                f = t.getY() - d.getY();
              if (null != l && null != h)
                ((l = (u = o.mapPoint(
                  r.mapPoint(new c(l, h)).translated(g, f),
                )).getX()),
                  (h = u.getY()));
              if (null != A && null != p)
                ((A = (u = o.mapPoint(
                  r.mapPoint(new c(A, p)).translated(g, f),
                )).getX()),
                  (p = u.getY()));
            }
            e.setProperties(
              ["x", "y", "hlx", "hly", "hrx", "hry"],
              [a.getX(), a.getY(), l, h, A, p],
            );
          }
        }),
        (P.prototype.getPartSelection = function () {
          return this.hasFlag(u.Flag.ResizeAll) ? null : this._partSelection;
        }),
        (P.prototype._movePreviewPointCoordinates = function (
          e,
          t,
          i,
          n,
          r,
          o,
          a,
        ) {
          var s = n;
          if (o) {
            var l = r.inverted();
            s = this.constrainPosition(n, l, e);
          }
          s = r.mapPoint(s);
          var h = this._element.getTransform(),
            A = new c(e.getProperty(t), e.getProperty(i));
          h && (A = h.mapPoint(A));
          var p = new f(1, 0, 0, 1, s.getX() - A.getX(), s.getY() - A.getY());
          return (this._transformPreviewPointCoordinates(e, t, i, p), p);
        }),
        (P.prototype._transformPreviewPointCoordinates = function (
          e,
          t,
          i,
          n,
          r,
        ) {
          var o = this._element.getTransform(),
            a = this.getPathPointPreview(e);
          if (a) {
            if (r) var s = r;
            else s = new c(e.getProperty(t), e.getProperty(i));
            var l = n;
            o && ((l = n.multiplied(o.inverted())), (l = o.multiplied(l)));
            var h = l.mapPoint(s),
              A = [t, i],
              p = [h.getX(), h.getY()];
            (("hlx" !== t && "hrx" !== t && "hly" !== i && "hry" !== i) ||
              (A.push("ah"), p.push(!1)),
              a.setProperties(A, p));
          }
        }),
        (P.prototype._movePreviewPointShoulders = function (e, t, i) {
          var n,
            r = this._element.getTransform(),
            o = new c(e.point.getProperty("x"), e.point.getProperty("y"));
          (r && (o = r.mapPoint(o)),
            (n =
              e.type == P.PartType.LeftShoulder
                ? e.point.getLeftShoulderLimitPoint(r)
                : e.point.getRightShoulderLimitPoint(r)));
          var a = y.getVectorProjection(
              o.getX(),
              o.getY(),
              n.getX(),
              n.getY(),
              t.getX(),
              t.getY(),
              !0,
            ),
            s = y.ptDist(a.getX(), a.getY(), o.getX(), o.getY()),
            l = this.getPathPointPreview(e.point);
          if (i) {
            if (this.hasFlag(h.Flag.Detail) && 1 != l.getProperty("cu")) {
              var A = e.point.getProperty("cl");
              A = null != A ? A : 0;
              var p = e.point.getProperty("cr");
              if (
                ((p = null != p ? A : 0), e.type == P.PartType.LeftShoulder)
              ) {
                var u = p - (d = s - A);
                return (
                  (u = u > 0 ? u : 0),
                  l.setProperties(["cl", "cr"], [s, u]),
                  new f(1, 0, 0, 1, -d, p - u)
                );
              }
              var d,
                g = A - (d = s - p);
              return (
                (g = g > 0 ? g : 0),
                l.setProperties(["cl", "cr"], [g, s]),
                new f(1, 0, 0, 1, A - g, -d)
              );
            }
            return (
              l.setProperties(["cl", "cr"], [s, s]),
              new f(1, 0, 0, 1, A - s, p - s)
            );
          }
          return e.type == P.PartType.LeftShoulder
            ? (l.setProperty("cl", s),
              new f(1, 0, 0, 1, e.point.getProperty("cl") - s, 0))
            : (l.setProperty("cr", s),
              new f(1, 0, 0, 1, 0, e.point.getProperty("cr") - s));
        }),
        (P.prototype._assignPreviewPointPropertiesToSourcePoint = function (
          e,
          t,
        ) {
          var i = this.getPathPointPreview(e);
          i && e.setProperties(t, i.getProperties(t));
        }),
        (P.prototype._transferPreviewProperties = function (e, t) {
          var i = this._element.getAnchorPoints().getIndexOfChild(e),
            n = t.getAnchorPoints().getChildByIndex(i),
            r = this.getPathPointPreview(n);
          r && n.transferProperties(r, [m.AnchorPoint.GeometryProperties]);
        }),
        (P.prototype._filterSelection = function (e) {
          if (!e) return null;
          for (var t, i = [], n = 0; n < e.length; ++n)
            if (e[n].type != P.PartType.Point) i.push(e[n]);
            else {
              t = !0;
              for (var r = 0; r < e.length; ++r)
                if (
                  e[r].type == P.PartType.Segment &&
                  (e[n].point == e[r].apLeft || e[n].point == e[r].apRight)
                ) {
                  t = !1;
                  break;
                }
              t && i.push(e[n]);
            }
          return i;
        }),
        (P.prototype._geometryChange = function (e) {
          e.type == n.GeometryChangeEvent.Type.After &&
            e.element == this._element &&
            this._elementPreview &&
            (this.releasePathPreview(), this.requestInvalidation());
        }),
        (P.prototype._handleFinishDrawing = function () {
          x.defaultBorderPositionForLines &&
            this._element.isMultiPointsLine() &&
            this._setBorderAlignmentToCenter();
        }),
        (P.prototype._setBorderAlignmentToCenter = function () {
          var e = this._element.getPaintLayers(),
            t = e && e.getBorderLayers();
          t &&
            t.forEach((e) => {
              e.setProperty("_ba", B.BorderAlignment.Center);
            });
        }),
        (P.prototype._afterInsert = function (e) {
          e.node instanceof B.BorderPaintLayer && this._handleFinishDrawing();
        }),
        (P.prototype.toString = function () {
          return "[Object GPathEditor]";
        }),
        (e.exports = P));
    }