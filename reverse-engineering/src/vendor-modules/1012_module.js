/**
 * chunk.vendor.js Module #1012
 * Type: unknown
 */

function (e, t, i) {
      var n = i(2),
        r = i(51),
        o = i(9);

      function a() {
        (r.call(this), this._setDefaultProperties(a.GeometryProperties));
      }
      (n.inherit("GGLBloomEffect", a, r),
        (a.prototype.getEffectPadding = function () {
          return this.$shp.blurRadius;
        }),
        (a.prototype.getNodeNameTranslated = function () {
          return o.getValue("GGLBloomEffect", "name", this.getNodeName());
        }),
        (a.GeometryProperties = {
          shp: {
            bloomIntensity: 1.25,
            baseIntensity: 1,
            bloomSaturation: 1,
            baseSaturation: 1,
            blurRadius: 4,
            bloomThreshold: 0.25,
          },
          sh: "GGLBloomShader",
        }),
        (a.RANGES = {
          bloomIntensity: [0, 2],
          baseIntensity: [0, 2],
          bloomSaturation: [0, 2],
          baseSaturation: [0, 2],
          blurRadius: [0, 50],
          bloomThreshold: [0, 0.99],
        }),
        (e.exports = a));
    }