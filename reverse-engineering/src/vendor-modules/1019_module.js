/**
 * chunk.vendor.js Module #1019
 * Type: unknown
 */

function (e, t, i) {
      var n = i(2),
        r = i(51),
        o = i(9);

      function a() {
        (r.call(this), this._setDefaultProperties(a.GeometryProperties));
      }
      (n.inherit("GGLInkEffect", a, r),
        (a.prototype.getEffectPadding = function () {
          return 0;
        }),
        (a.GeometryProperties = {
          shp: {
            strength: 0.5,
          },
          sh: "GGLInkShader",
        }),
        (a.prototype.getNodeNameTranslated = function () {
          return o.getValue("GGLInkEffect", "name", this.getNodeName());
        }),
        (a.RANGES = {
          strength: [0, 1],
        }),
        (e.exports = a));
    }