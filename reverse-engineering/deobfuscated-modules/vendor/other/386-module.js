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

function (exports, module, require) {
  var n = require(334) /* AreaSelector */, r = require(0) /* GObject */, o = require(60) /* GPath */, a = require(52) /* module */, s = require(104) /* GItem */, l = require(113) /* GCompoundPath */, h = require(122) /* GGroup */, A = require(164) /* GKey */, c = require(83) /* GPage */, p = require(24) /* GEditorOptions */, u = require(22) /* GElement */;
  function d(e) {
    n.call(this, e), this._clickGoDown = false;
  }
  r.inherit(d, n), d.prototype.getCursor = function () {
    var e = n.prototype.getCursor.call(this);
    return e === a.Select ? a.SelectInverse : e === a.SelectDot ? a.SelectDotInverse : e === a.SelectPlus ? a.SelectPlusInverse : e;
  }, d.prototype._hasPathResize = function () {
    return false;
  }, d.prototype.activate = function (e, t) {
    n.prototype.activate.call(this, e, t), this._editor.setSelectionDetail(true, true, e), this._editor.setPathResize(false, true), this._view.setRightDrag(true), this._releaseOnlySelection = true, p.styleEditors && (this._styleEdManager = e.getScene().getWorkspace().getStyleEdManager(), this._styleEdManager.activate(e));
  }, d.prototype.deactivate = function (e, t) {
    t || (this._styleEdManager && this._styleEdManager.deactivate(), this.setEditMode(n.EditMode.Select), this._editor.setSelectionDetail(false, true), this._editor.setPathResize(true)), this._view && this._view.setRightDrag(false), n.prototype.deactivate.call(this, e, t);
  }, d.prototype._mouseDblClick = function (e) {
    var t = n.prototype._mouseDblClick.call(this, e);
    return t || (t = true, p.selectDoubleClickBehavior == n._DblClick.SubSelectSwitch && this._manager.notifyJobDone(this)), t;
  }, d.prototype._getCollisionFlags = function () {
    var e = null, t = this._editor.getSelection();
    return t && t.length && this._getSelectableElements(t) || (e = u.CollisionFlag.GeometryBBox | u.CollisionFlag.Partial), e;
  }, d.prototype._getSelectableElement = function (e, t) {
    return e instanceof s && !(e instanceof h) ? e : null;
  }, d.prototype._selectAcceptor = function (e) {
    return !(e instanceof h || e instanceof c);
  }, d.prototype._keyDown = function (e) {
    if (n.prototype._keyDown.call(this, e), !this._editor.getCurrentInlineEditorNode() && e.key === A.Constant.TAB && !this._mode) {
      var module = this._editor.getSelection();
      module && 1 === module.length && (module[0] instanceof o || module[0] instanceof l) && this._manager.activateOldPathTool();
    }
  }, d.prototype.toString = function () {
    return "[Object GSubSelectTool]";
  }, exports.exports = d;
}
