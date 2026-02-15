/**
 * Webpack Module #1732
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* module_8 */;
    var o = require(1) /* module */,
      i = require(10) /* module_10 */,
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
              let module = !i.PROFILE_DIALOG_URL;
              i.PROFILE_DIALOG_URL &&
                (module = await i.gApi.hasPurchases().catch(() => false)),
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
                                  o.GLocale.get(
                                    new o.GLocaleKey(
                                      "GCommonNames",
                                      "action.settings"
                                    )
                                  )
                                )
                                .addClass("highlight")
                                .css("display", a ? "" : "none")
                                .on("click", async (o) => {
                                  gDesigner.stats("profile_click_open-button"),
                                    i.ALWAYS_SHOW_ACCOUNT_SETTING_DIALOG || t
                                      ? new r(e).open()
                                      : i.PROFILE_DIALOG_URL
                                      ? gContainer.openExternalLink(
                                          o,
                                          i.PROFILE_DIALOG_URL
                                        )
                                      : gContainer.openExternalLink(
                                          o,
                                          i.gApi.url + "/profile"
                                        ),
                                    require();
                                }),
                              $("<button/>")
                                .html(
                                  o.GLocale.get(
                                    new o.GLocaleKey(
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