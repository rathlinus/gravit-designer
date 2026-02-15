/**
 * Webpack Module #1612
 * Type: class
 * Name: GSaveAllAction
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
      return MenuItemBuilder.CATEGORY_FILE;
    }

    getGroup() {
      return 'file';
    }

    isAvailable(e) {
      return false;
    }

    isEnabled() {
      return false;
    }

    execute() {
      for (var exports = gDesigner.getDocuments(), module = 0; module < exports.length; ++module)
        exports[module].isModified() && exports[module].save();
    }

    toString() {
      return '[Object GSaveAllAction]';
    }

    static ID = 'file.save-all';

    static TITLE = new GCore.GLocaleKey('GSaveAllAction', 'title');

  }
  exports.exports = r;
}