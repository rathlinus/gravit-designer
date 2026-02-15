/**
 * Webpack Module #1666
 * Type: class
 * Name: GNotificationPanel
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */, require(20) /* polyfill_RegExp_exec */, require(3) /* polyfill_RegExp_toString */, require(34) /* polyfill_String_replace */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    var GCore = require(1) /* GCore */;
    const {
        DESIGNER: { TITLE: i },
      } = require(10) /* AppSettings */,
      GPanel = require(606) /* GPanel */,
      GView = require(394) /* GView */,
      GEvent_notification = require(1321) /* GEvent_notification */,
      GDocumentEvent = require(78) /* GDocumentEvent */,
      GEmbeddedLogin = require(860) /* GEmbeddedLogin */,
      Type = require(1667) /* Type */;
    function u() {}
    GCore.GObject.inherit(u, GPanel),
      (u.ID = "notification-panel"),
      (u.prototype._htmlElement = null),
      (u.prototype._lastNotification = null),
      (u.prototype._closeCallback = null),
      (u.prototype.init = function (e) {
        (this._htmlElement = e),
          this._htmlElement
            .addClass("g-hide")
            .addClass("g-notification-panel")
            .on("click", function () {
              $(this).toggleClass("bring-to-front", true),
                gDesigner.sendSideBarAndAssistBarToBack();
            }),
          $("<div></div>")
            .addClass("g-btn-close")
            .append($("<span></span>").addClass("gravit-icon-close"))
            .on("click", () => {
              this._close(true);
            })
            .appendTo(this._htmlElement),
          gDesigner.addEventListener(GEvent_notification, this._notificationEvent, this),
          gDesigner.addEventListener(GDocumentEvent, this._documentEvent, this);
      }),
      (u.prototype.isEnabled = function () {
        return !this._htmlElement.hasClass("g-hide");
      }),
      (u.prototype._documentEvent = function (e) {
        if (
          !e.document.isLockedByVersionHistory() &&
          this._lastNotification &&
          this._lastNotification.document
        )
          switch (e.type) {
            case GDocumentEvent.Type.Activated: {
              let t = e.document !== this._lastNotification.document;
              this._htmlElement.toggleClass("g-hide", t),
                this._htmlElement.toggleClass("bring-to-front", t),
                t && gDesigner.sendSideBarAndAssistBarToBack();
              break;
            }
            case GDocumentEvent.Type.Removed:
              e.document === this._lastNotification.document && this._close();
          }
      }),
      (u.prototype._notificationEvent = async function (e) {
        if (
          ((this._lastNotification = e.notification),
          (this._closeCallback = e.notification.closeCallback),
          this._htmlElement.removeClass("g-hide"),
          this._htmlElement.toggleClass("bring-to-front", true),
          gDesigner.sendSideBarAndAssistBarToBack(),
          this._htmlElement.toggleClass(
            "popup",
            !!e.notification.popup && !e.notification.anonymous
          ),
          e.notification.anonymous)
        ) {
          const t = gDesigner.getActiveDocument(),
            n = t && t.isDocumentFromTemplate() && t.isShared(),
            GPanel = (e) => {
              e &&
                !e.isAnonymous() &&
                ((this._lastNotification = null),
                this._htmlElement.addClass("g-hide"));
            };
          let GView = n
            ? GCore.GLocale.get(
                new GCore.GLocaleKey(
                  "GNotificationPanel",
                  "text.create-account-template"
                )
              )
            : GCore.GLocale.get(
                new GCore.GLocaleKey("GNotificationPanel", "text.create-account")
              );
          const GEvent_notification = $("<div/>")
            .addClass("anonymous")
            .append($("<div/>").addClass("logo"))
            .append(
              $("<div/>")
                .addClass("content")
                .append(
                  $("<span/>")
                    .addClass("title")
                    .text(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey(
                          "GNotificationPanel",
                          "text.title-welcome"
                        )
                      ).replace("%app", i)
                    )
                )
                .append(
                  $("<span/>")
                    .text(e.notification.message)
                    .css("display", e.notification.message && !n ? "" : "none")
                )
                .append(
                  $("<span/>").html(
                    GView
                      .replace("%signup", () =>
                        $("<span/>")
                          .attr("id", "signup-link")
                          .addClass("link")
                          .text(
                            GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                "GNotificationPanel",
                                "text.sign-up"
                              )
                            )
                          )
                          .prop("outerHTML")
                      )
                      .replace("%signin", () =>
                        $("<span/>")
                          .attr("id", "signin-link")
                          .addClass("link")
                          .text(
                            GCore.GLocale.get(
                              new GCore.GLocaleKey(
                                "GNotificationPanel",
                                "text.sign-in"
                              )
                            )
                          )
                          .prop("outerHTML")
                      )
                  )
                )
                .append(
                  $("<span/>")
                    .addClass("footer")
                    .html(
                      GCore.GLocale.get(
                        new GCore.GLocaleKey("GNotificationPanel", "text.footer")
                      ).replace("%app", () =>
                        $("<span/>")
                          .attr("id", "learnmore-link")
                          .addClass("link")
                          .text(i)
                          .prop("outerHTML")
                      )
                    )
                )
            );
          GEvent_notification.find("#signup-link").on("click", () => {
            gDesigner.stats("open-shared_click_create-account"),
              new GEmbeddedLogin(GPanel).open({ anonymous: true, signup: true, animate: true });
          }),
            GEvent_notification.find("#signin-link").on("click", () => {
              gDesigner.stats("open-shared_click_login"),
                new GEmbeddedLogin(GPanel).open({ anonymous: true, animate: true });
            }),
            GEvent_notification.find('#learnmore-link').on('click', (e) => {
              gDesigner.stats('open-shared_click_learn-more'),
                gContainer.openExternalLink(
                  e,
                  window.location.origin
                );
            }),
            this._updateContent(GEvent_notification);
        } else if (e.notification.custom) {
          if (
            ((this._closeCallback = e.notification.closeCallback),
            this._htmlElement.addClass([
              e.notification.class,
              e.notification.enter,
            ]),
            this._updateContent(e.notification.content),
            e.notification.timeout)
          ) {
            let t = this;
            new Promise(function (n) {
              setTimeout(function () {
                t._htmlElement.removeClass(e.notification.enter),
                  t._htmlElement.addClass(e.notification.exit),
                  n(true);
              }, e.notification.timeout);
            }).then(function () {
              setTimeout(function () {
                t._htmlElement.removeClass(e.notification.exit), t._close(false);
              }, 600);
            });
          }
        } else
          e.builder instanceof Type
            ? (e.builder.addEventListener(Type.Event, (e) => {
                e.type === Type.Event.Type.Close && this._close();
              }),
              this._updateContent(
                $("<div></div>")
                  .addClass("message")
                  .append(await e.builder.build())
              ))
            : this._updateContent(
                $("<div></div>")
                  .addClass("message")
                  .append(e.notification.message)
              );
        this.trigger(GView.UPDATE_EVENT);
      }),
      (u.prototype._updateContent = function (e) {
        this._htmlElement.find(".content").remove(),
          this._htmlElement.append(
            $("<div></div>").addClass("content").append(e)
          );
      }),
      (u.prototype._close = function (e) {
        (this._lastNotification = null),
          this._htmlElement.addClass("g-hide"),
          this._closeCallback && e && this._closeCallback(),
          this.trigger(GView.UPDATE_EVENT);
      }),
      (u.prototype.toString = function () {
        return "[Object GNotificationPanel]";
      }),
      (u.prototype.getId = function () {
        return u.ID;
      }),
      (exports.exports = u);
  }