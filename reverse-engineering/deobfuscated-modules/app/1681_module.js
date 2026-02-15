/**
 * Webpack Module #1681
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* polyfill_bundle_ES6 */;
    const GSystemDialog = require(44) /* GSystemDialog */,
      { gApi: i } = require(10) /* AppSettings */,
      a = require(1350) /* module_1350 */;
    exports.exports = class {
      async open(e) {
        try {
          gContainer.openExternalLink(null, e);
          return a.getInstance().waitForPurchase();
        } catch (e) {
          GSystemDialog.alert(i.formatError(e));
        }
      }
    };
  }