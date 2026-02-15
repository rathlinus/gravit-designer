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

function (e, t, i) {
  var n = i(0), r = i(127), o = i(36), a = i(319), s = i(172), l = i(69), h = i(153);
  function A(e, t) {
    r.call(this, e), this._uid = t;
  }
  n.inheritAndMix(A, r, [s]), o.exports(A, a), A.prototype._showEditor = function (e) {
    return (!e || e.configuration.isElementAnnotationsVisible(this._element)) && r.prototype._showEditor.call(this, e);
  }, A.prototype.initialSetup = function (e) {
    r.prototype.initialSetup.call(this, e), this._annotationSetup();
  }, A.prototype.canHandleDblClick = function () {
    return !0;
  }, A.prototype.handleDblClick = function () {
    return !0;
  }, A.prototype.isRemovalBlocked = function () {
    return 0 != (this._element.getProperty("plkt") & l.ProgramLck.NoDelete) || r.prototype.isRemovalBlocked.call(this);
  }, A.prototype._getGuideExclusions = function () {
    return [h];
  }, A.prototype.toString = function () {
    return "[Object GArrowAnnotationEditor]";
  }, e.exports = A;
}
