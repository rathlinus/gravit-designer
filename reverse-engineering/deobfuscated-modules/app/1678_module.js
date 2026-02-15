/**
 * Webpack Module #1678
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    const o = require(1244) /* module_1244 */,
      GCleverbridgePurchaseManager = require(1679) /* GCleverbridgePurchaseManager */,
      GWindowsStorePurchaseManager = require(1682) /* GWindowsStorePurchaseManager */,
      r = require(1683) /* module_1683 */;
    exports.exports = class {
      static newInAppPurchase(e) {
        switch (e) {
          case o.Windows:
            return new GWindowsStorePurchaseManager();
          case o.Apple:
            return new r();
          default:
            return new GCleverbridgePurchaseManager();
        }
      }
    };
  }