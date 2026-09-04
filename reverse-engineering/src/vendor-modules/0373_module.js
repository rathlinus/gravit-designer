/**
 * chunk.vendor.js Module #373
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      const n = i(170),
        r = (e) => new Date(new Date(e).setHours(0, 0, 0, 0)),
        o = (e) =>
          "string" == typeof e || "number" == typeof e ? new Date(e) : e,
        a = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            i = new Date(e),
            n = i.getTime() + 6e4 * i.getTimezoneOffset();
          return new Date(n + 36e5 * t);
        },
        s = (e) => a(e, 0),
        l = (e, t) => o(e) < o(t),
        h = (e, t) => o(e) <= o(t),
        A = (e, t) => o(e).getTime() === o(t).getTime(),
        c = (e, t) => o(e) > o(t),
        p = (e, t) => o(e) >= o(t),
        u = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : new Date(0),
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : new Date(0),
            i =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            n = arguments.length > 3 ? arguments[3] : void 0;
          return (i && ((e = r(e)), (t = r(t))), n(e, t));
        };

      function d(e) {
        return 15 * -Math.round(e.getTimezoneOffset() / 15);
      }
      const g = function (e, t) {
          let i =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          i && ((e = r(e)), (t = r(t)));
          const n = 6e4 * (d(e) - d(t));
          return o(t) - o(e) - n;
        },
        f = {
          daysToMilliseconds: (e) => 864e5 * e,
          minutesToMilliseconds: (e) => 6e4 * e,
          millisecondsToDays: (e) => Math.ceil(e / 864e5),
          diff: g,
          addTime: (e, t) => new Date(new Date(e).setTime(e.getTime() + t)),
          addDays: (e, t) => new Date(new Date(e).setDate(e.getDate() + t)),
          isExpired: function (e, t, i) {
            let n =
              !(arguments.length > 3 && void 0 !== arguments[3]) ||
              arguments[3];
            return i ? Math.abs(g(e, t, n)) >= i : u(e, t, n, p);
          },
          lt: function (e, t) {
            let i =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
            return u(e, t, i, l);
          },
          lte: function (e, t) {
            let i =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
            return u(e, t, i, h);
          },
          eq: function (e, t) {
            let i =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
            return u(e, t, i, A);
          },
          gt: function (e, t) {
            let i =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
            return u(e, t, i, c);
          },
          gte: function (e, t) {
            let i =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
            return u(e, t, i, p);
          },
          min: (e, t) => (f.lt(e, t, !1) ? e : t),
          max: (e, t) => (f.gt(e, t, !1) ? e : t),
          format: (e) =>
            n.toLocaleDate(e, {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
          toUTCZone: s,
          toTimeZone: a,
          now: () => s(new Date()),
          toDate: o,
        };
      e.exports = f;
    }