/**
 * Webpack Module #1632
 * Type: class
 * Name: GQuitAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    GAction = require(31) /* GAction */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GContainer = require(85);
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
      return MenuItemBuilder.CATEGORY_FILE;
    }

    getGroup() {
      return 'file-quit';
    }

    isEnabled() {
      return (
        gContainer.getRuntime() !== GContainer.Runtime.Browser &&
        gContainer.getRuntime() !== GContainer.Runtime.PWA
      );
    }

    getShortcut() {
      return [GEditor.GKey.Constant.META, 'Q'];
    }

    isAvailable() {
      return (
        gContainer.getRuntime() !== GContainer.Runtime.Browser &&
        gContainer.getRuntime() !== GContainer.Runtime.PWA
      );
    }

    execute() {
      gContainer.triggerClose();
    }

    toString() {
      return '[Object GQuitAction]';
    }

    static ID = 'file.quit';

    static TITLE = new GCore.GLocaleKey('GQuitAction', 'title');

  }
  exports.exports = l;
}