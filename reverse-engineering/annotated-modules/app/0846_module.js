/**
 * Webpack Module #846
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    n(30) /* polyfill_Object_assign */;
    var o = n(231) /* DataModule_231 */;
    const { License: i, LicenseType: a, DateAPI: r } = n(10) /* AppSettings */,
      {
        defaultUserSettings: {
          license: { offlineCountdown: s, offlineExpirationTime: l },
        },
      } = n(10) /* AppSettings */.defaultUserSettings,
      c = n(785) /* DataModule_785 */,
      d = n(1099) /* module_1099 */;
    e.exports = class {
      static newLicense(e) {
        return c.updateLicense(e), this._newLicense(e);
      }
      static newDefaultLicense() {
        return this._newLicense({ license: a.Default });
      }
      static newOfflineLicense() {
        const e = c.getLicense();
        if (e) {
          const t = r.addTime(
            r.addTime(new Date(e.lastUpdate), e.offlineExpirationTime || l),
            e.offlineCountdown || s
          );
          return this._newLicense(
            Object.assign(e, { offline: !0, offlineExpire: t })
          );
        }
        return this._newLicense({ license: a.Default, offline: !0 });
      }
      static _newLicense(e) {
        return this._isDevLicense() ? new d(e) : new i(e);
      }
      static _isDevLicense() {
        if (o.IS_TRUNK) return !0;
        if (o.IS_RC) {
          const e = gDesigner.getSyncUser();
          return (
            !!e &&
            !e.isDeactivated() &&
            e.isEmailVerified() &&
            e.isGravitAccount()
          );
        }
        return !1;
      }
    };
  }