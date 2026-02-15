/**
 * Webpack Module #1732
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */;
    var GCore = require(1) /* module */,
      AppSettings = require(10) /* AppSettings */,
      a = require(357) /* module_357 */,
      r = require(604) /* module_604 */,
      s = (require(1158) /* Action_help_purchase */, null),
      l = null;
    var c = {
      init: function () {
        return this.each(function () {
          l = $("<div/>")
            .addClass("overlay-fade")
            .on("click", function () {
              this.remove(), s.gOverlay("close");
            })
            .appendTo($("body"));
          var e = a.USERLOGIN.loadLogo();
          (s = $("<div></div>")
            .addClass("loading")
            .addClass("g-user-details")
            .addClass(a.USERLOGIN.OVERLAY_CLASS)
            .append(e)
            .gOverlay({
              clazz:
                "g-user-login-dialog" +
                (a.USERLOGIN.OVERLAY_CLASS
                  ? " " + a.USERLOGIN.OVERLAY_CLASS
                  : ""),
              padding: false,
              releaseOnClose: true,
              closeCallback: function () {
                l.remove();
              },
            })
            .gOverlay("open", this)),
            gDesigner.getUser().then(async (e) => {
              let module = !AppSettings.PROFILE_DIALOG_URL;
              AppSettings.PROFILE_DIALOG_URL &&
                (module = await AppSettings.gApi.hasPurchases().catch(() => false)),
                s.removeClass("loading"),
                s.append(
                  (function (e, t) {
                    gDesigner.getLicense();
                    const require = () => {
                        s.gOverlay("close");
                      },
                      a = e.canUpdateSelfAccountData();
                    var l = $("<div/>"),
                      c = $("<div/>")
                        .addClass("footer")
                        .append(
                          $("<div/>")
                            .addClass("top-section")
                            .append([
                              $("<button/>")
                                .html(
                                  GCore.GLocale.get(
                                    new GCore.GLocaleKey(
                                      "GCommonNames",
                                      "action.settings"
                                    )
                                  )
                                )
                                .addClass("highlight")
                                .css("display", a ? "" : "none")
                                .on("click", async (GCore) => {
                                  gDesigner.stats("profile_click_open-button"),
                                    AppSettings.ALWAYS_SHOW_ACCOUNT_SETTING_DIALOG || t
                                      ? new r(e).open()
                                      : AppSettings.PROFILE_DIALOG_URL
                                      ? gContainer.openExternalLink(
                                          GCore,
                                          AppSettings.PROFILE_DIALOG_URL
                                        )
                                      : gContainer.openExternalLink(
                                          GCore,
                                          AppSettings.gApi.url + "/profile"
                                        ),
                                    require();
                                }),
                              $("<button/>")
                                .html(
                                  GCore.GLocale.get(
                                    new GCore.GLocaleKey(
                                      "GCommonNames",
                                      "action.sign-out"
                                    )
                                  )
                                )
                                .addClass("signout")
                                .on("click", function () {
                                  gDesigner.stats(
                                    "profile_click_signout-button"
                                  ),
                                    gDesigner.signout(),
                                    require();
                                }),
                            ])
                        );
                    return (
                      e.hasOwnPictureAvatar()
                        ? l
                            .append(
                              $("<div/>")
                                .append(
                                  $("<div/>")
                                    .addClass("avatar")
                                    .css(
                                      "background-image",
                                      'url("' + e.avatar + '")'
                                    )
                                )
                                .append(
                                  $("<div/>")
                                    .addClass("username-div")
                                    .append(
                                      $("<div/>")
                                        .addClass("username")
                                        .append(
                                          $("<span/>")
                                            .addClass("name")
                                            .text(e.getFullUserName())
                                        )
                                        .append(
                                          $("<span/>")
                                            .addClass("email")
                                            .text(e.getAccountName())
                                        )
                                    )
                                )
                            )
                            .append(c)
                        : l
                            .append(
                              $("<div/>")
                                .append(
                                  $("<div/>")
                                    .addClass("avatar")
                                    .addClass("g-user-login-avatar")
                                    .css({
                                      "background-color": e.getUserColor(),
                                    })
                                    .text(e.getUserNameInitials())
                                )
                                .append(
                                  $("<div/>")
                                    .addClass("username-div")
                                    .append(
                                      $("<div/>")
                                        .addClass("username")
                                        .append(
                                          $("<span/>")
                                            .addClass("name")
                                            .text(e.getFullUserName())
                                        )
                                        .append(
                                          $("<span/>")
                                            .addClass("email")
                                            .text(e.getAccountName())
                                        )
                                    )
                                )
                            )
                            .append(c),
                      l
                    );
                  })(e, module)
                );
            });
        });
      },
    };
    $.fn.gUserLogin = function (e) {
      return c[e]
        ? c[e].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof e && e
        ? void $.error("Method " + e + " does not exist on jQuery.myPlugin")
        : c.init.apply(this, arguments);
    };
  }