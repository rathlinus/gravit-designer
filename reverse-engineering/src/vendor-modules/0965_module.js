/**
 * chunk.vendor.js Module #965
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      e.exports = (e) => {
        e.signupGuestUser = (t) =>
          e.fetchJSON("/signupguestuser", {
            method: "POST",
            body: t,
          });
      };
    }