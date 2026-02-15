/**
 * Webpack Module #1679
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var _interopRequireDefault = require(16) /* _interopRequireDefault */;
    require(30) /* polyfill_Object_assign */, require(8) /* polyfill_bundle_ES6 */, require(196) /* polyfill_Promise_finally */;
    var i = _interopRequireDefault(require(1249) /* module_1249 */),
      a = _interopRequireDefault(require(1155) /* module_1155 */),
      GCore = require(1) /* module */;
    const {
        gApi: s,
        IN_APP_PURCHASE: {
          CLEVERBRIDGE: { openCartInAPopup: l = false } = {},
        } = {},
      } = require(10) /* AppSettings */,
      GApplicationStatusEvent = require(808) /* GApplicationStatusEvent */,
      d = require(292) /* module_292 */,
      u = require(604) /* module_604 */,
      GOfflineDialog = require(256) /* GOfflineDialog */,
      g = require(1680) /* module_1680 */,
      h = require(1681) /* module_1681 */,
      f = require(1190) /* module_1190 */;
    exports.exports = class extends f {
      getOptions() {
        return this._paymentFlow ? this._paymentFlow.getOptions() : null;
      }
      async purchase(e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        return (
          gDesigner.toggleLoading(true),
          this._purchase(e, module).finally(() => {
            gDesigner.toggleLoading(false);
          })
        );
      }
      _purchase(e) {
        let module =
          arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        return $(".g-payment-dialog").length
          ? Promise.reject(false)
          : new Promise(async (n, _interopRequireDefault) => {
              try {
                this._paymentFlow && this._paymentFlow.abort(),
                  (this._paymentFlow = new i.default(module));
                const l = async () => {
                  const {
                      immediatePurchase: i = false,
                      paymentCallback: l = () => {},
                      autoClose: GOfflineDialog = false,
                    } = module,
                    g = await gDesigner.getUser();
                  if (!e) {
                    if (!g)
                      return (
                        this._paymentFlow.step(
                          new a.default()
                            .listen(d)
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
                            language: GCore.GLocale.getLocaleLanguageTag().slice(
                              0,
                              2
                            ),
                          },
                          module
                        )
                      );
                    }
                  }
                  if (!e) return void _interopRequireDefault(new Error("Product is missing"));
                  const { reinstate: h = false } = e;
                  if (h)
                    return (
                      this._paymentFlow.step(
                        gDesigner.executeWhenReady(() => {
                          new u(this._user, "purchase").open();
                        })
                      ),
                      void n({ reinstate: true })
                    );
                  this._paymentFlow.step(
                    new a.default()
                      .listen(GApplicationStatusEvent)
                      .when(() => gDesigner.isInitialized())
                      .do(async () => {
                        try {
                          const t = await this._openCart(e, i, GOfflineDialog);
                          l(t);
                        } catch (e) {
                          l({});
                        }
                      }, i)
                  ),
                    n();
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
                  ("undefined" != typeof dataLayer &&
                    dataLayer.push({ event: "USER_CART_VIEW_EVENT" })),
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
        return new g().open(e.url, t);
      }
    };
  }