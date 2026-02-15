/**
 * Webpack Module #1637
 * Type: class
 * Name: GToggleProBETALicenseAction
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */, require(527) /* module_527 */, require(3) /* polyfill_RegExp_toString */;
    var GCore = require(1) /* GCore */,
      GAction = require(31) /* GAction */,
      MenuItemBuilder = require(18) /* MenuItemBuilder */;
    const { gApi: r } = require(10) /* AppSettings */;
    var s = require(337) /* stub_requires_1098 */;
    function l() {}
    GCore.GObject.inherit(l, GAction),
      (l.ID = "toggle-pro-beta-license"),
      (l.prototype.getId = function () {
        return l.ID;
      }),
      (l.prototype.getTitle = function () {
        const exports = gDesigner.getLicense();
        return exports.isPro() && !exports.isExpired()
          ? "Switch to Basic License"
          : "Switch to PRO License";
      }),
      (l.prototype.getCategory = function () {
        return MenuItemBuilder.CATEGORY_HELP;
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
        const exports = await r.getUserSettings(),
          module = (exports.flags && exports.flags.betaProLicense) || false;
        r.updateUserSettings({ flags: { betaProLicense: !module } }).then(() => {
          s.checkLicense();
        });
      }),
      (l.prototype.toString = function () {
        return "[Object GToggleProBETALicenseAction]";
      }),
      (exports.exports = l);
  }