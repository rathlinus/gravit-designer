/**
 * Webpack Module #1681
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    n(8) /* polyfill_bundle_ES6 */;
    const o = n(44) /* GSystemDialog */,
      { gApi: i } = n(10) /* AppSettings */,
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