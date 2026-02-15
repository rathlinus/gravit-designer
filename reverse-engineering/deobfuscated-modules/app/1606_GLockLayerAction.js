/**
 * Webpack Module #1606
 * Type: class
 * Name: GLockLayerAction
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */,
      GEditor = require(15) /* module */,
      GCore = require(1) /* module */,
      r = require(198) /* Exports_GOutlineSidebar */,
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
        return MenuItemBuilder.default.CATEGORY_MODIFY;
      }
      getShortcut() {
        return [GEditor.GKey.Constant.META, "2"];
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
          _interopRequireDefault = require.gLayerPanel("getCurrentFocusedNode");
        if (_interopRequireDefault && exports === module.getId()) {
          const e = require.gLayerPanel("getItem", _interopRequireDefault);
          e.hasFlag(GCore.GNode.Flag.Selected) &&
            require.gLayerPanel("toggleLockStatusOfLayerOrItem", e);
        }
      }
      toString() {
        return "[Object GLockLayerAction]";
      }
    }
    (c.ID = "modify.lock-layer"),
      (c.TITLE = new GCore.GLocaleKey("GLockLayerAction", "title")),
      (exports.exports = c);
  }