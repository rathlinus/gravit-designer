/**
 * chunk.vendor.js Module #963
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      e.exports = function (e) {
        e.tokenIssuer = {
          getWebCDR: (t, i) =>
            e.fetchJSON("/tokenissuer/webcdr", {
              method: "POST",
              body: {
                fileId: t,
                data: i,
              },
            }),
        };
      };
    }