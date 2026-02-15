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

function (exports, module, require) {
  var n = require(0) /* GObject */, r = require(562) /* module */;
  function o() {
    r.apply(this, arguments);
  }
  n.inherit(o, r), o.prototype.version = null, o.prototype.parse = function () {
    this.version = parseFloat(this._data.appVersion);
  }, exports.exports = o;
}
