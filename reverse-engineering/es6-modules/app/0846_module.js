/**
 * Webpack Module #846
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  require(30) /* polyfill_Object_assign */;
  var DataModule_231 = require(231); /* DataModule_231 */
  const { License: i, LicenseType: a, DateAPI: r } = require(10) /* AppSettings */,
    {
      defaultUserSettings: {
        license: { offlineCountdown: s, offlineExpirationTime: l },
      },
    } = require(10) /* AppSettings */.defaultUserSettings,
    DataModule_785 = require(785) /* DataModule_785 */,
    d = require(1099); /* module_1099 */
  exports.exports = class {
    static newLicense(e) {
      return (DataModule_785.updateLicense(e), this._newLicense(e));
    }
    static newDefaultLicense() {
      return this._newLicense({ license: a.Default });
    }
    static newOfflineLicense() {
      const exports = DataModule_785.getLicense();
      if (exports) {
        const t = r.addTime(
          r.addTime(new Date(exports.lastUpdate), exports.offlineExpirationTime || l),
          exports.offlineCountdown || s
        );
        return this._newLicense(Object.assign(exports, { offline: true, offlineExpire: t }));
      }
      return this._newLicense({ license: a.Default, offline: true });
    }
    static _newLicense(e) {
      return this._isDevLicense() ? new d(e) : new i(e);
    }
    static _isDevLicense() {
      if (DataModule_231.IS_TRUNK) return true;
      if (DataModule_231.IS_RC) {
        const e = gDesigner.getSyncUser();
        return !!e && !e.isDeactivated() && e.isEmailVerified() && e.isGravitAccount();
      }
      return false;
    }
  };
}
