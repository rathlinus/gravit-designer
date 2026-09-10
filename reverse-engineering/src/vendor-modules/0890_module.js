/**
 * chunk.vendor.js Module #890
 * Type: unknown
 */

function (e, t) {
      function i() {}
      ((i.prototype.toDate = function (e) {
        return "string" == typeof e || "number" == typeof e ? new Date(e) : e;
      }),
        (i.prototype.format = function (e, t, i) {
          i = i || {
            year: "numeric",
            month: "long",
            day: "numeric",
          };
          return this.toDate(e).toLocaleDateString(t, i);
        }),
        (e.exports = new i()));
    }