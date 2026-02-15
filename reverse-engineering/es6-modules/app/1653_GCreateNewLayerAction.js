/**
 * Webpack Module #1653
 * Type: class
 * Name: GCreateNewLayerAction
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16) /* _interopRequireDefault */,
    GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    GAction = _interopRequireDefault(require(31) /* GAction */),
    MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */),
    l = require(198) /* Exports_GOutlineSidebar */,
    GToggleSidebarAction = _interopRequireDefault(require(1170) /* GToggleSidebarAction */);
  class d extends GAction.default {
    getId() {
      return d.ID;
    }
    getTitle() {
      return d.TITLE;
    }
    getCategory() {
      return MenuItemBuilder.default.CATEGORY_MODIFY;
    }
    isVisible() {
      return false;
    }
    getShortcut() {
      return [GEditor.GKey.Constant.META, GEditor.GKey.Constant.M];
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
        ''.concat(GToggleSidebarAction.default.ID, '.').concat(l.SidebarsIds.GOutlineSidebar)
      );
      exports.isChecked() || exports.execute();
    }
    toString() {
      return '[Object GCreateNewLayerAction]';
    }
  }
  ((d.ID = 'modify.create-new-layer'),
    (d.TITLE = new GCore.GLocaleKey('GCreateNewLayerAction', 'title')),
    (exports.exports = d));
}
