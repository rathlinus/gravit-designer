/**
 * Webpack Module #1190
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    n(8) /* module_8 */;
    const { gApi: o } = n(10) /* module_10 */;
    e.exports = class {
      canMakePayments() {
        return true;
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