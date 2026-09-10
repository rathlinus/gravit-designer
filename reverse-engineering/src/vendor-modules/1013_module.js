/**
 * chunk.vendor.js Module #1013
 * Type: unknown
 */

function (e, t, i) {
      var n = i(2),
        r = i(51),
        o = i(9);

      function a() {
        (r.call(this), this._setDefaultProperties(a.GeometryProperties));
      }
      (n.inherit("GGLTrueBlurEffect", a, r),
        (a.prototype.getEffectPadding = function () {
          return this.$shp.radius;
        }),
        (a.prototype.getNodeNameTranslated = function () {
          return o.getValue("GGLTrueBlurEffect", "name", this.getNodeName());
        }),
        (a.GeometryProperties = {
          shp: {
            radius: 5,
          },
          sh: "GGLTrueBlurShader",
        }),
        (a.RANGES = {
          radius: [0, 50],
        }),
        (e.exports = a));
    }