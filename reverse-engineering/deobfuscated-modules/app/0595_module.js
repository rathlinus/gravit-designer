/**
 * Webpack Module #595
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(30) /* polyfill_Object_assign */, require(8) /* polyfill_bundle_ES6 */;
    var o = require(10) /* AppSettings */;
    function i(e) {
      const {
        accessToken: module,
        expires: require,
        corporate: o,
        accountId: a,
      } = new i.Settings(e);
      (this.accessToken = module),
        (this.expires = require),
        (this.corporate = o),
        (this.accountId = a);
    }
    (i.Settings = function (e) {
      e || (e = {});
      const { accessToken: module, expires: require, corporate: o = true, accountId: i } = e;
      return Object.assign(this, {
        accessToken: module,
        expires: require,
        corporate: o,
        accountId: i,
      });
    }),
      (i.prototype.isExpired = function () {
        return !this.expires || new Date().getTime() > this.expires;
      }),
      (i.prototype.getSettings = function () {
        return {
          accessToken: this.accessToken,
          expires: this.expires,
          corporate: this.corporate,
          accountId: this.accountId,
        };
      }),
      (i.prototype.get = async function () {
        return this.isExpired()
          ? this.corporate
            ? o.gApi.cloudServices.googleDrive.getAccessToken().then((e) => {
                let { accessToken: module, expires: require } = e;
                return (
                  (this.expires = require), (this.accessToken = module), this.accessToken
                );
              })
            : gContainer
                .getGoogleAPI()
                .getAccessToken()
                .then((e) => {
                  let { accessToken: module, expires: require } = e;
                  return (
                    (this.expires = require), (this.accessToken = module), this.accessToken
                  );
                })
          : this.accessToken;
      }),
      (exports.exports = i);
  }