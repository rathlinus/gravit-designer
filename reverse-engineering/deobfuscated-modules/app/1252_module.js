/**
 * Webpack Module #1252
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* module_19 */, require(30) /* module_30 */, require(8) /* module_8 */, require(3) /* module_3 */, require(4) /* module_4 */, require(32) /* module_32 */, require(33) /* module_33 */, require(26) /* module_26 */, require(125) /* module_125 */, require(126) /* module_126 */, require(114) /* module_114 */;
    const o = require(604) /* module_604 */;
    exports.exports = class {
      function Object() { [native code] }() {
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
            o = n.searchParams;
          module.forEach((e, t) => o.set(t, e)), (e = n.toString());
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
                  new o(e, "purchase").open();
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