/**
 * Webpack Module #1474
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(58) /* polyfill_Array_includes */, require(8) /* polyfill_bundle_ES6 */, require(20) /* polyfill_RegExp_exec */, require(71) /* polyfill_String_includes */, require(34) /* polyfill_String_replace */;
    var o = require(1) /* module */,
      i = require(40) /* CollaborationMergeUtils */;
    function a(e, t) {
      let require =
        arguments.length > 2 && undefined !== arguments[2]
          ? arguments[2]
          : "file.save";
      (this._document = e), (this._user = t), (this._action = require), this._init();
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
        const exports = gDesigner.getAction(this._action);
        let module,
          require = "save";
        exports.getId().includes("save")
          ? (module = o.GLocale.get(
              new o.GLocaleKey("GConfirmationDialog", "text.confirm-save")
            ))
          : exports.getId().includes("export")
          ? ((module = o.GLocale.get(
              new o.GLocaleKey("GConfirmationDialog", "text.confirm-export")
            )),
            (require = "export"))
          : (module =
              exports.getTitle() instanceof o.GLocaleKey
                ? o.GLocale.get(exports.getTitle())
                : exports.getTitle()),
          $("<div></div>")
            .addClass("content")
            .append(
              $("<span></span>").text(
                o.GLocale.get(
                  new o.GLocaleKey(
                    "GConfirmationDialog",
                    "text.confirm-info-" + require
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
                .text(module)
                .on("click", () => {
                  let exports = [];
                  "file.save" === this._action && (exports = [undefined, true]),
                    gDesigner.executeAction(
                      this._action,
                      exports,
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
      (exports.exports = a);
  }