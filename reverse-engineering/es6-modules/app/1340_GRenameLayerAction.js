/**
 * Webpack Module #1340
 * Type: class
 * Name: GRenameLayerAction
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16) /* _interopRequireDefault */,
    GEditor = require(15) /* GEditor */,
    GCore = require(1) /* GCore */,
    MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */),
    s = require(198); /* Exports_GOutlineSidebar */
  const GAction = require(31); /* GAction */
  class c extends GAction {
    getId() {
      return c.ID;
    }
    getTitle() {
      return c.TITLE;
    }
    getCategory() {
      return MenuItemBuilder.default.CATEGORY_EDIT;
    }
    getShortcut() {
      return [GEditor.GKey.Constant.OPTION, 'R'];
    }
    isVisible() {
      return false;
    }
    execute() {
      const exports = gDesigner.getLeftSidebars().getActiveSidebar(),
        module = gDesigner.getLeftSidebars().getSidebar(s.SidebarsIds.GOutlineSidebar),
        require = module.getLayerPanel(),
        { currentFocus: _interopRequireDefault } = require.data('glayerpanel');
      if (_interopRequireDefault && exports === module.getId()) {
        const e = require.gLayerPanel('getTitleOfLayer', $(_interopRequireDefault.row));
        e.gAutoEdit('open', e.data('gautoedit'));
      }
    }
    toString() {
      return '[Object GRenameLayerAction]';
    }
  }
  ((c.ID = 'edit.rename-layer'),
    (c.TITLE = new GCore.GLocaleKey('GRenameLayerAction', 'title')),
    (exports.exports = c));
}
