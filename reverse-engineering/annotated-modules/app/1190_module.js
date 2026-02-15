/**
 * Webpack Module #1190
 * Type: unknown
 */

function (e, t, n) {
    "use strict";
    n(8) /* module_8 */;
    const { gApi: o } = n(10) /* module_10 */;
    e.exports = class {
      canMakePayments() {
        return !0;
      }
      getOptions() {
        return null;
      }
      async purchase(e, t) {
        throw "Not implemented";
      }
      async getProduct() {
        return null;
      }
      async syncLicense() {
        return Promise.resolve();
      }
    };
  }