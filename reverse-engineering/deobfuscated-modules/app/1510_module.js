/**
 * Webpack Module #1510
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* module_8 */;
    var o = require(1) /* module */,
      i = require(40) /* module_40 */,
      a = require(257) /* module_257 */;
    class r {
      constructor(e) {
        let { closeCallback: module } =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        var n = this;
        (this._dialog = $("<div/>")
          .addClass("g-save-chooser")
          .append(
            $("<div/>")
              .addClass("save-to-file")
              .append(
                $("<div/>")
                  .addClass("content")
                  .append(
                    $("<span/>")
                      .addClass("gravit-icon-local-file")
                      .addClass("icon")
                  )
                  .append(
                    $("<span/>")
                      .addClass("label")
                      .text(
                        o.GLocale.get(
                          new o.GLocaleKey("GCommonNames", "text.save-to-file")
                        )
                      )
                  )
              )
              .on("click", async function () {
                gDesigner.stats("savedialog_save_file"),
                  await n.close(),
                  e(r.file());
              })
          )
          .append($("<hr/>"))
          .append(
            $("<div/>")
              .addClass("save-to-file")
              .append(
                $("<div/>")
                  .addClass("content")
                  .append(
                    $("<span/>")
                      .addClass(a["gravit-icon-cloud-save-choose"])
                      .addClass("icon")
                  )
                  .append(
                    $("<span/>")
                      .addClass("label")
                      .text(
                        o.GLocale.get(
                          new o.GLocaleKey("GCommonNames", "text.save-to-cloud")
                        )
                      )
                  )
              )
              .on("click", async function () {
                gDesigner.stats("savedialog_save_cloud"),
                  await n.close(),
                  e(r.cloud());
              })
          )),
          this._dialog.gDialog({
            releaseOnClose: true,
            className: "g-save-chooser-dialog",
            closeTimeout: 0,
            closeCallback: module,
          });
      }
      open() {
        this._dialog.gDialog("open", true);
      }
      close() {
        return this._dialog.gDialog("close", false), (0, i.sleep)(0);
      }
      static file() {
        return "file";
      }
      static cloud() {
        return "cloud";
      }
    }
    exports.exports = r;
  }