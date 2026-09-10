/**
 * chunk.vendor.js Module #236
 * Type: class
 * Name: GShapeTool
 */

function (e, t, i) {
      var n = i(64),
        r = i(150),
        o = i(0),
        a = i(60),
        s = i(52),
        l = i(141),
        h = i(77),
        A = i(5),
        c = i(24),
        p = i(332),
        u = i(6),
        d = i(56),
        g = i(36),
        f = i(22),
        m = i(9),
        y = i(47),
        _ = i(153),
        v = i(84),
        b = i(333);

      function C(e, t) {
        (p.call(this),
          b.call(this),
          (this._keepRatio = e),
          (this._fromCenter = t));
      }
      (o.inheritAndMix(C, p, [b]),
        (C.prototype._isDragging = !1),
        (C.prototype._dragStart = null),
        (C.prototype._dragStartOrig = null),
        (C.prototype._dragCurrent = null),
        (C.prototype._dragCurrentOrig = null),
        (C.prototype._keepRatio = !1),
        (C.prototype._fromCenter = !1),
        (C.prototype._shape = null),
        (C.prototype._dragArea = null),
        (C.prototype._dragLine = null),
        (C.prototype._movePosition = null),
        (C.prototype._hasCreatedShape = !1),
        (C.prototype.getCursor = function () {
          return s.Cross;
        }),
        (C.prototype.activate = function (e, t) {
          (p.prototype.activate.call(this, e, t),
            t ||
              (e.addEventListener(h.Move, this._mouseMove, this),
              e.addEventListener(h.DragStart, this._mouseDragStart, this),
              e.addEventListener(h.Drag, this._mouseDrag, this),
              e.addEventListener(h.DragEnd, this._mouseDragEnd, this),
              e.addEventListener(h.Down, this._mouseDown, this),
              e.addEventListener(h.Release, this._mouseRelease, this),
              n.addEventListener(r, this._modifiersChanged, this)));
        }),
        (C.prototype.deactivate = function (e, t) {
          (this._editor && this._editor.getGuides().invalidate(),
            this.updateInlineHint(null),
            p.prototype.deactivate.call(this, e),
            e.removeEventListener(h.Move, this._mouseMove, this),
            e.removeEventListener(h.DragStart, this._mouseDragStart),
            e.removeEventListener(h.Drag, this._mouseDrag),
            e.removeEventListener(h.DragEnd, this._mouseDragEnd),
            e.removeEventListener(h.Down, this._mouseDown),
            e.removeEventListener(h.Release, this._mouseRelease),
            n.removeEventListener(r, this._modifiersChanged));
        }),
        (C.prototype.isDeactivatable = function () {
          return !this._isDragging;
        }),
        (C.prototype.paint = function (e) {}),
        (C.prototype.getAdditionalTransactionData = function (e, t) {
          return "function" == typeof this.getAdditionalTransactionDataMixin
            ? this.getAdditionalTransactionDataMixin(e, t)
            : null;
        }),
        (C.prototype._paintOutline = function (e) {
          (e.canvas.putVertices(new l(this._shape)),
            e.canvas.strokeVertices(e.selectionOutlineColor, c.outlineWidth));
        }),
        (C.prototype._mouseDown = function (e) {
          e.button === h.BUTTON_LEFT &&
            this._editor.updateByMousePosition(
              e.client,
              this._view.getWorldTransform(this._scene),
              !1,
              this._view.getViewConfiguration(),
            );
        }),
        (C.prototype._mouseRelease = function (e) {
          if (!this._hasCreatedShape) {
            var t = this._view
              .getViewTransform(this._view.getScene().getActivePage())
              .mapPoint(e.client);
            (this._editor.getGuides().beginMap(this._editor.getMappingScopes()),
              (t = this._editor
                .getGuides()
                .mapPoint(t, null, this._getExclusions())),
              this._editor.getGuides().finishMap(),
              this._createShapeManually(t));
          }
          ((this._hasCreatedShape = !1), this._manager.notifyJobDone(this));
        }),
        (C.prototype._mouseDragStart = function (e) {
          ((this._hasCreatedShape = !1),
            (this._isDragging = !0),
            this.beginPan(),
            (this._dragStart = this._view
              .getViewTransform(this._view.getScene().getActivePage())
              .mapPoint(e.client)),
            this._editor.getGuides().beginMap(this._editor.getMappingScopes()),
            (this._dragStart = this._editor
              .getGuides()
              .mapPoint(this._dragStart, null, this._getExclusions())),
            this._editor.getGuides().finishMap(),
            (this._shape = this._createShape()),
            this._invalidateShape(),
            (this._hasCreatedShape = this._insertShape(this._shape, !0)));
          var t = g.getEditor(this._shape);
          (t && (this._shape.setFlag(f.Flag.NoPaint), t.setOutlineTmpFlag()),
            this.updateInlineHint(null),
            this.updateCursor());
        }),
        (C.prototype._mouseDrag = function (e) {
          ((this._dragCurrent = this._view
            .getViewTransform(this._view.getScene().getActivePage())
            .mapPoint(e.client)),
            this.isPanning() && this.panView(e.client, e.clientDelta),
            n.modifiers.spaceKey &&
              this._dragStartOrig &&
              (this._dragStart = this._dragStartOrig.add(
                this._dragCurrent.subtract(this._dragCurrentOrig),
              )),
            this._invalidateShape());
        }),
        (C.prototype._mouseDragEnd = function (e) {
          (this.endPan(), this._editor.getGuides().invalidate());
          var t = this._shape;
          if (
            ((this._shape = null),
            (this._dragStart = null),
            (this._dragCurrent = null),
            (this._shape = null),
            (this._dragArea = null),
            (this._dragLine = null),
            (this._dragStartOrig = null),
            (this._dragCurrentOrig = null),
            (this._isDragging = !1),
            this.updateCursor(),
            this.updateInlineHint(null),
            !this._hasCreatedShape && t)
          )
            (this._prepareShapeForAppend(t),
              this._insertShape(t),
              (this._hasCreatedShape = !0));
          else if (this._hasCreatedShape) {
            t.removeFlag(f.Flag.NoPaint);
            var i = g.getEditor(t);
            (i && i.removeOutlineTmpFlag(),
              t._notifyChange(f._Change.FinishGeometryUpdate, 1));
          }
        }),
        (C.prototype._mouseMove = function (e) {
          this._isDragging ||
            ((this._movePosition = this._view
              .getViewTransform(this._view.getScene().getActivePage())
              .mapPoint(e.client)),
            this._invalidateMovePosition());
        }),
        (C.prototype._modifiersChanged = function (e) {
          ((this._keepRatio && e.changed.shiftKey) ||
          (this._fromCenter && e.changed.optionKey) ||
          e.changed.metaKey
            ? this._invalidateShape()
            : e.changed.spaceKey &&
              (n.modifiers.spaceKey
                ? ((this._dragStartOrig = this._dragStart),
                  (this._dragCurrentOrig = this._dragCurrent))
                : ((this._dragStartOrig = null),
                  (this._dragCurrentOrig = null))),
            e.changed.metaKey &&
              !this._isDragging &&
              this._invalidateMovePosition());
        }),
        (C.prototype._getExclusions = function () {
          var e = this._getRelatedItemClass();
          return e && e.prototype.hasMixin.call(e.prototype, v) ? [_] : null;
        }),
        (C.prototype._invalidateMovePosition = function () {
          if (this._movePosition) {
            this._editor.getGuides().beginMap(this._editor.getMappingScopes());
            var e = this._editor
              .getGuides()
              .mapPoint(this._movePosition, null, this._getExclusions());
            if (
              (this._editor.getGuides().finishMap(),
              c.showTooltips &&
                c.coordinatesTooltip &&
                this._showMousePositionInlineHint())
            ) {
              var t =
                this._scene.pointToString(e.getX(), c.tooltipDecimalPlaces) +
                ", " +
                this._scene.pointToString(e.getY(), c.tooltipDecimalPlaces);
              this.updateInlineHint(t, e, u.Side.BOTTOM_LEFT);
            }
          }
        }),
        (C.prototype._invalidateShape = function () {
          if (this._dragStart && this._dragCurrent) {
            (this._editor.getGuides().useExclusions([this._shape]),
              this._editor
                .getGuides()
                .beginMap(this._editor.getMappingScopes()));
            var e = this._editor
              .getGuides()
              .mapPoint(this._dragCurrent, null, this._getExclusions());
            if (
              (this._editor.getGuides().finishMap(),
              !A.equals(this._dragStart, e))
            ) {
              var t = this._dragStart.getX(),
                i = this._dragStart.getY(),
                r = e.getX(),
                o = e.getY(),
                s = r,
                l = o;
              if (this._keepRatio && n.modifiers.shiftKey) {
                var h = r < t ? -1 : 1,
                  p = o < i ? -1 : 1;
                (m = Math.abs(r - t)) >= (y = Math.abs(o - i))
                  ? ((r = t + m * h), (o = i + m * p), (l = m < 2 * y ? o : i))
                  : ((r = t + y * h), (o = i + y * p), (s = y < 2 * m ? r : t));
              }
              var d = null,
                g = null;
              if (
                (this._fromCenter && n.modifiers.optionKey
                  ? ((d = u.fromPoints(
                      new A(t - (r - t), i - (o - i)),
                      new A(t + (r - t), i + (o - i)),
                    )),
                    (g = [
                      new A(t - (s - t), i - (l - i)),
                      new A(t + (s - t), i + (l - i)),
                    ]))
                  : ((d = u.fromPoints(new A(t, i), new A(r, o))),
                    (g = [new A(t, i), new A(s, l)])),
                (this._dragArea = d),
                (this._dragLine = g),
                this._updateShape(this._shape, d, g, !0),
                c.showTooltips && c.sizeTooltip && this._showAreaInlineHint())
              ) {
                var f = null;
                if (this._dragArea) {
                  var m = this._dragArea.getWidth(),
                    y = this._dragArea.getHeight();
                  f =
                    this._shape instanceof a && this._shape.isLine()
                      ? this._scene.pointToString(
                          Math.sqrt(m * m + y * y),
                          c.tooltipDecimalPlaces,
                        )
                      : this._scene.pointToString(m, c.tooltipDecimalPlaces) +
                        " × " +
                        this._scene.pointToString(y, c.tooltipDecimalPlaces);
                }
                this.updateInlineHint(f, this._dragCurrent, u.Side.BOTTOM_LEFT);
              }
            }
          }
        }),
        (C.prototype._prepareShapeForAppend = function (e) {
          return this._updateShape(e, this._dragArea, this._dragLine, !0);
        }),
        (C.prototype._insertShape = function (e, t, i, n) {
          if (e && e.getParent()) return !1;
          if (i) this._editor.insertElements([e], !1, !!i, !0);
          else
            try {
              (this._editor.beginTransaction(),
                this._editor.insertElements([e], !1, !0, !0));
            } finally {
              var r = this.getAdditionalTransactionData(e, e.getParent());
              this._editor.commitTransaction(
                n || m.get(new y("GShapeTool", "action.insert-elements")),
                r,
              );
            }
          return !0;
        }),
        (C.prototype._createShapeManually = function (e) {}),
        (C.prototype._createShape = function () {
          return new (this._getRelatedItemClass())();
        }),
        (C.prototype._updateShape = function (e, t, i, n) {
          throw new Error("Not Supported.");
        }),
        (C.prototype._hasCenterCross = function () {
          return !1;
        }),
        (C.prototype._showMousePositionInlineHint = function () {
          return !1;
        }),
        (C.prototype._showAreaInlineHint = function () {
          return !1;
        }),
        (C.prototype._getRelatedItemClass = function () {
          return d;
        }),
        (C.prototype.toString = function () {
          return "[Object GShapeTool]";
        }),
        (e.exports = C));
    }