/**
 * Webpack Module #1296
 * Type: class
 * Name: GNewWindowAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31);
  class s extends GAction {
    constructor() {
      super();
    }

    getId() {
      return s.ID;
    }

    getTitle() {
      return s.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_VIEW;
    }

    getGroup() {
      return 'view';
    }

    getShortcut() {
      return [GEditor.GKey.Constant.META, GEditor.GKey.Constant.OPTION, 'N'];
    }

    isEnabled() {
      return !!gDesigner.getWindows().getActiveWindow();
    }

    execute() {
      gDesigner.getWindows().addWindow(gDesigner.getWindows().getActiveWindow());
    }

    toString() {
      return '[Object GNewWindowAction]';
    }

    static ID = 'view.clone';

    static TITLE = new GCore.GLocaleKey('GNewWindowAction', 'title');

  }
  exports.exports = s;
}