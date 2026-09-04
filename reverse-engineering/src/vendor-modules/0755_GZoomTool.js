/**
 * chunk.vendor.js Module #755
 * Type: class
 * Name: GZoomTool
 */

function (e, t, i) {
      var n = i(64),
        r = i(150),
        o = i(0),
        a = i(52),
        s = i(6),
        l = i(77),
        h = i(363),
        A = i(211),
        c = i(24);

      function p() {
        A.call(this);
      }
      (o.inherit(p, A),
        (p.options = {
          zoomStep: 2,
          zoomLevels: [
            0.06, 0.12, 0.25, 0.5, 0.66, 1, 1.5, 2, 3, 4, 8, 16, 32, 64, 128,
            256,
          ],
        }),
        (p.prototype._zoomMode = 0),
        (p.prototype._dragArea = null),
        (p.prototype._dragStartTime = 0),
        (p.prototype.getCursor = function () {
          switch (this._zoomMode) {
            case -2:
            case -1:
              return a.ZoomMinus;
            case 1:
            case 2:
              return a.ZoomPlus;
            default:
              return a.ZoomNone;
          }
        }),
        (p.prototype.activate = function (e, t) {
          (A.prototype.activate.call(this, e, t),
            this._updateMode(),
            t ||
              (e.addEventListener(l.DragStart, this._mouseDragStart, this),
              e.addEventListener(l.Drag, this._mouseDrag, this),
              e.addEventListener(l.DragEnd, this._mouseDragEnd, this),
              e.addEventListener(l.Release, this._mouseRelease, this),
              e.addEventListener(h.TransformEvent, this._updateMode, this),
              n.addEventListener(r, this._modifiersChanged, this)));
        }),
        (p.prototype.deactivate = function (e, t) {
          (A.prototype.deactivate.call(this, e, t),
            e.removeEventListener(l.DragStart, this._mouseDragStart),
            e.removeEventListener(l.Drag, this._mouseDrag),
            e.removeEventListener(l.DragEnd, this._mouseDragEnd),
            e.removeEventListener(l.Release, this._mouseRelease),
            e.removeEventListener(h.TransformEvent, this._updateMode, this),
            n.removeEventListener(r, this._modifiersChanged));
        }),
        (p.prototype.isDeactivatable = function () {
          return !this._dragArea;
        }),
        (p.prototype.paint = function (e) {
          if (this._hasDragArea()) {
            var t = Math.floor(this._dragArea.getX()),
              i = Math.floor(this._dragArea.getY()),
              n = Math.ceil(this._dragArea.getWidth()),
              r = Math.ceil(this._dragArea.getHeight());
            (c.outlineWidth % 2 != 0 &&
              ((t += 0.5), (i += 0.5), (n -= 1), (r -= 1)),
              e.canvas.strokeRect(t, i, n, r, c.outlineWidth));
          }
        }),
        (p.prototype._mouseDragStart = function (e) {
          this._dragStartTime = new Date().getTime();
        }),
        (p.prototype._mouseDrag = function (e) {
          0 !== this._zoomMode &&
            (this._hasDragArea() &&
              this.invalidateArea(this._dragArea.expanded(2, 2, 2, 2)),
            (this._dragArea = s.fromPoints(e.clientStart, e.client)),
            this._hasDragArea() &&
              this.invalidateArea(this._dragArea.expanded(2, 2, 2, 2)));
        }),
        (p.prototype._mouseDragEnd = function (e) {
          if (0 !== this._zoomMode)
            if (
              (new Date().getTime() - this._dragStartTime < 200 &&
                this._dragArea &&
                this._dragArea.getWidth() * this._dragArea.getHeight() < 64 &&
                (this._dragArea = null),
              this._dragArea && !this._dragArea.isEmpty())
            ) {
              var t = this._view.getViewTransform().mapRect(this._dragArea);
              this._view.zoomAll(t, this._zoomMode < 0);
            } else
              this._hasDragArea() &&
                this.invalidateArea(this._dragArea.expanded(2, 2, 2, 2));
        }),
        (p.prototype._mouseRelease = function (e) {
          if (!this._dragArea || (this._dragArea && this._dragArea.isEmpty())) {
            var t = null,
              i = null,
              n = null;
            if (2 === this._zoomMode) t = h.options.maxZoomFactor;
            else if (-2 === this._zoomMode) t = h.options.minZoomFactor;
            else if (0 !== this._zoomMode) {
              if (p.options.zoomLevels)
                for (
                  var r = p.options.zoomLevels,
                    o = this._view.getZoom(),
                    a = r.length - 1,
                    s = 0;
                  s < r.length;
                  s++
                )
                  if (
                    (o > r[s] && (i = r[s]),
                    o < r[a - s] && (n = r[a - s]),
                    o === r[s])
                  ) {
                    ((i = s > 0 ? r[s - 1] : h.options.minZoomFactor),
                      (n = a > 0 ? r[s + 1] : h.options.maxZoomFactor));
                    break;
                  }
              t =
                1 === this._zoomMode
                  ? n || this._view.getZoom() * p.options.zoomStep
                  : i || this._view.getZoom() / p.options.zoomStep;
            }
            if (null !== t) {
              var l = this._view.getViewTransform().mapPoint(e.client);
              this._view.zoomAt(l, t);
            }
          }
          this._dragArea = null;
        }),
        (p.prototype._modifiersChanged = function (e) {
          this._updateMode();
        }),
        (p.prototype._updateMode = function () {
          var e = 0;
          ((((e = n.modifiers.optionKey ? -1 : 1) < 0 &&
            this._view.getZoom() <= h.options.minZoomFactor) ||
            (e > 0 && this._view.getZoom() >= h.options.maxZoomFactor)) &&
            (e = 0),
            e != this._zoomMode && ((this._zoomMode = e), this.updateCursor()));
        }),
        (p.prototype._hasDragArea = function () {
          return (
            this._dragArea &&
            (this._dragArea.getHeight() > 0 || this._dragArea.getWidth() > 0)
          );
        }),
        (p.prototype.toString = function () {
          return "[Object GZoomTool]";
        }),
        (e.exports = p));
    }