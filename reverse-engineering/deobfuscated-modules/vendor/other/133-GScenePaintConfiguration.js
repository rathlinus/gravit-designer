/**
 * Module 133 - GScenePaintConfiguration
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
  var n = require(907) /* module */, r = require(0) /* GObject */, o = require(47) /* GLocaleKey */;
  function a() {
  }
  r.inherit(a, n), a.PaintMode = {
    Full: "F",
    Fast: "S",
    Outline: "L",
    Output: "O"
  }, a.PaintModeName = {
    F: new o("GScenePaintConfiguration", "paint.full"),
    S: new o("GScenePaintConfiguration", "paint.fast"),
    L: new o("GScenePaintConfiguration", "paint.outline"),
    O: new o("GScenePaintConfiguration", "paint.output")
  }, a.prototype.watermark = null, a.prototype.paintMode = a.PaintMode.Full, a.prototype.pixelMode = false, a.prototype.clipToPage = false, a.prototype.guides = true, a.prototype.slices = true, a.prototype.annotations = true, a.prototype.elementAnnotations = false, a.prototype.showResolvedAnnotations = false, a.prototype.clipArea = null, a.prototype.ignoreEffects = false, a.prototype.noWebGL = false, a.prototype.forceEffectsWhenZoomed = false, a.prototype.enableFxCache = true, a.prototype.clipDirty = true, a.prototype.defaultEffectDetailLevel = null, a.prototype.sceneBackground = true, a.prototype.multiPageView = false, a.prototype.ignoreRulerOffsets = false, a.prototype.rulerLeftFill = false, a.prototype.thumbnails = true, a.prototype.thumbnailSize = 85, a.prototype.pageThumbnails = false, a.prototype.pageThumbnailSize = 85, a.prototype.paintSharp = true, a.prototype.isOutline = function (e) {
    return this.paintMode === a.PaintMode.Outline || !(!e || !e.isOutline());
  }, a.prototype.isAnnotationsVisible = function (e) {
    return !!this.annotations;
  }, a.prototype.isGuidesVisible = function (e) {
    return !(!this.guides || !this.isAnnotationsVisible());
  }, a.prototype.isSlicesVisible = function (e) {
    return !(!this.slices || !this.isAnnotationsVisible());
  }, a.prototype.isElementAnnotationsVisible = function (e) {
    if (!this.elementAnnotations || !this.isAnnotationsVisible())
      return false;
    if (e) {
      if (e.getProperty("rmd"))
        return false;
      if (!this.showResolvedAnnotations && e.getProperty("rsv"))
        return false;
    }
    return true;
  }, a.prototype.isClipToPage = function (e) {
    return this.clipToPage || this.paintMode === a.PaintMode.Output;
  }, a.prototype.toString = function () {
    return "[Object GScenePaintConfiguration]";
  }, exports.exports = a;
}
