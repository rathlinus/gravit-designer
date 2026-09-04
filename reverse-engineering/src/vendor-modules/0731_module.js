/**
 * chunk.vendor.js Module #731
 * Type: unknown
 */

function (e, t, i) {
      var n = i(2),
        r = i(51),
        o = i(9);

      function a() {
        (r.call(this), this._setDefaultProperties(a.GeometryProperties));
      }
      (n.inherit("GGLDotScreenEffect", a, r),
        (a.prototype.getEffectPadding = function () {
          return 0;
        }),
        (a.prototype.isAffectedByChildren = function () {
          return !0;
        }),
        (a.prototype.getNodeNameTranslated = function () {
          return o.getValue("GGLDotScreenEffect", "name", this.getNodeName());
        }),
        (a.GeometryProperties = {
          shp: {
            centerX: 50,
            centerY: 50,
            angle: 0,
            size: 10,
          },
          sh: "GGLDotScreenShader",
        }),
        (a.RANGES = {
          centerX: [0, 100],
          centerY: [0, 100],
          size: [0, 20],
          angle: [0, Math.PI / 2],
        }),
        (e.exports = a));
    }