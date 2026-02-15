/**
 * Module 961
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

function (e, t, i) {
  "use strict";
  i(19), i(26), e.exports = function (e) {
    e.microsoftStoreServices = {
      getAccessToken: () => e.GET("/microsoft/store/services/token").then(e => e.token),
      updateB2BKeys: t => {
        let {
          accessToken: i,
          keys: n
        } = t;
        return e.fetchJSON("/microsoft/store/services/b2b/keys", {
          method: "POST",
          body: {
            accessToken: i,
            keys: n
          }
        });
      },
      syncLicense: () => e.fetchJSON("/microsoft/store/services/license/sync", { method: "POST" })
    };
  };
}
