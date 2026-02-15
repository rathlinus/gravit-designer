/**
 * Webpack Module #1646
 * Type: class
 * Name: GShowSelectionHandlesAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */;
    require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var i = require(1) /* module */,
      a = require(15) /* module */,
      r = require(53) /* module */,
      s = o(require(18) /* MenuItemBuilder */),
      l = o(require(31) /* GAction */);
    class c extends l.default {
      constructor() {
        super(), (this._lastIsCheckedValue = true);
      }
      getId() {
        return c.ID;
      }
      getTitle() {
        return c.TITLE;
      }
      getCategory() {
        return s.default.CATEGORY_VIEW_CANVAS;
      }
      isCheckable() {
        return true;
      }
      isEnabled() {
        return !!this._getSelection();
      }
      isChecked() {
        const exports = this._getSelection();
        if (!exports) return this._lastIsCheckedValue;
        const module = !!exports.find(
          (e) =>
            !r.GElementEditor.getEditor(e).hasFlag(
              r.GBaseEditor.Flag.HideEditor
            )
        );
        return (this._lastIsCheckedValue = module), module;
      }
      getShortcut() {
        return [a.GKey.Constant.SHIFT, a.GKey.Constant.META, "X"];
      }
      execute() {
        const exports = this._getEditor();
        if (exports) {
          this.isChecked() ? exports.hideSelection() : exports.resetHideSelection();
        }
      }
      _getEditor() {
        const exports = gDesigner.getActiveDocument();
        return exports && exports.getEditor();
      }
      _getSelection() {
        const exports = this._getEditor(),
          module = exports && exports.getSelection();
        return module && module.length > 0 ? module : null;
      }
      toString() {
        return "[Object GShowSelectionHandlesAction]";
      }
    }
    (c.ID = "view.canvas.show-selection-handles"),
      (c.TITLE = new i.GLocaleKey("GShowSelectionHandlesAction", "title")),
      (exports.exports = c);
  }