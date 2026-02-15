/**
 * Module 1130
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
  var n = require(0) /* GObject */, r = require(158) /* GRadialGradient */, o = require(7) /* GTransform */, a = require(5) /* GPoint */, s = require(12) /* GMath */, l = require(793) /* module */, h = require(598) /* module */;
  function A() {
    l.apply(this, arguments);
  }
  n.inherit(A, l), A.prototype._getGradient = function () {
    if (this._data) {
      var exports = h.parse(this._data.from), module = h.parse(this._data.to), require = 0.5, n = 0.5, l = new a(1, n), A = new a(require, 0), c = new o().translated(exports.getX() - require, exports.getY() - n), p = c.inverted().mapPoint(module), u = p.getX() - require, d = 0;
      s.isEqualEps(u, 0) ? u = -s.ptDist(exports.getX(), exports.getY(), module.getX(), module.getY()) : d = (p.getY() - l.getY()) / u;
      var g = u / 0.5, f = new o().translated(-require, -n).scaled(g, 1).multiplied(new o(1, d, 0, 1, 0, 0)).translated(require, n);
      (f = f.multiplied(c)).inverted() && (c = f);
      var m = new o().translated(-exports.getX(), -exports.getY()).rotated(s.toRadians(90)).translated(exports.getX(), exports.getY()).mapPoint(module);
      m = c.inverted().mapPoint(m);
      var y = g;
      0 !== this._data.elipseLength && 1 !== this._data.elipseLength && (y = (n - m.getY()) / 0.5 * (this._data.elipseLength || 1));
      var _ = m.getY() - n, v = 0;
      return s.isEqualEps(_, 0) || (v = (m.getX() - A.getX()) / _), (f = (f = new o().translated(-require, -n).scaled(1, y).multiplied(new o(1, 0, v, 1, 0, 0)).translated(require, n)).multiplied(c)).inverted() && (c = f), new r(this._getStops(), 0.5, 0.5, 0.5, require, n, c);
    }
    return new r();
  }, exports.exports = A;
}
