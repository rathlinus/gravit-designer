/**
 * Webpack Module #1637
 * Type: class
 * Name: GToggleProBETALicenseAction
 */

function (e, t, n) {
    "use strict";
    n(8) /* polyfill_bundle_ES6 */, n(527) /* module_527 */, n(3) /* polyfill_RegExp_toString */;
    var o = n(1) /* module */,
      i = n(31) /* GAction */,
      a = n(18) /* MenuItemBuilder */;
    const { gApi: r } = n(10) /* AppSettings */;
    var s = n(337) /* stub_requires_1098 */;
    function l() {}
    o.GObject.inherit(l, i),
      (l.ID = "toggle-pro-beta-license"),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        const e = gDesigner.getLicense();
        return e.isPro() && !e.isExpired()
          ? "Switch to Basic License"
          : "Switch to PRO License";
      }),
      (l.prototype.getCategory = function () {
        return a.CATEGORY_HELP;
      }),
      (l.prototype.getGroup = function () {
        return "help";
      }),
      (l.prototype.isEnabled = function () {
        return gDesigner.isBeta();
      }),
      (l.prototype.isVisible = function () {
        return gDesigner.isBeta();
      }),
      (l.prototype.execute = async function () {
        const e = await r.getUserSettings(),
          t = (e.flags && e.flags.betaProLicense) || !1;
        r.updateUserSettings({ flags: { betaProLicense: !t } }).then(() => {
          s.checkLicense();
        });
      }),
      (l.prototype.toString = function () {
        return "[Object GToggleProBETALicenseAction]";
      }),
      (e.exports = l);
  }