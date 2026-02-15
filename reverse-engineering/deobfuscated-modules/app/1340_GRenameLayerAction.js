/**
 * Webpack Module #1340
 * Type: class
 * Name: GRenameLayerAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */,
      i = require(15) /* module */,
      a = require(1) /* module */,
      r = o(require(18) /* module_18 */),
      s = require(198) /* Exports_GOutlineSidebar */;
    const l = require(31) /* GAction */;
    class c extends l {
      getId() {
        return c.ID;
      }
      getTitle() {
        return c.TITLE;
      }
      getCategory() {
        return r.default.CATEGORY_EDIT;
      }
      getShortcut() {
        return [i.GKey.Constant.OPTION, "R"];
      }
      isVisible() {
        return false;
      }
      execute() {
        const exports = gDesigner.getLeftSidebars().getActiveSidebar(),
          module = gDesigner
            .getLeftSidebars()
            .getSidebar(s.SidebarsIds.GOutlineSidebar),
          require = module.getLayerPanel(),
          { currentFocus: o } = require.data("glayerpanel");
        if (o && exports === module.getId()) {
          const e = require.gLayerPanel("getTitleOfLayer", $(o.row));
          e.gAutoEdit("open", e.data("gautoedit"));
        }
      }
      toString() {
        return "[Object GRenameLayerAction]";
      }
    }
    (c.ID = "edit.rename-layer"),
      (c.TITLE = new a.GLocaleKey("GRenameLayerAction", "title")),
      (exports.exports = c);
  }