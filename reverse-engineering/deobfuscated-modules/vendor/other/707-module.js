/**
 * Module 707
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (exports, module, require) {
  "use strict";
  require(19) /* polyfill_Array_iterator */, require(30) /* polyfill_Object_assign */, require(57) /* polyfill_parseInt */, require(8) /* polyfill_bundle_ES6 */, require(20) /* polyfill_RegExp_exec */, require(34) /* polyfill_String_replace */, require(26) /* polyfill_DOMCollection_iterator */;
  const n = require(171) /* module_171 */, r = require(373) /* DateAPI */, o = e => new Promise(t => setTimeout(t, e)), a = require(526) /* module */, s = require(976) /* module */, l = require(354) /* module */, h = require(170) /* GLocale */;
  exports.exports = class {
    static get __i18n__() {
      return "GPaywallDialog";
    }
    static get Impl() {
      return class {
        open() {
          throw new Error("Not implemented");
        }
        close() {
          throw new Error("Not implemented");
        }
        openPurchaseFlow() {
          throw new Error("Not implemented");
        }
        openExternalLink() {
          throw new Error("Not implemented");
        }
        getProduct() {
          throw new Error("Not implemented");
        }
        getLicense() {
          throw new Error("Not implemented");
        }
        getUser() {
          throw new Error("Not implemented");
        }
        getLanguage() {
          throw new Error("Not implemented");
        }
      };
    }
    constructor(e) {
      let module, {
          type: require = "reminder",
          impl: o,
          gApi: A,
          now: c,
          campaign: p
        } = e;
      this._impl = o;
      const u = () => p || module || l.StoreCampaign.TrialSeries;
      h.setLanguage(this._impl.getLanguage()), A.setLanguage(this._impl.getLanguage()), this._htmlElement = n("<div></div>").addClass("g-cloud-ui g-cloud-ui-paywall-dialog g-dialog"), this._dialog = n("<div></div>").addClass("g-cloud-ui-paywall-dialog-content g-dialog-content g-cloud-ui-loading").appendTo(this._htmlElement);
      const d = "paywall/".concat(require);
      let g, f;
      "subscribe" === require && (g = [
        h.getValue("GPaywallDialog", "text.offerdialog-v1-subscribe-title-1"),
        h.getValue("GPaywallDialog", "text.offerdialog-v1-subscribe-title-2")
      ], f = a.DEFAULT_CONTENT, module = l.Campaign.UpgradeIntermintent);
      let m = new s({
        campaign: u(),
        page: d,
        title: g,
        content: f,
        cmd: { close: this.close.bind(this) }
      }).getHTMLElement().appendTo(this._dialog);
      c = c || r.now(), Promise.all([this._impl.getLicense()]).then(e => {
        let [n] = e;
        this._dialog.removeClass("g-cloud-ui-loading");
        let o = g, A = f;
        if ("subscribe" !== require) {
          let e = r.millisecondsToDays(r.diff(c, new Date(n.expire)));
          if (o = h.getValue("GPaywallDialog", 1 === e ? "text.remaining-day" : "text.remaining-days").replace("%days", e).replace("%day", e), e >= 0)
            0 === e && (o = h.getValue("GPaywallDialog", "text.expires-today")), A = h.getValue("GPaywallDialog", "text.access-message1"), module = l.StoreCampaign.TrialSeries;
          else {
            o = h.getValue("GPaywallDialog", "text.pretrial-title");
            const e = [
                () => {
                  A = h.getValue("GPaywallDialog", "text.trial-message1");
                },
                () => {
                  A = h.getValue("GPaywallDialog", "text.trial-message2");
                },
                () => {
                  A = Object.assign({}, a.DEFAULT_CONTENT, { title: h.getValue("GPaywallDialog", "text.pretrial-subtitle") });
                }
              ], t = r.millisecondsToDays(r.diff(new Date(n.created), c)), i = parseInt((t - 1) / 15 % e.length) || 0;
            e[Math.max(i, 0)].call(this);
          }
        }
        m.replaceWith(new s({
          page: d,
          title: o,
          content: A,
          campaign: u(),
          cmd: {
            openPurchaseFlow: () => {
              this._impl.openPurchaseFlow({ dialog: this }), this.close();
            },
            close: this.close.bind(this)
          }
        }).getHTMLElement());
      }).catch(() => this._dialog.removeClass("g-cloud-ui-loading"));
    }
    getHTMLElement() {
      return this._htmlElement;
    }
    async open() {
      n(".g-cloud-ui-paywall-dialog").length || (this._impl.open({ dialog: this }), await o(100), this._htmlElement.addClass("slide-up"));
    }
    async close() {
      let {
        licenseHasBeenUpgraded: exports = false
      } = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      this._htmlElement.removeClass("slide-up"), await o(1000), this._impl.close({
        dialog: this,
        licenseHasBeenUpgraded: exports
      });
    }
    toString() {
      return "[Object GPaywallDialog]";
    }
  };
}
