/**
 * Webpack Module #1680
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(19) /* module_19 */, require(8) /* module_8 */, require(20) /* module_20 */, require(3) /* module_3 */, require(34) /* module_34 */, require(26) /* module_26 */, require(125) /* module_125 */, require(126) /* module_126 */, require(114) /* module_114 */;
    var o = require(1) /* module */,
      i = require(10) /* module_10 */;
    const a = require(256) /* GOfflineDialog */,
      r = require(44) /* GSystemDialog */,
      s = require(1350) /* module_1350 */;
    exports.exports = class {
      async open(e) {
        let module = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
        (this._url = e), (this._autoClose = module), (this._isPending = true);
        return (await gDesigner.isOfflineAsync())
          ? new Promise((e, t) => {
              a.openRetryConnection(() => {
                this._open().then(e).catch(t);
              });
            })
          : this._open();
      }
      async _open() {
        if ($(".g-payment-dialog").length) return Promise.reject();
        const exports = s.getInstance();
        this._dialog = $("<div></div>")
          .gDialog({
            className: "g-payment-dialog",
            releaseOnClose: true,
            closeCallback: () => {
              exports.cancelPurchase();
            },
          })
          .append(
            $("<div></div>")
              .addClass("g-btn-close")
              .append($("<span></span>").addClass("gravit-icon-close"))
              .on("click", () => {
                this._close();
              })
          );
        const module = $("<div></div>").addClass("content").appendTo(this._dialog);
        this._dialog.addClass("g-loading"), this._dialog.gDialog("open", false);
        const require = this._getURL();
        $("<iframe/>")
          .attr("src", require)
          .on("load", () => {
            this._dialog.removeClass("g-loading");
          })
          .on("error", () => {
            this._dialog.removeClass("g-loading");
          })
          .appendTo(module);
        try {
          await exports.waitForPurchase();
        } catch (e) {
          r.alert(
            o.GLocale.getValue(
              "GPaymentDialog",
              "text.payment-not-confirmed"
            ).replace("%link", i.gApi.link.getSupportUrl())
          );
        } finally {
          this._isPending = false;
        }
      }
      _getURL() {
        let exports = this._url;
        const module = gDesigner.getLinkerParam();
        if (module) {
          const n = new URL(exports);
          n.searchParams.set.apply(n.searchParams, module.split("=")),
            (exports = n.toString());
        }
        return exports;
      }
      _close() {
        if (this._isPending) {
          const e = o.GLocale.get(
              new o.GLocaleKey("GPaymentDialog", "text.dialog-dont-leave")
            ),
            t = o.GLocale.get(
              new o.GLocaleKey("GPaymentDialog", "text.cancel")
            ),
            n = o.GLocale.get(
              new o.GLocaleKey("GPaymentDialog", "text.finish-my-order")
            );
          r.confirm(
            e,
            (e) => {
              e
                ? ((this._autoClose = true), this._isPending || this.close())
                : this.close();
            },
            t,
            n
          );
        } else this.close();
      }
      close() {
        this._dialog.gDialog("close");
      }
    };
  }