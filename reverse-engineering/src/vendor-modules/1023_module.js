/**
 * chunk.vendor.js Module #1023
 * Type: unknown
 */

function (e, t, i) {
      var n = i(2),
        r = i(51),
        o = i(9);

      function a() {
        (r.call(this), this._setDefaultProperties(a.GeometryProperties));
      }
      (n.inherit("GGLLensBlurEffect", a, r),
        (a.prototype.getEffectPadding = function () {
          return this.$shp.radius;
        }),
        (a.prototype.getNodeNameTranslated = function () {
          return o.getValue("GGLLensBlurEffect", "name", this.getNodeName());
        }),
        (a.GeometryProperties = {
          shp: {
            radius: 10,
            brightness: 0,
            angle: 0,
          },
          sh: "GGLLensBlurShader",
        }),
        (a.RANGES = {
          radius: [0, 50],
          brightness: [-1, 1],
          angle: [-Math.PI, Math.PI],
        }),
        (e.exports = a));
    }