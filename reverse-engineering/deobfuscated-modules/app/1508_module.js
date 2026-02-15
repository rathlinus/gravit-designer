/**
 * Webpack Module #1508
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* module_8 */, require(196) /* module_196 */, require(20) /* module_20 */, require(3) /* module_3 */, require(34) /* module_34 */, require(91) /* module_91 */, require(4) /* module_4 */, require(13) /* module_13 */, require(38) /* module_38 */;
    var o = require(10) /* module_10 */,
      i = require(1) /* module */;
    const { bypassEmailVerification: a } = o.defaultUserSettings,
      r = require(44) /* GSystemDialog */,
      s = function (e) {
        return e.json().then(function (t) {
          return Promise[e.status >= 400 ? "reject" : "resolve"](t);
        });
      };
    function l(e, t, n) {
      let o =
        arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : {};
      (this._user = e),
        (this._messageHandler = t),
        (this._parent = n),
        (this._options = o),
        this._init();
    }
    i.GObject.inherit(l, i.GObject),
      (l.prototype._openAccountDeletionConfirmationDialog = function () {
        let exports = "<span>"
          .concat(
            i.GLocale.get(
              new i.GLocaleKey("GAccountPanel", "text.delete-account-title")
            ),
            '</span>\n    <mark style="min-width: 100px;\n        background: #F23C3C;\n        border-radius: 3px;\n        padding: 3px 30px;\n        color: white;\n        margin-top: 2px;\n        margin-bottom: 2px;\n        display: block;\n        text-align: center;">\n        '
          )
          .concat(
            i.GLocale.get(
              new i.GLocaleKey("GAccountPanel", "text.delete-account-sub-title")
            ),
            '\n    </mark>\n    <ul style="list-style-type: disc; transform: translateX(30px); margin-bottom: 10px;">\n        <li>'
          )
          .concat(
            i.GLocale.get(
              new i.GLocaleKey("GAccountPanel", "text.delete-account-list-1")
            ),
            "</li>\n        <li>"
          )
          .concat(
            i.GLocale.get(
              new i.GLocaleKey("GAccountPanel", "text.delete-account-list-2")
            ),
            "</li>\n        <li>"
          )
          .concat(
            i.GLocale.get(
              new i.GLocaleKey("GAccountPanel", "text.delete-account-list-3")
            ),
            "</li>\n    </ul>\n    <span>"
          )
          .concat(
            i.GLocale.get(
              new i.GLocaleKey(
                "GAccountPanel",
                "text.delete-account-action-cant-undone"
              )
            ),
            "</span>"
          );
        r.custom({
          title: exports,
          styles: { buttons: { "justify-content": "flex-end" } },
          buttons: [
            {
              label: i.GLocale.get(new i.GLocaleKey("GLocale", "cancel")),
              closeOnClick: true,
            },
            {
              label: i.GLocale.get(new i.GLocaleKey("GLocale", "ok")),
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
          fetch(o.gApi.url + "/user/" + this._user.id, {
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
                  i.GLocale.get(new i.GLocaleKey("GAccountPanel", "text.save"))
                )
            )
            .append(
              $("<button></button>")
                .attr("type", "button")
                .attr("data-property", "delete-account")
                .text(
                  i.GLocale.get(
                    new i.GLocaleKey("GAccountPanel", "text.delete")
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
          o.gApi.hasPurchases({ issued: true }).then((t) => {
            t &&
              $("<div/>")
                .addClass("info")
                .append(
                  $(
                    "<span>"
                      .concat(
                        i.GLocale.get(
                          new i.GLocaleKey(
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
                            i.GLocale.get(
                              new i.GLocaleKey(
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
                    o.LINKS.CLEVERBRIDGE_SUPPORT_URL
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
                    i.GLocale.get(
                      new i.GLocaleKey("GAccountPanel", "text.contact")
                    )
                  )
                )
            )
            .appendTo(exports),
          require = this._getFooter();
        require && require.appendTo(exports);
        const a = (e, t, n, o, i) => {
            const a = $("<input>")
                .attr("type", o || "text")
                .attr("placeholder", i || "")
                .attr("value", t || ""),
              s = r(e, n, a);
            return (
              "password" === o &&
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
          r = (e, t, n) =>
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
              o = module.slice(-1).join("");
            return (
              require.trim().length || ((require = o), (o = "")), { first: require, last: o }
            );
          })(s);
          (s = exports), (l = module || "");
        }
        let c = $("<div></div>").addClass("group-section").appendTo(module);
        a(
          i.GLocale.get(new i.GLocaleKey("GAccountPanel", "text.first-name")),
          s,
          "name"
        )
          .appendTo(c)
          .find("input")
          .attr("required", true),
          a(
            i.GLocale.get(new i.GLocaleKey("GAccountPanel", "text.last-name")),
            l,
            "last_name"
          )
            .appendTo(c)
            .find("input")
            .attr("required", true),
          a(
            i.GLocale.get(new i.GLocaleKey("GAccountPanel", "text.email")),
            this._user.getEmail(),
            "email"
          ).appendTo(module),
          a(
            i.GLocale.get(
              new i.GLocaleKey("GAccountPanel", "text.old-password")
            ),
            "",
            "old_password",
            "password"
          ).appendTo(module),
          a(
            i.GLocale.get(
              new i.GLocaleKey("GAccountPanel", "text.new-password")
            ),
            "",
            "new_password",
            "password",
            i.GLocale.get(
              new i.GLocaleKey("GPurchasePanel", "text.placeholder-password")
            )
              .replace("%min-number", o.PasswordRules.PasswordLength.Minimum)
              .replace("%max-number", o.PasswordRules.PasswordLength.Maximum)
          ).appendTo(module);
      }),
      (l.prototype._updateUser = async function () {
        this._toggleLoading(true);
        const exports = (e) => {
          let module = i.GLocale.get(
            new i.GLocaleKey("GAccountPanel", "text.error")
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
            o = exports.closest(".input-field").attr("data-property");
          (("login" !== o && "email" !== o) || require._user[o] !== exports.val().trim()) &&
            (module[o] = exports.val());
        }),
          this._container.find(".input-field > select").each(function () {
            let exports = $(this),
              require = exports.closest(".input-field").attr("data-property"),
              o = exports.find("option:selected").attr("value");
            module[require] = o;
          }),
          this._messageHandler(undefined);
        try {
          await gDesigner
            .getCloudCommunicationManager()
            .updateUser(module)
            .then(() =>
              this._messageHandler(
                i.GLocale.get(
                  new i.GLocaleKey("GAccountPanel", "text.success")
                ),
                "success"
              )
            )
            .then(() => {
              module.email &&
                this._user.getEmail() !== module.email &&
                !a &&
                r.alert(
                  i.GLocale.get(
                    new i.GLocaleKey("GAccountPanel", "text.user-email-message")
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