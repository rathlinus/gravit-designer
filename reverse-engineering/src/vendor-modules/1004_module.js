/**
 * chunk.vendor.js Module #1004
 * Type: unknown
 */

function (e, t, i) {
      var n = i(2),
        r = i(51),
        o = i(9);

      function a() {
        (r.call(this), this._setDefaultProperties(a.GeometryProperties));
      }
      (n.inherit("GGLBulgePinchEffect", a, r),
        (a.prototype.getNodeNameTranslated = function () {
          return o.getValue("GGLBulgePinchEffect", "name", this.getNodeName());
        }),
        (a.prototype._savedBBox = null),
        (a.prototype.getEffectPadding = function (e) {
          if ((e && (this._savedBBox = e), !this._savedBBox)) {
            var t =
              3 * this.$shp.radius * Math.max(0, 0.75 * this.$shp.strength);
            return [t, t, t, t];
          }
          var i = (e = this._savedBBox).getWidth() / 2,
            n = e.getHeight() / 2,
            r = Math.max(e.getWidth(), e.getHeight()) * this.$shp.radius * 0.01;
          r *= 0.75 * this.$shp.strength;
          var o = e.getWidth() / 2 - i,
            a = e.getHeight() / 2 - n,
            s = Math.max(0, r - o),
            l = Math.max(0, r + o);
          return [s, Math.max(0, r + a), l, Math.max(0, r - a)];
        }),
        (a.prototype.getAbsoluteEffectPadding = function () {
          if (!this._savedBBox) {
            var e = 3 * this.$shp.radius * Math.abs(0.75 * this.$shp.strength);
            return [e, e, e, e];
          }
          var t = this._savedBBox,
            i = Math.max(t.getWidth(), t.getHeight()) * this.$shp.radius * 0.01,
            n = 0.75 * this.$shp.strength;
          return (
            n < 0 && (n *= 0.5),
            (i *= n),
            [
              (i = Math.min(Math.abs(i), t.getHeight() / 2, t.getWidth() / 2)),
              i,
              i,
              i,
            ]
          );
        }),
        (a.prototype.isAffectedByChildren = function () {
          return !0;
        }),
        (a.GeometryProperties = {
          shp: {
            centerX: 50,
            centerY: 50,
            radius: 50,
            strength: 0.5,
          },
          sh: "GGLBulgePinchShader",
        }),
        (a.RANGES = {
          centerX: [0, 100],
          centerY: [0, 100],
          radius: [0, 100],
          strength: [-1, 1],
        }),
        (e.exports = a));
    }