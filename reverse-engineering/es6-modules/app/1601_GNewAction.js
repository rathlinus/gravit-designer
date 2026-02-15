/**
 * Webpack Module #1601
 * Type: class
 * Name: GNewAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31);
  class s extends GAction {
    constructor() {
      super();
    }

    getId() {
      return s.ID;
    }

    isEnabled() {
      return gDesigner.getApplicationManager().isCreatingNewDocumentEnabled();
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

    getShortcut() {
      return [GEditor.GKey.Constant.OPTION, 'N'];
    }

    getAdditionalShortcuts() {
      return [[GEditor.GKey.Constant.META, 'N']];
    }

    execute() {
      (gContainer.newDocumentActionPerformed(),
        gDesigner.openNewDocumentDialog({
          closable: true,
          showCloudOptions: true,
          defaultOption: 'start-option',
          newOrFromTemplate: true,
        }));
    }

    toString() {
      return '[Object GNewAction]';
    }

    static ID = 'file.new';

    static TITLE = new GCore.GLocaleKey('GNewAction', 'title');

  }
  exports.exports = s;
}