/**
 * Webpack Module #1623
 * Type: class
 * Name: GNewFromTemplateAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31) /* GAction */,
    GCloudStorage = require(119);
  class s extends GAction {
    constructor() {
      super();
    }

    getId() {
      return s.ID;
    }

    getTitle() {
      return s.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_FILE;
    }

    getGroup() {
      return 'document';
    }

    isEnabled() {
      return (
        GCloudStorage.isOnline() &&
        !gDesigner.isOffline(6e5) &&
        gDesigner.getApplicationManager().isCreatingNewDocumentEnabled()
      );
    }

    execute() {
      (gContainer.newDocumentActionPerformed(),
        gDesigner.openNewDocumentDialog({
          closable: true,
          showCloudOptions: true,
          defaultOption: 'templates-option',
          newOrFromTemplate: true,
        }));
    }

    toString() {
      return '[Object GNewFromTemplateAction]';
    }

    static ID = 'file.open-from-template';

    static TITLE = new GCore.GLocaleKey('GNewFromTemplateAction', 'title');

  }
  exports.exports = s;
}