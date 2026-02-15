/**
 * Webpack Module #1684
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */, require(527) /* module_527 */;
    const o = require(292) /* module_292 */,
      i = require(1685) /* module_1685 */,
      { gApi: a, DateAPI: r } = require(10) /* AppSettings */;
    exports.exports = class {
      init() {
        gDesigner.addEventListener(o, this._userLoggedEvent, this);
      }
      async _userLoggedEvent(e) {
        const module = e.user;
        if (module && module.getUID()) {
          gDesigner.removeEventListener(o, this._userLoggedEvent, this);
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
          new i().open();
        });
      }
    };
  }