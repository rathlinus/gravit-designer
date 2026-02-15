/**
 * Module 956
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
  e.exports = function (e) {
    e.fetchSync = function () {
      let {
        path: t = "",
        method: i = "GET",
        withCredentials: n = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const r = { token: e.token }, o = new XMLHttpRequest();
      return o.open(i, e.getUrl(e.url + t, r), !1), o.withCredentials = n, o.send(null), o;
    };
  };
}
