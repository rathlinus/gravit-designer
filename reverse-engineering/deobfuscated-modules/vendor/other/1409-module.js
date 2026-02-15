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

function (exports, module, require) {
  var n = require(0) /* GObject */, r = require(293) /* Stroke */, o = require(197) /* module */, a = function (e) {
      if (o.call(this), null != e.opacity && null != e.operation) {
        var module = Math.min(1, e.opacity);
        e.operation & r.OPERATIONFLAG_FILL && this.put("/ca", module), e.operation & r.OPERATIONFLAG_STROKE && this.put("/CA", module);
      }
      if (e.blendMode) {
        var require = a.BlendMode[e.blendMode.toUpperCase().replace(/-/g, "")];
        require ? require !== a.BlendMode.NORMAL && this.put("/BM", "/" + require) : console.log("WARN: Unsupported blend mode: " + e.blendMode);
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
  }, exports.exports = a;
}
