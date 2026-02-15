/**
 * Webpack Module #1510
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */;
    var GCore = require(1) /* module */,
      CollaborationMergeUtils = require(40) /* CollaborationMergeUtils */,
      barrel_panels = require(257) /* barrel_panels */;
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
                        GCore.GLocale.get(
                          new GCore.GLocaleKey("GCommonNames", "text.save-to-file")
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
                      .addClass(barrel_panels["gravit-icon-cloud-save-choose"])
                      .addClass("icon")
                  )
                  .append(
                    $("<span/>")
                      .addClass("label")
                      .text(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey("GCommonNames", "text.save-to-cloud")
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
        return this._dialog.gDialog("close", false), (0, CollaborationMergeUtils.sleep)(0);
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