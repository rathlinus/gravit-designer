/**
 * Webpack Module #1607
 * Type: class
 * Name: GToggleLayerVisibilityAction
 */

function (exports, module, require) {
    "use strict";
    var o = n(16) /* module_16 */,
      i = n(15) /* module_15 */,
      a = n(1) /* module_1 */,
      r = n(198) /* Exports_GOutlineSidebar */,
      s = o(n(18) /* module_18 */),
      l = o(n(31) /* GAction */);
    class c extends l.default {
      getId() {
        return c.ID;
      }
      getTitle() {
        return c.TITLE;
      }
      getCategory() {
        return s.default.CATEGORY_VIEW;
      }
      getShortcut() {
        return [i.GKey.Constant.META, "3"];
      }
      isVisible() {
        return false;
      }
      execute() {
        const e = gDesigner.getLeftSidebars().getActiveSidebar(),
          t = gDesigner
            .getLeftSidebars()
            .getSidebar(r.SidebarsIds.GOutlineSidebar),
          n = t.getLayerPanel(),
          o = n.gLayerPanel("getCurrentFocusedNode");
        if (o && e === t.getId()) {
          const e = n.gLayerPanel("getItem", o);
          e.hasFlag(a.GNode.Flag.Selected) &&
            n.gLayerPanel("toggleHideStatusOfLayerOrItem", e);
        }
      }
      toString() {
        return "[Object GToggleLayerVisibilityAction]";
      }
    }
    (c.ID = "view.toggle-layer-visibility"),
      (c.TITLE = new a.GLocaleKey("GToggleLayerVisibilityAction", "title")),
      (e.exports = c);
  }