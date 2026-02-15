/**
 * Webpack Module #1254
 * Type: class
 * Name: GOpenSharedFileAction
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(3) /* polyfill_RegExp_toString */, require(26) /* polyfill_DOMCollection_iterator */, require(125) /* stub_requires_673 */, require(126) /* polyfill_URL_toJSON */, require(114) /* stub_requires_424 */;
    var o = require(1) /* module */;
    const i = require(18) /* MenuItemBuilder */,
      a = require(31) /* GAction */,
      r = require(44) /* GSystemDialog */,
      s = require(163) /* module_163 */,
      l = require(85) /* GContainer */,
      c = require(1255) /* module_1255 */;
    function d() {}
    o.GObject.inherit(d, a),
      (d.ID = "file.share.opensharedfile"),
      (d.TITLE = new o.GLocaleKey("GOpenSharedFileAction", "title")),
      (d.prototype.getId = function () {
        return d.ID;
      }),
      (d.prototype.getTitle = function () {
        return d.TITLE;
      }),
      (d.prototype.getCategory = function () {
        return i.CATEGORY_FILE_SHARE;
      }),
      (d.prototype.getGroup = function () {
        return "file-share/opensharedfile";
      }),
      (d.prototype.isVisible = function () {
        return true;
      }),
      (d.prototype.execute = function () {
        r.prompt(
          o.GLocale.get(
            new o.GLocaleKey("GOpenSharedFileAction", "text.prompt-text")
          ),
          (e) => {
            if (undefined !== e)
              try {
                var module = new URL(e).searchParams.get(
                  l.OpenFileRequest.Type.Token
                );
                if (module) {
                  let e = new l.OpenFileRequest(
                    l.OpenFileRequest.Type.Token,
                    module
                  );
                  gApi.setToken({ token: module });
                  let n = new s();
                  n.setTitle(e.getContent()),
                    gDesigner.addDocument(n),
                    c.handleOpenFileRequest(n, e);
                } else
                  r.alert(
                    o.GLocale.get(
                      new o.GLocaleKey("GOpenSharedFileAction", "invalid-link")
                    )
                  );
              } catch (e) {
                console.error(e),
                  r.alert(
                    o.GLocale.get(
                      new o.GLocaleKey("GOpenSharedFileAction", "invalid-link")
                    )
                  );
              }
          },
          null,
          o.GLocale.get(
            new o.GLocaleKey("GOpenSharedFileAction", "text.cancel")
          ),
          o.GLocale.get(new o.GLocaleKey("GOpenSharedFileAction", "text.open")),
          "open-shared-file-dialog"
        );
      }),
      (d.prototype.toString = function () {
        return "[Object GOpenSharedFileAction]";
      }),
      (exports.exports = d);
  }