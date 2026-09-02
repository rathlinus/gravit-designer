/**
 * chunk.vendor.js Module #820
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      const n = {
        production: "GTM-PCQVB7H",
        trunk: "GTM-PXF3B3T",
        lts: "GTM-NQ8344N",
        beta: "GTM-NW9G8S4",
        rc: "GTM-TTRN3TK",
      };
      e.exports = class {
        static getContainerId() {
          return (
            n[
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ""
            ] || n.trunk
          );
        }
      };
    }