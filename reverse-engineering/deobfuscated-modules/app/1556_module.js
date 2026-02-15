/**
 * Webpack Module #1556
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(20) /* polyfill_RegExp_exec */, require(34) /* polyfill_String_replace */, require(91) /* polyfill_String_trim */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var GCore = require(1) /* module */,
      GSystemDialog = _interopRequireDefault(require(44) /* GSystemDialog */);
    function r(e, t, n, _interopRequireDefault) {
      let r =
        arguments.length > 4 && undefined !== arguments[4] ? arguments[4] : {};
      var s = this;
      (this._dialog = $("<div></div>")),
        $("<div/>")
          .css("display", "grid")
          .append(
            $("<span/>")
              .css("display", "block")
              .html(
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GNewFilePrompt", "text.name-document")
                )
              )
          )
          .append(
            $("<input/>")
              .attr("type", "text")
              .css("margin-top", "10px")
              .css("width", "100%")
              .val(_interopRequireDefault || "")
              .addClass("name")
          )
          .appendTo(this._dialog);
      var l = function (e) {
          13 === e.which &&
            (gDesigner.stats("newfile_enter_save"), c(), e.stopPropagation());
        },
        c = function () {
          if ($(s._dialog).find(".name").val().trim()) {
            var t = $(s._dialog).find(".name").val();
            r && r.fn && !r.fn(t)
              ? GSystemDialog.default.alert(
                  r.errorMessage.replace("%fileName%", '"'.concat(t, '"'))
                )
              : (e(t), s.close());
          }
        };
      $(s._dialog).find(".name").keypress(l),
        this._dialog.gDialog({
          className: "g-new-file-prompt-dialog",
          releaseOnClose: false,
          closeCallback: t,
          buttons: [
            $(
              "<button"
                .concat(n ? ' class="'.concat(n, '"') : "", ">")
                .concat(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GNewFilePrompt", "action.create")
                  ),
                  "</button>"
                )
            ).on("click", function () {
              gDesigner.stats("newfile_click_save"), c();
            }),
            $(
              "<button>" +
                GCore.GLocale.get(new GCore.GLocaleKey("GLocale", "cancel")) +
                "</button>"
            ).on("click", function () {
              gDesigner.stats("newfile_click_close"), s.close();
            }),
          ],
        });
    }
    GCore.GObject.inherit(r, GCore.GObject),
      (r.prototype.open = function () {
        this._dialog.gDialog("open", true), $(this._dialog).find(".name").focus();
      }),
      (r.prototype.close = function () {
        this._dialog.gDialog("close");
      }),
      (exports.exports = r);
  }