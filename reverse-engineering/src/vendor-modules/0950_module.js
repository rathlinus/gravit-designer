/**
 * chunk.vendor.js Module #950
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      (i(19), i(168), i(30), i(4), i(322), i(13), i(169), i(26));
      const n = i(287),
        r = i(352);
      class o {
        static get ALL_PERMISSIONS_DENIED() {
          return Object.values(r).reduce(
            (e, t) =>
              Object.assign(e, {
                [t]: !1,
              }),
            {},
          );
        }
        static newFromPermissions() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (e[r.OWNER]) return n.Owner;
          if (!e[r.ACCESS]) return n.NoAccess;
          const t = Object.assign(
              {},
              o.ALL_PERMISSIONS_DENIED,
              Object.entries(e).reduce((e, t) => {
                let [i, n] = t;
                return Object.assign(e, {
                  [i]: n || !1,
                });
              }, {}),
            ),
            i = Object.keys(t).length,
            a = Object.values(n).find((e) => {
              let { permissions: n } = e;
              const r = Object.entries(
                Object.assign({}, o.ALL_PERMISSIONS_DENIED, n),
              );
              if (r.length === i)
                return r.every((e) => {
                  let [i, n] = e;
                  return t[i] === n;
                });
            });
          return a || (e[r.COPY] ? n.Developer : n.Viewer);
        }
      }
      e.exports = o;
    }