/**
 * Webpack Module #1637
 * Type: class
 * Name: GToggleProBETALicenseAction
 */

function (exports, module, require) {
    "use strict";
    require(8) /* module_8 */, require(527) /* module_527 */, require(3) /* module_3 */;
    var o = require(1) /* module */,
      i = require(31) /* GAction */,
      a = require(18) /* module_18 */;
    const { gApi: r } = require(10) /* module_10 */;
    var s = require(337) /* module_337 */;
    function l() {}
    o.GObject.inherit(l, i),
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