/**
 * Webpack Module #1326
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* module_8 */;
    var o = require(1) /* module */;
    const i = require(1327) /* module_1327 */,
      a = require(1577) /* module_1577 */;
    class r {
      static openOfferReminder(e) {
        return r._openPaywall("reminder", e);
      }
      static openSubscriptionOffer(e) {
        return r._openPaywall("subscribe", e);
      }
      static async _openPaywall() {
        let exports =
            arguments.length > 0 && undefined !== arguments[0]
              ? arguments[0]
              : "reminder",
          module =
            arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        const require = await this._getProduct(),
          r = this._getLayout(),
          s = gDesigner.getApplicationManager().isInAppPurchaseAvailable();
        return (await i.newBuilder(a))
          .setId("paywall-cross-frame")
          .setEndpoint("/pro/paywall/".concat(exports))
          .setTime(gDesigner.now())
          .setLanguage(o.GLocale.getLanguage())
          .setCampaign(module.campaign)
          .setShareFile(module.shareFile)
          .setDashboard(module.dashboard)
          .setProduct(require)
          .setInAppPurchasesAvailable(s)
          .setLayout(r)
          .build()
          .open();
      }
      static _getProduct() {
        return gInAppPurchase.getProduct().catch(() => null);
      }
      static _getLayout() {
        return a.DEFAULT_LAYOUT;
      }
    }
    exports.exports = r;
  }