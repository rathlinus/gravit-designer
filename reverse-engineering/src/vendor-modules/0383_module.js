/**
 * chunk.vendor.js Module #383
 * Type: unknown
 */

function (e, t, i) {
      i(5);
      var n = i(24),
        r = i(81),
        o = i(17),
        a = i(95),
        s = i(6),
        l = i(7),
        h = i(14);

      function A() {}
      ((A.prototype._icon = null),
        (A.prototype._iconVisible = !1),
        (A.prototype.getAnnotationOptions = function () {
          throw new Error("Not implemented");
        }),
        (A.prototype.getAnnotationBBox = function (e, t, i) {
          return r
            .getAnnotationBBox(e, t, this.getAnnotationOptions().size, i)
            .expanded(
              n.annotPickDistance,
              n.annotPickDistance,
              n.annotPickDistance,
              n.annotPickDistance,
            );
        }),
        (A.prototype.getAnnotHalfWidth = function () {
          return this.getAnnotationOptions().size / 2;
        }),
        (A.prototype.paintAnnotation = function (e, t, i, n, a) {
          var A = this.getAnnotationOptions();
          if (
            (r.paintAnnotation(
              e,
              t,
              i,
              A.type,
              A.inverted,
              A.size,
              a || e.selectionOutlineColor,
              o.WHITE,
              A.outlineWidth,
              A.shadowColor,
              A.outsideStroke,
            ),
            this.isIconVisible())
          ) {
            var c = this._icon.getImageCanvas();
            if (c) {
              t && (i = t.mapPoint(i));
              var p,
                u = e.canvas.getTransform(!0),
                d = new l(),
                g = this._icon.getGeometryBBox(),
                f = g.getSide(s.Side.CENTER),
                m = Math.floor(i.getX() - f.getX()),
                y = Math.floor(i.getY() - f.getY());
              (n &&
                (d = new l()
                  .translated(-f.getX(), -f.getY())
                  .rotated(-n)
                  .translated(f.getX(), f.getY())),
                A.iconDynamicColor &&
                  ((p = e.canvas.createCanvas(g)).fillCanvas(
                    a || e.selectionOutlineColor,
                    1,
                  ),
                  p.drawImage(
                    c,
                    0,
                    0,
                    !0,
                    1,
                    h.CompositeOperator.DestinationIn,
                    !0,
                    g.getWidth(),
                    g.getHeight(),
                  ),
                  (c = p)),
                (d = d.translated(m, y)),
                e.canvas.setTransform(u.preMultiplied(d)),
                e.canvas.drawImage(
                  c,
                  0,
                  0,
                  !1,
                  1,
                  null,
                  !1,
                  g.getWidth(),
                  g.getHeight(),
                ),
                e.canvas.setTransform(u),
                p && p.destroy());
            }
          }
        }),
        (A.prototype.setIcon = function (e) {
          if (e) {
            var t = new XMLHttpRequest();
            (t.addEventListener(
              "load",
              function () {
                if (200 == t.status && t.response) {
                  var e = new Blob([t.response], {
                      type: "image/png",
                    }),
                    i = new FileReader();
                  ((i.onload = function (e) {
                    var t = e.target.result;
                    ((this._icon = new a()),
                      this._icon.addEventListener(
                        a.StatusEvent,
                        this._statusEvent,
                        this,
                      ),
                      this._icon.setProperty("url", t),
                      this._icon.forceImageUpdate());
                  }.bind(this)),
                    i.readAsDataURL(e));
                }
              }.bind(this),
            ),
              (t.responseType = "blob"),
              t.open("GET", e, !0),
              t.send(null));
          } else this._icon = null;
        }),
        (A.prototype.getIcon = function () {
          return this._icon;
        }),
        (A.prototype.setIconVisible = function (e) {
          this._iconVisible !== e &&
            ((this._iconVisible = e),
            this._iconVisible && this._updateBounds());
        }),
        (A.prototype.isIconVisible = function () {
          return this._iconVisible && !!this._icon;
        }),
        (A.prototype._statusEvent = function (e) {
          e.status !== a.ImageStatus.Loading &&
            e.status !== a.ImageStatus.Resolving &&
            (e.status === a.ImageStatus.Loaded && this._updateBounds(),
            this._icon.removeEventListener(
              a.StatusEvent,
              this._statusEvent,
              this,
            ));
        }),
        (A.prototype._updateBounds = function () {
          if (this._icon) {
            var e = this.getAnnotationOptions().iconSize,
              t = e,
              i = e;
            ("object" == typeof e && ((t = e.width), (i = e.height)),
              this._icon.setBounds(0, 0, t, i));
          }
        }),
        (e.exports = A));
    }