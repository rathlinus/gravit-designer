/**
 * chunk.vendor.js Module #1017
 * Type: unknown
 */

function (e, t, i) {
      var n = i(2),
        r = i(51),
        o = i(9);

      function a() {
        (r.call(this), this._setDefaultProperties(a.GeometryProperties));
      }
      (n.inherit("GGLVignetteEffect", a, r),
        (a.prototype.getEffectPadding = function (e) {
          return 0;
        }),
        (a.prototype.getNodeNameTranslated = function () {
          return o.getValue("GGLVignetteEffect", "name", this.getNodeName());
        }),
        (a.GeometryProperties = {
          shp: {
            size: 0.2,
            amount: 0.5,
          },
          sh: "GGLVignetteShader",
        }),
        (a.RANGES = {
          size: [0, 1],
          amount: [0, 1],
        }),
        (e.exports = a));
    }