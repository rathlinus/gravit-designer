/**
 * Webpack Module #1336
 * Type: class
 * Name: GOpenQuickHelpScreenAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1);
  const MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31) /* GAction */,
    GTouchOnboarding = require(1589);
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
      return MenuItemBuilder.CATEGORY_HELP;
    }

    getGroup() {
      return 'help';
    }

    isEnabled() {
      return true;
    }

    isVisible() {
      return gDesigner.isTouchEnabled();
    }

    execute() {
      GTouchOnboarding.open();
    }

    toString() {
      return '[Object GOpenQuickHelpScreenAction]';
    }

    static ID = 'help.open-quick-help';

    static TITLE = new GCore.GLocaleKey('GOpenQuickHelpScreenAction', 'title');

  }
  exports.exports = s;
}