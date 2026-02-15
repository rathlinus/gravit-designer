/**
 * Webpack Module #1678
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    const o = require(1244) /* module_1244 */,
      i = require(1679) /* module_1679 */,
      a = require(1682) /* module_1682 */,
      r = require(1683) /* module_1683 */;
    exports.exports = class {
      static newInAppPurchase(e) {
        switch (e) {
          case o.Windows:
            return new a();
          case o.Apple:
            return new r();
          default:
            return new i();
        }
      }
    };
  }