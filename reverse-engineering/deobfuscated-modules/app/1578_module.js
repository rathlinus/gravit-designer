/**
 * Webpack Module #1578
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    n(8) /* module_8 */;
    n(1) /* module_1 */;
    n(1327) /* module_1327 */, n(1579) /* module_1579 */;
    class o {
      static openTrialExpired() {
        return o._openReminder("trialexpired");
      }
      static openTrialMessage() {
        return o._openReminder("trialmessage");
      }
      static openProExpireSoon() {
        return o._openReminder("proexpiresoon");
      }
      static openProExpired() {
        return o._openReminder("proexpired");
      }
      static openUpgradeScreen() {
        return o._openReminder("upgrade");
      }
      static async _openReminder(e) {
        console.info("Reminders are disabled: ", e);
      }
      static _getProduct() {
        return gInAppPurchase.getProduct().catch(() => null);
      }
    }
    e.exports = o;
  }