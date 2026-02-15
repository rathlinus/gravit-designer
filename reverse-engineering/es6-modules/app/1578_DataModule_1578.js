/**
 * Webpack Module #1578
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  require(8) /* polyfill_bundle_ES6 */;
  require(1) /* GCore */;
  (require(1327) /* module_1327 */, require(1579)) /* module_1579 */;
  class o {
    static openTrialExpired() {
      return o._openReminder('trialexpired');
    }
    static openTrialMessage() {
      return o._openReminder('trialmessage');
    }
    static openProExpireSoon() {
      return o._openReminder('proexpiresoon');
    }
    static openProExpired() {
      return o._openReminder('proexpired');
    }
    static openUpgradeScreen() {
      return o._openReminder('upgrade');
    }
    static async _openReminder(e) {
      console.info('Reminders are disabled: ', e);
    }
    static _getProduct() {
      return gInAppPurchase.getProduct().catch(() => null);
    }
  }
  exports.exports = o;
}
