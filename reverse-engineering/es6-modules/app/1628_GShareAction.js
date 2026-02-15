/**
 * Webpack Module #1628
 * Type: class
 * Name: GShareAction
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
      return MenuItemBuilder.CATEGORY_FILE_SHARE;
    }

    getGroup() {
      return 'file-share/share';
    }

    isEnabled() {
      return gDesigner.getApplicationManager().isShareEnabled();
    }

    isVisible() {
      return true;
    }

    execute() {
      gDesigner.getShareManager().share();
    }

    toString() {
      return '[Object GShareAction]';
    }

    static ID = 'file.share';

    static TITLE = new GCore.GLocaleKey('GShareAction', 'title');

  }
  exports.exports = r;
}