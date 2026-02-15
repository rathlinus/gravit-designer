/**
 * Webpack Module #1613
 * Type: class
 * Name: GSettingsAction
 */

function (exports, module, require) {
  'use strict';
  (require(8) /* polyfill_bundle_ES6 */, require(3)) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31) /* GAction */,
    GSettingsDialog = require(1275) /* GSettingsDialog */,
    Action_edit_settings = require(1277);
  class l extends GAction {
    constructor() {
      super();
    }

    getId() {
      return l.ID;
    }

    getTitle() {
      return l.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_EDIT;
    }

    getGroup() {
      return 'settings';
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-setting-touch' : '';
    }

    async execute() {
      new GSettingsDialog().then((e) => e.open());
    }

    toString() {
      return '[Object GSettingsAction]';
    }

    static ID = Action_edit_settings.ID;

    static TITLE = new GCore.GLocaleKey('GSettingsAction', 'title');

  }
  exports.exports = l;
}