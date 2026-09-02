/**
 * chunk.vendor.js Module #757
 * Type: class
 * Name: GKnifeTool
 */

function (e, t, i) {
      var n = i(2),
        r = i(69),
        o = i(187),
        a = i(77),
        s = i(5),
        l = i(87),
        h = i(104),
        A = i(179),
        c = i(60),
        p = i(52),
        u = i(24),
        d = i(113),
        g = i(59),
        f = i(0),
        m = i(56),
        y = i(70),
        _ = i(541),
        v = i(141),
        b = i(54),
        C = i(22),
        w = i(7),
        E = i(122),
        B = i(45),
        x = i(82),
        P = i(99),
        S = i(233),
        T = i(63),
        I = i(112),
        F = i(229),
        R = i(48),
        D = i(95),
        k = i(1079),
        G = i(12),
        Q = i(81),
        M = i(64),
        N = i(17),
        U = i(9),
        V = i(47);

      function O() {
        _.call(this);
      }
      (f.inherit(O, _),
        (O.prototype.activate = function (e, t) {
          (_.prototype.activate.call(this, e, t),
            t ||
              (e.addEventListener(a.Drag, this._mouseDrag, this),
              e.addEventListener(a.Move, this._mouseMove, this)),
            (this._cursor = p.Knife));
        }),
        (O.prototype.deactivate = function (e, t) {
          (this._checkMode(),
            _.prototype.deactivate.call(this, e, t),
            e.removeEventListener(a.Drag, this._mouseDrag),
            e.removeEventListener(a.Move, this._mouseMove),
            (this._knifePath = null));
        }),
        (O.prototype._checkMode = function () {
          this._mode = _.Mode.Append;
        }),
        (O.prototype.getDefaultStyle = function () {
          return null;
        }),
        (O.prototype._mouseDown = function (e) {
          var t = new Date().getTime();
          if (t - this._mDownTime < _.DBLCLICKTM)
            "edit" == u.selectDoubleClickBehavior &&
              this._manager.notifyJobDone(this);
          else {
            var i = null;
            if (
              ((this._lastMouseEvent = e),
              (this._dragStarted = !1),
              (this._dragStartPt = null),
              this._mouseMove(e),
              (this._mDownTime = t),
              (this._released = !1),
              M.modifiers.optionKey && (this._firstAlt = !0),
              this._blockDeactivation(),
              this._checkMode(),
              this._renewPreviewLink(),
              this._newPoint && this._pathEditor)
            ) {
              this._updatePoint(e.client);
              var r = this._editPt.getPrevious();
              (r &&
                (r.removeFlag(n.Flag.Selected),
                this._editPt.setFlag(n.Flag.Selected)),
                this._invalidate(),
                e.button == a.BUTTON_RIGHT &&
                  (M.modifiers.optionKey
                    ? this._editPt.setProperty(
                        "tp",
                        B.AnchorPoint.Type.Connector,
                      )
                    : this._editPt.setProperties(
                        ["tp", "cu"],
                        [B.CornerType.Rounded, !0],
                      )),
                this._invalidate());
            } else {
              var o = this._view
                .getViewTransform(this._view.getScene().getActivePage())
                .mapPoint(e.client);
              (this._editor
                .getGuides()
                .beginMap(this._editor.getMappingScopes()),
                (o = this._editor
                  .getGuides()
                  .mapPoint(o, P.DetailMap.Mode.DetailOnFilterOn)),
                this._editor.getGuides().finishMap(),
                (i = this._constructNewPoint(e, o)),
                e.button == a.BUTTON_RIGHT &&
                  (M.modifiers.optionKey
                    ? i.setProperty("tp", B.AnchorPoint.Type.Connector)
                    : i.setProperties(
                        ["tp", "cu"],
                        [B.CornerType.Rounded, !0],
                      )),
                this._addPoint(i, !0, !1));
            }
          }
        }),
        (O.prototype._renewPreviewLink = function () {
          if (this._pathEditor) {
            var e,
              t = this._pathEditor.getPathPreview();
            if (this._editPt)
              ((e = t.getAnchorPoints().getLastChild()),
                this._editPt != e &&
                  ((this._newPoint = !1), (this._editPt = null)));
            this._dpathRef = t;
          } else
            ((this._editPt = null),
              (this._newPoint = !1),
              (this._dpathRef = null));
        }),
        (O.prototype._mouseMove = function (e) {
          var t;
          if (this._released || !this._firstAlt) {
            ((this._lastMouseEvent = e),
              (this._pathEditor = null),
              this._checkPathEditor(),
              this._pathEditor && (this._pathRef = this._pathEditor.getPath()),
              this._renewPreviewLink());
            var i = e.client;
            if (!this._newPoint && this._pathEditor) {
              i = this._constrainIfNeeded(
                e.client,
                this._view.getWorldTransform(
                  this._view.getScene().getActivePage(),
                ),
                this._pathRef,
              );
              var n = this._view
                .getViewTransform(this._view.getScene().getActivePage())
                .mapPoint(i);
              (this._editor
                .getGuides()
                .beginMap(this._editor.getMappingScopes()),
                (n = this._editor
                  .getGuides()
                  .mapPoint(n, P.DetailMap.Mode.DetailOnFilterOn)),
                this._editor.getGuides().finishMap(),
                (i = this._view
                  .getWorldTransform(this._view.getScene().getActivePage())
                  .mapPoint(n)),
                (t = this._constructNewPoint(e, n)),
                this._addPoint(t, !0, !1, !0));
            } else
              this._editPt &&
                (this._invalidate(),
                (i = this._updatePoint(e.client)),
                this._invalidate());
            if (this._editPt)
              (this._pathRef.getAnchorPoints().getFirstChild(),
                this._pathRef.getAnchorPoints().getLastChild());
            else ((this._cursor = p.Knife), this.updateCursor());
          } else e.button == a.BUTTON_RIGHT && this._mouseDrag(e);
        }),
        (O.prototype._updateHandles = function (e) {
          var t,
            i,
            n = this._editPt.getProperty("tp"),
            r = this._editPt.getProperty("x"),
            o = this._editPt.getProperty("y");
          if (
            this._pathEditor.hitAnchorPoint(
              this._editPt,
              e,
              this._view.getWorldTransform(
                this._view.getScene().getActivePage(),
              ),
              0,
            ) &&
            !this._firstAlt
          )
            (null !== this._editPt.getProperty("hlx") &&
            null !== this._editPt.getProperty("hly")
              ? this._editPt.setProperties(
                  ["tp", "hrx", "hry"],
                  [B.AnchorPoint.Type.Symmetric, null, null],
                )
              : this._editPt.setProperties(
                  ["tp", "hrx", "hry"],
                  [B.AnchorPoint.Type.Asymmetric, null, null],
                ),
              (this._cursor = p.Knife));
          else {
            var a = this._pathEditor
              .getTransformFromNative(
                this._view.getWorldTransform(
                  this._view.getScene().getActivePage(),
                ),
              )
              .inverted()
              .mapPoint(e);
            if (
              this._newPoint ||
              !M.modifiers.optionKey ||
              !this._firstAlt ||
              n == B.AnchorPoint.Type.Connector ||
              (null == this._editPt.getPrevious() &&
                null == this._editPt.getNext())
            )
              if (n != B.AnchorPoint.Type.Connector) {
                this._editPt.setProperty("ah", !1);
                var s = a.getX(),
                  l = a.getY();
                (this._editPt.setProperties(
                  ["tp", "hrx", "hry"],
                  [B.AnchorPoint.Type.Asymmetric, s, l],
                ),
                  (this._cursor = p.PenDrag));
              } else {
                (null, null);
                var h = this._editPt.getPrevious();
                if (h) {
                  var A = h.getProperty("x"),
                    c = h.getProperty("y"),
                    u = Math.sqrt(G.ptSqrDist(r, o, A, c));
                  if (G.isEqualEps(u, 0)) ((t = a.getX()), (i = a.getY()));
                  else {
                    var d = (r - A) / u,
                      g = (o - c) / u,
                      f = G.vDotProduct(d, g, a.getX() - r, a.getY() - o);
                    f > 0
                      ? ((t = r + d * f), (i = o + g * f))
                      : ((t = null), (i = null));
                  }
                } else ((t = a.getX()), (i = a.getY()));
                (this._editPt.setProperties(
                  ["hlx", "hly", "hrx", "hry"],
                  [null, null, t, i],
                ),
                  (this._cursor = p.Knife));
              }
            else {
              var m = a.getX() - r,
                y = a.getY() - o;
              this._editPt.setProperty("ah", !1);
              var _ = this._dragStartPt.getProperty("hrx");
              t = null != _ ? _ + m : a.getX();
              var v = this._dragStartPt.getProperty("hry");
              ((i = null != v ? v + y : a.getY()),
                this._editPt.setProperty("ah", !1),
                this._editPt.setProperties(
                  ["tp", "hrx", "hry"],
                  [B.AnchorPoint.Type.Asymmetric, t, i],
                ),
                (this._cursor = p.Knife));
            }
          }
          (this.updateCursor(), this._invalidate());
        }),
        (O.prototype._mouseDrag = function (e) {
          (!this._refPt ||
            this._editPt ||
            this._released ||
            (this._makePointMajor(this._refPt),
            (this._editPt = this._refPt),
            (this._dragStartPt = this._refPt),
            e.button == a.BUTTON_LEFT &&
              this._editPt.setProperty("tp", B.AnchorPoint.Type.Symmetric),
            this._invalidate()),
            !this._released &&
              this._editPt &&
              ((this._lastMouseEvent = e),
              this._dragStartPt ||
                ((this._dragStartPt = this._refPt ? this._refPt : this._editPt),
                e.button == a.BUTTON_LEFT &&
                  this._editPt.getProperty("tp") !=
                    B.AnchorPoint.Type.Connector &&
                  this._editPt.setProperty("tp", B.AnchorPoint.Type.Symmetric)),
              (this._dragStarted = !0),
              this._updatePointProperties(e.client)));
        }),
        (O.prototype._constructNewPoint = function (e, t) {
          var i = new c.AnchorPoint();
          return (i.setProperties(["x", "y"], [t.getX(), t.getY()]), i);
        }),
        (O.prototype._checkPathEditor = function () {
          this._knifePath &&
            ((this._pathEditor = this), (this._compoundPathEditor = null));
        }),
        (O.prototype._addPoint = function (e, t, i, r) {
          if ((r || e.setFlag(n.Flag.Selected), this._pathEditor && !i)) {
            var o = this._pathRef && this._pathRef.getTransform();
            if (o) {
              var a = new s(e.getProperty("x"), e.getProperty("y"));
              ((a = o.inverted().mapPoint(a)),
                e.setProperties(["x", "y"], [a.getX(), a.getY()]));
            }
          }
          this._pathEditor
            ? (this._invalidate(),
              r ||
                this._dpathRef
                  .getAnchorPoints()
                  .getLastChild()
                  .removeFlag(n.Flag.Selected),
              this._dpathRef.getAnchorPoints().appendChild(e),
              (this._editPt = this._dpathRef.getAnchorPoints().getLastChild()),
              (this._newPoint = !0),
              this._invalidate())
            : ((this._knifePath = new c()),
              this._knifePath.getAnchorPoints().appendChild(e),
              e.setFlag(n.Flag.Selected),
              this._knifePath.setFlag(n.Flag.Selected),
              this._checkPathEditor(),
              this._checkMode(),
              this._renewPreviewLink(),
              (this._editPt = this._dpathRef.getAnchorPoints().getLastChild()),
              this._invalidate());
        }),
        (O.prototype._modifiersChanged = function (e) {
          (_.prototype._modifiersChanged.call(this, e),
            this._released &&
              e.changed.optionKey &&
              !M.modifiers.optionKey &&
              this._knifePath &&
              this._lastMouseEvent &&
              (this._mouseDown(this._lastMouseEvent),
              this._mouseRelease(this._lastMouseEvent)));
        }),
        (O.prototype._mouseRelease = function (e) {
          if (!this._released && ((this._released = !0), this._dpathRef)) {
            e.client;
            (this._dragStarted && this._updatePointProperties(e.client),
              this._newPoint && this._invalidate(),
              (this._refPt = this._dpathRef.getAnchorPoints().getLastChild()),
              this._dpathRef.getAnchorPoints().getFirstChild(),
              (this._cursor = p.Knife),
              this.updateCursor(),
              this._firstAlt || this._startCutting(),
              (this._refPt = null));
          }
          ((this._dragStarted = !1),
            (this._dragStartPt = null),
            (this._lastMouseEvent = e),
            (this._firstAlt = !1),
            this._reset(),
            this._editor.getGuides().invalidate(),
            this._allowDeactivation());
        }),
        (O.prototype._reset = function () {
          if (
            (this._invalidate(),
            (this._dpathRef = null),
            (this._pathRef = null),
            (this._pathEditor = null),
            (this._newPoint = !1),
            (this._editPt = null),
            (this._dragStartPt = null),
            (this._refPt = null),
            (this._compoundPathEditor = null),
            this._cached)
          ) {
            var e = this._getPaintRect();
            ((this._cached = null), e && this.invalidateArea(e));
          }
        }),
        (O.prototype._startCutting = function () {
          try {
            (this._editor.beginTransaction(),
              this._performCut(),
              (this._lastMouseEvent = null),
              this._pathEditor.releasePathPreview(),
              (this._pathEditor = null),
              (this._knifePath = null));
          } finally {
            try {
              this._editor.commitTransaction(
                U.get(new V("GKnifeTool", "action.cut-shape")),
              );
            } catch (e) {}
          }
        }),
        (O.prototype._updatePointProperties = function (e) {
          var t = e;
          if ((this._invalidate(), M.modifiers.spaceKey)) {
            if (
              this._lastMouseEvent &&
              this._lastMouseEvent.clientDelta &&
              this._editPt
            ) {
              var i = this._editPt.getProperty("x"),
                n = this._editPt.getProperty("y"),
                r = new s(
                  i + this._lastMouseEvent.clientDelta._x,
                  n + this._lastMouseEvent.clientDelta._y,
                );
              ((r = this._updatePoint(r)),
                this._invalidate(),
                (t = t.add(new s(r.getX() - i, r.getY() - n))));
            }
          } else
            ((t = this._constrainIfNeeded(
              e,
              this._view.getWorldTransform(
                this._view.getScene().getActivePage(),
              ),
              this._pathRef,
              this._dragStartPt,
            )),
              this._updateHandles(t));
          return t;
        }),
        (O.prototype._iteratePoints = function (e, t) {
          for (
            var i = e,
              r = i.getAnchorPoints(),
              o = i.getTransform(),
              a = r.getFirstChild();
            null != a;
            a = a.getNext()
          ) {
            var l,
              h = r.getPreviousPoint(a),
              A = r.getNextPoint(a),
              c = a.getProperty("tp"),
              p = new s(a.getProperty("x"), a.getProperty("y")),
              d = {
                type: c,
                anchorPoint: a,
                position: p,
                annotation: u.annotationHandles.path.node.straightType,
                leftHandlePosition: null,
                rightHandlePosition: null,
              };
            if (
              (a.hasFlag(n.Flag.Selected) &&
                (c === B.AnchorPoint.Type.Connector
                  ? (d.annotation = u.annotationHandles.path.node.autoType)
                  : (c !== B.AnchorPoint.Type.Symmetric &&
                      c !== B.AnchorPoint.Type.Mirror) ||
                    (d.annotation = u.annotationHandles.path.node.smoothType)),
              a.hasFlag(n.Flag.Selected) || (h && h.hasFlag(n.Flag.Selected)))
            )
              null !==
                (l = new s(
                  a.getProperty("hlx"),
                  a.getProperty("hly"),
                )).getX() &&
                null !== l.getY() &&
                (d.leftHandlePosition = l);
            if (a.hasFlag(n.Flag.Selected) || (A && A.hasFlag(n.Flag.Selected)))
              null !==
                (l = new s(
                  a.getProperty("hrx"),
                  a.getProperty("hry"),
                )).getX() &&
                null !== l.getY() &&
                (d.rightHandlePosition = l);
            if (o) {
              var g = o.mapPoint(d.position);
              (d.leftHandlePosition &&
                (d.leftHandlePosition = o.mapPoint(d.leftHandlePosition)),
                d.rightHandlePosition &&
                  (d.rightHandlePosition = o.mapPoint(d.rightHandlePosition)),
                (d.position = g));
            }
            if (!0 === t(d)) break;
          }
        }),
        (O.prototype.paint = function (e) {
          if ((_.prototype.paint.call(this, e), this._elementPreview)) {
            var t = this._view.getWorldTransform(
              this._view.getScene().getActivePage(),
            );
            (this._paintOutline(t, e), this._postPaint(t, e));
          }
        }),
        (O.prototype._paintOutline = function (e, t) {
          var i,
            n = this._elementPreview,
            r = new T(n, e);
          (i = new v(r)) &&
            (t.canvas.putVertices(i, !1),
            t.canvas.strokeVertices(t.knifeOutlineColor, u.outlineWidth));
        }),
        (O.prototype._postPaint = function (e, t) {
          this._iteratePoints(
            this._elementPreview,
            function (i) {
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
                  ));
              var r = u.annotationHandles.path.node;
              Q.paintAnnotation(
                t,
                e,
                i.position,
                i.annotation,
                i.anchorPoint.hasFlag(n.Flag.Selected),
                r.size,
                t.knifeOutlineColor,
                N.WHITE,
              );
            }.bind(this),
          );
        }),
        (O.prototype._paintControlHandle = function (e, t, i, n) {
          var r = i,
            o = n;
          (e && ((r = e.mapPoint(i)), (o = e.mapPoint(n))),
            t.canvas.strokeLine(
              r.getX(),
              r.getY(),
              o.getX(),
              o.getY(),
              u.outlineWidth,
              t.knifeOutlineColor,
            ));
          var a = u.annotationHandles.path.control;
          Q.paintAnnotation(
            t,
            e,
            n,
            a.type,
            !1,
            a.size,
            t.knifeOutlineColor,
            t.knifeOutlineColor,
          );
        }),
        (O.prototype._getKnifeBBox = function () {
          var e = this._view.getWorldTransform(
            this._view.getScene().getActivePage(),
          );
          if (!this._dpathRef) return null;
          var t = this._dpathRef.getGeometryBBox();
          if (t && !t.isEmpty()) {
            t = e.mapRect(t).expanded(1.5, 1.5, 1.5, 1.5);
          }
          var i = function (e) {
            e && !e.isEmpty() && (t = t ? t.united(e) : e);
          };
          return (
            this._iteratePoints(
              this._dpathRef,
              function (t) {
                (t.leftHandlePosition &&
                  i(
                    Q.getAnnotationBBox(
                      e,
                      t.leftHandlePosition,
                      u.annotationHandles.path.control.size,
                      !0,
                    ),
                  ),
                  t.rightHandlePosition &&
                    i(
                      Q.getAnnotationBBox(
                        e,
                        t.rightHandlePosition,
                        u.annotationHandles.path.control.size,
                        !0,
                      ),
                    ),
                  i(
                    Q.getAnnotationBBox(
                      e,
                      t.position,
                      u.annotationHandles.path.node.size,
                      !0,
                    ),
                  ));
              }.bind(this),
            ),
            t
          );
        }),
        (O.prototype.getPathPreview = function () {
          if (!this._elementPreview) {
            this._invalidate();
            var e = this._knifePath.getAnchorPoints().getFirstChild(),
              t = new c.AnchorPoint();
            (t.setProperties(
              ["x", "y"],
              [e.getProperty("x"), e.getProperty("y")],
            ),
              (this._elementPreview = new c()),
              this._elementPreview.getAnchorPoints().appendChild(t),
              e.setFlag(n.Flag.Selected),
              t.setFlag(n.Flag.Selected),
              this._elementPreview.setFlag(n.Flag.Selected),
              this._invalidate());
          }
          return this._elementPreview;
        }),
        (O.prototype._constrainIfNeeded = function (e, t) {
          var i = e;
          if (M.modifiers.shiftKey) {
            var n = null;
            (this._dpathRef &&
              (n = this._dpathRef.getAnchorPoints().getLastChild()) &&
              n.getPrevious() &&
              (n = n.getPrevious()),
              n || (n = this._knifePath.getAnchorPoints().getLastChild()));
            var r = new s(n.getProperty("x"), n.getProperty("y")),
              o = this._knifePath.getTransform();
            ((r = (o = o ? o.multiplied(t) : t).mapPoint(r)),
              (i = x.convertToConstrain(
                r.getX(),
                r.getY(),
                e.getX(),
                e.getY(),
                u.cursorConstraint,
              )));
          }
          return i;
        }),
        (O.prototype.hitAnchorPoint = function (e, t, i, n) {
          if (e) {
            var r = this._knifePath.getTransform();
            return (
              i && (r = r ? r.multiplied(i) : i),
              Q.getAnnotationBBox(
                r,
                new s(e.getProperty("x"), e.getProperty("y")),
                u.annotationHandles.path.node.size,
                !1,
              )
                .expanded(n, n, n, n)
                .containsPoint(t)
            );
          }
          return !1;
        }),
        (O.prototype.movePoint = function (e, t, i, n) {
          var r = this.getTransformFromNative(i),
            o = r.inverted(),
            a = o.mapPoint(t);
          if (e.getProperty("ah"))
            e.setProperties(["x", "y"], [a.getX(), a.getY()]);
          else {
            var l = n || e,
              h = l.getProperty("hlx"),
              A = l.getProperty("hly"),
              c = l.getProperty("hrx"),
              p = l.getProperty("hry");
            if ((null != h && null != A) || (null != c && null != p)) {
              var u,
                d = r.mapPoint(new s(l.getProperty("x"), l.getProperty("y"))),
                g = t.getX() - d.getX(),
                f = t.getY() - d.getY();
              if (null != h && null != A)
                ((h = (u = o.mapPoint(
                  r.mapPoint(new s(h, A)).translated(g, f),
                )).getX()),
                  (A = u.getY()));
              if (null != c && null != p)
                ((c = (u = o.mapPoint(
                  r.mapPoint(new s(c, p)).translated(g, f),
                )).getX()),
                  (p = u.getY()));
            }
            e.setProperties(
              ["x", "y", "hlx", "hly", "hrx", "hry"],
              [a.getX(), a.getY(), h, A, c, p],
            );
          }
        }),
        (O.prototype.getTransformFromNative = function (e) {
          var t = this._knifePath.getTransform();
          return (e && (t = t ? t.multiplied(e) : e), t || (t = new w()), t);
        }),
        (O.prototype.releasePathPreview = function () {
          ((this._elementPreview = null),
            (this._sourceIndexToPreviewIndex = null));
        }),
        (O.prototype.getPath = function () {
          return this._knifePath;
        }),
        (O.prototype.requestInvalidation = function () {
          var e = this._getKnifeBBox();
          e && this.invalidateArea(e);
        }),
        (O.prototype._invalidate = O.prototype.requestInvalidation),
        (O.prototype._performCut = function () {
          var e = !1,
            t = this._dpathRef,
            i = new o(),
            n = [],
            r = null;
          if (this._editor.hasSelection())
            r = this._getSelectableElements(this._editor.getSelection());
          else {
            var a = this._dpathRef.getGeometryBBox();
            a = a.expanded(1, 1, 1, 1);
            var s = new b();
            (s.addVertex(R.Command.Move, a.getX(), a.getY()),
              s.addVertex(R.Command.Line, a.getX(), a.getY() + a.getHeight()),
              s.addVertex(
                R.Command.Line,
                a.getX() + a.getWidth(),
                a.getY() + a.getHeight(),
              ),
              s.addVertex(R.Command.Line, a.getX() + a.getWidth(), a.getY()),
              s.addVertex(R.Command.Close, 0, 0));
            var l = this._scene.getCollisions(
              s,
              C.CollisionFlag.GeometryBBox | C.CollisionFlag.Partial,
              null,
              this._selectFilter.bind(this),
              function (e) {
                return !(e instanceof m);
              },
              this._view.getViewConfiguration().multiPageView,
            );
            r = this._getSelectableElements(l);
          }
          for (
            var h, p, u = [], g = [], f = new k(this._dpathRef), _ = [], v = 0;
            v < r.length;
            v++
          ) {
            if ((ee = r[v]) instanceof y)
              for (var w = ee.getTextShapes(), B = 0; B < w.length; B++)
                (g.push(w[B]), _.push(ee));
            else (g.push(ee), _.push(ee));
          }
          for (v = 0; v < g.length; v++) {
            var x = g[v],
              P = _[v];
            if (
              (P.getParent() && ((h = P.getParent()), (p = P.getNext(!0))),
              x !== this._dpathRef && x !== this._pathRef)
            ) {
              for (
                var T,
                  I,
                  F,
                  D = [[], [], []],
                  G = this.convertToPath(x),
                  Q = x.getProperty("evenodd"),
                  M = "boolean" == typeof Q && !Q,
                  N = [],
                  U = !1,
                  V = 0;
                V < G.length;
                V++
              ) {
                ((I = []), (F = []), (T = G[V]));
                for (var O = 0; O < T.length; O++) {
                  var L = G[V][O];
                  L.getProperty("closed") ? I.push(L) : F.push(L);
                }
                (I.length && N.push(I), F.length && N.push(F));
              }
              G = N;
              for (V = 0; V < G.length; V++) {
                var Y = [[], [], []],
                  X = [],
                  H = [],
                  W = [],
                  Z = !1,
                  z = !1,
                  j = t.clone();
                T = G[V];
                for (O = 0; O < T.length; O++) {
                  var J = T[O],
                    q = i.intersect(j, J),
                    K = c.addIntersectionPoints(j, J, q, !0);
                  ((Z = Z || J.getProperty("closed")),
                    (z = z || (this._isPathClosed(J) && q.length > 1)),
                    K && 0 !== q.length
                      ? ((X = X.concat(K[1])), (H = H.concat(K[0])))
                      : (W.push(J), (T[O] = null)));
                }
                ((z =
                  z ||
                  ((x instanceof d || x instanceof S) &&
                    Z &&
                    x.hasStyleFill())),
                  n.length && (H = H.concat(n)));
                var $ = f.performCut(T, X, H, Z, j, z, M);
                if (
                  ($ &&
                    $ !== k.UNCHANGED &&
                    ((U = !0),
                    (Y[0] = Y[0].concat($[0])),
                    (Y[1] = Y[1].concat($[1])),
                    (Y[2] = Y[2].concat($[2]))),
                  !$)
                ) {
                  D = null;
                  break;
                }
                for (B = 0; B < W.length; B++) {
                  var ee = W[B];
                  Y[(te = f.checkSideOfUncut(t, ee))].push(ee);
                }
                for (var te = 0; te < 3; te++) {
                  var ie = Y[te],
                    ne = null;
                  T.length > 1 && ie.length > 1 && (ne = new d());
                  for (B = 0; B < ie.length; B++) {
                    var re = ie[B];
                    re &&
                      (re instanceof c ||
                        (re = A.createPathFromVertexSource(re, !1, !1, !0)),
                      ne && re
                        ? ne.getPaths().appendChild(re)
                        : re &&
                          (M && re.setProperty("evenodd", !1), D[te].push(re)));
                  }
                  ne && (M && ne.setProperty("evenodd", !1), D[te].push(ne));
                }
              }
              if (D && U) {
                ((e = !0), _[v].getParent() && h.removeChild(_[v]));
                for (V = 0; V < D.length; V++) {
                  var oe = new E(),
                    ae = D[V].length;
                  ae > 1 && (h.insertChild(oe, p), u.push(oe));
                  for (O = 0; O < ae; O++) {
                    if ((ee = D[V][O])) {
                      var se = x.$trf;
                      if (
                        ((x.$trf = null),
                        ee.assignStyleFrom(x),
                        (x.$trf = se),
                        1 == ae
                          ? (h.insertChild(ee, p), u.push(ee))
                          : oe.appendChild(ee),
                        !(x instanceof S))
                      )
                        for (
                          var le = x.getFirstChild();
                          null != le;
                          le = le.getNext()
                        )
                          ee.appendChild(le.clone());
                    }
                  }
                }
              }
            }
          }
          return (u.length && this._editor.updateSelection(!1, u), e);
        }),
        (O.prototype._isPathClosed = function (e) {
          return !!e.getProperty("closed") && e.hasStyleFill();
        }),
        (O.prototype.elementHitTest = function (e, t) {
          var i = new F();
          if (
            g.hitTest(e.getX(), e.getY(), t, 2, !1, i) &&
            ((elemHitRes = new I(this, i)),
            i.outline && 0 != i.slope && 1 != i.slope)
          ) {
            var n = g.getSegmentPoint(t, i.segment, 0.5);
            if (n)
              2 *
                G.ptDist(
                  locationInvTransformed.getX(),
                  locationInvTransformed.getY(),
                  n.getX(),
                  n.getY(),
                ) <=
                2 && ((i.slope = 0.5), (i.x = n.getX()), (i.y = n.getY()));
          }
          return i;
        }),
        (O.prototype.getTransformedVertices = function (e) {
          var t = new b();
          return (e.getAnchorPoints()._generateVertices(t, e.$trf, !1), t);
        }),
        (O.prototype.convertToPath = function (e) {
          var t = null,
            i = [],
            n = !1;
          if (e instanceof c || e instanceof d) {
            var r = [];
            if (e instanceof d)
              for (
                var o = (p = e.getPaths()).getFirstChild();
                null !== o;
                o = o.getNext()
              )
                r.push(o);
            else r = [e];
            for (var a = !1, s = 0; s < r.length && !a; s++)
              for (var h = r[s].getAnchorPoints().getFirstChild(); h; ) {
                if (
                  B.isCornerType(h.getProperty("tp")) &&
                  (0 !== h.getProperty("cl") || 0 !== h.getProperty("cr"))
                ) {
                  a = !0;
                  break;
                }
                h = h.getNext();
              }
            n = !a;
          }
          if (n) i.push(e.getParent() ? e.clone() : e);
          else if (e instanceof y) i = e.getTextShapes() || [];
          else if (e.hasMixin(l)) {
            if ((t = A.createPathFromVertexSource(e))) {
              var p = e.$trf;
              ((e.$trf = null),
                t.assignFrom(e),
                e instanceof B &&
                  ((t.$evenodd = e.getProperty("evenodd")),
                  (t.$closed = e.getProperty("closed"))),
                (e.$trf = p),
                i.push(t));
            }
          }
          var u = [];
          for (s = 0; s < i.length; s++) {
            var g = [];
            if ((t = i[s]) instanceof d) {
              var f = t.getPaths();
              for (o = f.getFirstChild(); null !== o; o = o.getNext())
                g.push(o);
              f.clearChildren();
            } else g.push(t);
            u.push(g);
          }
          return u;
        }),
        (O.prototype._selectFilter = function (e) {
          return (
            !e.hasFlag(C.Flag.FullLocked) &&
            !(
              e instanceof r &&
              (e.getProperty("plkt") & r.ProgramLck.NoSelect ||
                e.getProperty("plkt") & r.ProgramLck.NoEdit ||
                e.getProperty("plkt") & r.ProgramLck.NoDelete ||
                (e.getParent() &&
                  e.getParent().getProperty("plkt") & r.ProgramLck.NoEdit))
            )
          );
        }),
        (O.prototype._getSelectableElement = function (e) {
          return !(e instanceof h) || e instanceof E || e instanceof D
            ? null
            : e;
        }),
        (O.prototype._getSelectableElements = function (e) {
          for (var t = [], i = 0; i < e.length; ++i) {
            var n = this._getSelectableElement(e[i]);
            n && t.indexOf(n) < 0 && t.push(n);
          }
          return t;
        }),
        (O.prototype.toString = function () {
          return "[Object GKnifeTool]";
        }),
        (e.exports = O));
    }