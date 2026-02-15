/**
 * Webpack Module #1637
 * Type: class
 * Name: GToggleProBETALicenseAction
 */

function (exports, module, require) {
  'use strict';
  (require(8) /* polyfill_bundle_ES6 */,
    require(527) /* DataModule_527 */,
    require(3)) /* polyfill_RegExp_toString */;
  var GCore = require(1) /* GCore */,
    GAction = require(31) /* GAction */,
    MenuItemBuilder = require(18);
  const { gApi: r } = require(10);
  var s = require(337);
  class l extends GAction {
    constructor() {
      super();
    }

    getId() {
      return l.ID;
    }

    getTitle() {
      const exports = gDesigner.getLicense();
      return exports.isPro() && !exports.isExpired()
        ? 'Switch to Basic License'
        : 'Switch to PRO License';
    }

    getCategory() {
      return MenuItemBuilder.CATEGORY_HELP;
    }

    getGroup() {
      return 'help';
    }

    isEnabled() {
      return gDesigner.isBeta();
    }

    isVisible() {
      return gDesigner.isBeta();
    }

    async execute() {
      const exports = await r.getUserSettings(),
        module = (exports.flags && exports.flags.betaProLicense) || false;
      r.updateUserSettings({ flags: { betaProLicense: !module } }).then(() => {
        s.checkLicense();
      });
    }

    toString() {
      return '[Object GToggleProBETALicenseAction]';
    }

    static ID = 'toggle-pro-beta-license';

  }
  exports.exports = l;
}