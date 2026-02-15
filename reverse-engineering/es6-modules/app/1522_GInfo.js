/**
 * Webpack Module #1522
 * Type: class
 * Name: GInfo
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  (require(8) /* polyfill_bundle_ES6 */,
    require(20) /* polyfill_RegExp_exec */,
    require(3) /* polyfill_RegExp_toString */,
    require(34)) /* polyfill_String_replace */;
  var AppSettings = require(10) /* AppSettings */,
    GCore = require(1) /* GCore */,
    GDocumentEvent = _interopRequireDefault(require(78) /* GDocumentEvent */);
  const GSystemDialog = require(44) /* GSystemDialog */,
    l = require(863) /* module_863 */,
    GContainer = require(85) /* GContainer */,
    GEvent_user_805 = require(805) /* GEvent_user_805 */,
    GEvent_user = require(292) /* GEvent_user */,
    { bypassEmailVerification: p } = AppSettings.defaultUserSettings;
  class g extends GCore.GObject {
    constructor(e) {
      super();
      this._htmlElement = e;
    }

    _interval = null;
    _needToShow = false;

    init() {
      (this.update(),
        gDesigner.addEventListener(GEvent_user_805, this._userPropertiesChangedEvent, this),
        gDesigner.addEventListener(GEvent_user, this._userLoggedEvent, this),
        gDesigner.addEventListener(GDocumentEvent.default, this._documentEvent, this));
    }

    async update() {
      return gDesigner.getUser().then((e) => this._updateInfo(e));
    }

    _userPropertiesChangedEvent(e) {
      this._updateInfo(e.user);
    }

    _togglePanel(e) {
      'boolean' == typeof e &&
        ((!e && !this._needToShow) || e) &&
        gDesigner.setPartVisible(l.Info, e);
    }

    _userLoggedEvent(e) {
      this._updateInfo(e.user);
    }

    _documentEvent(e) {
      (this._togglePanel(false), this._updateSaveInfo(e), this._updateDocumentSubscription(e));
    }

    _updateSaveInfo() {}

    _updateDocumentSubscription() {}

    _updateInfo(e) {
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
        ((this._interval = setInterval(
          this.update.bind(this),
          AppSettings.DateAPI.daysToMilliseconds(1)
        )),
          AppSettings.gApi.listen('/confirmation', () => this.update(), true));
        let t = new Date(e.created);
        e.email_expire && (t = new Date(e.email_expire));
        let n = GCore.GLocale.get(new GCore.GLocaleKey('GInfo', 'text.title')).replace(
          '%date',
          GCore.GLocale.toLocaleDate(t)
        );
        (this._htmlElement
          .empty()
          .append($('<span></span>').text(n))
          .append(
            $('<span/>')
              .addClass('link')
              .text(GCore.GLocale.get(new GCore.GLocaleKey('GInfo', 'text.resend-email')))
              .on('click', () => {
                let t, n;
                if (gContainer.getRuntime() === GContainer.Runtime.Electron) {
                  const e = gContainer.getPlatform();
                  (('darwin' !== e && 'win32' !== e) || (t = 'designer://'),
                    (n = gDesigner.getAssetsURL()));
                } else n = location.origin;
                return (
                  AppSettings.gApi
                    .resendEmailConfirmation({
                      appUrl: t,
                      webUrl: n,
                      email: e.email,
                      force: true,
                      origin: location.origin,
                    })
                    .then(() => {
                      GSystemDialog.custom({
                        title: GCore.GLocale.get(new GCore.GLocaleKey('GInfo', 'text.email-sent')),
                        subtitle: GCore.GLocale.get(
                          new GCore.GLocaleKey('GInfo', 'text.email-sent-submessage')
                        ),
                        icon: 'ok',
                      });
                    })
                    .catch((e) => {
                      GSystemDialog.custom({
                        title: GCore.GLocale.get(
                          new GCore.GLocaleKey('GInfo', 'text.something-went-wrong')
                        ),
                        subtitle: AppSettings.gApi.formatError(e),
                      });
                    }),
                  false
                );
              })
          ),
          this._togglePanel(true));
      }
    }

    toString() {
      return '[Object GInfo]';
    }

  }
  exports.exports = g;
}