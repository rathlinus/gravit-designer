/**
 * Webpack Module #1607
 * Type: class
 * Name: GToggleLayerVisibilityAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */,
      GEditor = require(15) /* GEditor */,
      GCore = require(1) /* GCore */,
      GOutlineSidebar = require(198) /* Exports_GOutlineSidebar */,
      MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */),
      GAction = _interopRequireDefault(require(31) /* GAction */);
    class c extends GAction.default {
      getId() {
        return c.ID;
      }
      getTitle() {
        return c.TITLE;
      }
      getCategory() {
        return MenuItemBuilder.default.CATEGORY_VIEW;
      }
      getShortcut() {
        return [GEditor.GKey.Constant.META, "3"];
      }
      isVisible() {
        return false;
      }
      execute() {
        const exports = gDesigner.getLeftSidebars().getActiveSidebar(),
          module = gDesigner
            .getLeftSidebars()
            .getSidebar(GOutlineSidebar.SidebarsIds.GOutlineSidebar),
          require = module.getLayerPanel(),
          _interopRequireDefault = require.gLayerPanel("getCurrentFocusedNode");
        if (_interopRequireDefault && exports === module.getId()) {
          const e = require.gLayerPanel("getItem", _interopRequireDefault);
          e.hasFlag(GCore.GNode.Flag.Selected) &&
            require.gLayerPanel("toggleHideStatusOfLayerOrItem", e);
        }
      }
      toString() {
        return "[Object GToggleLayerVisibilityAction]";
      }
    }
    (c.ID = "view.toggle-layer-visibility"),
      (c.TITLE = new GCore.GLocaleKey("GToggleLayerVisibilityAction", "title")),
      (exports.exports = c);
  }