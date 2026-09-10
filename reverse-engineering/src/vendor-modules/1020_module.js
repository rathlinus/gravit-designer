/**
 * chunk.vendor.js Module #1020
 * Type: unknown
 */

function (e, t, i) {
      var n = i(2),
        r = i(51),
        o = i(9);

      function a() {
        (r.call(this), this._setDefaultProperties(a.GeometryProperties));
      }
      (n.inherit("GGLUnsharpMaskEffect", a, r),
        (a.prototype.getEffectPadding = function () {
          return 0;
        }),
        (a.prototype.getNodeNameTranslated = function () {
          return o.getValue("GGLUnsharpMaskEffect", "name", this.getNodeName());
        }),
        (a.GeometryProperties = {
          shp: {
            radius: 0,
            strength: 0,
          },
          sh: "GGLUnsharpMaskShader",
        }),
        (a.RANGES = {
          radius: [0, 200],
          strength: [0, 5],
        }),
        (e.exports = a));
    }