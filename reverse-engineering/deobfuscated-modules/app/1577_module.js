/**
 * Webpack Module #1577
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(30) /* module_30 */, require(8) /* module_8 */;
    var i = require(10) /* module_10 */,
      a = require(1) /* module */,
      r = o(require(1187) /* module_1187 */);
    function s() {}
    a.GObject.inherit(s, i.GPaywallDialog.Impl),
      (s.prototype.open = function (e) {
        let { dialog: module } = e;
        this._dialog = module
          .getHTMLElement()
          .gDialog({ releaseOnClose: true, nowrap: true })
          .gDialog("open");
      }),
      (s.prototype.close = function () {
        let { licenseHasBeenUpgraded: exports = false } =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        this._dialog.closest(".g-dialog-container").remove(),
          exports && gDesigner.requestLicenseUpdate();
      }),
      (s.prototype.openPurchaseFlow = async function (e) {
        let { dialog: module, options: require = {} } = e;
        await gDesigner.openPaymentDialog(null, require).catch(() => null), module.close();
      }),
      (s.prototype.openExternalLink = function (e) {
        let { link: module } = e;
        gContainer.openExternalLink(null, module);
      }),
      (s.prototype.getProduct = function () {
        return Promise.resolve({
          price: -1,
          listPrice: -1,
          locale: navigator.language,
          currency: "USD",
        });
      }),
      (s.prototype.getLicense = function () {
        let exports = gDesigner.getLicense();
        return Promise.resolve({
          license: exports.getLicenseType(),
          expire: exports.getExpirationDate(),
          created: exports.getCreationDate(),
          legacy: exports.isLegacy(),
        });
      }),
      (s.prototype.getUser = function () {
        return gDesigner.getSyncUser();
      }),
      (s.prototype.getLanguage = function () {
        return a.GLocale.getLanguage();
      });
    class l extends r.default {
      constructor(e) {
        super(), (this._dialogOptions = e);
      }
      async open() {
        new i.GPaywallDialog(
          Object.assign(this._dialogOptions, { impl: new s(), gApi: i.gApi })
        ).open();
      }
    }
    exports.exports = l;
  }