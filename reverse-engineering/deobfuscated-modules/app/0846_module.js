/**
 * Webpack Module #846
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(30) /* module_30 */;
    var o = require(231) /* module_231 */;
    const { License: i, LicenseType: a, DateAPI: r } = require(10) /* module_10 */,
      {
        defaultUserSettings: {
          license: { offlineCountdown: s, offlineExpirationTime: l },
        },
      } = require(10) /* module_10 */.defaultUserSettings,
      c = require(785) /* module_785 */,
      d = require(1099) /* module_1099 */;
    exports.exports = class {
      static newLicense(e) {
        return c.updateLicense(e), this._newLicense(e);
      }
      static newDefaultLicense() {
        return this._newLicense({ license: a.Default });
      }
      static newOfflineLicense() {
        const exports = c.getLicense();
        if (exports) {
          const t = r.addTime(
            r.addTime(new Date(exports.lastUpdate), exports.offlineExpirationTime || l),
            exports.offlineCountdown || s
          );
          return this._newLicense(
            Object.assign(exports, { offline: true, offlineExpire: t })
          );
        }
        return this._newLicense({ license: a.Default, offline: true });
      }
      static _newLicense(e) {
        return this._isDevLicense() ? new d(e) : new i(e);
      }
      static _isDevLicense() {
        if (o.IS_TRUNK) return true;
        if (o.IS_RC) {
          const e = gDesigner.getSyncUser();
          return (
            !!e &&
            !e.isDeactivated() &&
            e.isEmailVerified() &&
            e.isGravitAccount()
          );
        }
        return false;
      }
    };
  }