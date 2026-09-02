/**
 * chunk.vendor.js Module #1033
 * Type: unknown
 */

function (e, t, i) {
      var n = i(2),
        r = i(51),
        o = i(9);

      function a() {
        (r.call(this), this._setDefaultProperties(a.GeometryProperties));
      }
      (n.inherit("GGLDrunkEffect", a, r),
        (a.prototype.getEffectPadding = function () {
          return 0;
        }),
        (a.prototype.getAbsoluteEffectPadding = function () {
          var e = this.$shp.radius,
            t = Math.abs(this.$shp.strengthX),
            i = Math.abs(this.$shp.strengthY);
          return [t * e, i * e, t * e, i * e];
        }),
        (a.prototype.getNodeNameTranslated = function () {
          return o.getValue("GGLDrunkEffect", "name", this.getNodeName());
        }),
        (a.prototype.isAffectedByChildren = function () {
          return !0;
        }),
        (a.GeometryProperties = {
          shp: {
            strengthX: 0.5,
            strengthY: 0,
            radius: 50,
          },
          sh: "GGLDrunkShader",
        }),
        (a.RANGES = {
          strengthX: [-1, 1],
          strengthY: [-1, 1],
          radius: [0, 100],
        }),
        (e.exports = a));
    }