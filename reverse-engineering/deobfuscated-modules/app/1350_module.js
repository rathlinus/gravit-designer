/**
 * Webpack Module #1350
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(30) /* module_30 */, require(8) /* module_8 */;
    const o = require(337) /* module_337 */,
      i = require(1338) /* module_1338 */,
      { gApi: a, PurchaseStatus: r } = require(10) /* module_10 */,
      { IS_TRUNK: s } = require(231) /* module_231 */;
    let l;
    class c {
      static getInstance() {
        return l || (l = new c()), l;
      }
      waitForPurchase() {
        return (
          this.cancelPurchase(),
          (this._promiseCapabilities = {}),
          new Promise((e, t) => {
            Object.assign(this._promiseCapabilities, { resolve: e, reject: t }),
              (this._ws = new a.WebSocketClient()),
              this._ws.connect("/payload"),
              this._ws.on("payload", async (t) => {
                try {
                  const { data: require } = t;
                  await this._tryCheckLicense(),
                    await this._tryFireEvent(require),
                    (require.licenseHasBeenUpgraded =
                      this._shouldFireUserCompletedPurchaseEvent(require)),
                    e(require);
                } finally {
                  this._ws.close();
                }
              });
          })
        );
      }
      cancelPurchase() {
        this._promiseCapabilities &&
          this._promiseCapabilities.resolve &&
          this._promiseCapabilities.resolve(),
          this._ws && this._ws.close();
      }
      async _tryCheckLicense() {
        try {
          await o.checkLicense();
        } catch (e) {
          console.error("GLicenseManager.checkLicense", e);
        }
      }
      async _tryFireEvent(e) {
        try {
          this._shouldFireUserCompletedPurchaseEvent(e) &&
            i.fireEvent(i.Events.USER_COMPLETED_PURCHASE_EVENT);
        } catch (e) {
          console.error("GTMHelper.fireEvent", e);
        }
      }
      _shouldFireUserCompletedPurchaseEvent(e) {
        const { statusId: module } = e;
        return !(!s || module !== r.SuccessfulTestOrder) || module === r.Paid;
      }
    }
    exports.exports = c;
  }