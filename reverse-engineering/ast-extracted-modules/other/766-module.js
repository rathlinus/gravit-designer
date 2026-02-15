/**
 * Module 766
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
  var n = i(0), r = i(69), o = i(552), a = i(36), s = i(317), l = i(172), h = i(153), A = i(66);
  function c(e, t) {
    o.call(this, e), this._uid = t, this._flags = this._flags & ~(A.Flag.RotateCorners | A.Flag.RotateHandle);
  }
  n.inheritAndMix(c, o, [l]), a.exports(c, s), c.prototype._showEditor = function (e) {
    return (!e || e.configuration.isElementAnnotationsVisible(this._element)) && o.prototype._showEditor.call(this, e);
  }, c.prototype.initialSetup = function (e) {
    o.prototype.initialSetup.call(this, e), this._annotationSetup();
  }, c.prototype.canHandleDblClick = function () {
    return !0;
  }, c.prototype.handleDblClick = function () {
    return !0;
  }, c.prototype.isRemovalBlocked = function () {
    return 0 != (this._element.getProperty("plkt") & r.ProgramLck.NoDelete) || o.prototype.isRemovalBlocked.call(this);
  }, c.prototype._getGuideExclusions = function () {
    return [h];
  }, c.prototype.toString = function () {
    return "[Object GEllipseAnnotationEditor]";
  }, e.exports = c;
}
