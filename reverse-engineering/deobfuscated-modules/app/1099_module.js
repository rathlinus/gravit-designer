/**
 * Webpack Module #1099
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = require(10) /* AppSettings */;
    class i extends o.License {
      isExpired(e) {
        return super.isExpired(e || gDesigner.now());
      }
      isSpecialPriceExpired(e) {
        return super.isSpecialPriceExpired(e || gDesigner.now());
      }
      isOfflinePeriodExpired(e) {
        return super.isOfflinePeriodExpired(e || gDesigner.now());
      }
    }
    exports.exports = i;
  }