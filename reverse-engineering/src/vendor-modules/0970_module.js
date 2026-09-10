/**
 * chunk.vendor.js Module #970
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      const { MaintenanceStatus: n } = i(971);
      e.exports = function (e) {
        e.maintenance = {
          getStatus: () => e.GET("/maintenance/status").then((e) => new n(e)),
        };
      };
    }