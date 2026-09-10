/**
 * chunk.vendor.js Module #1034
 * Type: unknown
 */

function (e, t, i) {
      var n = i(2),
        r = i(51),
        o = i(9);

      function a() {
        (r.call(this), this._setDefaultProperties(a.GeometryProperties));
      }
      (n.inherit("GGLFisheyeEffect", a, r),
        (a.prototype.getEffectPadding = function () {
          return 100;
        }),
        (a.prototype.getAbsoluteEffectPadding = function () {
          return this.$shp.strength < -50
            ? 100 + Math.abs(this.$shp.strength + 50)
            : 100;
        }),
        (a.prototype.isAffectedByChildren = function () {
          return !0;
        }),
        (a.prototype.getNodeNameTranslated = function () {
          return o.getValue("GGLFisheyeEffect", "name", this.getNodeName());
        }),
        (a.GeometryProperties = {
          shp: {
            strength: 50,
          },
          sh: "GGLFishEyeShader",
        }),
        (a.RANGES = {
          strength: [-100, 100],
        }),
        (e.exports = a));
    }