/**
 * Webpack Module #1684
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(8) /* polyfill_bundle_ES6 */, require(527)) /* DataModule_527 */;
  const GEvent_user = require(292) /* GEvent_user */,
    GLocale_1685 = require(1685) /* GLocale_1685 */,
    { gApi: a, DateAPI: r } = require(10); /* AppSettings */
  exports.exports = class {
    init() {
      gDesigner.addEventListener(GEvent_user, this._userLoggedEvent, this);
    }
    async _userLoggedEvent(e) {
      const module = e.user;
      if (module && module.getUID()) {
        gDesigner.removeEventListener(GEvent_user, this._userLoggedEvent, this);
        try {
          (await this._shouldShowWindowsStoreAnnouncement(module)) &&
            this._showWindowsStoreAnnouncement();
        } finally {
          this._updateWindowStoreAnnouncementFlag();
        }
      }
    }
    async _shouldShowWindowsStoreAnnouncement(e) {
      const { flags: { windowsStoreAnnouncement: module = false } = {} } = await a
        .getUserSettings()
        .catch(() => ({}));
      return !(module || !r.lt(e.created, Date.now()));
    }
    _updateWindowStoreAnnouncementFlag() {
      a.updateUserSettings({ flags: { windowsStoreAnnouncement: true } });
    }
    _showWindowsStoreAnnouncement() {
      gDesigner.executeWhenReady(() => {
        new GLocale_1685().open();
      });
    }
  };
}
