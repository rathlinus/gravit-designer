/**
 * chunk.vendor.js Module #840
 * Type: class
 * Name: GMirrorEffect
 */

function (e, t, i) {
      var n = i(50),
        r = i(2),
        o = i(28),
        a = i(7),
        s = i(17),
        l = i(147),
        h = i(14),
        A = i(6),
        c = i(12),
        p = i(9);

      function u() {
        (o.Effect.call(this),
          this._setDefaultProperties(u.GeometryProperties, u.VisualProperties),
          (this._theirsPadding = null),
          (this._oursPadding = null));
      }
      (r.inherit("mirrorEffect", u, o.Effect),
        (u.prototype._theirsPadding = null),
        (u.prototype._oursPadding = null),
        (u.equals = function (e, t) {
          return (
            e instanceof u &&
            t instanceof u &&
            e.arePropertiesEqual(
              t,
              Object.keys(u.GeometryProperties).concat(
                Object.keys(u.VisualProperties),
              ),
            )
          );
        }),
        (u.GeometryProperties = {
          rfh: 0.3,
          pad: 1,
        }),
        (u.VisualProperties = {
          pat: new l(
            [
              {
                color: s.WHITE,
                position: 0,
                opacity: 1,
              },
              {
                color: s.WHITE,
                position: 1,
                opacity: 0,
              },
            ],
            1,
            c.toRadians(90),
            0.5,
            0,
          ),
          opc: 0.6,
        }),
        (u.prototype.getNodeNameTranslated = function () {
          return p.getValue("GMirrorEffect", "name", this.getNodeName());
        }),
        (u.prototype.isAffectedByChildren = function () {
          return !0;
        }),
        (u.prototype.isSingleton = function () {
          return !0;
        }),
        (u.prototype.isAffectedByContents = function () {
          return !0;
        }),
        (u.prototype.isOverlayEffect = function () {
          return !0;
        }),
        (u.prototype.getEffectType = function () {
          return o.Effect.Type.PostEffect;
        }),
        (u.prototype.getEffectPadding = function (e) {
          if (e) {
            this._theirsPadding = this.getParent().getEffectsPadding(
              e,
              null,
              function (e) {
                return e !== this;
              }.bind(this),
            );
            var t = e.getHeight() * this.$rfh + this.$pad;
            this._oursPadding = [0, -t, 0, t];
          }
          return this._oursPadding;
        }),
        (u.prototype.render = function (e, t, i, n, r) {
          if (this.$pat && this.$opc > 0) {
            var o = t.getScale();
            1 != t.getScale() && t.setScale(1);
            var s = e.getScale();
            1 != e.getScale() && e.setScale(1);
            var l = t.getOffset(),
              c = this.$pad * n,
              p = this._oursPadding ? this._oursPadding[3] * n - c : 0,
              u = p / this.$rfh,
              d = this._theirsPadding ? this._theirsPadding[3] * n : 0,
              g = new a()
                .translated(l.getX(), l.getY() + u + c)
                .preMultiplied(new a().scaled(1, -1)),
              f = t.setTransform(t.getTransform(!0).preMultiplied(g)),
              m = t._canvasContext.globalAlpha,
              y = t._blender.globalCompositeOperation,
              _ = t._convertImage(e);
            ((t._canvasContext.globalAlpha = 1),
              (t._blender.globalCompositeOperation =
                h.CompositeOperator.SourceOver),
              t._blender.drawImage(
                _,
                0,
                0,
                t.getWidth(),
                t.getHeight(),
                0,
                -u - 2 * d - c,
                t.getWidth(),
                t.getHeight(),
              ),
              e.setScale(s),
              t.setScale(o),
              t.setTransform(f),
              (t._canvasContext.globalAlpha = m),
              (t._blender.globalCompositeOperation = y));
            var v = t
                .getTransform(!1)
                .inverted()
                .mapRect(new A(0, u + c, t.getWidth(), p + d)),
              b = t.createPatternPaint(this.$pat, v);
            if (b)
              if (b.transform) {
                f = t.setTransform(
                  t.getTransform(!0).preMultiplied(b.transform),
                );
                (t.fillRect(
                  0,
                  0,
                  1,
                  1,
                  b.paint,
                  this.$opc,
                  h.CompositeOperator.DestinationIn,
                ),
                  t.setTransform(f));
              } else
                t.fillRect(
                  v.getX(),
                  v.getY(),
                  v.getWidth(),
                  v.getHeight(),
                  b.paint,
                  this.$opc,
                  h.CompositeOperator.DestinationIn,
                );
          }
        }),
        (u.prototype._handleChange = function (e, t) {
          (e === r._Change.Store
            ? (this.storeProperties(t.blob, u.GeometryProperties),
              this.storeProperties(t.blob, u.VisualProperties, function (e, t) {
                return t && "pat" === e ? n.serialize(t) : t;
              }))
            : e === r._Change.Restore &&
              (this.restoreProperties(t.blob, u.GeometryProperties),
              this.restoreProperties(
                t.blob,
                u.VisualProperties,
                function (e, t) {
                  return t && "pat" === e ? n.deserialize(t) : t;
                },
              )),
            this._handleVisualChangeForProperties(e, t, u.VisualProperties),
            this._handleGeometryChangeForProperties(e, t, u.GeometryProperties),
            o.Effect.prototype._handleChange.call(this, e, t));
        }),
        (u.prototype.toString = function () {
          return "[Object GMirrorEffect]";
        }),
        (e.exports = u));
    }