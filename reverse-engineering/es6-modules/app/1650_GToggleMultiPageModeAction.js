/**
 * Webpack Module #1650
 * Type: class
 * Name: GToggleMultiPageModeAction
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16) /* _interopRequireDefault */,
    GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    GAction = _interopRequireDefault(require(31) /* GAction */),
    MenuItemBuilder = _interopRequireDefault(require(18) /* MenuItemBuilder */),
    l = require(198); /* Exports_GOutlineSidebar */
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
      return [GEditor.GKey.Constant.F6];
    }
    isVisible() {
      return false;
    }
    execute() {
      const exports = gDesigner.getLeftSidebars(),
        module = exports && exports.getSidebar(l.SidebarsIds.GOutlineSidebar);
      module && module.toggleMultiPageMode();
    }
    toString() {
      return '[Object GToggleMultiPageModeAction]';
    }
  }
  ((c.ID = 'view.toggle-multi-page-mode'),
    (c.TITLE = new GCore.GLocaleKey('GToggleMultiPageModeAction', 'title')),
    (exports.exports = c));
}
