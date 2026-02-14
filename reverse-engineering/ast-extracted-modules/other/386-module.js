/**
 * Module 386
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
  var n = i(334), r = i(0), o = i(60), a = i(52), s = i(104), l = i(113), h = i(122), A = i(164), c = i(83), p = i(24), u = i(22);
  function d(e) {
    n.call(this, e), this._clickGoDown = !1;
  }
  r.inherit(d, n), d.prototype.getCursor = function () {
    var e = n.prototype.getCursor.call(this);
    return e === a.Select ? a.SelectInverse : e === a.SelectDot ? a.SelectDotInverse : e === a.SelectPlus ? a.SelectPlusInverse : e;
  }, d.prototype._hasPathResize = function () {
    return !1;
  }, d.prototype.activate = function (e, t) {
    n.prototype.activate.call(this, e, t), this._editor.setSelectionDetail(!0, !0, e), this._editor.setPathResize(!1, !0), this._view.setRightDrag(!0), this._releaseOnlySelection = !0, p.styleEditors && (this._styleEdManager = e.getScene().getWorkspace().getStyleEdManager(), this._styleEdManager.activate(e));
  }, d.prototype.deactivate = function (e, t) {
    t || (this._styleEdManager && this._styleEdManager.deactivate(), this.setEditMode(n.EditMode.Select), this._editor.setSelectionDetail(!1, !0), this._editor.setPathResize(!0)), this._view && this._view.setRightDrag(!1), n.prototype.deactivate.call(this, e, t);
  }, d.prototype._mouseDblClick = function (e) {
    var t = n.prototype._mouseDblClick.call(this, e);
    return t || (t = !0, p.selectDoubleClickBehavior == n._DblClick.SubSelectSwitch && this._manager.notifyJobDone(this)), t;
  }, d.prototype._getCollisionFlags = function () {
    var e = null, t = this._editor.getSelection();
    return t && t.length && this._getSelectableElements(t) || (e = u.CollisionFlag.GeometryBBox | u.CollisionFlag.Partial), e;
  }, d.prototype._getSelectableElement = function (e, t) {
    return e instanceof s && !(e instanceof h) ? e : null;
  }, d.prototype._selectAcceptor = function (e) {
    return !(e instanceof h || e instanceof c);
  }, d.prototype._keyDown = function (e) {
    if (n.prototype._keyDown.call(this, e), !this._editor.getCurrentInlineEditorNode() && e.key === A.Constant.TAB && !this._mode) {
      var t = this._editor.getSelection();
      t && 1 === t.length && (t[0] instanceof o || t[0] instanceof l) && this._manager.activateOldPathTool();
    }
  }, d.prototype.toString = function () {
    return "[Object GSubSelectTool]";
  }, e.exports = d;
}
