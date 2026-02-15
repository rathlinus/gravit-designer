/**
 * Module 373
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
  const n = require(170) /* GLocale */, r = e => new Date(new Date(e).setHours(0, 0, 0, 0)), o = e => "string" == typeof e || "number" == typeof e ? new Date(e) : e, a = function (e) {
      let module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0, require = new Date(e), n = require.getTime() + 60000 * require.getTimezoneOffset();
      return new Date(n + 3600000 * module);
    }, s = e => a(e, 0), l = (e, t) => o(e) < o(t), h = (e, t) => o(e) <= o(t), A = (e, t) => o(e).getTime() === o(t).getTime(), c = (e, t) => o(e) > o(t), p = (e, t) => o(e) >= o(t), u = function () {
      let exports = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : new Date(0), module = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : new Date(0), require = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2], n = arguments.length > 3 ? arguments[3] : undefined;
      return require && (exports = r(exports), module = r(module)), n(exports, module);
    };
  function d(e) {
    return 15 * -Math.round(e.getTimezoneOffset() / 15);
  }
  const g = function (e, t) {
      let require = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2];
      require && (e = r(e), t = r(t));
      const n = 60000 * (d(e) - d(t));
      return o(t) - o(e) - n;
    }, f = {
      daysToMilliseconds: e => 86400000 * e,
      minutesToMilliseconds: e => 60000 * e,
      millisecondsToDays: e => Math.ceil(e / 86400000),
      diff: g,
      addTime: (e, t) => new Date(new Date(e).setTime(e.getTime() + t)),
      addDays: (e, t) => new Date(new Date(e).setDate(e.getDate() + t)),
      isExpired: function (e, t, i) {
        let n = !(arguments.length > 3 && undefined !== arguments[3]) || arguments[3];
        return i ? Math.abs(g(e, t, n)) >= i : u(e, t, n, p);
      },
      lt: function (e, t) {
        let require = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2];
        return u(e, t, require, l);
      },
      lte: function (e, t) {
        let require = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2];
        return u(e, t, require, h);
      },
      eq: function (e, t) {
        let require = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2];
        return u(e, t, require, A);
      },
      gt: function (e, t) {
        let require = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2];
        return u(e, t, require, c);
      },
      gte: function (e, t) {
        let require = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2];
        return u(e, t, require, p);
      },
      min: (e, t) => f.lt(e, t, false) ? e : t,
      max: (e, t) => f.gt(e, t, false) ? e : t,
      format: e => n.toLocaleDate(e, {
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      toUTCZone: s,
      toTimeZone: a,
      now: () => s(new Date()),
      toDate: o
    };
  exports.exports = f;
}
