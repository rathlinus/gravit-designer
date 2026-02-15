/**
 * Webpack Module #1681
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* module_8 */;
    const o = require(44) /* GSystemDialog */,
      { gApi: i } = require(10) /* module_10 */,
      a = require(1350) /* module_1350 */;
    exports.exports = class {
      async open(e) {
        try {
          gContainer.openExternalLink(null, e);
          return a.getInstance().waitForPurchase();
        } catch (e) {
          o.alert(i.formatError(e));
        }
      }
    };
  }