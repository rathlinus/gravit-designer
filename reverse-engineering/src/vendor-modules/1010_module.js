/**
 * chunk.vendor.js Module #1010
 * Type: unknown
 */

function (e, t, i) {
      var n = i(28),
        r = i(2),
        o = i(51),
        a = i(9);

      function s() {
        (o.call(this), this._setDefaultProperties(s.GeometryProperties));
      }
      (r.inherit("GGLInnerGlowEffect", s, o),
        (s.prototype.getEffectType = function () {
          return n.Effect.Type.Filter;
        }),
        (s.prototype.getEffectPadding = function () {
          return 1;
        }),
        (s.prototype.propertyTransform = function (e, t) {
          switch (e) {
            case "radius":
              return o.polynomialTransform(t, 2, s.RANGES.radius);
          }
          return t;
        }),
        (s.prototype.propertyInverseTransform = function (e, t) {
          switch (e) {
            case "radius":
              return o.polynomialInverseTransform(t, 2, s.RANGES.radius);
          }
          return t;
        }),
        (s.prototype.getNodeNameTranslated = function () {
          return a.getValue("GGLInnerGlowEffect", "name", this.getNodeName());
        }),
        (s.GeometryProperties = {
          shp: {
            radius: 5,
            intensity: 1,
            color: [255, 255, 224],
            opacity: {
              type: "opacity",
              value: 1,
            },
          },
          sh: "GGLInnerGlowShader",
        }),
        (s.RANGES = {
          radius: [0, 50],
          intensity: [0, 2],
        }),
        (e.exports = s));
    }