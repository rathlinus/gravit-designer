/**
 * chunk.vendor.js Module #548
 * Type: class
 * Name: GPointerTool
 */

function (e, t, i) {
      var n = i(334),
        r = i(2),
        o = i(0),
        a = i(24),
        s = i(39),
        l = i(386),
        h = (i(167), i(276));

      function A() {
        n.call(this);
      }
      (o.inherit(A, n),
        (A.prototype.activate = function (e, t) {
          (n.prototype.activate.call(this, e, t),
            this._editor.setSelectionDetail(!1, !0),
            a.styleEditors &&
              ((this._styleEdManager = e
                .getScene()
                .getWorkspace()
                .getStyleEdManager()),
              this._styleEdManager.activate(e)),
            (this._allowDistanceHelper = a.showDistance));
        }),
        (A.prototype.deactivate = function (e, t) {
          (t ||
            (this.setEditMode(n.EditMode.Select),
            this._styleEdManager && this._styleEdManager.deactivate()),
            n.prototype.deactivate.call(this, e, t));
        }),
        (A.prototype._mouseDblClick = function (e) {
          var t = n.prototype._mouseDblClick.call(this, e);
          return (
            t ||
              (this._editorUnderMouseInfo &&
                this._editorUnderMouseInfo.editor instanceof h) ||
              !(
                (this._clickedElement &&
                  this._clickedElement.hasFlag(r.Flag.Selected)) ||
                (this._editorUnderMouseInfo &&
                  this._editorUnderMouseInfo.editor.hasFlag(s.Flag.Selected) &&
                  !this._editorUnderMouseInfo.editor.canHandleDblClick())
              ) ||
              (a.selectDoubleClickBehavior == n._DblClick.EditModeSwitch
                ? (((this._clickedElement &&
                    this._clickedElement.hasFlag(r.Flag.Selected)) ||
                    this._editMode === n.EditMode.Edit) &&
                    this.setEditMode(
                      this._editMode === n.EditMode.Edit
                        ? n.EditMode.Select
                        : n.EditMode.Edit,
                    ),
                  (t = !0))
                : a.selectDoubleClickBehavior == n._DblClick.SubSelectSwitch &&
                  ((t = !0), this._manager.activateTool(l))),
            t
          );
        }),
        (A.prototype._keyDown = function (e) {
          (a.toolExitKey &&
            e.key === a.toolExitKey &&
            this.setEditMode(n.EditMode.Select),
            n.prototype._keyDown.call(this, e));
        }),
        (A.prototype.toString = function () {
          return "[Object GPointerTool]";
        }),
        (e.exports = A));
    }