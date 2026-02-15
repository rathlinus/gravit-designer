/**
 * Webpack Module #1680
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  (require(19) /* polyfill_Array_iterator */,
    require(8) /* polyfill_bundle_ES6 */,
    require(20) /* polyfill_RegExp_exec */,
    require(3) /* polyfill_RegExp_toString */,
    require(34) /* polyfill_String_replace */,
    require(26) /* polyfill_DOMCollection_iterator */,
    require(125) /* stub_requires_673 */,
    require(126) /* polyfill_URL_toJSON */,
    require(114)) /* stub_requires_424 */;
  var GCore = require(1) /* GCore */,
    AppSettings = require(10); /* AppSettings */
  const GOfflineDialog = require(256) /* GOfflineDialog */,
    GSystemDialog = require(44) /* GSystemDialog */,
    s = require(1350); /* module_1350 */
  exports.exports = class {
    async open(e) {
      let module = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
      ((this._url = e), (this._autoClose = module), (this._isPending = true));
      return (await gDesigner.isOfflineAsync())
        ? new Promise((e, t) => {
            GOfflineDialog.openRetryConnection(() => {
              this._open().then(e).catch(t);
            });
          })
        : this._open();
    }
    async _open() {
      if ($('.g-payment-dialog').length) return Promise.reject();
      const exports = s.getInstance();
      this._dialog = $('<div></div>')
        .gDialog({
          className: 'g-payment-dialog',
          releaseOnClose: true,
          closeCallback: () => {
            exports.cancelPurchase();
          },
        })
        .append(
          $('<div></div>')
            .addClass('g-btn-close')
            .append($('<span></span>').addClass('gravit-icon-close'))
            .on('click', () => {
              this._close();
            })
        );
      const module = $('<div></div>').addClass('content').appendTo(this._dialog);
      (this._dialog.addClass('g-loading'), this._dialog.gDialog('open', false));
      const require = this._getURL();
      $('<iframe/>')
        .attr('src', require)
        .on('load', () => {
          this._dialog.removeClass('g-loading');
        })
        .on('error', () => {
          this._dialog.removeClass('g-loading');
        })
        .appendTo(module);
      try {
        await exports.waitForPurchase();
      } catch (e) {
        GSystemDialog.alert(
          GCore.GLocale.getValue('GPaymentDialog', 'text.payment-not-confirmed').replace(
            '%link',
            AppSettings.gApi.link.getSupportUrl()
          )
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
        (n.searchParams.set.apply(n.searchParams, module.split('=')), (exports = n.toString()));
      }
      return exports;
    }
    _close() {
      if (this._isPending) {
        const e = GCore.GLocale.get(
            new GCore.GLocaleKey('GPaymentDialog', 'text.dialog-dont-leave')
          ),
          t = GCore.GLocale.get(new GCore.GLocaleKey('GPaymentDialog', 'text.cancel')),
          n = GCore.GLocale.get(new GCore.GLocaleKey('GPaymentDialog', 'text.finish-my-order'));
        GSystemDialog.confirm(
          e,
          (e) => {
            e ? ((this._autoClose = true), this._isPending || this.close()) : this.close();
          },
          t,
          n
        );
      } else this.close();
    }
    close() {
      this._dialog.gDialog('close');
    }
  };
}
