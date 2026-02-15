/**
 * Module 980
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
  i(8), i(20), i(3), i(34), i(38);
  const n = i(171), r = i(170), o = i(325), {SUPPORT_URL: a} = i(374);
  function s(e, t, i) {
    this._dialog = n("<div></div>").addClass("g-dialog-content"), this._htmlElement = n("<div></div>").addClass("g-cloud-ui-dialog-container g-dialog-container").append(n("<div></div>").addClass("g-cloud-ui-offline-dialog g-dialog").append(this._dialog)), n("<div></div>").addClass("logo").appendTo(this._dialog), n("<div></div>").addClass("content").append(n("<span></span>").addClass("title").html(e)).append(n("<span></span>").addClass("subtitle").html(t)).append(n("<div></div>").addClass("buttons").append(i.map(e => {
      let {
        label: t,
        onclick: i,
        highlighted: r
      } = e;
      return n("<button></button>").append(n("<span></span>").text(t)).addClass("g-cloud-ui-btn-pro " + (r ? "highlighted" : "")).on("click", () => i(this));
    }))).append(n("<span></span>").addClass("footer").html(r.getValue("GOfflineDialog", "text.have-questions").replace("%link", a))).appendTo(this._dialog);
  }
  s.openRetryConnection = async function (e, t) {
    new s(r.get(new o("GOfflineDialog", "text.retry-connection")).replace("%name", e ? e.name || e.email : "there"), "", [
      {
        label: r.get(new o("GOfflineDialog", "text.retry")),
        highlighted: !0,
        onclick: async e => {
          var i;
          e._dialog.addClass("g-cloud-ui-loading"), await (i = 500, new Promise(e => setTimeout(e, i))), e._dialog.removeClass("g-cloud-ui-loading"), navigator.onLine && (t && t(), e.close());
        }
      },
      {
        label: r.get(new o("GOfflineDialog", "text.cancel")),
        onclick: e => e.close()
      }
    ]).open();
  }, s.prototype._dialog = null, s.prototype.open = function () {
    this._htmlElement.appendTo(n("body"));
  }, s.prototype.close = function () {
    this._htmlElement.remove();
  }, s.prototype.toString = function () {
    return "[Object GOfflineDialog]";
  }, e.exports = s;
}
