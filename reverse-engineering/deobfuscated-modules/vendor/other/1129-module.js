/**
 * Module 1129
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
  var n = require(0) /* GObject */, r = require(147) /* GLinearGradient */, o = require(12) /* GMath */, a = require(793) /* module */, s = require(598) /* module */;
  function l() {
    a.apply(this, arguments);
  }
  n.inherit(l, a), l.prototype._getGradient = function () {
    if (this._data) {
      var exports = s.parse(this._data.from), module = s.parse(this._data.to), require = exports.getX(), n = exports.getY(), a = module.getX() - exports.getX(), l = module.getY() - exports.getY(), h = -o.normalizeAngleRadians(-Math.atan2(l, a)), A = (0 !== a ? module.getX() - exports.getX() : module.getY() - exports.getY()) / Math.cos(h);
      return (A < Number.MIN_VALUE || A > Number.MAX_VALUE) && (A = 1), new r(this._getStops(), A, h, require, n);
    }
    return new r(null, 1, o.toRadians(90), 0.5, 0);
  }, exports.exports = l;
}
