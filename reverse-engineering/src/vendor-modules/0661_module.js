/**
 * chunk.vendor.js Module #661
 * Type: unknown
 */

function (e, t, i) {
      var n = i(2),
        r = i(51),
        o = i(9);

      function a() {
        (r.call(this), this._setDefaultProperties(a.GeometryProperties));
      }
      (n.inherit("GGLNoiseEffect", a, r),
        (a.prototype.getEffectPadding = function () {
          return 0;
        }),
        (a.prototype.getNodeNameTranslated = function () {
          return o.getValue("GGLNoiseEffect", "name", this.getNodeName());
        }),
        (a.GeometryProperties = {
          shp: {
            amount: 0.5,
          },
          sh: "GGLNoiseShader",
        }),
        (a.RANGES = {
          amount: [0, 1],
        }),
        (e.exports = a));
    }