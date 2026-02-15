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

function (exports, module, require) {
  var n = require(77) /* Wheel */, r = require(24) /* GEditorOptions */, o = require(327) /* GActionable */;
  function a() {
  }
  a.prototype._view = null, a.prototype.setView = function (e) {
    this._view !== e && (this._view && this._view.removeEventListener(n.Click, this._mouseClick, this), this._view = e, this._view && this._view.addEventListener(n.Click, this._mouseClick, this));
  }, a.prototype._mouseClick = function (e) {
    var t = this._view.getScene(), i = t.hitTest(e.client, this._view.getWorldTransform(t), function (e) {
        return e.hasMixin(o);
      }, false, -1, r.pickDistance, false, null, false, false, this._view.getViewConfiguration().multiPageView, false);
    i && i[0] && i[0].element && i[0].data && i[0].data.action && i[0].data.action.execute(i[0].element, this._view.getEditor(), this._view);
  }, exports.exports = a;
}
