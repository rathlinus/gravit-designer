/**
 * Module 1131
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
  var n = require(0) /* GObject */, r = require(283) /* GAngularGradient */, o = require(793) /* module */;
  function a() {
    o.apply(this, arguments);
  }
  n.inherit(a, o), a.prototype._getGradient = function () {
    if (this._data) {
      var exports = this._getStops();
      return exports.sort(function (e, t) {
        return e.position - t.position;
      }), exports.forEach(function (t, i) {
        i > 0 && i < exports.length - 1 && (t.position = 1 - t.position);
      }), new r(exports);
    }
    return new r();
  }, exports.exports = a;
}
