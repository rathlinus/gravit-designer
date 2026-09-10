/**
 * chunk.vendor.js Module #961
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      (i(19),
        i(26),
        (e.exports = function (e) {
          e.microsoftStoreServices = {
            getAccessToken: () =>
              e.GET("/microsoft/store/services/token").then((e) => e.token),
            updateB2BKeys: (t) => {
              let { accessToken: i, keys: n } = t;
              return e.fetchJSON("/microsoft/store/services/b2b/keys", {
                method: "POST",
                body: {
                  accessToken: i,
                  keys: n,
                },
              });
            },
            syncLicense: () =>
              e.fetchJSON("/microsoft/store/services/license/sync", {
                method: "POST",
              }),
          };
        }));
    }