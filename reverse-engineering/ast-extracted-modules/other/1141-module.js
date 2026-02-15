/**
 * Module 1141
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
  var n = i(0), r = i(562);
  function o() {
    r.apply(this, arguments);
  }
  n.inherit(o, r), o.prototype.version = null, o.prototype.parse = function () {
    this.version = parseFloat(this._data.appVersion);
  }, e.exports = o;
}
