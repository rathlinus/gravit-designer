/**
 * chunk.vendor.js Module #1006
 * Type: unknown
 */

function (e, t, i) {
      var n = i(2),
        r = i(51),
        o = i(9);

      function a() {
        (r.call(this), this._setDefaultProperties(a.GeometryProperties));
      }
      (n.inherit("GGLColorHalfToneEffect", a, r),
        (a.prototype.getEffectPadding = function () {
          return 0;
        }),
        (a.prototype.getNodeNameTranslated = function () {
          return o.getValue(
            "GGLColorHalfToneEffect",
            "name",
            this.getNodeName(),
          );
        }),
        (a.GeometryProperties = {
          shp: {
            centerX: 50,
            centerY: 50,
            angle: 0,
            size: 50,
          },
          sh: "GGLColorHalfToneShader",
        }),
        (a.RANGES = {
          centerX: [0, 100],
          centerY: [0, 100],
          angle: [0, Math.PI / 2],
          size: [3, 20],
        }),
        (e.exports = a));
    }