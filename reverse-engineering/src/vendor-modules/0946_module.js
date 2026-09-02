/**
 * chunk.vendor.js Module #946
 * Type: unknown
 */

function (e, t, i) {
      "use strict";

      function n() {}
      ((n.prototype.toDate = function (e) {
        return "string" == typeof e || "number" == typeof e ? new Date(e) : e;
      }),
        (n.prototype.format = function (e, t, i) {
          i = i || {
            year: "numeric",
            month: "long",
            day: "numeric",
          };
          return this.toDate(e).toLocaleDateString(t, i);
        }),
        (e.exports = new n()));
    }