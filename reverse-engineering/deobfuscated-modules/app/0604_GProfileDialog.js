/**
 * Webpack Module #604
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(58) /* polyfill_Array_includes */, require(8) /* polyfill_bundle_ES6 */, require(71) /* polyfill_String_includes */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */, require(38) /* stub_requires_680 */;
    var GCore = require(1) /* GCore */;
    const GPurchasePanel = require(1507) /* GPurchasePanel */,
      a = require(1508) /* GAccountPanel */,
      GChangePasswordPanel = require(1509) /* GChangePasswordPanel */,
      s = (require(1158) /* Action_help_purchase */, require(805) /* GEvent_user_805 */),
      { gApi: l } = (require(177) /* GUserModel */, require(10) /* AppSettings */);
    function c(e, t) {
      let require =
        arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {};
      (this._user = e), (this._options = require), this._init(t, require);
    }
    GCore.GObject.inherit(c, GCore.GObject),
      (c.prototype._options = null),
      (c.prototype._avatar = null),
      (c.Tabs = {
        Account: "account",
        Purchase: "purchase",
        ChangePassword: "change-password",
      }),
      (c.prototype._init = async function (e) {
        var t = this;
        let require =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        const { closeable: s = true, tabs: d } = require;
        gDesigner.getLicense();
        (this._dialog = $("<div></div>").gDialog({
          closeCallback: () => this._close(),
          releaseOnClose: true,
          className: "g-profile-dialog",
        })),
          s &&
            $("<div></div>")
              .addClass("g-btn-close")
              .append($("<span></span>").addClass("gravit-icon-close"))
              .on("click", this.close.bind(this))
              .appendTo(this._dialog);
        let u = $("<div></div>")
            .addClass("left-sidebar")
            .appendTo(this._dialog),
          p = $("<div></div>").addClass("right-sidebar").appendTo(this._dialog);
        (this._avatar = $("<div></div>")
          .addClass("avatar")
          .append(
            $("<span></span>")
              .addClass("btn gravit-icon-avatar")
              .attr(
                "data-title",
                GCore.GLocale.get(
                  new GCore.GLocaleKey("GProfileDialog", "text.avatar-tooltip")
                )
              )
              .on("click", this._updateAvatar.bind(this))
          )),
          $("<div></div>").addClass("picture").append(this._avatar).appendTo(u);
        let g = $("<div></div>")
          .addClass("header")
          .append(
            $("<span></span>").text(
              GCore.GLocale.get(new GCore.GLocaleKey("GProfileDialog", "text.details"))
            )
          )
          .appendTo(p);
        (this._messageHandler = function (e) {
          let require =
            arguments.length > 1 && undefined !== arguments[1]
              ? arguments[1]
              : "error";
          t._dialog.find(".message").remove(),
            e &&
              $("<div></div>")
                .addClass("message " + require)
                .append($("<span></span>").html(e))
                .on("click", (e) => $(e.target).closest(".message").remove())
                .insertAfter(g);
        }),
          (this._tabs = $("<ul></ul>").addClass("tabs").appendTo(u)),
          (this._panels = $("<div></div>").addClass("tab-panels").appendTo(p));
        const h = (e, n, GCore, GPurchasePanel) => {
            let a = $("<div></div>")
              .addClass("tab-panel")
              .append(GCore)
              .appendTo(this._panels);
            $("<li></li>")
              .attr("id", GPurchasePanel)
              .addClass("tab")
              .append($("<span></span>").addClass(n))
              .append($("<span></span>").text(e))
              .on("click", function (n) {
                let GCore =
                    arguments.length > 1 &&
                    undefined !== arguments[1] &&
                    arguments[1],
                  GPurchasePanel = $(n.target).closest(".tab");
                GCore || t._messageHandler(undefined),
                  t._tabs.find(".tab.g-selected").removeClass("g-selected"),
                  t._panels
                    .find(".tab-panel.g-selected")
                    .removeClass("g-selected"),
                  a.addClass("g-selected"),
                  GPurchasePanel.addClass("g-selected"),
                  g.find("span").text(e),
                  gDesigner.stats("profile-dialog_tab_".concat(GPurchasePanel.attr("id")));
              })
              .appendTo(this._tabs);
          },
          f = function (e) {
            let t =
              !(arguments.length > 1 && undefined !== arguments[1]) ||
              arguments[1];
            return d && d.length ? d.includes(e) : t;
          };
        if (
          (f(c.Tabs.Account) &&
            h(
              GCore.GLocale.get(new GCore.GLocaleKey("GProfileDialog", "text.details")),
              "gravit-icon-account",
              new a(
                this._user,
                this._messageHandler.bind(this),
                this,
                require
              ).getHTMLElement(),
              c.Tabs.Account
            ),
          f(c.Tabs.ChangePassword, false) &&
            h(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GProfileDialog", "text.change-password")
              ),
              "gravit-icon-change-password",
              new GChangePasswordPanel(
                this._user,
                this._messageHandler.bind(this),
                this,
                require
              ).getHTMLElement(),
              c.Tabs.ChangePassword
            ),
          f(c.Tabs.Purchase))
        ) {
          (await l.hasPurchases({ issued: "true" }).catch(() => false)) &&
            h(
              GCore.GLocale.get(
                new GCore.GLocaleKey("GProfileDialog", "text.purchases")
              ),
              "gravit-icon-purchase",
              new GPurchasePanel(
                this._user,
                this._messageHandler.bind(this),
                require
              ).getHTMLElement(),
              c.Tabs.Purchase
            );
        }
        this._tabs.find(".tab:first-child").trigger("click", [true]),
          e &&
            (gDesigner.stats("profile-dialog_tab_".concat(e)),
            this._tabs.find("#".concat(e)).trigger("click", [true])),
          this._updateUI(this._user);
      }),
      (c.prototype._updateAvatar = function () {
        gDesigner.stats("profile-dialog_click_update-avatar");
        let exports = this._dialog.find(".avatar");
        function module(t) {
          exports.removeClass("g-loading");
          let require = GCore.GLocale.get(
            new GCore.GLocaleKey("GAccountPanel", "text.error")
          );
          t && t.message
            ? (require = t.message)
            : t && t.errors && (require = t.errors.map((e) => e[1]).join("<br>")),
            this._messageHandler(require);
        }
        gDesigner.getDefaultStorage().openPrompt(
          [
            { ext: "png", mime: "image/png" },
            { ext: "jpg", mime: "image/jpeg" },
            { ext: "jpeg", mime: "image/jpeg" },
          ],
          (n) => {
            exports.addClass("g-loading"),
              n.read((GPurchasePanel) => {
                if (GPurchasePanel.byteLength > 102400)
                  return void module.call(this, {
                    message: GCore.GLocale.get(
                      new GCore.GLocaleKey(
                        "GProfileDialog",
                        "text.avatar-size-too-big"
                      )
                    ),
                  });
                let a = n.getExtension().toLowerCase();
                "jpg" === a && (a = "jpeg");
                let GChangePasswordPanel = new File(
                  [new Blob([GPurchasePanel], { type: "image/" + a })],
                  n.getFullName()
                );
                this._messageHandler(undefined),
                  gDesigner
                    .getCloudCommunicationManager()
                    .updateAvatar(GChangePasswordPanel)
                    .then((t) => {
                      exports.removeClass("g-loading"),
                        exports
                          .find(".picture")
                          .css(
                            "background-image",
                            "url(".concat(t.avatar, ")")
                          ),
                        exports.find(".picture").removeClass("g-profile-top-avatar"),
                        exports
                          .find(".picture")
                          .css({ "background-color": "transparent" }),
                        exports.find(".picture").text(""),
                        gDesigner.getUser();
                    })
                    .catch(module);
              });
          },
          false
        );
      }),
      (c.prototype._userPropertiesChangedEvent = function (e) {
        this._updateUI(e.user);
      }),
      (c.prototype._updateUI = function (e) {
        this._avatar &&
          (this._avatar.find(".picture").remove(),
          e.hasOwnPictureAvatar()
            ? this._avatar.append(
                $("<div/>")
                  .addClass("picture")
                  .css("background-image", "url(".concat(e.avatar, ")"))
              )
            : this._avatar.append(
                $("<div/>")
                  .addClass("picture")
                  .addClass("g-profile-top-avatar")
                  .css({ "background-color": e.getUserColor() })
                  .text(e.getUserNameInitials())
              ));
      }),
      (c.prototype.open = function () {
        gDesigner.addEventListener(s, this._userPropertiesChangedEvent, this),
          this._dialog.gDialog("open", this._options.closeable);
      }),
      (c.prototype.close = function () {
        this._dialog.gDialog("close");
      }),
      (c.prototype._close = function () {
        gDesigner.removeEventListener(
          s,
          this._userPropertiesChangedEvent,
          this
        );
      }),
      (exports.exports = c);
  }