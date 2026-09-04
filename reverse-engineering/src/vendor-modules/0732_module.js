/**
 * chunk.vendor.js Module #732
 * Type: unknown
 */

function (e, t, i) {
      var n = i(2),
        r = i(51),
        o = i(14),
        a = i(12),
        s = i(9);

      function l() {
        (r.call(this), this._setDefaultProperties(l.GeometryProperties));
      }
      (n.inherit("GGLHueSaturationEffect", l, r),
        (l.GeometryProperties = {
          shp: {
            hue: 0,
            saturation: 0,
          },
          sh: "GGLHueSaturationShader",
        }),
        (l.prototype.getNodeNameTranslated = function () {
          return s.getValue(
            "GGLHueSaturationEffect",
            "name",
            this.getNodeName(),
          );
        }),
        (l.RANGES = {
          hue: [-1, 1],
          saturation: [-1, 1],
        }),
        (l.prototype.getEffectPadding = function () {
          return 0;
        }),
        (l.prototype.canApplyNativeEffect = function () {
          return (
            !!o.hasFilters() &&
            0 == this.$shp.hue &&
            !(this.$shp.saturation < 0)
          );
        }),
        (l.prototype.applyNativeEffect = function (e, t, i, n) {
          var r = this.$shp.saturation;
          (r > 0
            ? (r > 1 && (r = 1), (r = 1 + r / (1.001 - r)))
            : (r = 1 + a.clamp(-1, r, 0)),
            e.setFilter(o.Filter.Saturate, r));
        }),
        (l.prototype.removeNativeEffect = function (e, t, i) {
          e.setFilter(o.Filter.Saturate, null);
        }),
        (e.exports = l));
    }