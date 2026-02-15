/**
 * Webpack Module #1577
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16);
  (require(30) /* polyfill_Object_assign */, require(8)) /* polyfill_bundle_ES6 */;
  var AppSettings = require(10) /* AppSettings */,
    GCore = require(1) /* GCore */,
    DataModule_1187 = _interopRequireDefault(require(1187) /* DataModule_1187 */);
  class s extends AppSettings.GPaywallDialog.Impl {
    constructor() {
      super();
    }

    open(e) {
      let { dialog: module } = e;
      this._dialog = module
        .getHTMLElement()
        .gDialog({ releaseOnClose: true, nowrap: true })
        .gDialog('open');
    }

    close() {
      let { licenseHasBeenUpgraded: exports = false } =
        arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      (this._dialog.closest('.g-dialog-container').remove(),
        exports && gDesigner.requestLicenseUpdate());
    }

    async openPurchaseFlow(e) {
      let { dialog: module, options: require = {} } = e;
      (await gDesigner.openPaymentDialog(null, require).catch(() => null), module.close());
    }

    openExternalLink(e) {
      let { link: module } = e;
      gContainer.openExternalLink(null, module);
    }

    getProduct() {
      return Promise.resolve({
        price: -1,
        listPrice: -1,
        locale: navigator.language,
        currency: 'USD',
      });
    }

    getLicense() {
      let exports = gDesigner.getLicense();
      return Promise.resolve({
        license: exports.getLicenseType(),
        expire: exports.getExpirationDate(),
        created: exports.getCreationDate(),
        legacy: exports.isLegacy(),
      });
    }

    getUser() {
      return gDesigner.getSyncUser();
    }

    getLanguage() {
      return GCore.GLocale.getLanguage();
    }

  }
  class l extends DataModule_1187.default {
    constructor(e) {
      (super(), (this._dialogOptions = e));
    }
    async open() {
      new AppSettings.GPaywallDialog(
        Object.assign(this._dialogOptions, { impl: new s(), gApi: AppSettings.gApi })
      ).open();
    }
  };
  exports.exports = l;
}