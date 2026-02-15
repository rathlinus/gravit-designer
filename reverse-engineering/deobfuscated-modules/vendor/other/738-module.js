/**
 * Module 738
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
  var n = require(0) /* GObject */, r = require(539) /* GPenTool */, o = require(268) /* GConnector */, a = require(60) /* GPath */, s = require(113) /* GCompoundPath */, l = require(95) /* GImage */, h = require(56) /* GShape */, A = require(162) /* GPathsGraph */, c = require(2) /* GNode */, p = (require(5) /* GPoint */, require(24) /* GEditorOptions */);
  function u() {
    r.call(this);
  }
  require(1078) /* module */, n.inherit(u, r), u.prototype._sourcePath = null, u.prototype._targetPath = null, u.prototype._pathUnderMouse = null, u.prototype._getRelatedItemClass = function () {
    return o;
  }, u.prototype.deactivate = function (e, t) {
    r.prototype.deactivate.call(this, e, t), this._pathUnderMouse && (this._pathUnderMouse.removeFlag(c.Flag.Highlighted), this._pathUnderMouse = null), this._sourcePath = null, this._targetPath = null;
  }, u.prototype._mouseMove = function (e) {
    r.prototype._mouseMove.call(this, e), this._pathUnderMouse && (this._pathUnderMouse.removeFlag(c.Flag.Highlighted), this._pathUnderMouse = null);
    var t = this._scene.hitTest(e.client, this._view.getWorldTransform(this._scene), null, false, -1, 0, false, null, false, true, this._view.getViewConfiguration().multiPageView);
    t && t.length && t[0].element instanceof a || (t = this._scene.hitTest(e.client, this._view.getWorldTransform(this._scene), null, false, -1, p.pickDistance, false, null, false, true, this._view.getViewConfiguration().multiPageView)), t && t.length && (!(t[0].element instanceof h) || t[0].element instanceof l || t[0].element instanceof s || t[0].element instanceof A || t[0].element instanceof o || (this._pathUnderMouse = t[0].element, this._pathUnderMouse.setFlag(c.Flag.Highlighted)));
  }, u.prototype._mouseDown = function () {
    this._pathUnderMouse && (this._sourcePath && this._pathUnderMouse === this._sourcePath || (r.prototype._mouseDown.apply(this, arguments), this._sourcePath ? this._targetPath = this._pathUnderMouse : this._sourcePath = this._pathUnderMouse, this._pathUnderMouse = null));
  }, u.prototype._mouseRelease = function () {
    r.prototype._mouseRelease.apply(this, arguments);
    var e = this._editor.getPathSelection();
    e && this._sourcePath && this._targetPath && (e.connect(this._sourcePath, this._targetPath), this._editor.clearSelection(), this._manager.notifyJobDone(this));
  }, exports.exports = u;
}
