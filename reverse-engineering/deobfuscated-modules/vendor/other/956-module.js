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

function (exports, module, require) {
  "use strict";
  exports.exports = function (e) {
    e.fetchSync = function () {
      let {
        path: module = "",
        method: require = "GET",
        withCredentials: n = true
      } = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
      const r = { token: e.token }, o = new XMLHttpRequest();
      return o.open(require, e.getUrl(e.url + module, r), false), o.withCredentials = n, o.send(null), o;
    };
  };
}
