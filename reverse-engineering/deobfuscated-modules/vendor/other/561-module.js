/**
 * Module 561
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
  var n = require(0) /* GObject */, r = exports.exports;
  r._nodeClassToNameMap = {}, r._nameToNodeClassMap = {}, [
    "sketchDocument",
    "effects/sketchBlurEffect",
    "effects/sketchColorAdjustEffect",
    "effects/sketchDropShadowEffect",
    "effects/sketchEffect",
    "effects/sketchInnerShadowEffect",
    "model/sketchBase",
    "model/sketchElement",
    "model/sketchGroup",
    "model/sketchNode",
    "model/sketchShape",
    "model/sketchShapeGroup",
    "model/sketchSymbolInstance",
    "model/sketchSymbolMaster",
    "model/item/sketchArtboard",
    "model/item/sketchBitmap",
    "model/item/sketchOval",
    "model/item/sketchPage",
    "model/item/sketchPolygon",
    "model/item/sketchRectangle",
    "model/item/sketchShapePath",
    "model/item/sketchStar",
    "model/item/sketchText",
    "model/item/sketchTriangle",
    "pattern/sketchAngularGradient",
    "pattern/sketchColor",
    "pattern/sketchGradient",
    "pattern/sketchLinearGradient",
    "pattern/sketchNoisePattern",
    "pattern/sketchPattern",
    "pattern/sketchRadialGradient",
    "pattern/sketchTexturePattern"
  ].forEach(function (e) {
    var t = require(1400) /* SketchImportModuleMap */("./" + e.toLowerCase()), o = e.split("sketch")[1], a = o[0].toLowerCase() + o.slice(1);
    r._nodeClassToNameMap[n.getTypeId(t)] = a, r._nameToNodeClassMap[a] = t;
  }), r.getClassFromName = function (e) {
    var t = r._nameToNodeClassMap[e] || null;
    return t || console.warn("Unable to find class: " + e), t;
  };
}
