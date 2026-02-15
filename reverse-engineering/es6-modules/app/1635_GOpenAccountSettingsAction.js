/**
 * Webpack Module #1635
 * Type: class
 * Name: GOpenAccountSettingsAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1);
  const MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31);
  class r extends GAction {
    constructor() {
      super();
    }

    getId() {
      return r.ID;
    }

    getTitle() {
      return r.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_ACCOUNT;
    }

    getGroup() {
      return 'account';
    }

    execute() {
      gDesigner.runDeepLink('account');
    }

    isVisible() {
      const exports = gDesigner.getSyncUser();
      return !(exports && !exports.canUpdateSelfAccountData()) && gDesigner.isTouchEnabled();
    }

    toString() {
      return '[Object GOpenAccountSettingsAction]';
    }

    static ID = 'account.open';

    static TITLE = new GCore.GLocaleKey('GOpenAccountSettingsAction', 'title');

  }
  exports.exports = r;
}