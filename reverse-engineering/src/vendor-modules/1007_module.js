/**
 * chunk.vendor.js Module #1007
 * Type: unknown
 */

function (e, t, i) {
      var n = i(2),
        r = i(51),
        o = i(9);

      function a() {
        (r.call(this), this._setDefaultProperties(a.GeometryProperties));
      }
      (n.inherit("GGLHexagonalEffect", a, r),
        (a.prototype.getEffectPadding = function () {
          return 0;
        }),
        (a.prototype.isAffectedByChildren = function () {
          return !0;
        }),
        (a.GeometryProperties = {
          shp: {
            centerX: 50,
            centerY: 50,
            scale: 1,
          },
          sh: "GGLHexagonalShader",
        }),
        (a.prototype.getNodeNameTranslated = function () {
          return o.getValue("GGLHexagonalEffect", "name", this.getNodeName());
        }),
        (a.RANGES = {
          centerX: [0, 100],
          centerY: [0, 100],
          scale: [0, 100],
        }),
        (e.exports = a));
    }