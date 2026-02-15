/**
 * Webpack Module #1254
 * Type: class
 * Name: GOpenSharedFileAction
 */

function (e, t, n) {
    "use strict";
    n(19) /* module_19 */, n(3) /* module_3 */, n(26) /* module_26 */, n(125) /* module_125 */, n(126) /* module_126 */, n(114) /* module_114 */;
    var o = n(1) /* module */;
    const i = n(18) /* module_18 */,
      a = n(31) /* GAction */,
      r = n(44) /* GSystemDialog */,
      s = n(163) /* module_163 */,
      l = n(85) /* GContainer */,
      c = n(1255) /* module_1255 */;
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
        return !0;
      }),
      (d.prototype.execute = function () {
        r.prompt(
          o.GLocale.get(
            new o.GLocaleKey("GOpenSharedFileAction", "text.prompt-text")
          ),
          (e) => {
            if (void 0 !== e)
              try {
                var t = new URL(e).searchParams.get(
                  l.OpenFileRequest.Type.Token
                );
                if (t) {
                  let e = new l.OpenFileRequest(
                    l.OpenFileRequest.Type.Token,
                    t
                  );
                  gApi.setToken({ token: t });
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
      (e.exports = d);
  }