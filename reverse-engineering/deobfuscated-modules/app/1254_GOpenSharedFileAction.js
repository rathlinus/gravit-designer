/**
 * Webpack Module #1254
 * Type: class
 * Name: GOpenSharedFileAction
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(3) /* polyfill_RegExp_toString */, require(26) /* polyfill_DOMCollection_iterator */, require(125) /* stub_requires_673 */, require(126) /* polyfill_URL_toJSON */, require(114) /* stub_requires_424 */;
    var GCore = require(1) /* module */;
    const MenuItemBuilder = require(18) /* MenuItemBuilder */,
      GAction = require(31) /* GAction */,
      GSystemDialog = require(44) /* GSystemDialog */,
      GDocument = require(163) /* GDocument */,
      GContainer = require(85) /* GContainer */,
      GOpenFileRequestHandler = require(1255) /* GOpenFileRequestHandler */;
    function d() {}
    GCore.GObject.inherit(d, GAction),
      (d.ID = "file.share.opensharedfile"),
      (d.TITLE = new GCore.GLocaleKey("GOpenSharedFileAction", "title")),
      (d.prototype.getId = function () {
        return d.ID;
      }),
      (d.prototype.getTitle = function () {
        return d.TITLE;
      }),
      (d.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_FILE_SHARE;
      }),
      (d.prototype.getGroup = function () {
        return "file-share/opensharedfile";
      }),
      (d.prototype.isVisible = function () {
        return true;
      }),
      (d.prototype.execute = function () {
        GSystemDialog.prompt(
          GCore.GLocale.get(
            new GCore.GLocaleKey("GOpenSharedFileAction", "text.prompt-text")
          ),
          (e) => {
            if (undefined !== e)
              try {
                var module = new URL(e).searchParams.get(
                  GContainer.OpenFileRequest.Type.Token
                );
                if (module) {
                  let e = new GContainer.OpenFileRequest(
                    GContainer.OpenFileRequest.Type.Token,
                    module
                  );
                  gApi.setToken({ token: module });
                  let n = new GDocument();
                  n.setTitle(e.getContent()),
                    gDesigner.addDocument(n),
                    GOpenFileRequestHandler.handleOpenFileRequest(n, e);
                } else
                  GSystemDialog.alert(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GOpenSharedFileAction", "invalid-link")
                    )
                  );
              } catch (e) {
                console.error(e),
                  GSystemDialog.alert(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GOpenSharedFileAction", "invalid-link")
                    )
                  );
              }
          },
          null,
          GCore.GLocale.get(
            new GCore.GLocaleKey("GOpenSharedFileAction", "text.cancel")
          ),
          GCore.GLocale.get(new GCore.GLocaleKey("GOpenSharedFileAction", "text.open")),
          "open-shared-file-dialog"
        );
      }),
      (d.prototype.toString = function () {
        return "[Object GOpenSharedFileAction]";
      }),
      (exports.exports = d);
  }