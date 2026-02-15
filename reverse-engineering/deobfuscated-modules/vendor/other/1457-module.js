/**
 * Module 1457
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
  var n = require(0) /* GObject */, r = require(133) /* GScenePaintConfiguration */;
  function o() {
    r.call(this), this.paintMode = r.PaintMode.Full, this.multiPageView = true, this.ignoreEffects = true, this.thumbnails = false;
  }
  n.inherit(o, r), o.prototype.isOutline = function (e) {
    return false;
  }, o.prototype.isAnnotationsVisible = function (e) {
    return !!this.annotations;
  }, o.prototype.isElementAnnotationsVisible = function (e) {
    return !!this.annotations;
  }, o.prototype.isClipToPage = function (e) {
    return false;
  }, exports.exports = o;
}
