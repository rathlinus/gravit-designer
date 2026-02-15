/**
 * Module 770
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
  var n = require(0) /* GObject */, r = require(127) /* GPathEditor */, o = require(36) /* PartsPropertyVals */, a = require(319) /* GArrowAnnotation */, s = require(172) /* GAnnotationEditor */, l = require(69) /* GBlock */, h = require(153) /* GBBoxGuide */;
  function A(e, t) {
    r.call(this, e), this._uid = t;
  }
  n.inheritAndMix(A, r, [s]), o.exports(A, a), A.prototype._showEditor = function (e) {
    return (!e || e.configuration.isElementAnnotationsVisible(this._element)) && r.prototype._showEditor.call(this, e);
  }, A.prototype.initialSetup = function (e) {
    r.prototype.initialSetup.call(this, e), this._annotationSetup();
  }, A.prototype.canHandleDblClick = function () {
    return true;
  }, A.prototype.handleDblClick = function () {
    return true;
  }, A.prototype.isRemovalBlocked = function () {
    return 0 != (this._element.getProperty("plkt") & l.ProgramLck.NoDelete) || r.prototype.isRemovalBlocked.call(this);
  }, A.prototype._getGuideExclusions = function () {
    return [h];
  }, A.prototype.toString = function () {
    return "[Object GArrowAnnotationEditor]";
  }, exports.exports = A;
}
