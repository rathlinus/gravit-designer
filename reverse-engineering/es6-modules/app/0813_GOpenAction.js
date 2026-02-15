/**
 * Webpack Module #813
 * Type: class
 * Name: GOpenAction
 */

function (exports, module, require) {
  'use strict';
  (require(3) /* polyfill_RegExp_toString */,
    require(4) /* stub_requires_668 */,
    require(41)) /* stub_requires_682 */;
  var GCore = require(1) /* GCore */,
    GEditor = require(15) /* GEditor */,
    MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31) /* GAction */,
    GDocument = require(163);
  const GLoginPanel = require(446);
  class c extends GAction {
    constructor() {
      super();
    }

    getId() {
      return c.ID;
    }

    getTitle() {
      return c.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_FILE;
    }

    getGroup() {
      return 'file-open';
    }

    getShortcut() {
      return [GEditor.GKey.Constant.META, 'O'];
    }

    isEnabled(e) {
      return (
        (e = e || gDesigner.getDefaultStorage()).canPromptOpen() &&
        gDesigner.getApplicationManager().isOpenFilesFromLocalEnabled()
      );
    }

    isAvailable() {
      return GEditor.GPlatform.webBrowser !== GEditor.GPlatform.constructor.WebBrowser.Safari;
    }

    execute(e, t) {
      new GLoginPanel(
        () => {
          (e = e || gDesigner.getDefaultStorage()).openPrompt(
            GDocument.FileTypes.filter((e) => e.load),
            (e) => {
              (gDesigner.openDocument(e), t && t());
            },
            false
          );
        },
        () => {
          gDesigner.stats('action-cancelled_anonymous', this.getId());
        }
      );
    }

    getIcon() {
      return gDesigner.isTouchEnabled() ? 'gravit-icon-touch-file-open' : '';
    }

    toString() {
      return '[Object GOpenAction]';
    }

    static ID = 'file.open';

    static TITLE = new GCore.GLocaleKey('GOpenAction', 'title');

  }
  exports.exports = c;
}