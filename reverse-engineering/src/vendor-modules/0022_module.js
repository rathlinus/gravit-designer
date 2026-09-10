/**
 * chunk.vendor.js Module #22
 * Type: unknown
 */

function (e, t, i) {
      var n = i(2),
        r = i(76),
        o = i(0),
        a = i(28),
        s = i(11),
        l = i(72),
        h = i(132),
        A = i(133),
        c = i(5),
        p = i(228),
        u = i(14),
        d = i(6),
        g = i(59),
        f = i(63),
        m = i(87),
        y = i(12),
        _ = i(7),
        v = i(140);

      function b() {
        (r.call(this),
          this.hasMixin(b.Stylable) && this._setStyleDefaultProperties());
      }
      (o.inherit(b, r),
        (b.Flag = {
          Hidden: 1 << 21,
          PartialLocked: 1 << 22,
          FullLocked: 1 << 23,
          NoPaint: 1 << 24,
        }),
        (b.CollisionFlag = {
          Partial: 1,
          GeometryBBox: 1024,
          PaintBBox: 2048,
          FullyContained: 4096,
          CollisionInfo: 8192,
        }),
        (b._Change = {
          ChildGeometryUpdate: 220,
          ChildVisualUpdate: 221,
          GeometrySizeChanged: 210,
          PrepareGeometryUpdate: 240,
          FinishGeometryUpdate: 241,
          InvalidationRequest: 250,
          InvalidationRequested: 251,
          PrepareChildAnchoring: 260,
        }),
        (b.GeometryChangeEvent = function (e, t) {
          ((this.element = e), (this.type = t));
        }),
        o.inherit(b.GeometryChangeEvent, l),
        (b.GeometryChangeEvent.Type = {
          Before: 0,
          After: 1,
          Child: 2,
        }),
        (b.GeometryChangeEvent.prototype.element = null),
        (b.GeometryChangeEvent.prototype.type = null),
        (b.GeometryChangeEvent.prototype.toString = function () {
          return "[Event GElement.GeometryChangeEvent]";
        }),
        i(908)(b),
        i(909)(b),
        i(910)(b),
        i(911)(b),
        i(912)(b),
        (b.prototype._sourceBBox = null),
        (b.prototype._geometryBBox = null),
        (b.prototype._preTransformRect = null),
        (b.prototype._preTransformRectTrf = null),
        (b.prototype._paintBBox = null),
        (b.prototype._childrenPaintBBox = null),
        (b.prototype._collidesWithChildren = void 0),
        (b.prototype._collidesWithChildrenSeparate = void 0),
        (b.prototype._savedPaintBBox = null),
        (b.prototype._savedGeometryBBox = null),
        (b.prototype.dependentUpdate = !1),
        (b.prototype._geometryQTreeElement = null),
        (b.prototype._paintQTreeElement = null),
        (b.prototype._containingGeometryQTreeElement = null),
        (b.prototype._containingPaintQTreeElement = null),
        (b.prototype._elementIndex = -1),
        (b.prototype.getElementIndex = function () {
          return this._elementIndex;
        }),
        (b.prototype.getCustomCollisionBBox = function (e) {
          return null;
        }),
        (b.prototype.getSourceBBox = function (e) {
          return e || this.isVisible()
            ? e
              ? this._calculateSourceBBox(!0)
              : (null == this._sourceBBox &&
                  (this._sourceBBox = this._calculateSourceBBox()),
                this._sourceBBox)
            : null;
        }),
        (b.prototype.getGeometryBBox = function (e) {
          return e || this.isVisible()
            ? e
              ? this._calculateGeometryBBox(e)
              : (null == this._geometryBBox &&
                  (this._geometryBBox = this._calculateGeometryBBox()),
                this._geometryBBox)
            : null;
        }),
        (b.prototype.getPreTransformRect = function (e) {
          return this.isVisible()
            ? ((null != this._preTransformRect &&
                _.equals(e, this._preTransformRectTrf)) ||
                ((this._preTransformRect = this._calculatePreTransformRect(e)),
                (this._preTransformRectTrf = e)),
              this._preTransformRect)
            : null;
        }),
        (b.prototype.getGroupGeometryBBox = function (e) {
          var t = null;
          if (e && e.length)
            for (var i = 0; i < e.length; ++i)
              if (e[i] instanceof b) {
                var n = e[i].getGeometryBBox();
                n && (t = t ? t.united(n) : n);
              }
          return t;
        }),
        (b.prototype.getChildrenGeometryBBox = function (e) {
          if (!e && !this.isVisible()) return null;
          if (this.hasMixin(n.Container)) {
            for (
              var t = null, i = this.getFirstChild();
              null != i;
              i = i.getNext()
            )
              if (i instanceof b) {
                var r = i.getGeometryBBox(e);
                r && (t = t ? t.united(r) : r);
              }
            return t || null;
          }
          return null;
        }),
        (b.prototype.getPaintBBox = function (e, t, i) {
          return i || this.isVisible()
            ? i
              ? this._calculatePaintBBox(t, i)
              : (null == this._paintBBox &&
                  (this._paintBBox = this._calculatePaintBBox(t)),
                this._paintBBox)
            : null;
        }),
        (b.prototype._calculateChildrenPaintBBox = function (e, t, i) {
          if (!i && !this.isVisible()) return null;
          if (this.hasMixin(n.Container)) {
            for (
              var r = null, o = this.getFirstChild();
              null != o;
              o = o.getNext()
            )
              if (o instanceof b) {
                var a = o.getPaintBBox(null, null, i),
                  s = o.getCustomCollisionBBox(i);
                (s && (a = (a && a.united(s)) || s),
                  a &&
                    (a.getHeight() > 0 || a.getWidth() > 0) &&
                    (r = r ? r.united(a) : a));
              }
            return r || new d(0, 0, 0, 0);
          }
          return null;
        }),
        (b.prototype.getChildrenPaintBBox = function (e, t, i) {
          return i
            ? this._calculateChildrenPaintBBox(e, t, i)
            : (null == this._childrenPaintBBox &&
                (this._childrenPaintBBox = this._calculateChildrenPaintBBox(
                  e,
                  t,
                  i,
                )),
              this._childrenPaintBBox);
        }),
        (b.prototype.getAngle = function () {
          return null;
        }),
        (b.prototype.isVisible = function () {
          return 0 == (this._flags & b.Flag.Hidden);
        }),
        (b.prototype.hitTest = function (e, t, i, r, o, a, s, l, h, A) {
          if (
            ("number" != typeof o && (o = -1),
            (a = a || 0),
            l && !1 === l(this))
          )
            return null;
          var c = this.getPaintBBox(),
            p = this.getCustomCollisionBBox();
          if ((p && (c = (c && c.united(p)) || p), !c || c.isEmpty()))
            return null;
          if (
            (t && (c = t.mapRect(c)), !c.expanded(a, a, a, a).containsPoint(e))
          )
            return null;
          var u = null;
          if (0 !== o && this.hasMixin(n.Container))
            if (this.hasMixin(b.Accelerated)) {
              var g = t ? t.inverted().mapPoint(e) : e,
                f = new d(g.getX() - a / 2, g.getY() - a / 2, a, a),
                m = this.retrieveChildrenInPaintBBox(
                  f,
                  v.RETRIEVE_MODE_INTERSECT,
                );
              if (m) {
                m.sort(function (e, t) {
                  return t._elementIndex - e._elementIndex;
                });
                for (var y = 0; y < m.length; y++) {
                  if ((C = m[y].hitTest(e, t, i, r, o - 1, a, s, l, h, A))) {
                    if (!r) return C;
                    u ? Array.prototype.push.apply(u, C) : (u = C);
                  }
                }
              }
            } else
              for (
                var _ = this.getLastChild();
                null != _;
                _ = _.getPrevious()
              ) {
                var C;
                if (_ instanceof b)
                  if ((C = _.hitTest(e, t, i, r, o - 1, a, s, l, h, A))) {
                    if (!r) return C;
                    u ? Array.prototype.push.apply(u, C) : (u = C);
                  }
              }
          if ((i && 1 == i(this)) || !i) {
            var w = this._detailHitTest(e, t, a, s, h, !1);
            w && (r && u ? u.push(w) : (u = [w]));
          }
          if (A && -1 === o && u)
            for (
              var E = u.length, B = ((y = E - 1), 0);
              y >= 0 && B < E;
              y--, B++
            )
              for (var x = u[y].element; x.getParent(); ) {
                if (x.hasFlag(n.Flag.Selected)) {
                  (u.unshift(u[y]), u.splice(++y, 1));
                  break;
                }
                x = x.getParent();
              }
          return u;
        }),
        (b.prototype.getCollisions = function (e, t, i, r, o, a, s) {
          var l = [],
            h =
              a ||
              function (e) {
                ((i && 1 == i(e)) || !i) && l.push(e);
              };
          if (
            ((s = s || g.calculateBounds(e, !0)),
            !this._checkElementCollision(e, t, r, h, s))
          )
            return l;
          if (this.hasMixin(n.Container) && (!o || o(this)))
            if (this.hasMixin(b.Accelerated)) {
              var A,
                c = t & b.CollisionFlag.PaintBBox;
              A =
                0 != (t & b.CollisionFlag.Partial)
                  ? v.RETRIEVE_MODE_INTERSECT
                  : v.RETRIEVE_MODE_FULLYCONTAINED;
              var p = c
                ? this.retrieveChildrenInPaintBBox(s, A)
                : this.retrieveChildrenInGeometryBBox(s, A);
              p &&
                p.forEach(function (n) {
                  n.getCollisions(e, t, i, r, o, h, s);
                });
            } else
              for (var u = this.getFirstChild(); null != u; u = u.getNext())
                u instanceof b && u.getCollisions(e, t, i, r, o, h, s);
          return l;
        }),
        (b.prototype._checkElementCollision = function (e, t, i, n, r) {
          if (
            0 != (t & b.CollisionFlag.GeometryBBox) ||
            0 != (t & b.CollisionFlag.PaintBBox)
          ) {
            if (i && !1 === i(this)) return !1;
            var o =
                0 != (t & b.CollisionFlag.PaintBBox)
                  ? this.getPaintBBox()
                  : this.getGeometryBBox(),
              a = this.getCustomCollisionBBox();
            (a && (o = (o && o.united(a)) || a),
              o &&
                (0 != (t & b.CollisionFlag.Partial)
                  ? this._checkPartialCollision(r, o, e, !0, t, n)
                  : r.containsRect(o, !0) && n(this)));
          }
          return !0;
        }),
        (b.prototype._checkPartialCollision = function (e, t, i, n, r, o) {
          e.intersectsRect(t, n) && o(this);
        }),
        (b.prototype.isFullUnderCollision = function (e) {
          var t = !1,
            i = this.getPaintBBox();
          i && (t = g.calculateBounds(e, !0).containsRect(i, !0));
          return t;
        }),
        (b.prototype.beginUpdate = function (e) {
          this._updateCounter
            ? this._updateCounter++
            : ((this._updateCounter = 1),
              this._notifyChange(b._Change.PrepareGeometryUpdate),
              this._blockUpdateChanges([!0, !!e]));
        }),
        (b.prototype.endUpdate = function (e) {
          null != this._updateCounter &&
            0 == --this._updateCounter &&
            (this._releaseUpdateChanges([!0, !!e]),
            this._notifyChange(b._Change.FinishGeometryUpdate, e ? -1 : 0),
            delete this._updateCounter,
            this.hasMixin(b.Accelerated) && this._updateQTree());
        }),
        (b.prototype.isPaintable = function (e, t) {
          if (!this.isVisible()) return !1;
          if (this.hasFlag(b.Flag.NoPaint)) return !1;
          if (!e)
            return (
              (!!this._scene && !!this.getParent()) ||
              "scene" === n.getName(this)
            );
          var i = this.getPaintBBox(e.configuration.multiPageView, t);
          if (null == i || i.isEmpty()) return !1;
          if ("m" === this.$_sbl) return !0;
          if (e) {
            if (e.dirtyMatcher && !e.dirtyMatcher.isDirty(i)) return !1;
            if (
              e.configuration &&
              e.configuration.clipArea &&
              !e.configuration.clipArea.intersectsRect(i)
            )
              return !1;
          }
          return !0;
        }),
        (b.prototype.paint = function (e, t) {
          this._preparePaint(e, t) && (this._paint(e, t), this._finishPaint(e));
        }),
        (b.prototype.toBitmap = function (e, t, i, n, r, o, a, l, d) {
          var g = l || this._getBitmapPaintArea();
          i = i || 0;
          var f = 1,
            m = 1,
            y = 1,
            _ = 0,
            v = 0;
          if (
            (e &&
              ("number" == typeof e
                ? (f = e)
                : e instanceof h && (f = e.toPoint() / g.getWidth())),
            t &&
              ("number" == typeof t
                ? (m = t)
                : t instanceof h && (m = t.toPoint() / g.getHeight())),
            o)
          ) {
            var b = o / h.DPI;
            ((f *= b), (m *= b));
          }
          var C = Math.round(g.getWidth() * f),
            w = Math.round(g.getHeight() * m);
          if (f !== m)
            switch (i) {
              case 0:
                f < m
                  ? ((y = f), (w = Math.round(g.getHeight() * y)))
                  : ((y = m), (C = Math.round(g.getWidth() * y)));
                break;
              case 1:
                f > m
                  ? ((y = f), (w = Math.round(g.getHeight() * y)))
                  : ((y = m), (C = Math.round(g.getWidth() * y)));
                break;
              case 2:
                f < m
                  ? ((y = f), (v = (w - g.getHeight() * y) / 2))
                  : ((y = m), (_ = (C - g.getWidth() * y) / 2));
            }
          else y = f;
          var E = new u(void 0, void 0, !1 !== d || d);
          E.resize(C, w);
          var B = new p();
          B.canvas = E;
          var x,
            P = new A();
          ((P.paintMode = A.PaintMode.Full),
            (P.paintSharp = !1),
            (P.annotations = !1),
            (B.configuration = P),
            (P.clipArea = g),
            (P.clipDirty = !1),
            (P.enableFxCache = !1),
            (P.defaultEffectDetailLevel = 1),
            r && s.extend(P, r),
            E.prepare(),
            n && E.fillCanvas(n, a),
            E.setOrigin(new c(g.getX() * y - _, g.getY() * y - v)),
            E.setScale(y));
          try {
            (x = this._paintToBitmap(B)) && o && x.setDPI(o);
          } finally {
            E.finish();
          }
          return x;
        }),
        (b.prototype.assignFrom = function (e) {
          (r.prototype.assignFrom.call(this, e),
            this.hasMixin(b.Stylable) &&
              e.hasMixin(b.Stylable) &&
              (this.$sref = e.$sref),
            this.hasMixin(a) && e.hasMixin(a) && this.assignStyleFrom(e));
        }),
        (b.prototype.findPivots = function (e, t) {
          return null;
        }),
        (b.prototype._getBitmapPaintArea = function () {
          return this.getPaintBBox() || new d(0, 0, 0, 0);
        }),
        (b.prototype.getSelfCanvasUsedArea = function () {
          return this._getBitmapPaintArea();
        }),
        (b.prototype._paintToBitmap = function (e) {
          return (this.paint(e), e.canvas.getBitmap());
        }),
        (b.prototype._paint = function (e, t) {
          this.hasMixin(b.Stylable)
            ? this._paintStyle(
                e,
                this.getPaintBBox(null, t, e.isIncludingInvisible()),
              )
            : this._paintChildren(e, t);
        }),
        (b.prototype._preparePaint = function (e, t) {
          return (
            this.hasMixin(b.Stylable) &&
              e
                .getRootCanvas()
                .setMasked("m" === this.$_sbl || "!m" === this.$_sbl),
            !this.hasFlag(b.Flag.NoPaint) &&
              !!(this.isPaintable(e, t) || (e && e.isIncludingInvisible()))
          );
        }),
        (b.prototype._finishPaint = function (e) {}),
        (b.prototype._paintChildren = function (e, t) {
          if (this.hasMixin(n.Container))
            for (var i = this.getFirstChild(); null != i; i = i.getNext())
              i instanceof b && i.paint(e);
        }),
        (b.prototype._calculateSourceBBox = function (e) {
          return null;
        }),
        (b.prototype._calculateGeometryBBox = function (e) {
          return this.getChildrenGeometryBBox(e);
        }),
        (b.prototype._calculatePaintBBox = function (e, t) {
          return this._calculateChildrenPaintBBox(null, e, t);
        }),
        (b.prototype._calculatePreTransformRect = function (e) {
          var t = null;
          if (e && e.invertible())
            if (this.hasMixin(m)) {
              var i = new f(this, e.inverted());
              t = g.calculateBounds(i, !0);
            } else {
              var n = null;
              (t = this.getGeometryBBox())
                ? ((n = e.inverted().mapQuadrilateral(t)),
                  (t = d.fromPoints.apply(null, n)))
                : (t = null);
            }
          else t = this.getGeometryBBox();
          return t;
        }),
        (b.prototype._detailHitTest = function (e, t, i, n, r, o) {
          return null;
        }),
        (b.prototype._beforeVisibilityUpdate = function () {}),
        (b.prototype._afterVisibilityUpdate = function () {}),
        (b.prototype._blockUpdateChanges = function (e) {
          this._beginBlockChanges(
            [
              b._Change.InvalidationRequested,
              b._Change.InvalidationRequest,
              b._Change.PrepareGeometryUpdate,
              b._Change.FinishGeometryUpdate,
              b._Change.ChildGeometryUpdate,
              b._Change.ChildVisualUpdate,
            ],
            e,
          );
        }),
        (b.prototype._releaseUpdateChanges = function (e) {
          this._endBlockChanges(
            [
              b._Change.InvalidationRequested,
              b._Change.InvalidationRequest,
              b._Change.PrepareGeometryUpdate,
              b._Change.FinishGeometryUpdate,
              b._Change.ChildGeometryUpdate,
              b._Change.ChildVisualUpdate,
            ],
            e,
          );
        }),
        (b.prototype._requestInvalidateNode = function (e) {
          if (e.isPaintable()) {
            var t = e.getPaintBBox();
            t && this._requestInvalidationArea(t);
          }
        }),
        (b.prototype._requestInvalidationArea = function (e) {
          this._scene &&
            (this._scene._invalidateArea(e, this),
            this._handleChange(b._Change.InvalidationRequested, e));
        }),
        (b.prototype._requestInvalidation = function () {
          this._requestInvalidateNode(this);
        }),
        (b.prototype._invalidateOldPaintBBox = function () {
          this._savedPaintBBox &&
            !this._savedPaintBBox.isEmpty() &&
            this._requestInvalidationArea(this._savedPaintBBox);
        }),
        (b.prototype._handleChange = function (e, t) {
          if (e == b._Change.InvalidationRequest)
            this.isPaintable() && this._requestInvalidation();
          else if (e === b._Change.InvalidationRequested)
            this.getParent() &&
              this.getParent()._notifyChange(
                b._Change.InvalidationRequested,
                t,
              );
          else if (e == b._Change.PrepareGeometryUpdate)
            (this._canEventBeSent(b.GeometryChangeEvent) &&
              this._sendEvent(
                new b.GeometryChangeEvent(
                  this,
                  b.GeometryChangeEvent.Type.Before,
                ),
              ),
              (this._savedGeometryBBox = this.getGeometryBBox()),
              (this._savedPaintBBox =
                (this.isPaintable() &&
                  this.isVisible() &&
                  this.getPaintBBox()) ||
                null));
          else if (e == b._Change.FinishGeometryUpdate) {
            var i = 0,
              o = !1,
              a = null;
            (t && Array.isArray(t) && ((a = t[1]), (t = t[0])),
              "number" == typeof t && (i = t),
              2 === i && ((i = 0), (o = !0)),
              1 === i
                ? ((this._paintBBox = null), (this._childrenPaintBBox = null))
                : 0 === i &&
                  ((this._geometryBBox = null),
                  (this._preTransformRect = null),
                  (this._sourceBBox = null),
                  (this._paintBBox = null),
                  (this._childrenPaintBBox = null),
                  (this._collidesWithChildren = void 0),
                  (this._collidesWithChildrenSeparate = void 0)));
            var s =
                (this.isPaintable() &&
                  this.isVisible() &&
                  this.getPaintBBox()) ||
                null,
              l = this.getGeometryBBox(),
              h = !d.equals(this._savedPaintBBox, s);
            (this.getParent() &&
              (0 === i
                ? this.getParent()._notifyChange(
                    b._Change.ChildGeometryUpdate,
                    [this, h, a],
                  )
                : h &&
                  1 === i &&
                  this.getParent()._notifyChange(b._Change.ChildVisualUpdate, [
                    this,
                  ])),
              this._canEventBeSent(b.GeometryChangeEvent) &&
                this._sendEvent(
                  new b.GeometryChangeEvent(
                    this,
                    b.GeometryChangeEvent.Type.After,
                  ),
                ),
              this.isPaintable() &&
                !o &&
                (h && this._invalidateOldPaintBBox(),
                this._requestInvalidation()),
              !this._savedGeometryBBox ||
                !l ||
                this.isRestoring() ||
                this.isRecordedTransaction() ||
                d.equals(this._savedGeometryBBox, l) ||
                (y.isEqualEps(
                  this._savedGeometryBBox.getWidth(),
                  l.getWidth(),
                  1e-10,
                ) &&
                  y.isEqualEps(
                    this._savedGeometryBBox.getHeight(),
                    l.getHeight(),
                    1e-10,
                  )) ||
                this._notifyChange(b._Change.GeometrySizeChanged, [
                  this,
                  this._savedGeometryBBox,
                ]),
              (this._savedGeometryBBox = null),
              (this._savedPaintBBox = null));
          } else if (e == b._Change.ChildGeometryUpdate) {
            if (
              (this._invalidateGeometryForChildUpdate(t[1]),
              this.hasMixin(b.Stylable) &&
                (this._resetFxCacheAndState(), this._effects))
            )
              for (
                var A = this._effects.getFirstChild();
                null !== A;
                A = A.getNext()
              )
                if (A.isAffectedByChildren()) {
                  this._handleChange(b._Change.InvalidationRequest);
                  break;
                }
            (this._canEventBeSent(b.GeometryChangeEvent) &&
              this._sendEvent(
                new b.GeometryChangeEvent(
                  this,
                  b.GeometryChangeEvent.Type.Child,
                ),
              ),
              this.getParent() && this.getParent()._notifyChange(e, t));
          } else if (e == b._Change.ChildVisualUpdate) {
            if (
              (this._invalidatePaintBoxForChildUpdate(),
              this.hasMixin(b.Stylable) &&
                (this._resetFxCacheAndState(), this._effects))
            )
              for (
                A = this._effects.getFirstChild();
                null !== A;
                A = A.getNext()
              )
                if (A.isAffectedByChildren()) {
                  this._handleChange(b._Change.InvalidationRequest);
                  break;
                }
            this.getParent() && this.getParent()._notifyChange(e, t);
          } else if (e == n._Change.AfterChildInsert)
            t instanceof b &&
              (this._notifyChange(b._Change.ChildGeometryUpdate, [t, 1]),
              t._handleChange(b._Change.InvalidationRequest));
          else if (e == n._Change.BeforeChildRemove)
            t instanceof b && this._requestInvalidateNode(t);
          else if (e == n._Change.AfterChildRemove)
            t instanceof b &&
              this._notifyChange(b._Change.ChildGeometryUpdate, [t, 1]);
          else if (e == n._Change.AfterFlagChange)
            switch (t.flag) {
              case b.Flag.NoPaint:
                this._requestInvalidation();
            }
          (this.hasMixin(b.Layout) && this._handleLayoutChange(e, t),
            this.hasMixin(b.Stylable) && this._handleStyleChange(e, t),
            this.hasMixin(b.Accelerated) &&
              this._handleChildrenStructureChange(e, t),
            r.prototype._handleChange.call(this, e, t));
        }),
        (b.prototype._invalidatePaintBoxForChildUpdate = function () {
          this.hasMixin(n.Container) &&
            ((this._paintBBox = null), (this._childrenPaintBBox = null));
        }),
        (b.prototype._invalidateGeometryForChildUpdate = function (e) {
          this.hasMixin(n.Container) &&
            e &&
            ((this._geometryBBox = null),
            (this._preTransformRect = null),
            (this._paintBBox = null),
            (this._childrenPaintBBox = null));
        }),
        (b.prototype._canHandleGeometryChangeForProperties = function (
          e,
          t,
          i,
        ) {
          return !(
            (e != n._Change.BeforePropertiesChange &&
              e != n._Change.AfterPropertiesChange) ||
            !s.containsObjectKey(t.properties, i)
          );
        }),
        (b.prototype._handleGeometryChangeForProperties = function (e, t, i) {
          if (this._canHandleGeometryChangeForProperties(e, t, i)) {
            switch (e) {
              case n._Change.BeforePropertiesChange:
                var r;
                if (this.isPaintable() && this.hasMixin(b.Stylable))
                  if ((r = t.properties.indexOf("trf")) >= 0) {
                    var o = this.$trf ? this.$trf.getMatrix() : null,
                      a = t.values[r] ? t.values[r].getMatrix() : null;
                    if (o && a && o !== a) {
                      if (
                        o[0] !== a[0] ||
                        o[1] !== a[1] ||
                        o[2] !== a[2] ||
                        o[3] !== a[3]
                      )
                        this._resetFxCacheAndState();
                      else if (this.getParent()) {
                        var s = this._paintBBox,
                          l = this.getParent();
                        if ("Compound Shape" === n.getName(l))
                          this._resetFxCacheAndState();
                        else if (
                          l instanceof b &&
                          l.isPaintable() &&
                          l.hasMixin(b.Stylable) &&
                          "group" !== n.getName(l)
                        ) {
                          var h = this.getParent()._paintBBox;
                          s &&
                            h &&
                            s.containsRect(h) &&
                            this._resetFxCacheAndState();
                        }
                      }
                    } else this._resetFxCacheAndState();
                  } else this._resetFxCacheAndState();
                this._notifyChange(b._Change.PrepareGeometryUpdate);
                break;
              case n._Change.AfterPropertiesChange:
                this._notifyChange(b._Change.FinishGeometryUpdate);
            }
            return !0;
          }
          return !1;
        }),
        (b.prototype._handleVisualChangeForProperties = function (e, t, i) {
          return (
            !(
              e != n._Change.AfterPropertiesChange ||
              !s.containsObjectKey(t.properties, i)
            ) && (this._notifyChange(b._Change.InvalidationRequest), !0)
          );
        }),
        (e.exports = b));
    }