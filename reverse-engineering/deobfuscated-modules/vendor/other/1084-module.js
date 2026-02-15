/**
 * Module 1084
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
  var n = require(0) /* GObject */, r = require(73) /* GRectangle */, o = require(289) /* GSlice */, a = require(66) /* EdTransformOptions */, s = require(274) /* GItemEditor */, l = require(22) /* GElement */, h = require(36) /* PartsPropertyVals */;
  function A(e) {
    s.call(this, e), this._flags &= ~(a.Flag.RotateCorners | a.Flag.RotateHandle);
  }
  n.inherit(A, s), h.exports(A, o), A.prototype.createElementPreview = function () {
    if (!this._elementPreview) {
      var exports = this._element.getSourceBBox();
      this._setElementPreview(new r(exports.getX(), exports.getY(), exports.getWidth(), exports.getHeight()));
    }
  }, A.prototype.canApplyTransform = function () {
    return this._elementPreview && this._elementPreview.getTransform().invertible() || a.prototype.canApplyTransform.call(this) && !this.getElement().hasFlag(l.Flag.PartialLocked);
  }, A.prototype._applyTransform = function (e, t, i, n) {
    var r = null;
    if (this._elementPreview ? r = this._elementPreview.getTransform() : (r = this._transform, this.resetTransform()), r && !r.getRotationFactor()) {
      var o = r.getMatrix(), a = (this._element.getProperty("x") || 0) + o[4], s = (this._element.getProperty("y") || 0) + o[5], l = (this._element.getProperty("w") || 0) * o[0], h = (this._element.getProperty("h") || 0) * o[1];
      if (1 != r.getScaleFactor()) {
        if (this._elementPreview) {
          var A = this._elementPreview.getGeometryBBox();
          A && (a = A.getX(), s = A.getY(), l = A.getWidth(), h = A.getHeight());
        }
        this._element.setProperties([
          "w",
          "h"
        ], [
          l,
          h
        ]);
      }
      this._element.setProperties([
        "x",
        "y"
      ], [
        a,
        s
      ]);
    }
  }, A.prototype.toString = function () {
    return "[Object GSliceEditor]";
  }, exports.exports = A;
}
