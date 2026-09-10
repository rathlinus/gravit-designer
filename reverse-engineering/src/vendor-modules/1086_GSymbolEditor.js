/**
 * chunk.vendor.js Module #1086
 * Type: class
 * Name: GSymbolEditor
 */

function (e, t, i) {
      var n = i(0),
        r = i(36),
        o = i(66),
        a = i(274),
        s = i(154),
        l = i(22),
        h = i(216),
        A = i(39),
        c = i(17),
        p = i(73),
        u = i(7),
        d = (i(2), i(6));
      i(12);

      function g(e) {
        (a.call(this, e), this.setColor(new c([132, 102, 176])));
      }
      (n.inheritAndMix(g, a, [s.LabelHolder]),
        r.exports(g, h),
        (g.prototype._savedElementPreview = null),
        (g.prototype._isAttached = !1),
        (g.prototype.createElementPreview = function () {
          if (!this._elementPreview) {
            var e = this._element.getSourceBBox();
            if (!e) return;
            var t = this._element.getProperty("trf") || new u();
            (this._setElementPreview(
              new p(e.getX(), e.getY(), e.getWidth(), e.getHeight()),
            ),
              this._elementPreview.setProperty("trf", t));
          }
        }),
        (g.prototype._showEditor = function () {
          return a.prototype._showEditor.call(this) || this._isAttached;
        }),
        (g.prototype._isBBoxEmpty = function () {
          return a.prototype._isBBoxEmpty.call(this) && !this._isAttached;
        }),
        (g.prototype._attach = function () {
          var e = this._element.getScene();
          (null != e &&
            e.addEventListener(
              l.GeometryChangeEvent,
              this._geometryChange,
              this,
            ),
            (this._isAttached = !0),
            this.requestInvalidation(),
            a.prototype._attach.call(this));
        }),
        (g.prototype._detach = function () {
          var e = this._element.getScene();
          (null != e &&
            e.removeEventListener(
              l.GeometryChangeEvent,
              this._geometryChange,
              this,
            ),
            (this._isAttached = !1),
            a.prototype._detach.call(this));
        }),
        (g.prototype._geometryChange = function () {
          this._setElementPreview(null);
        }),
        (g.prototype.canApplyTransform = function () {
          return (
            (this._elementPreview &&
              (!this._elementPreview.getTransform() ||
                this._elementPreview.getTransform().invertible())) ||
            a.prototype.canApplyTransform.call(this)
          );
        }),
        (g.prototype.transformBox = function (e, t) {
          var i = this._element.getSourceBBox();
          if (i && !i.isEmpty())
            return (
              this._elementPreview.setProperty(
                "trf",
                this._element.getProperty("trf"),
              ),
              t && (this._storedMoveData = t.storedMoveData),
              this._setPreTransform(e),
              this._elementPreview.assignPreTransformFrom(e, this._element),
              (this._savedElementPreview = this._elementPreview),
              void a.prototype.requestInvalidation.call(this)
            );
          a.prototype.transformBox.call(this, e, t);
        }),
        (g.prototype.getPEGeometryBBox = function () {
          var e = a.prototype.getPEGeometryBBox.call(this);
          return this._transform ? this._transform.mapRect(e) : e;
        }),
        (g.prototype._setPreTransform = function (e) {
          u.equals(this._preTransform, e) ||
            (this.hasFlag(A.Flag.Outline)
              ? a.prototype.requestInvalidation.call(this)
              : this.setOutlineTmpFlag(),
            (this._preTransform = e),
            a.prototype.requestInvalidation.call(this));
        }),
        (g.prototype.getPaintElement = function () {
          return (
            this._elementPreview || this.createElementPreview(),
            this._elementPreview || this._element
          );
        }),
        (g.prototype._getPartInfoAt = function (e, t, i, n) {
          var r = s.prototype._getPartInfoAt.call(this, e, t, i);
          if (
            !r &&
            !this._element.hasFlag(l.Flag.Hidden) &&
            !this._element.hasFlag(l.Flag.FullLocked)
          ) {
            var o = this._getLabelBBox(t);
            if (o && o.expanded(i, i, i, i).containsPoint(e))
              return new A.PartInfo(
                this,
                s.LabelHolder.LABEL_PART_ID,
                {
                  point: e,
                  origTrf: t,
                },
                !0,
                !0,
              );
          }
          return r;
        }),
        (g.prototype.movePart = function (e, t, i, n, r, a, l, h) {
          var A = s.prototype.movePart.call(this, e, t, i, n, r, a, l, h);
          if (e === s.LabelHolder.LABEL_PART_ID) {
            var c = n.mapPoint(i),
              p = n.mapPoint(t.point),
              g = c.subtract(p),
              f = this.getElement().getGeometryBBox().getSide(d.Side.TOP_LEFT),
              m = f.add(g),
              y = (m = r.mapPoint(m)).subtract(f),
              _ = new u(1, 0, 0, 1, y.getX(), y.getY()),
              v = new o.EdTransformOptions();
            ((v.isMultiPage = h),
              (v.fullContentsTransform = !0),
              this.edTransform(_, null, null, v));
          }
          return A;
        }),
        (g.prototype._applyPartMove = function (e, t, i, n) {
          (e === s.LabelHolder.LABEL_PART_ID &&
            (this.canApplyTransform()
              ? (this._prepareApplyTransform(this._element),
                this._applyTransform(this._element, !0, n, i))
              : this.resetTransform()),
            s.prototype._applyPartMove.call(this, e, t, i, n));
        }),
        (g.prototype.getCustomBBox = function (e, t) {
          var i = s.prototype.getCustomBBox.call(this, e, t);
          if (this.getElement().getScene())
            if (i) {
              var n = e.getScaleFactor(),
                r =
                  this.getElement()
                    .getScene()
                    .getLabelBBox(this.getElement().isScaleLabel() ? n : 1 / n)
                    .getHeight() + 1;
              i = i.expanded(0, r, 0, 0);
            } else
              this.getElement().getGeometryBBox() &&
                (i = this._getLabelBBox(e));
          return i;
        }),
        (g.prototype.setColor = function (e) {
          this._color = e;
        }),
        (g.prototype.getColor = function () {
          return this.getElement() &&
            (this.getElement().isMaster() ||
              this.getElement().getMasterSymbol())
            ? this._color
            : null;
        }),
        (g.prototype._applyTransform = function (e, t, i, n) {
          var r = this._transform,
            a = !1;
          if (!r)
            if (this._elementPreview || this._savedElementPreview) {
              var s =
                  (
                    this._savedElementPreview || this._elementPreview
                  ).getTransform() || new u(),
                l = e.getTransform() || new u();
              r = s.preMultiplied(l.inverted());
            } else r = new u();
          var A = e.findParent(function (e) {
            if (e instanceof h) return !0;
          });
          if (((p = A && A.isMaster()), !r.isIdentity())) {
            var c, p;
            if ((e.beginUpdate(), t))
              (e.setTransform((e.getProperty("trf") || new u()).multiplied(r)),
                (!p || (p && e.isMaster())) &&
                  ((c = e.getProperty("blockEv")),
                  (a = !0),
                  e.setProperty("blockEv", !0)),
                this._transformSubElements(e, t, r, i, n));
            else {
              var d = e.getProperty("frame"),
                g = this.getBox(),
                f = this._storedMoveData,
                m = e.getTransform();
              if (e.dependentUpdate)
                e.setTransform((m || new u()).multiplied(r));
              else if (f) {
                var y = u.getResizeTransform(
                  g,
                  f.side,
                  f.dx,
                  f.dy,
                  f.shift,
                  f.option,
                );
                (e.setProperty("frame", y.mapRect(d)),
                  p ||
                    (this._savedElementPreview &&
                      (e._layoutTransform =
                        this._savedElementPreview._layoutTransform),
                    this._transformSiblings(y, m, d, i, n)));
              } else
                this._transform &&
                  (e.setTransform(
                    (e.getProperty("trf") || new u()).multiplied(
                      this._transform,
                    ),
                  ),
                  p || this._transformSiblings(r, m, d, i, n));
              (p &&
                e.isMaster() &&
                ((c = e.getProperty("blockEv")),
                (a = !0),
                e.setProperty("blockEv", !0)),
                this._transformSubElements(e, t, r, i, n));
            }
            (a && e.setProperty("blockEv", c), e.endUpdate());
          }
          ((this._savedElementPreview = null),
            o.prototype._applyTransform.call(this, e));
        }),
        (g.prototype._transformSubElements = function (e, t, i, n, o) {
          if (t || !e.hasAnchors())
            for (
              var a = this._storedMoveData, s = e.getFirstChild();
              null != s;
              s = s.getNext()
            )
              if (s instanceof l && (!n || n.indexOf(s) < 0)) {
                var h = r.openEditor(s),
                  A = new g.EdTransformOptions();
                ((A.fullContentsTransform = !!t),
                  (s.dependentUpdate = !0),
                  s.setProperty("subtrf", !0, !0),
                  (A.storedMoveData = a));
                s.getTransform() || new u();
                (h instanceof g && (h._preTransform = this._preTransform),
                  h.edTransform(i, null, null, A),
                  h.applyTransform(s, t, n, o),
                  (s.dependentUpdate = !1),
                  s.setProperty("subtrf", !1, !0));
              }
        }),
        (g.prototype._transformSiblings = function (e, t, i, n, o) {
          var a = this._storedMoveData;
          if ((this._storedMoveData || e) && this.getElement().isMaster()) {
            var s = this.getElement().dependentUpdate,
              l = (t || new u()).decomposed(),
              h = i,
              A = this._preTransform;
            this.getElement()._iterateSiblings(this.getElement(), function (t) {
              var i = t.getTransform() || new u(),
                c = i.decomposed();
              if (
                d.equals(h, t.getProperty("frame")) &&
                u.equals(l.scale, c.scale) &&
                u.equals(l.skew, c.skew)
              ) {
                var p = r.openEditor(t),
                  f = new g.EdTransformOptions();
                ((f.fullContentsTransform = !1),
                  (t.dependentUpdate = s),
                  (f.storedMoveData = a));
                var m,
                  y,
                  _ = p.getBox();
                ((m =
                  e ||
                  u.getResizeTransform(
                    _,
                    a.side,
                    a.dx,
                    a.dy,
                    a.shift,
                    a.option,
                  )),
                  p.edTransform(
                    i.inverted().multiplied(m).multiplied(i),
                    null,
                    null,
                    f,
                  ),
                  (p._preTransform = A),
                  t.isMaster() ||
                    ((y = t.getProperty("blockEv")),
                    t.setProperty("blockEv", !0)),
                  p.applyTransform(t, !1, n, o),
                  r.closeElementEditor(t),
                  t.isMaster() || t.setProperty("blockEv", y),
                  (t.dependentUpdate = !1));
              }
            });
          }
        }),
        (g.prototype.toString = function () {
          return "[Object GSymbolEditor]";
        }),
        (e.exports = g));
    }