/**
 * Webpack Module #1682
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* module_8 */, require(196) /* module_196 */, require(4) /* module_4 */, require(13) /* module_13 */;
    const o = require(1190) /* module_1190 */,
      i = require(292) /* module_292 */,
      a = require(291) /* GNetworkAvailabilityChangedEvent */,
      {
        gApi: r,
        MicrosoftB2BKeyType: s,
        PaymentProviders: l,
        DateAPI: c,
        IN_APP_PURCHASE: {
          WINDOWS: { production: d, trunk: u, rc: p, beta: g, lts: h } = {},
        } = {},
      } = require(10) /* module_10 */,
      { IS_PRODUCTION: f, IS_LTS: m, IS_RC: y, IS_BETA: v } = require(231) /* module_231 */,
      {
        ERROR_CODES: { ERR_MICROSOFT_STORE_SERVICES_B2B_KEY_NOT_FOUND: _ },
      } = r;
    exports.exports = class extends o {
      function Object() { [native code] }() {
        if ((super(), !window.napi)) return;
        const { remote: exports } = require(881) /* module_881 */,
          module = exports.getCurrentWindow().getNativeWindowHandle();
        (this._store = new window.napi.windowsStore.StoreContext()),
          this._store.initialize(module),
          gDesigner.addEventListener(i, this._userLoggedEvent, this),
          gDesigner.addEventListener(
            a,
            this._networkAvailabilityChangedEvent,
            this
          ),
          (this._intervalId = setInterval(
            () => this.syncLicense(),
            c.daysToMilliseconds(1)
          ));
      }
      async purchase(e, t) {
        try {
          if (
            (gDesigner.toggleLoading(true),
            e || (e = await this.getProduct()),
            !e)
          )
            return;
        } finally {
          gDesigner.toggleLoading(false);
        }
        return new Promise((t, n) => {
          const o = setTimeout(() => {
            n();
          }, c.minutesToMilliseconds(3));
          this._store.requestPurchaseAsync(e.productId, (e, i) => {
            clearTimeout(o),
              e
                ? n(e)
                : (gDesigner.toggleLoading(true),
                  this.syncLicense()
                    .then(t)
                    .catch(n)
                    .finally(() => {
                      gDesigner.toggleLoading(false);
                    }));
          });
        });
      }
      async getProduct() {
        return new Promise((e, t) => {
          this._store.getAssociatedStoreProductsAsync(["Durable"], (n, o) => {
            if (n) return t(n);
            if (!o) return t();
            const i = this._getInAppOfferToken();
            if (!i) return t();
            const a = Object.values(o).find((e) => e.inAppOfferToken === i);
            if (!a) return t();
            e({
              provider: l.WindowsStore,
              formattedPrice: a.price.formattedRecurrencePrice,
              currency: a.price.currencyCode,
              productId: a.storeId,
            });
          });
        });
      }
      async syncLicense() {
        const exports = await gDesigner.getUser();
        if (exports)
          return r.microsoftStoreServices
            .syncLicense()
            .then(() => gDesigner.requestLicenseUpdate())
            .catch(async (t) => {
              if (t.cloud && t.code === _) {
                const t = await r.microsoftStoreServices.getAccessToken(),
                  n = await this._createB2BKeyForPurchaseAPI(exports, t),
                  o = await this._createB2BKeyForCollectionsAPI(exports, t);
                return (
                  await r.microsoftStoreServices.updateB2BKeys({
                    accessToken: t,
                    keys: { [s.Purchase]: n, [s.Collections]: o },
                  }),
                  r.microsoftStoreServices
                    .syncLicense()
                    .then(() => gDesigner.requestLicenseUpdate())
                );
              }
              throw t;
            });
      }
      _getInAppOfferToken() {
        return f ? d : v ? g : m ? h : y ? p : u;
      }
      _createB2BKeyForPurchaseAPI(e, t) {
        return new Promise(async (n, o) => {
          this._store.getCustomerPurchaseIdAsync(t, e.getUID(), (e, t) => {
            e ? o(e) : n(t);
          });
        });
      }
      _createB2BKeyForCollectionsAPI(e, t) {
        return new Promise(async (n, o) => {
          this._store.getCustomerCollectionsIdAsync(t, e.getUID(), (e, t) => {
            e ? o(e) : n(t);
          });
        });
      }
      _userLoggedEvent(e) {
        this.syncLicense();
      }
      _networkAvailabilityChangedEvent(e) {
        e.connected && this.syncLicense();
      }
    };
  }