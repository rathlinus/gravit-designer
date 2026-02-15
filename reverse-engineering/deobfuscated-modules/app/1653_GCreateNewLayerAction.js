/**
 * Webpack Module #1653
 * Type: class
 * Name: GCreateNewLayerAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */,
      i = require(1) /* module */,
      a = require(15) /* module */,
      r = o(require(31) /* GAction */),
      s = o(require(18) /* module_18 */),
      l = require(198) /* Exports_GOutlineSidebar */,
      c = o(require(1170) /* GToggleSidebarAction */);
    class d extends r.default {
      getId() {
        return d.ID;
      }
      getTitle() {
        return d.TITLE;
      }
      getCategory() {
        return s.default.CATEGORY_MODIFY;
      }
      isVisible() {
        return false;
      }
      getShortcut() {
        return [a.GKey.Constant.META, a.GKey.Constant.M];
      }
      isEnabled() {
        return gDesigner.getApplicationManager().isEditingEnabled();
      }
      execute() {
        this._showOutlineSidebar();
        const exports = gDesigner.getLeftSidebars();
        (exports && exports.getSidebar(l.SidebarsIds.GOutlineSidebar)).insertLayer();
      }
      _showOutlineSidebar() {
        const exports = gDesigner.getAction(
          "".concat(c.default.ID, ".").concat(l.SidebarsIds.GOutlineSidebar)
        );
        exports.isChecked() || exports.execute();
      }
      toString() {
        return "[Object GCreateNewLayerAction]";
      }
    }
    (d.ID = "modify.create-new-layer"),
      (d.TITLE = new i.GLocaleKey("GCreateNewLayerAction", "title")),
      (exports.exports = d);
  }