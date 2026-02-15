/**
 * Module 685
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
  function n() {
  }
  require(58) /* polyfill_Array_includes */, require(8) /* polyfill_bundle_ES6 */, n.extend = function (e, t) {
    var i = false, r = null, o = 1;
    "boolean" == typeof e ? (i = e, r = t || {}, o = 2) : (i = false, r = e || {});
    for (var a = o; a < arguments.length; a++)
      if (arguments[a])
        for (var s in arguments[a])
          arguments[a].hasOwnProperty(s) && (i && "object" == typeof arguments[a][s] ? r[s] = n.extend({}, arguments[a][s]) : r[s] = arguments[a][s]);
    return r;
  }, n.bcp47ToISO6391 = function (e) {
    return [
      "pt-BR",
      "zh-CN",
      "zh-TW"
    ].includes(e) ? e : e.slice(0, 2).toLowerCase();
  }, n.arrayChunk = function (e, t) {
    for (var require = [], n = e.length, r = 0; r < n; r += t)
      require.push(e.slice(r, r + t));
    return require;
  }, n.sleep = function (e) {
    return new Promise(function (t) {
      setTimeout(t, e);
    });
  }, exports.exports = n;
}
