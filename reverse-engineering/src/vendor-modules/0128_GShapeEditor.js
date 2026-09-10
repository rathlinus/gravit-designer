/**
 * chunk.vendor.js Module #128
 * Type: class
 * Name: GShapeEditor
 */

function (e, t, i) {
      var n = i(82),
        r = i(50),
        o = i(0),
        a = i(28),
        s = i(56),
        l = i(36),
        h = i(70),
        A = i(268),
        c = i(95),
        p = i(274),
        u = i(7),
        d = i(39),
        g = i(24),
        f = (i(11), i(9)),
        m = i(47);

      function y(e) {
        p.call(this, e);
      }
      (o.inherit(y, p),
        (y.prototype.initialSetup = function (e) {
          var t = this.getDefaultStyle();
          if (
            (!(e && e instanceof s) ||
              e instanceof c ||
              (this.getElement() instanceof A && !(e instanceof A)) ||
              (!(this.getElement() instanceof h) && e instanceof h) ||
              (t = e),
            t)
          ) {
            var i,
              n,
              r,
              o,
              l,
              p,
              u = this.getElement(),
              d = [],
              g = [],
              f = t.getProperty("ps") || [a.PropertySet.Style],
              m = ["geometryProperties", "visualProperties"];
            for (i = 0; i < f.length; i++)
              for (p = f[i], l = a.PropertySetInfo[p], n = 0; n < m.length; n++)
                if ((o = l[m[n]]))
                  for (r in o) (d.push(r), g.push(t.getProperty(r)));
            u.setProperties(d, g);
            var y = t.getPaintLayers();
            if (y)
              for (var _ = y.getFirstChild(); _; _ = _.getNext()) {
                var v =
                  _ instanceof a.BorderPaintLayer
                    ? new a.BorderPaintLayer()
                    : new a.FillPaintLayer();
                (v.assignFrom(_), u.getPaintLayers().appendChild(v));
              }
            var b = t.getEffects();
            if (b)
              for (var C = b.getFirstChild(); C; C = C.getNext())
                u.getEffects().appendChild(C.clone());
          }
        }),
        (y.prototype.acceptDrop = function (e, t, i, o) {
          if (l.prototype.acceptDrop.call(this, e, t, i, o)) return !0;
          if (i instanceof r && o instanceof s.HitResult) {
            var h = n.getEditor(this.getElement().getScene());
            h.beginTransaction();
            try {
              switch (o.type) {
                case s.HitResult.Type.Stroke:
                  (this.getElement().getPaintLayers().clearBorderLayers(),
                    this.getElement()
                      .getPaintLayers()
                      .appendChild(new a.BorderPaintLayer(i)));
                  break;
                default:
                  (this.getElement().getPaintLayers().clearFillLayers(),
                    this.getElement()
                      .getPaintLayers()
                      .appendChild(new a.FillPaintLayer(i)));
              }
            } finally {
              h.commitTransaction(
                f.get(new m("GShapeEditor", "action.drop-pattern")),
              );
            }
            return !0;
          }
          return !1;
        }),
        (y.prototype.getDefaultStyle = function () {
          var e = this.getElement(),
            t = o.getTypeId(e),
            i = e.getScene()
              ? e
                  .getScene()
                  .getStyles()
                  .querySingle('style[_sdf="' + t + '"]')
              : null;
          return (
            i ||
              (i = e.getScene()
                ? e
                    .getScene()
                    .getStyles()
                    .querySingle('style[_sdf="' + o.getTypeId(s) + '"]')
                : null),
            i
          );
        }),
        (y.prototype._hasCenterCross = function () {
          return !1;
        }),
        (y.prototype._postPaint = function (e, t) {
          if (
            this.hasFlag(d.Flag.Selected) &&
            this.hasFlag(d.Flag.Detail) &&
            this._hasCenterCross() &&
            g.centerCrossSize > 0
          ) {
            var i = this.getPaintElement(),
              n = i.getTransform(),
              r = n || new u(1, 0, 0, 1, 0, 0);
            r = e ? r.multiplied(e) : r;
            var o = i.getCenter(!1);
            if (o) {
              o = r.mapPoint(o);
              var a = 2 * g.centerCrossSize,
                s = r.getMatrix();
              if (
                Math.abs(s[0]) * i.getOrigHalfWidth() > a &&
                Math.abs(s[3]) * i.getOrigHalfHeight() > a
              ) {
                var l = Math.floor(o.getX()) + 0.5,
                  h = Math.floor(o.getY()) + 0.5;
                g.outlineWidth % 2 != 0 && ((l += 0.5), (h += 0.5));
                var A = g.centerCrossSize / 2;
                (t.canvas.strokeLine(
                  l - A,
                  h - A,
                  l + A,
                  h + A,
                  g.outlineWidth,
                  t.selectionOutlineColor,
                ),
                  t.canvas.strokeLine(
                    l + A,
                    h - A,
                    l - A,
                    h + A,
                    g.outlineWidth,
                    t.selectionOutlineColor,
                  ));
              }
            }
          }
          p.prototype._postPaint.call(this, e, t);
        }),
        (y.prototype._getTransformFromPreview = function () {
          var e = null;
          if (this._elementPreview) {
            var t = this._element.getTransform(),
              i = this._elementPreview.getTransform();
            ((e = t && !t.isIdentity() ? t.inverted() : null),
              i && !i.isIdentity() && (e = e ? e.multiplied(i) : i));
          }
          return e;
        }),
        (y.prototype.toString = function () {
          return "[Object GShapeEditor]";
        }),
        (e.exports = y));
    }