/**
 * Webpack Module #1682
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */, require(196) /* polyfill_Promise_finally */, require(4) /* stub_requires_668 */, require(13) /* stub_requires_679 */;
    const DataModule_1190 = require(1190) /* DataModule_1190 */,
      GEvent_user = require(292) /* GEvent_user */,
      GNetworkAvailabilityChangedEvent = require(291) /* GNetworkAvailabilityChangedEvent */,
      {
        gApi: r,
        MicrosoftB2BKeyType: s,
        PaymentProviders: l,
        DateAPI: c,
        IN_APP_PURCHASE: {
          WINDOWS: { production: d, trunk: u, rc: p, beta: g, lts: h } = {},
        } = {},
      } = require(10) /* AppSettings */,
      { IS_PRODUCTION: f, IS_LTS: m, IS_RC: y, IS_BETA: v } = require(231) /* DataModule_231 */,
      {
        ERROR_CODES: { ERR_MICROSOFT_STORE_SERVICES_B2B_KEY_NOT_FOUND: _ },
      } = r;
    exports.exports = class extends DataModule_1190 {
      constructor() {
        if ((super(), !window.napi)) return;
        const { remote: exports } = require(881) /* module_881 */,
          module = exports.getCurrentWindow().getNativeWindowHandle();
        (this._store = new window.napi.windowsStore.StoreContext()),
          this._store.initialize(module),
          gDesigner.addEventListener(GEvent_user, this._userLoggedEvent, this),
          gDesigner.addEventListener(
            GNetworkAvailabilityChangedEvent,
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
          const DataModule_1190 = setTimeout(() => {
            n();
          }, c.minutesToMilliseconds(3));
          this._store.requestPurchaseAsync(e.productId, (e, GEvent_user) => {
            clearTimeout(DataModule_1190),
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
          this._store.getAssociatedStoreProductsAsync(["Durable"], (n, DataModule_1190) => {
            if (n) return t(n);
            if (!DataModule_1190) return t();
            const GEvent_user = this._getInAppOfferToken();
            if (!GEvent_user) return t();
            const GNetworkAvailabilityChangedEvent = Object.values(DataModule_1190).find((e) => e.inAppOfferToken === GEvent_user);
            if (!GNetworkAvailabilityChangedEvent) return t();
            e({
              provider: l.WindowsStore,
              formattedPrice: GNetworkAvailabilityChangedEvent.price.formattedRecurrencePrice,
              currency: GNetworkAvailabilityChangedEvent.price.currencyCode,
              productId: GNetworkAvailabilityChangedEvent.storeId,
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
                  DataModule_1190 = await this._createB2BKeyForCollectionsAPI(exports, t);
                return (
                  await r.microsoftStoreServices.updateB2BKeys({
                    accessToken: t,
                    keys: { [s.Purchase]: n, [s.Collections]: DataModule_1190 },
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
        return new Promise(async (n, DataModule_1190) => {
          this._store.getCustomerPurchaseIdAsync(t, e.getUID(), (e, t) => {
            e ? DataModule_1190(e) : n(t);
          });
        });
      }
      _createB2BKeyForCollectionsAPI(e, t) {
        return new Promise(async (n, DataModule_1190) => {
          this._store.getCustomerCollectionsIdAsync(t, e.getUID(), (e, t) => {
            e ? DataModule_1190(e) : n(t);
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