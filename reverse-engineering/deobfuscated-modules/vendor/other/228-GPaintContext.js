/**
 * Module 228 - GPaintContext
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
  var n = require(17) /* GRGBColor */, r = require(0) /* GObject */, o = require(118) /* module */;
  function a() {
    this.outlineColors = [], this.canvasStack = [];
  }
  r.inheritAndMix(a, r, [o]), a.prototype.configuration = null, a.prototype.canvas = null, a.prototype.canvasStack = null, a.prototype.dirtyMatcher = null, a.prototype.outlineColors = null, a.prototype.selectionOutlineColor = new n([
    40,
    128,
    230
  ]), a.prototype.selectionShapeOutlineColor = a.prototype.selectionOutlineColor, a.prototype.computedBackgroundColor = null, a.prototype.selectionSecondOutlineColor = new n([
    255,
    0,
    170
  ]), a.prototype.selectionThirdOutlineColor = new n([
    132,
    102,
    176
  ]), a.prototype.highlightOutlineColor = new n([
    197,
    17,
    98
  ]), a.prototype.knifeOutlineColor = new n([
    227,
    0,
    97
  ]), a.prototype.transformBoxOutlineColor = new n([
    23,
    104,
    196
  ]), a.prototype.annotationColor = new n([
    235,
    100,
    60
  ]), a.prototype.sliceColor = new n([
    0,
    255,
    168
  ]), a.prototype.labelColor = new n([
    0,
    0,
    0
  ]), a.prototype.isOutline = function () {
    return this.outlineColors && this.outlineColors.length > 0;
  }, a.prototype.getOutlineColor = function () {
    return this.outlineColors && this.outlineColors.length > 0 ? this.outlineColors[this.outlineColors.length - 1] : n.BLACK;
  }, a.prototype.getRootCanvas = function () {
    return this.canvasStack.length > 0 ? this.canvasStack[0] : this.canvas;
  }, a.prototype.pushCanvas = function (e) {
    var t = this.canvas;
    return this.canvasStack.push(this.canvas), this.canvas = e, t;
  }, a.prototype.popCanvas = function () {
    if (this.canvasStack.length <= 0)
      throw new Error("Invalid call, stack length is zero.");
    this.canvas = this.canvasStack.pop();
  }, a.prototype.isIncludingInvisible = function () {
    return false;
  }, a.prototype.toString = function () {
    return "[Object GPaintContext]";
  }, a.prototype.destroy = function () {
    for (; this.canvasStack.length;) {
      this.canvasStack.pop().destroy();
    }
    this.canvas = null, this.canvasStack = null, this.configuration = null;
  }, exports.exports = a;
}
