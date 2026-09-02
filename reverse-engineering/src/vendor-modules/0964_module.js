/**
 * chunk.vendor.js Module #964
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      e.exports = (e) => {
        e.magicLink = {
          create: (t, i) =>
            e.fetchJSON(
              "/magiclink/create",
              {
                method: "POST",
                body: {
                  email: t,
                },
              },
              i,
            ),
          authenticate: (t, i, n) =>
            e.fetchJSON("/magiclink/authenticate", {
              method: "POST",
              body: {
                token: t,
                fileID: i,
                publicShareToken: n,
              },
            }),
          checkSharedFileExist: (t) =>
            e.fetchJSON("/magiclink/fileExist", {
              method: "POST",
              body: {
                token: t.token,
                fileID: t.fileID,
              },
            }),
        };
      };
    }