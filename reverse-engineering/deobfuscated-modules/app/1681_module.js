/**
 * Webpack Module #1681
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    n(8) /* module_8 */;
    const o = n(44) /* GSystemDialog */,
      { gApi: i } = n(10) /* module_10 */,
      a = n(1350) /* module_1350 */;
    e.exports = class {
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