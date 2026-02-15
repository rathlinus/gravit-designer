/**
 * Webpack Module #1633
 * Type: action
 * Name: Action_example_files
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1);
  const GAction = require(31) /* GAction */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GOfflineDialog = require(256);
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
      return MenuItemBuilder.CATEGORY_HELP_LEARN;
    }

    getGroup() {
      return 'help/learn';
    }

    execute() {
      const exports = {
          closable: true,
          showCloudOptions: true,
          openFromCloud: true,
          nativeCloud: true,
          showExampleFiles: true,
        },
        module = () => gDesigner.openNewDocumentDialog(exports);
      gDesigner.isOffline() ? GOfflineDialog.openUnavailableFeature(module) : module();
    }

    toString() {
      return '[GObject GExampleFilesAction]';
    }

    static ID = 'example-files';

    static TITLE = new GCore.GLocaleKey('GExampleFilesAction', 'title');

  }
  exports.exports = s;
}