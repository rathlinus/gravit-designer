/**
 * Module 975
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
  require(8) /* polyfill_bundle_ES6 */, require(20) /* polyfill_RegExp_exec */, require(34) /* polyfill_String_replace */;
  const n = require(706) /* GReminderDialog */, r = require(707) /* GPaywallDialog */, o = require(417) /* module */.self(), a = require(354) /* module */, s = require(170) /* GLocale */, {
      TRIAL_MESSAGE_WEB_CONTENT_URL_TEMPLATE: l,
      UPGRADE_SCREEN_WEB_CONTENT_URL_TEMPLATE: h
    } = require(374) /* module */, {DateAPI: A} = require(209) /* module */;
  exports.exports = class {
    constructor() {
      throw new Error("No instance");
    }
    static async newProExpireSoon(e) {
      let {
        impl: module,
        now: require
      } = e;
      return new r({
        type: "reminder/accessending",
        impl: module,
        gApi: o,
        now: require,
        campaign: a.StoreCampaign.TrialSeries
      });
    }
    static newProExpired(e) {
      let {
        impl: module,
        now: require
      } = e;
      return s.setLanguage(module.getLanguage()), new n({
        page: "reminder/proexpired",
        title: s.getValue("GReminderDialog", "text.subscription-expired"),
        dismiss: false,
        impl: module,
        closeable: true,
        campaign: a.StoreCampaign.TrialSeries
      });
    }
    static newTrialExpired(e) {
      let {
        impl: module,
        now: require
      } = e;
      return s.setLanguage(module.getLanguage()), new n({
        page: "reminder/trialexpired",
        title: s.getValue("GReminderDialog", "text.upgrade-screen"),
        closeable: true,
        dismiss: false,
        campaign: a.StoreCampaign.TrialSeries,
        impl: module
      });
    }
    static async newTrialMessage(e) {
      let {
        impl: module,
        now: require
      } = e;
      s.setLanguage(module.getLanguage());
      const r = await module.getLicense().catch(e => null), o = this._getNewTrialMessageTitle(r, require);
      return new n({
        impl: module,
        page: "reminder/trialmessage",
        title: o,
        closeable: true,
        withFooter: false,
        dismiss: false,
        content: {
          type: n.ContentType.Web,
          data: l.replace("%lang", s.getLocaleTagISO6391())
        }
      });
    }
    static newUpgradeScreen(e) {
      let {
        impl: module,
        now: require
      } = e;
      return s.setLanguage(module.getLanguage()), new n({
        page: "reminder/upgrade",
        title: s.getValue("GReminderDialog", "text.upgrade-screen"),
        closeable: true,
        dismiss: false,
        withFooter: false,
        content: {
          type: n.ContentType.Web,
          data: h.replace("%lang", s.getLocaleTagISO6391())
        },
        impl: module
      });
    }
    static _getNewTrialMessageTitle(e) {
      let module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : new Date();
      const require = e && e.expire && A.millisecondsToDays(A.diff(new Date(e.expire), module));
      return 0 === require ? s.getValue("GReminderDialogFactory", "text.expires-today") : require >= 1 ? s.getValue("GReminderDialogFactory", 1 === require ? "text.remaining-day" : "text.remaining-days").replace("%days", require) : s.getValue("GReminderDialog", "text.upgrade-screen");
    }
  };
}
