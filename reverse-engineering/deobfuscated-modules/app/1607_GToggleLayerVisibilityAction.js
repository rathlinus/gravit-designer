/**
 * Webpack Module #1607
 * Type: class
 * Name: GToggleLayerVisibilityAction
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */,
      i = require(15) /* module */,
      a = require(1) /* module */,
      r = require(198) /* Exports_GOutlineSidebar */,
      s = o(require(18) /* MenuItemBuilder */),
      l = o(require(31) /* GAction */);
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
        const exports = gDesigner.getLeftSidebars().getActiveSidebar(),
          module = gDesigner
            .getLeftSidebars()
            .getSidebar(r.SidebarsIds.GOutlineSidebar),
          require = module.getLayerPanel(),
          o = require.gLayerPanel("getCurrentFocusedNode");
        if (o && exports === module.getId()) {
          const e = require.gLayerPanel("getItem", o);
          e.hasFlag(a.GNode.Flag.Selected) &&
            require.gLayerPanel("toggleHideStatusOfLayerOrItem", e);
        }
      }
      toString() {
        return "[Object GToggleLayerVisibilityAction]";
      }
    }
    (c.ID = "view.toggle-layer-visibility"),
      (c.TITLE = new a.GLocaleKey("GToggleLayerVisibilityAction", "title")),
      (exports.exports = c);
  }