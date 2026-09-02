/**
 * chunk.vendor.js Module #1025
 * Type: unknown
 */

function (e, t, i) {
      var n = i(2),
        r = i(51),
        o = i(9);

      function a() {
        (r.call(this), this._setDefaultProperties(a.GeometryProperties));
      }
      (n.inherit("GGLRecolourEffect", a, r),
        (a.prototype.getEffectPadding = function () {
          return 0;
        }),
        (a.GeometryProperties = {
          shp: {
            hue: 1,
            saturation: 1,
          },
          sh: "GGLRecolourShader",
        }),
        (a.prototype.getNodeNameTranslated = function () {
          return o.getValue("GGLRecolourEffect", "name", this.getNodeName());
        }),
        (a.RANGES = {
          hue: [0, 1],
          saturation: [0, 1],
        }),
        (e.exports = a));
    }