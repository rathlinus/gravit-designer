/**
 * Webpack Module #1579
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(30) /* polyfill_Object_assign */, require(8) /* polyfill_bundle_ES6 */;
    var AppSettings = require(10) /* AppSettings */,
      GCore = require(1) /* GCore */,
      r = _interopRequireDefault(require(1187) /* module_1187 */);
    class s extends AppSettings.GReminderDialog.Impl {
      open(e) {
        let { dialog: module } = e;
        this._dialog = module
          .getHTMLElement()
          .gDialog({ releaseOnClose: true, nowrap: true })
          .gDialog("open");
      }
      async openPurchaseFlow(e) {
        let { dialog: module, options: require = {} } = e;
        await gDesigner.openPaymentDialog(null, require).catch(() => null);
      }
      openExternalLink(e) {
        let { link: module } = e;
        gContainer.openExternalLink(null, module);
      }
      close() {
        this._dialog.gDialog("close");
      }
      getProduct() {
        return Promise.resolve({
          price: -1,
          listPrice: -1,
          locale: navigator.language,
          currency: "USD",
        });
      }
      getLicense() {
        let exports = gDesigner.getLicense();
        return Promise.resolve({
          license: exports._license,
          expire: exports._expire,
          created: exports._created,
          legacy: exports._legacy,
        });
      }
      getLanguage() {
        return GCore.GLocale.getLanguage();
      }
    }
    class l extends r.default {
      constructor(e) {
        super(), (this._dialogOptions = e);
      }
      async open() {
        const exports = new s(),
          module = Object.assign(this._dialogOptions, { impl: exports });
        switch (this._dialogOptions.endpoint) {
          case "/pro/reminder/proexpiresoon":
            (await AppSettings.GReminderDialogFactory.newProExpireSoon(module)).open();
            break;
          case "/pro/reminder/proexpired":
            (await AppSettings.GReminderDialogFactory.newProExpired(module)).open();
            break;
          case "/pro/reminder/trialexpired":
            (await AppSettings.GReminderDialogFactory.newTrialExpired(module)).open();
            break;
          case "/pro/reminder/trialmessage":
            (await AppSettings.GReminderDialogFactory.newTrialMessage(module)).open();
            break;
          case "/pro/reminder/upgrade":
            (await AppSettings.GReminderDialogFactory.newUpgradeScreen(module)).open();
        }
      }
    }
    exports.exports = l;
  }