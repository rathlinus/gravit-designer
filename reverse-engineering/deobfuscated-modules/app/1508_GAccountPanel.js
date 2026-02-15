/**
 * Webpack Module #1508
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */, require(196) /* polyfill_Promise_finally */, require(20) /* polyfill_RegExp_exec */, require(3) /* polyfill_RegExp_toString */, require(34) /* polyfill_String_replace */, require(91) /* polyfill_String_trim */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(38) /* stub_requires_680 */;
    var AppSettings = require(10) /* AppSettings */,
      GCore = require(1) /* GCore */;
    const { bypassEmailVerification: a } = AppSettings.defaultUserSettings,
      GSystemDialog = require(44) /* GSystemDialog */,
      s = function (e) {
        return e.json().then(function (t) {
          return Promise[e.status >= 400 ? "reject" : "resolve"](t);
        });
      };
    function l(e, t, n) {
      let AppSettings =
        arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : {};
      (this._user = e),
        (this._messageHandler = t),
        (this._parent = n),
        (this._options = AppSettings),
        this._init();
    }
    GCore.GObject.inherit(l, GCore.GObject),
      (l.prototype._openAccountDeletionConfirmationDialog = function () {
        let exports = "<span>"
          .concat(
            GCore.GLocale.get(
              new GCore.GLocaleKey("GAccountPanel", "text.delete-account-title")
            ),
            '</span>\n    <mark style="min-width: 100px;\n        background: #F23C3C;\n        border-radius: 3px;\n        padding: 3px 30px;\n        color: white;\n        margin-top: 2px;\n        margin-bottom: 2px;\n        display: block;\n        text-align: center;">\n        '
          )
          .concat(
            GCore.GLocale.get(
              new GCore.GLocaleKey("GAccountPanel", "text.delete-account-sub-title")
            ),
            '\n    </mark>\n    <ul style="list-style-type: disc; transform: translateX(30px); margin-bottom: 10px;">\n        <li>'
          )
          .concat(
            GCore.GLocale.get(
              new GCore.GLocaleKey("GAccountPanel", "text.delete-account-list-1")
            ),
            "</li>\n        <li>"
          )
          .concat(
            GCore.GLocale.get(
              new GCore.GLocaleKey("GAccountPanel", "text.delete-account-list-2")
            ),
            "</li>\n        <li>"
          )
          .concat(
            GCore.GLocale.get(
              new GCore.GLocaleKey("GAccountPanel", "text.delete-account-list-3")
            ),
            "</li>\n    </ul>\n    <span>"
          )
          .concat(
            GCore.GLocale.get(
              new GCore.GLocaleKey(
                "GAccountPanel",
                "text.delete-account-action-cant-undone"
              )
            ),
            "</span>"
          );
        GSystemDialog.custom({
          title: exports,
          styles: { buttons: { "justify-content": "flex-end" } },
          buttons: [
            {
              label: GCore.GLocale.get(new GCore.GLocaleKey("GLocale", "cancel")),
              closeOnClick: true,
            },
            {
              label: GCore.GLocale.get(new GCore.GLocaleKey("GLocale", "ok")),
              highlighted: true,
              onclick: (e) => {
                e.gDialog("close"), this._deleteAccount();
              },
            },
          ],
        });
      }),
      (l.prototype._deleteAccount = function () {
        return (
          this._toggleLoading(true),
          fetch(AppSettings.gApi.url + "/user/" + this._user.id, {
            method: "DELETE",
            credentials: "include",
            headers: { "Content-Type": "application/json", Accept: "json" },
          })
            .then(s)
            .then(() => {
              this._parent.close(),
                gDesigner.stats("profile-dialog_account-panel_delete"),
                gDesigner.signout(true);
            })
            .catch((e) => {
              this._messageHandler(
                (e && e.message) || (e && e.errors.toString()) || ""
              );
            })
            .finally(() => {
              this._toggleLoading(false);
            })
        );
      }),
      (l.prototype._getFooter = function () {
        const exports = $("<footer></footer>").append(
          $("<div></div>")
            .addClass("buttons")
            .append(
              $("<button></button>")
                .addClass("highlight")
                .attr("type", "submit")
                .text(
                  GCore.GLocale.get(new GCore.GLocaleKey("GAccountPanel", "text.save"))
                )
            )
            .append(
              $("<button></button>")
                .attr("type", "button")
                .attr("data-property", "delete-account")
                .text(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GAccountPanel", "text.delete")
                  )
                )
                .on(
                  "click",
                  (e) => (
                    e.preventDefault(),
                    this._openAccountDeletionConfirmationDialog(),
                    false
                  )
                )
            )
        );
        return (
          AppSettings.gApi.hasPurchases({ issued: true }).then((t) => {
            t &&
              $("<div/>")
                .addClass("info")
                .append(
                  $(
                    "<span>"
                      .concat(
                        GCore.GLocale.get(
                          new GCore.GLocaleKey(
                            "GAccountPanel",
                            "text.contact-partner-billing-alternative"
                          )
                        ),
                        "</span>"
                      )
                      .replace(
                        "%partner%",
                        $("<a/>")
                          .addClass("cb-link")
                          .text(
                            GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                "GAccountPanel",
                                "text.contact-partner-cleverbridge"
                              )
                            )
                          )
                          .prop("outerHTML")
                      )
                  )
                )
                .appendTo(exports),
              this._container.find(".cb-link").on("click", (e) => {
                gDesigner.stats(
                  "profile-dialog_account-panel_cleverbridge-link"
                ),
                  gContainer.openExternalLink(
                    e,
                    AppSettings.LINKS.CLEVERBRIDGE_SUPPORT_URL
                  );
              });
          }),
          exports
        );
      }),
      (l.prototype._init = function () {
        this._container = $("<div></div>").addClass("g-account-panel");
        const exports = $("<form></form>")
            .appendTo(this._container)
            .on(
              "submit",
              (e) => (
                e.preventDefault(),
                gDesigner.stats("profile-dialog_account-panel_save"),
                this._updateUser(),
                false
              )
            ),
          module = $("<div></div>")
            .addClass("section")
            .append(
              $("<div></div>")
                .addClass("header")
                .append(
                  $("<span></span>").text(
                    GCore.GLocale.get(
                      new GCore.GLocaleKey("GAccountPanel", "text.contact")
                    )
                  )
                )
            )
            .appendTo(exports),
          require = this._getFooter();
        require && require.appendTo(exports);
        const a = (e, t, n, AppSettings, GCore) => {
            const a = $("<input>")
                .attr("type", AppSettings || "text")
                .attr("placeholder", GCore || "")
                .attr("value", t || ""),
              s = GSystemDialog(e, n, a);
            return (
              "password" === AppSettings &&
                s.append(
                  $("<span></span>")
                    .addClass("gravit-icon-hide btn-display")
                    .on("click", (e) => {
                      const t = $(e.target)
                          .closest(".btn-display")
                          .toggleClass("gravit-icon-hide gravit-icon-display"),
                        n = !t.data("visible");
                      t.data("visible", n),
                        s.find("input").attr("type", n ? "text" : "password");
                    })
                ),
              s
            );
          },
          GSystemDialog = (e, t, n) =>
            $("<div></div>")
              .addClass("input-field")
              .attr("data-property", t)
              .append($("<label></label>").text(e))
              .append(n);
        let s = this._user.getFirstName(),
          l = this._user.getLastName();
        if (!l) {
          let { first: exports, last: module } = ((e) => {
            let module = (e || "").split(" "),
              require = module.slice(0, module.length - 1).join(" "),
              AppSettings = module.slice(-1).join("");
            return (
              require.trim().length || ((require = AppSettings), (AppSettings = "")), { first: require, last: AppSettings }
            );
          })(s);
          (s = exports), (l = module || "");
        }
        let c = $("<div></div>").addClass("group-section").appendTo(module);
        a(
          GCore.GLocale.get(new GCore.GLocaleKey("GAccountPanel", "text.first-name")),
          s,
          "name"
        )
          .appendTo(c)
          .find("input")
          .attr("required", true),
          a(
            GCore.GLocale.get(new GCore.GLocaleKey("GAccountPanel", "text.last-name")),
            l,
            "last_name"
          )
            .appendTo(c)
            .find("input")
            .attr("required", true),
          a(
            GCore.GLocale.get(new GCore.GLocaleKey("GAccountPanel", "text.email")),
            this._user.getEmail(),
            "email"
          ).appendTo(module),
          a(
            GCore.GLocale.get(
              new GCore.GLocaleKey("GAccountPanel", "text.old-password")
            ),
            "",
            "old_password",
            "password"
          ).appendTo(module),
          a(
            GCore.GLocale.get(
              new GCore.GLocaleKey("GAccountPanel", "text.new-password")
            ),
            "",
            "new_password",
            "password",
            GCore.GLocale.get(
              new GCore.GLocaleKey("GPurchasePanel", "text.placeholder-password")
            )
              .replace("%min-number", AppSettings.PasswordRules.PasswordLength.Minimum)
              .replace("%max-number", AppSettings.PasswordRules.PasswordLength.Maximum)
          ).appendTo(module);
      }),
      (l.prototype._updateUser = async function () {
        this._toggleLoading(true);
        const exports = (e) => {
          let module = GCore.GLocale.get(
            new GCore.GLocaleKey("GAccountPanel", "text.error")
          );
          e && e.message
            ? (module = e.message)
            : e && e.errors && (module = e.errors.map((e) => e[1]).join("<br>")),
            this._messageHandler(module),
            this._toggleLoading(false);
        };
        let module = { webUrl: gDesigner.getWebURL() },
          require = this;
        this._container.find(".input-field > input").each(function () {
          let exports = $(this),
            AppSettings = exports.closest(".input-field").attr("data-property");
          (("login" !== AppSettings && "email" !== AppSettings) || require._user[AppSettings] !== exports.val().trim()) &&
            (module[AppSettings] = exports.val());
        }),
          this._container.find(".input-field > select").each(function () {
            let exports = $(this),
              require = exports.closest(".input-field").attr("data-property"),
              AppSettings = exports.find("option:selected").attr("value");
            module[require] = AppSettings;
          }),
          this._messageHandler(undefined);
        try {
          await gDesigner
            .getCloudCommunicationManager()
            .updateUser(module)
            .then(() =>
              this._messageHandler(
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GAccountPanel", "text.success")
                ),
                "success"
              )
            )
            .then(() => {
              module.email &&
                this._user.getEmail() !== module.email &&
                !a &&
                GSystemDialog.alert(
                  GCore.GLocale.get(
                    new GCore.GLocaleKey("GAccountPanel", "text.user-email-message")
                  ).replace("%email", module.email)
                );
            })
            .then(async () => (this._user = await gDesigner.getUser()))
            .catch(exports);
        } finally {
          this._toggleLoading(false);
        }
      }),
      (l.prototype.getHTMLElement = function () {
        return this._container;
      }),
      (l.prototype._toggleLoading = function (e) {
        e
          ? this._container.addClass("g-loading")
          : this._container.removeClass("g-loading");
      }),
      (exports.exports = l);
  }