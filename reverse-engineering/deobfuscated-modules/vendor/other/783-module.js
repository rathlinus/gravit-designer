/**
 * Module 783
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
  var n = require(0) /* GObject */, r = require(69) /* GBlock */, o = (require(73) /* GRectangle */, require(70) /* GText */, require(66) /* EdTransformOptions */, require(387) /* GTextEditor */), a = (require(22) /* GElement */, require(36) /* PartsPropertyVals */), s = require(370) /* GTextAnnotation */, l = require(172) /* GAnnotationEditor */, h = require(153) /* GBBoxGuide */;
  function A(e, t) {
    this._uid = t, o.call(this, e);
  }
  n.inheritAndMix(A, o, [l]), a.exports(A, s), A.prototype._uid = null, A.prototype._showEditor = function (e) {
    return (!e || e.configuration.isElementAnnotationsVisible(this._element)) && o.prototype._showEditor.call(this, e);
  }, A.prototype.initialSetup = function (e) {
    o.prototype.initialSetup.call(this, e), this._annotationSetup();
  }, A.prototype.canHandleDblClick = function () {
    return true;
  }, A.prototype.handleDblClick = function () {
    return true;
  }, A.prototype.isRemovalBlocked = function () {
    return 0 != (this._element.getProperty("plkt") & r.ProgramLck.NoDelete) || o.prototype.isRemovalBlocked.call(this);
  }, A.prototype._getGuideExclusions = function () {
    return [h];
  }, A.prototype.toString = function () {
    return "[Object GTextAnnotationEditor]";
  }, exports.exports = A;
}
