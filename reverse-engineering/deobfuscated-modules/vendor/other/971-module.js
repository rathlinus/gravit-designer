/**
 * Module 971
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (exports, module, require) {
  "use strict";
  exports.exports = {
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
        return !!this.isCloudMaintenanceEnabled() && !this.isClientAllowed();
      }
    }
  };
}
