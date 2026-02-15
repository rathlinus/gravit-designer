/**
 * Webpack Module #1679
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  var _interopRequireDefault = require(16); /* _interopRequireDefault */
  (require(30) /* polyfill_Object_assign */,
    require(8) /* polyfill_bundle_ES6 */,
    require(196)) /* polyfill_Promise_finally */;
  var DataModule_1249 = _interopRequireDefault(require(1249) /* DataModule_1249 */),
    a = _interopRequireDefault(require(1155) /* module_1155 */),
    GCore = require(1); /* GCore */
  const {
      gApi: s,
      IN_APP_PURCHASE: { CLEVERBRIDGE: { openCartInAPopup: l = false } = {} } = {},
    } = require(10) /* AppSettings */,
    GApplicationStatusEvent = require(808) /* GApplicationStatusEvent */,
    GEvent_user = require(292) /* GEvent_user */,
    GProfileDialog = require(604) /* GProfileDialog */,
    GOfflineDialog = require(256) /* GOfflineDialog */,
    GPaymentDialog = require(1680) /* GPaymentDialog */,
    h = require(1681) /* module_1681 */,
    DataModule_1190 = require(1190); /* DataModule_1190 */
  exports.exports = class extends DataModule_1190 {
    getOptions() {
      return this._paymentFlow ? this._paymentFlow.getOptions() : null;
    }
    async purchase(e) {
      let module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
      return (
        gDesigner.toggleLoading(true),
        this._purchase(e, module).finally(() => {
          gDesigner.toggleLoading(false);
        })
      );
    }
    _purchase(e) {
      let module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
      return $('.g-payment-dialog').length
        ? Promise.reject(false)
        : new Promise(async (n, _interopRequireDefault) => {
            try {
              (this._paymentFlow && this._paymentFlow.abort(),
                (this._paymentFlow = new DataModule_1249.default(module)));
              const l = async () => {
                const {
                    immediatePurchase: DataModule_1249 = false,
                    paymentCallback: l = () => {},
                    autoClose: GOfflineDialog = false,
                  } = module,
                  GPaymentDialog = await gDesigner.getUser();
                if (!e) {
                  if (!GPaymentDialog)
                    return (
                      this._paymentFlow.step(
                        new a.default()
                          .listen(GEvent_user)
                          .when((e) => !!e && !!e.user)
                          .do(() => {
                            gDesigner.openPaymentDialog(e, module);
                          })
                      ),
                      void n()
                    );
                  {
                    const n = gDesigner.now().getTime();
                    e = await s.getProduct(
                      Object.assign(
                        {
                          time: n,
                          language: GCore.GLocale.getLocaleLanguageTag().slice(0, 2),
                        },
                        module
                      )
                    );
                  }
                }
                if (!e) return void _interopRequireDefault(new Error('Product is missing'));
                const { reinstate: h = false } = e;
                if (h)
                  return (
                    this._paymentFlow.step(
                      gDesigner.executeWhenReady(() => {
                        new GProfileDialog(this._user, 'purchase').open();
                      })
                    ),
                    void n({ reinstate: true })
                  );
                (this._paymentFlow.step(
                  new a.default()
                    .listen(GApplicationStatusEvent)
                    .when(() => gDesigner.isInitialized())
                    .do(async () => {
                      try {
                        const t = await this._openCart(e, DataModule_1249, GOfflineDialog);
                        l(t);
                      } catch (e) {
                        l({});
                      }
                    }, DataModule_1249)
                ),
                  n());
              };
              gDesigner.isOffline()
                ? (GOfflineDialog.openRetryConnection(l), gDesigner.toggleLoading(false))
                : await l();
            } catch (e) {
              _interopRequireDefault(e);
            }
          }).then(
            (e) => (
              (e && e.reinstate) ||
                ('undefined' != typeof dataLayer &&
                  dataLayer.push({ event: 'USER_CART_VIEW_EVENT' })),
              e
            )
          );
    }
    _openCart(e, t, n) {
      return l && !t ? this._openCartPopup(e) : this._openCartDialog(e, n);
    }
    _openCartPopup(e) {
      return new h().open(e.url);
    }
    _openCartDialog(e, t) {
      return new GPaymentDialog().open(e.url, t);
    }
  };
}
