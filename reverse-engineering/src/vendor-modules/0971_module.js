/**
 * chunk.vendor.js Module #971
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      e.exports = {
        MaintenanceStatus: class {
          constructor(e) {
            this._dto = e;
          }
          isCloudMaintenanceEnabled() {
            return !!this._dto.cloud;
          }
          isClientAllowed() {
            return !!this._dto.clientAllowed;
          }
          isMaintenanceEnabled() {
            return (
              !!this.isCloudMaintenanceEnabled() && !this.isClientAllowed()
            );
          }
        },
      };
    }