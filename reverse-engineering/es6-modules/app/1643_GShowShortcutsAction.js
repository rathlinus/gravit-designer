/**
 * Webpack Module #1643
 * Type: class
 * Name: GShowShortcutsAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  const { GObject: o, GLocaleKey: i } = require(1) /* GCore */,
    GAction = require(31) /* GAction */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GShortcutsDialog = require(1644);
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
      return MenuItemBuilder.CATEGORY_HELP_LEARN;
    }

    getGroup() {
      return 'help/learn';
    }

    execute() {
      new GShortcutsDialog().open();
    }

    toString() {
      return '[Object GShowShortcutsAction]';
    }

    static ID = 'help.shortcuts';

    static TITLE = new i('GShowShortcutsAction', 'title');

  }
  exports.exports = l;
}