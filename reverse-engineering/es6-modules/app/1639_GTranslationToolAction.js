/**
 * Webpack Module #1639
 * Type: class
 * Name: GTranslationToolAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1);
  const MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31) /* GAction */,
    GTranslationToolDialog = require(1640) /* GTranslationToolDialog */,
    { IS_TRUNK: s, IS_LOCALHOST: l } = require(231);
  class c extends GAction {
    constructor() {
      super();
    }

    _translationTool = null;

    getId() {
      return c.ID;
    }

    getTitle() {
      return GCore.GLocale.get(c.TITLE) + ' [DEVELOPMENT]';
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
      return !(!s && !l);
    }

    execute() {
      (this._translationTool || (this._translationTool = new GTranslationToolDialog()),
        this._translationTool.init());
    }

    toString() {
      return '[Object GTranslationToolAction]';
    }

    static ID = 'help.translationtool';

    static TITLE = new GCore.GLocaleKey('GTranslationToolAction', 'title');

  }
  exports.exports = c;
}