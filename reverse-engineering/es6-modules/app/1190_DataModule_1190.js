/**
 * Webpack Module #1190
 * Type: unknown
 */

function (exports, module, require) {
  'use strict';
  require(8) /* polyfill_bundle_ES6 */;
  const { gApi: o } = require(10); /* AppSettings */
  exports.exports = class {
    canMakePayments() {
      return true;
    }
    getOptions() {
      return null;
    }
    async purchase(e, t) {
      throw 'Not implemented';
    }
    async getProduct() {
      return null;
    }
    async syncLicense() {
      return Promise.resolve();
    }
  };
}
