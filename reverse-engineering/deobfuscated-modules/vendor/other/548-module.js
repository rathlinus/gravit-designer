/**
 * Module 548
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
  var n = require(334) /* AreaSelector */, r = require(2) /* GNode */, o = require(0) /* GObject */, a = require(24) /* GEditorOptions */, s = require(39) /* PartInfo */, l = require(386) /* GSubSelectTool */, h = (require(167) /* module */, require(276) /* GGradientStyleEditor */);
  function A() {
    n.call(this);
  }
  o.inherit(A, n), A.prototype.activate = function (e, t) {
    n.prototype.activate.call(this, e, t), this._editor.setSelectionDetail(false, true), a.styleEditors && (this._styleEdManager = e.getScene().getWorkspace().getStyleEdManager(), this._styleEdManager.activate(e)), this._allowDistanceHelper = a.showDistance;
  }, A.prototype.deactivate = function (e, t) {
    t || (this.setEditMode(n.EditMode.Select), this._styleEdManager && this._styleEdManager.deactivate()), n.prototype.deactivate.call(this, e, t);
  }, A.prototype._mouseDblClick = function (e) {
    var t = n.prototype._mouseDblClick.call(this, e);
    return t || this._editorUnderMouseInfo && this._editorUnderMouseInfo.editor instanceof h || !(this._clickedElement && this._clickedElement.hasFlag(r.Flag.Selected) || this._editorUnderMouseInfo && this._editorUnderMouseInfo.editor.hasFlag(s.Flag.Selected) && !this._editorUnderMouseInfo.editor.canHandleDblClick()) || (a.selectDoubleClickBehavior == n._DblClick.EditModeSwitch ? ((this._clickedElement && this._clickedElement.hasFlag(r.Flag.Selected) || this._editMode === n.EditMode.Edit) && this.setEditMode(this._editMode === n.EditMode.Edit ? n.EditMode.Select : n.EditMode.Edit), t = true) : a.selectDoubleClickBehavior == n._DblClick.SubSelectSwitch && (t = true, this._manager.activateTool(l))), t;
  }, A.prototype._keyDown = function (e) {
    a.toolExitKey && e.key === a.toolExitKey && this.setEditMode(n.EditMode.Select), n.prototype._keyDown.call(this, e);
  }, A.prototype.toString = function () {
    return "[Object GPointerTool]";
  }, exports.exports = A;
}
