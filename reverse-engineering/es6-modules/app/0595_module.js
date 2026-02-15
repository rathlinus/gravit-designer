/**
 * Webpack Module #595
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(30) /* polyfill_Object_assign */, require(8)) /* polyfill_bundle_ES6 */;
  var AppSettings = require(10);
  class i {
    constructor(e) {
      const {
      accessToken: module,
      expires: require,
      corporate: AppSettings,
      accountId: a,
      } = new i.Settings(e);
      ((this.accessToken = module),
      (this.expires = require),
      (this.corporate = AppSettings),
      (this.accountId = a));
    }

    isExpired() {
      return !this.expires || new Date().getTime() > this.expires;
    }

    getSettings() {
      return {
        accessToken: this.accessToken,
        expires: this.expires,
        corporate: this.corporate,
        accountId: this.accountId,
      };
    }

    async get() {
      return this.isExpired()
        ? this.corporate
          ? AppSettings.gApi.cloudServices.googleDrive.getAccessToken().then((e) => {
              let { accessToken: module, expires: require } = e;
              return ((this.expires = require), (this.accessToken = module), this.accessToken);
            })
          : gContainer
              .getGoogleAPI()
              .getAccessToken()
              .then((e) => {
                let { accessToken: module, expires: require } = e;
                return ((this.expires = require), (this.accessToken = module), this.accessToken);
              })
        : this.accessToken;
    }

    static Settings(e) {
    e || (e = {});
    const {
      accessToken: module,
      expires: require,
      corporate: AppSettings = true,
      accountId: i,
    } = e;
    return Object.assign(this, {
      accessToken: module,
      expires: require,
      corporate: AppSettings,
      accountId: i,
    });
  }

  }
  exports.exports = i;
}