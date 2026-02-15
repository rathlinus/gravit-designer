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

function (exports, module, require) {
  "use strict";
  require(19) /* polyfill_Array_iterator */, require(26) /* polyfill_DOMCollection_iterator */, exports.exports = function (e) {
    e.microsoftStoreServices = {
      getAccessToken: () => e.GET("/microsoft/store/services/token").then(e => e.token),
      updateB2BKeys: t => {
        let {
          accessToken: require,
          keys: n
        } = t;
        return e.fetchJSON("/microsoft/store/services/b2b/keys", {
          method: "POST",
          body: {
            accessToken: require,
            keys: n
          }
        });
      },
      syncLicense: () => e.fetchJSON("/microsoft/store/services/license/sync", { method: "POST" })
    };
  };
}
