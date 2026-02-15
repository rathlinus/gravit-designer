/**
 * Webpack Module #1252
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* polyfill_Array_iterator */, require(30) /* polyfill_Object_assign */, require(8) /* polyfill_bundle_ES6 */, require(3) /* polyfill_RegExp_toString */, require(4) /* stub_requires_668 */, require(32) /* stub_requires_670 */, require(33) /* polyfill_DOMCollection_forEach */, require(26) /* polyfill_DOMCollection_iterator */, require(125) /* stub_requires_673 */, require(126) /* polyfill_URL_toJSON */, require(114) /* stub_requires_424 */;
    const GProfileDialog = require(604) /* GProfileDialog */;
    exports.exports = class {
      constructor() {
        let exports =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        this._settings = exports;
      }
      getFrame() {
        return this._iframe;
      }
      open(e) {
        const module = gDesigner.getUTM();
        if (module && module.size) {
          const n = new URL(e),
            GProfileDialog = n.searchParams;
          module.forEach((e, t) => GProfileDialog.set(t, e)), (e = n.toString());
        }
        if (
          ((this._iframe = $("<iframe></iframe>")
            .addClass("cross-frame")
            .attr("src", e)
            .appendTo($("body"))),
          this._settings)
        ) {
          const { id: e, className: module, css: require } = this._settings;
          e && this._iframe.attr("id", e),
            module && this._iframe.addClass(module),
            require && this._iframe.css(require);
        }
        let require = this.close.bind(this);
        return (
          this._settings.close && (require = this._settings.close),
          (this._messageHandler = async (e) => {
            if (e.originalEvent.source !== this._iframe[0].contentWindow)
              return;
            let module = e.originalEvent.data;
            const { cmd: i } = module;
            if (i) {
              if (this._settings[i]) return void this._settings[i](module);
              switch (i) {
                case "close":
                  require(module);
                  break;
                case "settings":
                  let e = await gDesigner.getUser();
                  new GProfileDialog(e, "purchase").open();
                  break;
                case "purchase_flow":
                  const { options: i = {} } = module,
                    { immediatePurchase: a = false, closeable: r = true } = i;
                  a &&
                    Object.assign(i, {
                      autoClose: true,
                      paymentCallback: () => {
                        require();
                      },
                    }),
                    r ||
                      Object.assign(i, {
                        paymentCallback: (e) => {
                          let { licenseHasBeenUpgraded: module = false } = e;
                          require({ licenseHasBeenUpgraded: module, closeable: r });
                        },
                      });
                  let s = module.options;
                  gInAppPurchase.getOptions() &&
                    (s = Object.assign({}, gInAppPurchase.getOptions(), s)),
                    gDesigner
                      .openPaymentDialog(null, s)
                      .then(function () {
                        let { reinstate: e } =
                          arguments.length > 0 && undefined !== arguments[0]
                            ? arguments[0]
                            : {};
                        (a && !e) || require({ closeable: r });
                      })
                      .catch(() => {
                        require({ closeable: r });
                      });
                  break;
                case "link":
                  gContainer.openExternalLink(null, module.link);
              }
            }
          }),
          $(window).on("message", this._messageHandler),
          this
        );
      }
      close() {
        let { licenseHasBeenUpgraded: exports = false, closeable: module = true } =
          arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
        this._messageHandler &&
          (module || exports) &&
          ($(window).unbind("message", this._messageHandler),
          this._iframe.remove()),
          exports && gDesigner.requestLicenseUpdate();
      }
      on(e, t) {
        this._iframe.on(e, t);
      }
      postMessage() {
        this._iframe[0].contentWindow.postMessage.apply(
          this._iframe[0].contentWindow,
          arguments
        );
      }
    };
  }