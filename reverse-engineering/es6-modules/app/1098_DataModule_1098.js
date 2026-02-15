/**
 * Webpack Module #1098
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  require(8) /* polyfill_bundle_ES6 */;
  var AppSettings = require(10); /* AppSettings */
  const GEvent_user = require(292) /* GEvent_user */,
    a = require(846); /* module_846 */
  exports.exports = class {
    constructor() {
      this._isListening = false;
    }
    async checkLicense() {
      let exports;
      if (gDesigner.isOffline()) exports = a.newOfflineLicense();
      else
        try {
          exports = a.newLicense(await AppSettings.gApi.license.get());
        } catch (t) {
          ((exports = a.newDefaultLicense()), console.info('CheckLicense', 'exception', t));
        }
      this._setApplicationLicense(exports);
    }
    async _listenLicense() {
      if (!this._isListening)
        try {
          if (!gDesigner.isOffline()) {
            (await gDesigner.getUser()) &&
              !gDesigner.isAnonymous() &&
              (AppSettings.gApi.license.listen((e) => {
                this._setApplicationLicense(a.newLicense(e));
              }),
              (this._isListening = true));
          }
        } catch (e) {
          console.info('LicenseChanged', 'exception', e);
        }
    }
    _setApplicationLicense(e) {
      gDesigner.setLicense(e);
    }
    async start() {
      (gDesigner.addEventListener(GEvent_user, this._userLoggedEvent, this),
        $(window).on('online', this.checkLicense.bind(this)),
        $(window).on('offline', this.checkLicense.bind(this)));
      try {
        await this.checkLicense();
      } catch (e) {
        console.error(e);
      }
      try {
        this._listenLicense();
      } catch (e) {
        console.error(e);
      }
      setInterval(this.checkLicense.bind(this), AppSettings.DateAPI.daysToMilliseconds(1));
    }
    _userLoggedEvent() {
      (this.checkLicense(), this._listenLicense());
    }
  };
}
