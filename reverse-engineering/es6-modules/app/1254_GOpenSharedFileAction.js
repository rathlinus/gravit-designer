/**
 * Webpack Module #1254
 * Type: class
 * Name: GOpenSharedFileAction
 */

function (exports, module, require) {
  'use strict';
  (require(19) /* polyfill_Array_iterator */,
    require(3) /* polyfill_RegExp_toString */,
    require(26) /* polyfill_DOMCollection_iterator */,
    require(125) /* stub_requires_673 */,
    require(126) /* polyfill_URL_toJSON */,
    require(114)) /* stub_requires_424 */;
  var GCore = require(1);
  const MenuItemBuilder = require(18) /* MenuItemBuilder */,
    GAction = require(31) /* GAction */,
    GSystemDialog = require(44) /* GSystemDialog */,
    GDocument = require(163) /* GDocument */,
    GContainer = require(85) /* GContainer */,
    GOpenFileRequestHandler = require(1255);
  class d extends GAction {
    constructor() {
      super();
    }

    getId() {
      return d.ID;
    }

    getTitle() {
      return d.TITLE;
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_FILE_SHARE;
    }

    getGroup() {
      return 'file-share/opensharedfile';
    }

    isVisible() {
      return true;
    }

    execute() {
      GSystemDialog.prompt(
        GCore.GLocale.get(new GCore.GLocaleKey('GOpenSharedFileAction', 'text.prompt-text')),
        (e) => {
          if (undefined !== e)
            try {
              var module = new URL(e).searchParams.get(GContainer.OpenFileRequest.Type.Token);
              if (module) {
                let e = new GContainer.OpenFileRequest(
                  GContainer.OpenFileRequest.Type.Token,
                  module
                );
                gApi.setToken({ token: module });
                let n = new GDocument();
                (n.setTitle(e.getContent()),
                  gDesigner.addDocument(n),
                  GOpenFileRequestHandler.handleOpenFileRequest(n, e));
              } else
                GSystemDialog.alert(
                  GCore.GLocale.get(new GCore.GLocaleKey('GOpenSharedFileAction', 'invalid-link'))
                );
            } catch (e) {
              (console.error(e),
                GSystemDialog.alert(
                  GCore.GLocale.get(new GCore.GLocaleKey('GOpenSharedFileAction', 'invalid-link'))
                ));
            }
        },
        null,
        GCore.GLocale.get(new GCore.GLocaleKey('GOpenSharedFileAction', 'text.cancel')),
        GCore.GLocale.get(new GCore.GLocaleKey('GOpenSharedFileAction', 'text.open')),
        'open-shared-file-dialog'
      );
    }

    toString() {
      return '[Object GOpenSharedFileAction]';
    }

    static ID = 'file.share.opensharedfile';

    static TITLE = new GCore.GLocaleKey('GOpenSharedFileAction', 'title');

  }
  exports.exports = d;
}