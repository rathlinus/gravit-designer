/**
 * Module 768
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
  var n = require(0) /* GObject */, r = require(69) /* GBlock */, o = (require(73) /* GRectangle */, require(330) /* GRectangleEditor */), a = require(36) /* PartsPropertyVals */, s = require(316) /* GRectangleAnnotation */, l = require(172) /* GAnnotationEditor */, h = require(153) /* GBBoxGuide */, A = require(66) /* EdTransformOptions */;
  function c(e, t) {
    o.call(this, e), this._uid = t, this._flags = this._flags & ~(A.Flag.RotateCorners | A.Flag.RotateHandle);
  }
  n.inheritAndMix(c, o, [l]), a.exports(c, s), c.prototype._showEditor = function (e) {
    return (!e || e.configuration.isElementAnnotationsVisible(this._element)) && o.prototype._showEditor.call(this, e);
  }, c.prototype.initialSetup = function (e) {
    o.prototype.initialSetup.call(this, e), this._annotationSetup();
  }, c.prototype.canHandleDblClick = function () {
    return true;
  }, c.prototype.handleDblClick = function () {
    return true;
  }, c.prototype.isRemovalBlocked = function () {
    return 0 != (this._element.getProperty("plkt") & r.ProgramLck.NoDelete) || o.prototype.isRemovalBlocked.call(this);
  }, c.prototype._getGuideExclusions = function () {
    return [h];
  }, c.prototype.toString = function () {
    return "[Object GRectangleAnnotationEditor]";
  }, exports.exports = c;
}
