/**
 * Webpack Module #1490
 * Type: unknown
 */

function (exports, module, require) {
    "use strict";
    require(8) /* module_8 */;
    const { gApi: o } = require(10) /* module_10 */,
      i = require(536) /* module_536 */;
    class a {
      static async checkMaintenance() {
        try {
          const e = await this._cache.get().catch(() => null);
          return !!e && e.isMaintenanceEnabled();
        } catch (e) {
          console.log("Maintenance status", e);
        }
        return false;
      }
    }
    (a._cache = new i(() => o.maintenance.getStatus(), 6e4)), (exports.exports = a);
  }