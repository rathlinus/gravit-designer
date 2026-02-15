/**
 * Webpack Module #1522
 * Type: class
 * Name: GInfo
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* _interopRequireDefault */;
    require(8) /* polyfill_bundle_ES6 */, require(20) /* polyfill_RegExp_exec */, require(3) /* polyfill_RegExp_toString */, require(34) /* polyfill_String_replace */;
    var i = require(10) /* AppSettings */,
      a = require(1) /* module */,
      r = o(require(78) /* GDocumentEvent */);
    const s = require(44) /* GSystemDialog */,
      l = require(863) /* module_863 */,
      c = require(85) /* GContainer */,
      d = require(805) /* module_805 */,
      u = require(292) /* module_292 */,
      { bypassEmailVerification: p } = i.defaultUserSettings;
    function g(e) {
      this._htmlElement = e;
    }
    a.GObject.inherit(g, a.GObject),
      (g.prototype._interval = null),
      (g.prototype._needToShow = false),
      (g.prototype.init = function () {
        this.update(),
          gDesigner.addEventListener(d, this._userPropertiesChangedEvent, this),
          gDesigner.addEventListener(u, this._userLoggedEvent, this),
          gDesigner.addEventListener(r.default, this._documentEvent, this);
      }),
      (g.prototype.update = async function () {
        return gDesigner.getUser().then((e) => this._updateInfo(e));
      }),
      (g.prototype._userPropertiesChangedEvent = function (e) {
        this._updateInfo(e.user);
      }),
      (g.prototype._togglePanel = function (e) {
        "boolean" == typeof e &&
          ((!e && !this._needToShow) || e) &&
          gDesigner.setPartVisible(l.Info, e);
      }),
      (g.prototype._userLoggedEvent = function (e) {
        this._updateInfo(e.user);
      }),
      (g.prototype._documentEvent = function (e) {
        this._togglePanel(false),
          this._updateSaveInfo(e),
          this._updateDocumentSubscription(e);
      }),
      (g.prototype._updateSaveInfo = function () {}),
      (g.prototype._updateDocumentSubscription = function () {}),
      (g.prototype._updateInfo = function (e) {
        if (
          (this._togglePanel(false),
          this._interval && clearInterval(this._interval),
          !p &&
            gDesigner.isEnabledSubscriptions() &&
            !gDesigner.getLicense().isGuest() &&
            e &&
            !e.isEmailVerified() &&
            !e.isAnonymous())
        ) {
          (this._interval = setInterval(
            this.update.bind(this),
            i.DateAPI.daysToMilliseconds(1)
          )),
            i.gApi.listen("/confirmation", () => this.update(), true);
          let t = new Date(e.created);
          e.email_expire && (t = new Date(e.email_expire));
          let n = a.GLocale.get(
            new a.GLocaleKey("GInfo", "text.title")
          ).replace("%date", a.GLocale.toLocaleDate(t));
          this._htmlElement
            .empty()
            .append($("<span></span>").text(n))
            .append(
              $("<span/>")
                .addClass("link")
                .text(
                  a.GLocale.get(new a.GLocaleKey("GInfo", "text.resend-email"))
                )
                .on("click", () => {
                  let t, n;
                  if (gContainer.getRuntime() === c.Runtime.Electron) {
                    const e = gContainer.getPlatform();
                    ("darwin" !== e && "win32" !== e) || (t = "designer://"),
                      (n = gDesigner.getAssetsURL());
                  } else n = location.origin;
                  return (
                    i.gApi
                      .resendEmailConfirmation({
                        appUrl: t,
                        webUrl: n,
                        email: e.email,
                        force: true,
                        origin: location.origin,
                      })
                      .then(() => {
                        s.custom({
                          title: a.GLocale.get(
                            new a.GLocaleKey("GInfo", "text.email-sent")
                          ),
                          subtitle: a.GLocale.get(
                            new a.GLocaleKey(
                              "GInfo",
                              "text.email-sent-submessage"
                            )
                          ),
                          icon: "ok",
                        });
                      })
                      .catch((e) => {
                        s.custom({
                          title: a.GLocale.get(
                            new a.GLocaleKey(
                              "GInfo",
                              "text.something-went-wrong"
                            )
                          ),
                          subtitle: i.gApi.formatError(e),
                        });
                      }),
                    false
                  );
                })
            ),
            this._togglePanel(true);
        }
      }),
      (g.prototype.toString = function () {
        return "[Object GInfo]";
      }),
      (exports.exports = g);
  }