/**
 * Webpack Module #1576
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  require(30) /* polyfill_Object_assign */;
  const DataModule_1186 = require(1186); /* DataModule_1186 */
  exports.exports = class extends DataModule_1186 {
    constructor(e) {
      (super(), (this._crossViewClass = e), (this._dialogOptions = {}));
    }
    setTime(e) {
      return (Object.assign(this._dialogOptions, { now: e }), this);
    }
    setEndpoint(e) {
      return (Object.assign(this._dialogOptions, { endpoint: e }), this);
    }
    setCampaign(e) {
      return (Object.assign(this._dialogOptions, { campaign: e }), this);
    }
    setShareFile(e) {
      return (Object.assign(this._dialogOptions, { shareFile: e }), this);
    }
    setDashboard(e) {
      return (Object.assign(this._dialogOptions, { dashboard: e }), this);
    }
    setProduct(e) {
      return (Object.assign(this._dialogOptions, { product: e }), this);
    }
    setInAppPurchasesAvailable(e) {
      return (Object.assign(this._dialogOptions, { inAppPurchasesAvailable: e }), this);
    }
    setLayout(e) {
      return ((e = e || 0), Object.assign(this._dialogOptions, { layout: e }), this);
    }
    build() {
      return new this._crossViewClass(this._dialogOptions);
    }
  };
}
