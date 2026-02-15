/**
 * Webpack Module #1625
 * Type: class
 * Name: GCheckForUpdatesAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GAction = require(31) /* GAction */,
    MenuItemBuilder = require(18);
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
      return MenuItemBuilder.CATEGORY_HELP;
    }

    getGroup() {
      return 'help';
    }

    isEnabled() {
      return true;
    }

    execute() {
      gDesigner.getSoftwareUpdateManager().checkForUpdates();
    }

    toString() {
      return '[Object GCheckForUpdatesAction]';
    }

    static ID = 'check-for-updates';

    static TITLE = new GCore.GLocaleKey('GCheckForUpdatesAction', 'title');

  }
  exports.exports = r;
}