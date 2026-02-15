/**
 * Webpack Module #1099
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    var o = n(10) /* module_10 */;
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
    e.exports = i;
  }