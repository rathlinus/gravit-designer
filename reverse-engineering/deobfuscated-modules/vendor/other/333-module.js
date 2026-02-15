/**
 * Module 333
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
  var n = require(7) /* GTransform */, r = require(5) /* GPoint */, o = require(24) /* GEditorOptions */, a = require(14) /* GPaintCanvas */;
  function s() {
  }
  s.prototype._isPanning = null, s.prototype._dragStartPoint = null, s.prototype._cumulativeTranslationSinceDragStartPoint = null, s.prototype.isPanning = function () {
    return this._isPanning;
  }, s.prototype.beginPan = function () {
    this._isPanning = true, this._view.beginPan({
      quickRender: false,
      noWebGL: false
    }), this._resetPan();
  }, s.prototype._resetPan = function () {
    this._dragStartPoint = null, this._cumulativeTranslationSinceDragStartPoint = new n();
  }, s.prototype._setStartingPanPoint = function (e) {
    this.isPanning() && (this._resetPan(), this._dragStartPoint = e);
  }, s.prototype._isPanStartPointDefined = function () {
    return !!this._dragStartPoint;
  }, s.prototype.panView = function (e, t, i) {
    this._isPanStartPointDefined() || this._setStartingPanPoint(e), t || (t = new r(o.autoPanStep, o.autoPanStep)), i || (i = new r(0, 0));
    var a = this._calculateMovingPoint(e, t, i);
    if (a) {
      var s = this._view.scrollBy(a.getX(), a.getY());
      s && (this._cumulativeTranslationSinceDragStartPoint = this._cumulativeTranslationSinceDragStartPoint.translated(s.getX(), s.getY()), this._translationMovement = new n().translated(s.getX(), s.getY()));
    } else
      this._translationMovement = null;
  }, s.prototype._calculateMovingPoint = function (e, t, i) {
    var n = null, s = this._view.getViewBox(), l = s.getWidth(), h = s.getHeight();
    l -= i.getX(), h -= i.getY();
    var A = a.getScreenDPI(), c = (e = new r(e.getX() / A, e.getY() / A)).getX(), p = e.getY(), u = s.getX(), d = s.getY(), g = c - u >= l, f = c <= u + i.getX(), m = g || f, y = p - d >= h, _ = p <= d + i.getY(), v = y || _;
    if (m || v) {
      var b = t.getX(), C = t.getY(), w = Math.max(Math.abs(b), o.autoPanStep), E = Math.max(Math.abs(C), o.autoPanStep);
      this._maximumPanStep = Math.max(w, E);
      var B = 0, x = 0;
      m && (B = f ? -w : w), v && (x = _ ? -E : E), n = new r(B, x);
    } else
      this._maximumPanStep = 0;
    return n;
  }, s.prototype._calculateInvalidationPanAreaForRect = function (e, t) {
    var i = this._maximumPanStep + (t || 0);
    return e.expanded(i, i, i, i);
  }, s.prototype.getTranslatedPanStartPoint = function () {
    return this._cumulativeTranslationSinceDragStartPoint.inverted().mapPoint(this._dragStartPoint);
  }, s.prototype.getLastPanMovement = function () {
    return this._translationMovement;
  }, s.prototype.endPan = function (e) {
    this.isPanning() && (this._isPanning = false, this._view.finishPan(e));
  }, exports.exports = s;
}
