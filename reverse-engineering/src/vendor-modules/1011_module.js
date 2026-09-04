/**
 * chunk.vendor.js Module #1011
 * Type: unknown
 */

function (e, t, i) {
      var n = i(2),
        r = i(51),
        o = i(9);

      function a() {
        (r.call(this), this._setDefaultProperties(a.GeometryProperties));
      }
      (n.inherit("GGLToonEffect", a, r),
        (a.prototype.getEffectPadding = function () {
          return 0;
        }),
        (a.prototype.getNodeNameTranslated = function () {
          return o.getValue("GGLToonEffect", "name", this.getNodeName());
        }),
        (a.GeometryProperties = {
          shp: {
            threshold: 0.2,
            quantization: 10,
          },
          sh: "GGLToonShader",
        }),
        (a.RANGES = {
          threshold: [0, 2],
          quantization: [0, 20],
        }),
        (e.exports = a));
    }