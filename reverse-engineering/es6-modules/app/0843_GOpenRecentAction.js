/**
 * Webpack Module #843
 * Type: class
 * Name: GOpenRecentAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
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
      return MenuItemBuilder.CATEGORY_FILE_OPEN_RECENT;
    }

    getGroup() {
      return 'file-open/open-recent';
    }

    isEnabled(e) {
      return false;
    }

    execute() {}

    toString() {
      return '[Object GOpenRecentAction]';
    }

    static ID = 'file.open-recent';

    static TITLE = new GCore.GLocaleKey('GOpenRecentAction', 'title');

  }
  exports.exports = r;
}