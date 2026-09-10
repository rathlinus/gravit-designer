/**
 * chunk.vendor.js Module #1014
 * Type: unknown
 */

function (e, t, i) {
      var n = i(2),
        r = i(51),
        o = i(9);

      function a() {
        (r.call(this), this._setDefaultProperties(a.GeometryProperties));
      }
      (n.inherit("GGLDenoiseEffect", a, r),
        (a.prototype.getEffectPadding = function () {
          return 0;
        }),
        (a.prototype.isAffectedByChildren = function () {
          return !0;
        }),
        (a.prototype.getNodeNameTranslated = function () {
          return o.getValue("GGLDenoiseEffect", "name", this.getNodeName());
        }),
        (a.GeometryProperties = {
          shp: {
            exponent: 10,
          },
          sh: "GGLDenoiseShader",
        }),
        (a.RANGES = {
          exponent: [0, 50],
        }),
        (e.exports = a));
    }