/**
 * Webpack Module #1474
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    n(58) /* module_58 */, n(8) /* module_8 */, n(20) /* module_20 */, n(71) /* module_71 */, n(34) /* module_34 */;
    var o = n(1) /* module_1 */,
      i = n(40) /* module_40 */;
    function a(e, t) {
      let n =
        arguments.length > 2 && undefined !== arguments[2]
          ? arguments[2]
          : "file.save";
      (this._document = e), (this._user = t), (this._action = n), this._init();
    }
    o.GObject.inherit(a, o.GObject),
      (a.prototype._init = function () {
        (this._dialog = $("<div></div>").gDialog({
          releaseOnClose: true,
          className: "g-confirmation-dialog",
        })),
          $("<div></div>")
            .addClass("header")
            .append($("<span></span>").addClass("gravit-icon-thanks"))
            .appendTo(this._dialog);
        const e = gDesigner.getAction(this._action);
        let t,
          n = "save";
        e.getId().includes("save")
          ? (t = o.GLocale.get(
              new o.GLocaleKey("GConfirmationDialog", "text.confirm-save")
            ))
          : e.getId().includes("export")
          ? ((t = o.GLocale.get(
              new o.GLocaleKey("GConfirmationDialog", "text.confirm-export")
            )),
            (n = "export"))
          : (t =
              e.getTitle() instanceof o.GLocaleKey
                ? o.GLocale.get(e.getTitle())
                : e.getTitle()),
          $("<div></div>")
            .addClass("content")
            .append(
              $("<span></span>").text(
                o.GLocale.get(
                  new o.GLocaleKey(
                    "GConfirmationDialog",
                    "text.confirm-info-" + n
                  )
                ).replace("%email", this._user.email)
              )
            )
            .appendTo(this._dialog),
          $("<hr/>").appendTo(this._dialog),
          $("<div></div>")
            .addClass("footer")
            .append(
              $("<button></button>")
                .addClass("highlight")
                .text(t)
                .on("click", () => {
                  let e = [];
                  "file.save" === this._action && (e = [undefined, true]),
                    gDesigner.executeAction(
                      this._action,
                      e,
                      "confirmationdialog"
                    ),
                    this.close();
                })
            )
            .appendTo(this._dialog);
      }),
      (a.prototype.open = async function () {
        this._dialog.gDialog("open", true),
          await (0, i.sleep)(100),
          this._dialog.closest(".g-dialog").addClass("slide-up");
      }),
      (a.prototype.close = function () {
        this._dialog.gDialog("close"),
          this._dialog.closest(".g-dialog").removeClass("slide-up");
      }),
      (e.exports = a);
  }