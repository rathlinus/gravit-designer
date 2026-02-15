/**
 * Module 1409
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (e, t, i) {
  var n = i(0), r = i(293), o = i(197), a = function (e) {
      if (o.call(this), null != e.opacity && null != e.operation) {
        var t = Math.min(1, e.opacity);
        e.operation & r.OPERATIONFLAG_FILL && this.put("/ca", t), e.operation & r.OPERATIONFLAG_STROKE && this.put("/CA", t);
      }
      if (e.blendMode) {
        var i = a.BlendMode[e.blendMode.toUpperCase().replace(/-/g, "")];
        i ? i !== a.BlendMode.NORMAL && this.put("/BM", "/" + i) : console.log("WARN: Unsupported blend mode: " + e.blendMode);
      }
      e.smask && this.put("/SMask", e.smask), e.type && this.put("/Type", "/" + e.type), this._origin = e.origin && !e.origin.isIdentity() ? e.origin : null;
    };
  n.inherit(a, o), a.BlendMode = {
    NORMAL: "Normal",
    MULTIPLY: "Multiply",
    SCREEN: "Screen",
    OVERLAY: "Overlay",
    DARKEN: "Darken",
    LIGHTEN: "Lighten",
    COLORDODGE: "ColorDodge",
    COLORBURN: "ColorBurn",
    HARDLIGHT: "HardLight",
    SOFTLIGHT: "SoftLight",
    DIFFERENCE: "Difference",
    EXCLUSION: "Exclusion",
    HUE: "Hue",
    SATURATION: "Saturation",
    COLOR: "Color",
    LUMINOSITY: "Luminosity"
  }, e.exports = a;
}
