/**
 * Module 598
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
  var n = require(5) /* GPoint */;
  function r() {
    throw new Error("No instance");
  }
  r.parse = function (e) {
    var t = e.replace(/{|}/g, "").trim().split(",");
    return new n(parseFloat(t[0]), parseFloat(t[1]));
  }, exports.exports = r;
}
