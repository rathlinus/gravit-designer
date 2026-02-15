/**
 * Module 976
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
  i(4), i(32), i(38), i(33);
  const n = i(171), r = i(375), o = i(170), a = i(526);
  e.exports = class {
    constructor(e) {
      let {
        page: t,
        content: i = "",
        title: a,
        cmd: s = {},
        closeable: l = !0
      } = e;
      const {
        openPurchaseFlow: h,
        close: A
      } = s;
      a = a || o.getValue("GOfferDialogV1", "text.offerdialog-v1-default-title"), this._dialog = n("<div></div>").addClass("g-cloud-ui-offer-dialog-v1"), l && n("<div></div>").addClass("g-cloud-ui-btn-close").append(n("<span></span>").addClass("g-cloud-icon-close")).on("click", () => A && A()).appendTo(this._dialog);
      let c = n("<header></header>").appendTo(this._dialog);
      this._title = n("<span></span>").addClass("title g-cloud-ui-markable").appendTo(c), Array.isArray(a) || (a = [a]), a.forEach(e => {
        n("<label></label>").html(e).appendTo(this._title), n("<br>").appendTo(this._title);
      });
      let p = n("<main></main>").appendTo(this._dialog);
      if ("object" == typeof i) {
        n("<span></span>").addClass("title").html(i.title).appendTo(p), n("<div></div>").addClass("topics").appendTo(p).append(i.data.map(e => n("<div></div>").addClass("topic").append(n("<span></span>").addClass("g-cloud-icon-v").text(e))));
      } else
        "string" == typeof i && n("<span></span>").addClass("title no-bold").html(i).appendTo(p);
      n("<div></div>").addClass("banner").append(n("<span></span>").text(o.getValue("GOfferDialogV1", "text.upgrade-tip"))).appendTo(this._dialog);
      let u = n("<footer></footer>").appendTo(this._dialog), d = n("<div></div>").addClass("info").appendTo(u);
      n("<button></button>").addClass("g-cloud-ui-btn-pro highlighted").text(this._getFooterInfo().buy).on("click", () => {
        r("".concat(t || "offer", "_click_buybutton")), h && h();
      }).appendTo(d), n("<div></div>").addClass("money-back").appendTo(d);
    }
    _getFooterInfo() {
      return a.footerInfo[this._prefix || a.FooterInfoType.Normal];
    }
    getHTMLElement() {
      return this._dialog;
    }
  };
}
