/**
 * Module 829
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (exports, module, require) {
  "use strict";
  const {
      quotas: n,
      share: {quotas: r},
      defaultLegacyUserSettings: {quotas: o},
      defaultUserSettings: {
        license: {offlineCountdown: a}
      }
    } = require(253) /* module */, s = require(430) /* module */, l = require(972) /* module */, h = require(373) /* DateAPI */;
  class A {
    static get FREEMIUM_END_DATE() {
      return new Date("2 Aug 2022 00:00:00 GMT");
    }
    constructor(e) {
      let {
        offline: module = false,
        license: require = s.Free,
        expire: n,
        created: r,
        registered: o,
        legacy: a = false,
        offlineExpire: l,
        specialPrice: A,
        deactivated: c,
        quotas: p,
        metadata: u
      } = e;
      this._offline = module, this._license = require, this._created = h.toDate(r), this._registered = h.toDate(o), this._expire = h.toDate(n), this._legacy = a, this._offlineExpire = l, this._specialPrice = h.toDate(A), this._deactivated = c, this._quotas = p, this._metadata = u, this.__isExpired = this.isExpired(), this.__isOfflinePeriodExpired = this.isOfflinePeriodExpired(), this.__isSpecialPriceExpired = this.isSpecialPriceExpired(), Object.freeze(this);
    }
    isOffline() {
      return !!this._offline;
    }
    getMetadata() {
      return this._metadata;
    }
    isExpired(e) {
      return this.isGuest() ? !this._expire || h.lt(this._expire, e || h.now(), false) : !!this._expire && h.lt(this._expire, e || Date.now());
    }
    isOfflinePeriodExpired(e) {
      return this.isOffline() && !!this._offlineExpire && h.lte(this._offlineExpire, e || h.now());
    }
    isSpecialPriceExpired(e) {
      return !!this._specialPrice && h.lt(this._specialPrice, e || h.now());
    }
    isTrial() {
      return this._license === s.Trial;
    }
    isPro() {
      return this._license === s.Pro;
    }
    isGuest() {
      return this._license === s.Guest;
    }
    isFree() {
      return this._license === s.Free;
    }
    isDefault() {
      return this._license === s.Default;
    }
    isLegacy() {
      return this._legacy;
    }
    isDeactivated() {
      return !!this._deactivated;
    }
    canAccessFreemium(e) {
      return !(this.getRegistrationDate() > A.FREEMIUM_END_DATE && !this.isLegacy() && this.isExpired(e) && (this.isPro() || this.isTrial()));
    }
    getLicenseType() {
      return this._license;
    }
    getCreationDate() {
      return this._created;
    }
    getExpirationDate() {
      return this._expire;
    }
    getSpecialPriceDate() {
      return this._specialPrice;
    }
    getOfflineExpirationDate() {
      return this._offlineExpire;
    }
    getOfflineWarningDate() {
      return this.getOfflineExpirationDate() ? h.addTime(this.getOfflineExpirationDate(), -a + h.daysToMilliseconds(1)) : null;
    }
    getQuotas() {
      let {
        free: exports,
        pro: module
      } = this._quotas || {};
      return exports || (exports = this.isLegacy() ? o.free : n.free), module || (module = this.isLegacy() ? o.pro : n.pro), module = module || n.pro, exports = exports || n.free, {
        pro: module,
        free: exports
      };
    }
    getPrivateShareQuota() {
      const exports = this._getShareQuotas().private;
      return isNaN(exports) ? 0 : exports;
    }
    getPublicShareQuota() {
      const exports = this._getShareQuotas().public;
      return isNaN(exports) ? -1 : exports;
    }
    _getShareQuotas() {
      const {
        free: exports,
        pro: module
      } = r;
      return this.isEnabledProFeatures() ? module : exports;
    }
    canSignIn() {
      return !this.isGuest() || !this.isExpired();
    }
    canUpgrade() {
      return true;
    }
    isTrialAvailable() {
      return this.isDefault() || this.isFree();
    }
    isEnabledProFeatures() {
      return !!this.isDefault() || !this.isExpired() && !this.isFree();
    }
    isProSubscriptionExpired() {
      return this.isPro() && this.isExpired();
    }
    isProSubscriptionCancelled() {
      return !!this.isPro() && !!this.isProSubscriptionCancellable() && !!this.getExpirationDate();
    }
    isProSubscriptionCancellable() {
      return !!this.isPro() && !this.isYrLicense();
    }
    isYrLicense() {
      const exports = this.getIntercomUserType();
      return !!exports && exports === l.Intercom.YrLicense;
    }
    getIntercomUserType() {
      return this._metadata && this._metadata.intercom && this._metadata.intercom.userType;
    }
    getSubscriberUserType() {
      let exports = "";
      this.isLegacy() && (exports = "Legacy");
      const module = this.getIntercomUserType();
      return module ? exports += module : this.isTrial() ? exports += "Trial" : this.isPro() ? exports += "Subscriber" : this.isFree() ? exports += "TrialDelayed" : exports += "PreTrial", !this.isPro() && this.isExpired() && (exports += "Expired"), this.isPro() && this.isDeactivated() && (exports += "Deactivated"), exports;
    }
    getSubscriberUserStatus() {
      let exports = "Active";
      return this.isExpired() && (exports = "Expired"), exports;
    }
    getRegistrationDate() {
      return this._registered;
    }
    equals(e) {
      return this.constructor === e.constructor && this._license === e._license && this._deactivated === e._deactivated && h.eq(this._expire, e._expire) && h.eq(this._created, e._created) && this.isOffline() === e.isOffline() && this.__isExpired === e.__isExpired && this.__isOfflinePeriodExpired === e.__isOfflinePeriodExpired && this.__isSpecialPriceExpired === e.__isSpecialPriceExpired;
    }
    daysLeft() {
      return this._expire ? h.millisecondsToDays(h.diff(h.now(), this._expire)) : null;
    }
    toJSON() {
      return {
        offline: this._offline,
        license: this._license,
        expire: this._expire,
        created: this._created,
        registered: this._registered,
        legacy: this._legacy,
        offlineExpire: this._offlineExpire,
        specialPrice: this._specialPrice,
        deactivated: this._deactivated,
        quotas: this._quotas,
        metadata: this._metadata,
        isExpired: this.__isExpired,
        daysLeft: this.daysLeft(),
        userType: this.getSubscriberUserType(),
        userStatus: this.getSubscriberUserStatus()
      };
    }
    toString() {
      return "[Object License]";
    }
  }
  exports.exports = A;
}
