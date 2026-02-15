/**
 * Webpack Module #1579
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(16) /* module_16 */;
    require(30) /* module_30 */, require(8) /* module_8 */;
    var i = require(10) /* module_10 */,
      a = require(1) /* module */,
      r = o(require(1187) /* module_1187 */);
    class s extends i.GReminderDialog.Impl {
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
        return a.GLocale.getLanguage();
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
            (await i.GReminderDialogFactory.newProExpireSoon(module)).open();
            break;
          case "/pro/reminder/proexpired":
            (await i.GReminderDialogFactory.newProExpired(module)).open();
            break;
          case "/pro/reminder/trialexpired":
            (await i.GReminderDialogFactory.newTrialExpired(module)).open();
            break;
          case "/pro/reminder/trialmessage":
            (await i.GReminderDialogFactory.newTrialMessage(module)).open();
            break;
          case "/pro/reminder/upgrade":
            (await i.GReminderDialogFactory.newUpgradeScreen(module)).open();
        }
      }
    }
    exports.exports = l;
  }