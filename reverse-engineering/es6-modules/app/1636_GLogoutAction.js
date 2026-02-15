/**
 * Webpack Module #1636
 * Type: class
 * Name: GLogoutAction
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
      return gDesigner.signout();
    }

    isVisible() {
      return gDesigner.isTouchEnabled();
    }

    toString() {
      return '[Object GLogoutAction]';
    }

    static ID = 'account.logout';

    static TITLE = new GCore.GLocaleKey('GLogoutAction', 'title');

  }
  exports.exports = r;
}