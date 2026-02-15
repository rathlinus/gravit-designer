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

function (e, t, i) {
  var n = i(907), r = i(0), o = i(47);
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
  }, a.prototype.watermark = null, a.prototype.paintMode = a.PaintMode.Full, a.prototype.pixelMode = !1, a.prototype.clipToPage = !1, a.prototype.guides = !0, a.prototype.slices = !0, a.prototype.annotations = !0, a.prototype.elementAnnotations = !1, a.prototype.showResolvedAnnotations = !1, a.prototype.clipArea = null, a.prototype.ignoreEffects = !1, a.prototype.noWebGL = !1, a.prototype.forceEffectsWhenZoomed = !1, a.prototype.enableFxCache = !0, a.prototype.clipDirty = !0, a.prototype.defaultEffectDetailLevel = null, a.prototype.sceneBackground = !0, a.prototype.multiPageView = !1, a.prototype.ignoreRulerOffsets = !1, a.prototype.rulerLeftFill = !1, a.prototype.thumbnails = !0, a.prototype.thumbnailSize = 85, a.prototype.pageThumbnails = !1, a.prototype.pageThumbnailSize = 85, a.prototype.paintSharp = !0, a.prototype.isOutline = function (e) {
    return this.paintMode === a.PaintMode.Outline || !(!e || !e.isOutline());
  }, a.prototype.isAnnotationsVisible = function (e) {
    return !!this.annotations;
  }, a.prototype.isGuidesVisible = function (e) {
    return !(!this.guides || !this.isAnnotationsVisible());
  }, a.prototype.isSlicesVisible = function (e) {
    return !(!this.slices || !this.isAnnotationsVisible());
  }, a.prototype.isElementAnnotationsVisible = function (e) {
    if (!this.elementAnnotations || !this.isAnnotationsVisible())
      return !1;
    if (e) {
      if (e.getProperty("rmd"))
        return !1;
      if (!this.showResolvedAnnotations && e.getProperty("rsv"))
        return !1;
    }
    return !0;
  }, a.prototype.isClipToPage = function (e) {
    return this.clipToPage || this.paintMode === a.PaintMode.Output;
  }, a.prototype.toString = function () {
    return "[Object GScenePaintConfiguration]";
  }, e.exports = a;
}
