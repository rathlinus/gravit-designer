/**
 * Webpack Module #1624
 * Type: class
 * Name: GOpenWelcomeScreenAction
 */

function (exports, module, require) {
  'use strict';
  require(3) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GAction = require(31) /* GAction */,
    MenuItemBuilder = require(18);
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
      return MenuItemBuilder.CATEGORY_HELP;
    }

    getGroup() {
      return 'help';
    }

    isEnabled() {
      return (
        (!gDesigner._newDocumentDialog || !gDesigner._newDocumentDialog.isOpen()) &&
        gDesigner.getApplicationManager().isCreatingNewDocumentEnabled() &&
        gDesigner.getLicense().canAccessFreemium()
      );
    }

    execute() {
      gDesigner.openNewDocumentDialog({ closable: true, showCloudOptions: true });
    }

    toString() {
      return '[Object GOpenWelcomeScreenAction]';
    }

    static ID = 'open-welcome-screen';

    static TITLE = new GCore.GLocaleKey('GOpenWelcomeScreenAction', 'title');

  }
  exports.exports = r;
}