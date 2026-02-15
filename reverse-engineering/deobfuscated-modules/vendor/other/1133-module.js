/**
 * Module 1133
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
  var n = require(0) /* GObject */, r = require(518) /* GNoisePattern */, o = require(600) /* module */;
  function a() {
    o.apply(this, arguments);
  }
  n.inherit(a, r), a.prototype._pattern = null, a.prototype.parse = function () {
    var e = Object.keys(r.Type).map(function (e) {
      return r.Type[e];
    });
    this._pattern = new r(), this._pattern.setType(e[this._data.noiseIndex]);
  }, a.prototype.applyTo = function (e) {
    e.setProperty("_pt", this._pattern);
  }, exports.exports = a;
}
