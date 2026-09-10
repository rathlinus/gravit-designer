/**
 * chunk.vendor.js Module #729
 * Type: class
 * Name: GOverlayEffect
 */

function (e, t, i) {
      var n = i(147),
        r = i(50),
        o = i(2),
        a = i(28),
        s = i(17),
        l = i(14),
        h = i(6),
        A = i(9);

      function c() {
        (a.Effect.call(this), this._setDefaultProperties(c.VisualProperties));
      }
      (o.inherit("overlayEffect", c, a.Effect),
        (c.equals = function (e, t) {
          return (
            e instanceof c &&
            t instanceof c &&
            e.arePropertiesEqual(t, Object.keys(c.VisualProperties))
          );
        }),
        (c.VisualProperties = {
          pat: new n([
            {
              color: s.BLACK,
              position: 0,
              opacity: 1,
            },
            {
              color: s.WHITE,
              position: 1,
              opacity: 0,
            },
          ]),
          opc: 1,
          alm: !1,
        }),
        (c.prototype.getEffectType = function () {
          return a.Effect.Type.Filter;
        }),
        (c.prototype.getNodeNameTranslated = function () {
          return A.getValue("GOverlayEffect", "name", this.getNodeName());
        }),
        (c.prototype.getTrackTempPropNames = function () {
          return this.getPatternPropNames();
        }),
        (c.prototype.getPatternPropNames = function () {
          return ["pat"];
        }),
        (c.prototype.render = function (e, t, i, n) {
          if (this.$pat && this.$opc > 0) {
            var r = e
                .getTransform(!1)
                .inverted()
                .mapRect(new h(0, 0, e.getWidth(), e.getHeight())),
              o = e.createPatternPaint(this.$pat, r);
            if (o) {
              var a = this.$alm
                ? l.CompositeOperator.DestinationIn
                : l.CompositeOperator.SourceAtTop;
              if (o.transform) {
                r = o.transform.inverted().mapRect(r);
                var s = e.setTransform(
                  e.getTransform(!0).preMultiplied(o.transform),
                );
                (e.fillRect(
                  r.getX(),
                  r.getY(),
                  r.getWidth(),
                  r.getHeight(),
                  o.paint,
                  this.$opc,
                  a,
                ),
                  e.setTransform(s));
              } else
                e.fillRect(
                  r.getX(),
                  r.getY(),
                  r.getWidth(),
                  r.getHeight(),
                  o.paint,
                  this.$opc,
                  a,
                );
            }
          }
        }),
        (c.prototype._handleChange = function (e, t) {
          (e === o._Change.Store
            ? this.storeProperties(t.blob, c.VisualProperties, function (e, t) {
                return t && "pat" === e ? r.serialize(t) : t;
              })
            : e === o._Change.Restore &&
              this.restoreProperties(
                t.blob,
                c.VisualProperties,
                function (e, t) {
                  return t && "pat" === e ? r.deserialize(t) : t;
                },
              ),
            this._handleVisualChangeForProperties(e, t, c.VisualProperties),
            a.Effect.prototype._handleChange.call(this, e, t));
        }),
        (c.prototype.toString = function () {
          return "[Object GOverlayEffect]";
        }),
        (e.exports = c));
    }