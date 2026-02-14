/**
 * Module 706
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

function (e, t, i) {
  "use strict";
  const n = i(171), r = i(375), o = i(526), {learnmore: a} = i(253), s = i(170), l = i(325);
  i(417).self();
  e.exports = class {
    static get ContentType() {
      return o.ContentType;
    }
    static get __i18n__() {
      return "GReminderDialog";
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
        getLanguage() {
          throw new Error("Not implemented");
        }
      };
    }
    constructor(e) {
      let {
        title: t,
        product: i,
        dismiss: h,
        impl: A,
        closeable: c,
        page: p,
        campaign: u,
        withFooter: d,
        content: g = o.DEFAULT_CONTENT
      } = e;
      this._impl = A, s.setLanguage(this._impl.getLanguage());
      let f = null;
      h && (f = {
        title: s.get(new l("GReminderDialog", "text.continue-as-free")),
        execute: () => {
          r("".concat(p, "_click_continuebutton")), this.close();
        }
      });
      const m = new o({
        page: p,
        title: t,
        content: g,
        action: f,
        product: i,
        cmd: {
          close: this.close.bind(this),
          openPurchaseFlow: () => {
            this._impl.openPurchaseFlow({
              dialog: this,
              options: { closeable: c }
            }), c && this.close();
          }
        },
        closeable: c,
        withFooter: d
      }).getHTMLElement();
      this._htmlElement = n("<div></div>").addClass("g-cloud-ui-reminder-dialog g-dialog").append(n("<div></div>").addClass("g-cloud-ui-reminder-dialog-content g-dialog-content").append(m)), a || this._htmlElement.addClass("g-cloud-ui-no-learn-more");
    }
    open() {
      n(".g-cloud-ui-reminder-dialog").length || this._impl.open({ dialog: this });
    }
    close() {
      this._impl.close({ dialog: this });
    }
    getHTMLElement() {
      return this._htmlElement;
    }
    toString() {
      return "[Object GReminderDialog]";
    }
  };
}
