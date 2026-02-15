/**
 * Module 703
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
  var n = i(269);
  function r(e, t) {
    this._name = n.getName(e), this._key = t;
  }
  r.prototype.getClassReference = function () {
    return this._name;
  }, r.prototype.getKey = function () {
    return this._key;
  }, e.exports = r;
}
