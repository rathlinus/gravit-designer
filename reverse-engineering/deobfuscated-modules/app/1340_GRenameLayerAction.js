/**
 * Webpack Module #1340
 * Type: class
 * Name: GRenameLayerAction
 */

function (exports, module, require) {
    "use strict";
    var o = n(16) /* module_16 */,
      i = n(15) /* module_15 */,
      a = n(1) /* module_1 */,
      r = o(n(18) /* module_18 */),
      s = n(198) /* Exports_GOutlineSidebar */;
    const l = n(31) /* GAction */;
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
        const e = gDesigner.getLeftSidebars().getActiveSidebar(),
          t = gDesigner
            .getLeftSidebars()
            .getSidebar(s.SidebarsIds.GOutlineSidebar),
          n = t.getLayerPanel(),
          { currentFocus: o } = n.data("glayerpanel");
        if (o && e === t.getId()) {
          const e = n.gLayerPanel("getTitleOfLayer", $(o.row));
          e.gAutoEdit("open", e.data("gautoedit"));
        }
      }
      toString() {
        return "[Object GRenameLayerAction]";
      }
    }
    (c.ID = "edit.rename-layer"),
      (c.TITLE = new a.GLocaleKey("GRenameLayerAction", "title")),
      (e.exports = c);
  }