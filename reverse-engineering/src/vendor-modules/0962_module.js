/**
 * chunk.vendor.js Module #962
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      e.exports = function (e) {
        e.QA = {
          isEnabled: () =>
            e
              .GET("/qa")
              .then(() => !0)
              .catch(() => !1),
          listUsers: (t) => e.GET("/qa/users", t),
          insertAccount: (t) =>
            e.fetchJSON("/qa/user", {
              method: "PUT",
              body: t,
            }),
          deleteAccount: (t) =>
            e.fetchJSON("/qa/user/" + t, {
              method: "DELETE",
            }),
        };
      };
    }