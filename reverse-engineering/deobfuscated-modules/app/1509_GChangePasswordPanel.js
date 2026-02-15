/**
 * Webpack Module #1509
 * Type: class
 * Name: GChangePasswordPanel
 */

function (exports, module, require) {
    "use strict";
    require(20) /* polyfill_RegExp_exec */, require(3) /* polyfill_RegExp_toString */, require(34) /* polyfill_String_replace */, require(91) /* polyfill_String_trim */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var AppSettings = require(10) /* AppSettings */,
      GCore = require(1) /* GCore */;
    function a(e, t, n) {
      let a =
        arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : {};
      (this._user = e),
        (this._messageHandler = t),
        (this._parent = n),
        (this._options = a);
      const r = function (e, t, n) {
          let AppSettings =
            arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : "";
          return $("<div></div>")
            .addClass("input-field")
            .attr("data-property", t)
            .append(
              $("<span></span>")
                .append($("<label></label>").text(e))
                .append($("<label></label>").text(AppSettings))
            )
            .append(n);
        },
        s = (e, t, n, AppSettings, GCore, a) => {
          let s = r(
            e,
            n,
            $("<input>")
              .attr("type", AppSettings || "text")
              .attr("placeholder", GCore || "")
              .val(t || ""),
            a
          );
          return (
            "password" === AppSettings &&
              s.append(
                $("<span></span>")
                  .addClass("gravit-icon-hide btn-display")
                  .on("click", (e) => {
                    let t = $(e.target)
                        .closest(".btn-display")
                        .toggleClass("gravit-icon-hide gravit-icon-display"),
                      n = !t.data("visible");
                    t.data("visible", n),
                      s.find("input").attr("type", n ? "text" : "password");
                  })
              ),
            s
          );
        };
      this._container = $("<div></div>").addClass("g-change-password-panel");
      const {
        changePasswordOptions: {
          autoClose: l,
          title: c = GCore.GLocale.get(
            new GCore.GLocaleKey("GChangePasswordPanel", "text.change-password")
          ),
          info: d = GCore.GLocale.get(
            new GCore.GLocaleKey("GChangePasswordPanel", "text.reset-password-info")
          ),
        } = {},
      } = a;
      let u = $("<div></div>")
        .addClass("section")
        .append(
          $("<div></div>")
            .addClass("header")
            .append($("<span></span>").text(c.replace("%name", e.email)))
        )
        .appendTo(this._container);
      $("<footer></footer>")
        .append(
          $("<button></button>")
            .addClass("highlight")
            .text(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GChangePasswordPanel", "text.assign")
              )
            )
            .on("click", () => {
              const { token: e } = this._options,
                t = this._container
                  .find('[data-property="new_password"] > input')
                  .val()
                  .trim(),
                n = this._container
                  .find('[data-property="confirm_password"] > input')
                  .val()
                  .trim();
              gDesigner.stats(
                "profile-dialog_change-password-panel_change-password"
              ),
                AppSettings.gApi
                  .updatePassword({ password: t, confirm_password: n }, e)
                  .then(() =>
                    this._messageHandler(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GChangePasswordPanel",
                          "text.reset-password-done"
                        )
                      ),
                      "success"
                    )
                  )
                  .then(() => this._toggleLoading(false))
                  .then(() => {
                    l && this._parent.close();
                  })
                  .catch((e) => this._messageHandler(AppSettings.gApi.formatError(e)));
            })
        )
        .appendTo(this._container),
        s(
          GCore.GLocale.get(
            new GCore.GLocaleKey("GChangePasswordPanel", "text.new-password")
          ),
          "",
          "new_password",
          "password",
          GCore.GLocale.get(
            new GCore.GLocaleKey(
              "GChangePasswordPanel",
              "text.placeholder-new-password"
            )
          ),
          GCore.GLocale.get(
            new GCore.GLocaleKey("GChangePasswordPanel", "text.new-password-tip")
          )
            .replace("%min-number", AppSettings.PasswordRules.PasswordLength.Minimum)
            .replace("%max-number", AppSettings.PasswordRules.PasswordLength.Maximum)
        ).appendTo(u),
        s(
          GCore.GLocale.get(
            new GCore.GLocaleKey("GChangePasswordPanel", "text.confirm-password")
          ),
          "",
          "confirm_password",
          "password",
          GCore.GLocale.get(
            new GCore.GLocaleKey(
              "GChangePasswordPanel",
              "text.placeholder-confirm-password"
            )
          )
        ).appendTo(u),
        this._messageHandler(d, "important");
    }
    GCore.GObject.inherit(a, GCore.GObject),
      (a.prototype.getHTMLElement = function () {
        return this._container;
      }),
      (a.prototype._toggleLoading = function (e) {
        e
          ? this._container.addClass("g-loading")
          : this._container.removeClass("g-loading");
      }),
      (a.prototype.toString = function () {
        return "[Object GChangePasswordPanel]";
      }),
      (exports.exports = a);
  }