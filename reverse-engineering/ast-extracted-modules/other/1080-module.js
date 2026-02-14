/**
 * Module 1080
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
  var n = i(77), r = i(24), o = i(327);
  function a() {
  }
  a.prototype._view = null, a.prototype.setView = function (e) {
    this._view !== e && (this._view && this._view.removeEventListener(n.Click, this._mouseClick, this), this._view = e, this._view && this._view.addEventListener(n.Click, this._mouseClick, this));
  }, a.prototype._mouseClick = function (e) {
    var t = this._view.getScene(), i = t.hitTest(e.client, this._view.getWorldTransform(t), function (e) {
        return e.hasMixin(o);
      }, !1, -1, r.pickDistance, !1, null, !1, !1, this._view.getViewConfiguration().multiPageView, !1);
    i && i[0] && i[0].element && i[0].data && i[0].data.action && i[0].data.action.execute(i[0].element, this._view.getEditor(), this._view);
  }, e.exports = a;
}
