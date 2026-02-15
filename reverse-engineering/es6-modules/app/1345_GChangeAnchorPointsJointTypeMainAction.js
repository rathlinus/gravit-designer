/**
 * Webpack Module #1345
 * Type: class
 * Name: GChangeAnchorPointsJointTypeMainAction
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16) /* _interopRequireDefault */,
    GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */),
    GMainAction = _interopRequireDefault(require(1281) /* GMainAction */),
    GOutlineSidebar = require(198); /* Exports_GOutlineSidebar */
  class c extends GMainAction.default {
    getId() {
      return c.ID;
    }
    getTitle() {
      return c.TITLE;
    }
    getCategory() {
      return MenuItemBuilder.default.CATEGORY_MODIFY;
    }
    isVisible() {
      return false;
    }
    getShortcut() {
      return [GEditor.GKey.Constant.META, GEditor.GKey.Constant.OPTION, GEditor.GKey.Constant.A];
    }
    isEnabled() {
      return (
        gDesigner.getRightSidebars().getActiveSidebar() ===
        GOutlineSidebar.SidebarsIds.GInspectorSidebar
      );
    }
    toString() {
      return '[Object GChangeAnchorPointsJointTypeMainAction]';
    }
  }
  ((c.ID = 'modify.change-anchor-points-joint-type'),
    (c.TITLE = new GCore.GLocaleKey('GChangeAnchorPointsJointTypeMainAction', 'title')),
    (exports.exports = c));
}
