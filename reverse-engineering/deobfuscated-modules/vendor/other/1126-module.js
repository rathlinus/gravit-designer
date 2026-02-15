/**
 * Module 1126
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
  var n = require(0) /* GObject */, r = require(432) /* GInnerShadowEffect */, o = require(597) /* module */, a = require(599) /* module */;
  function s() {
    o.apply(this, arguments);
  }
  n.inherit(s, o), o.prototype._getEffect = function () {
    var e = new a(this._data.color), t = new r();
    return t.setProperties([
      "r",
      "x",
      "y",
      "pat",
      "opc"
    ], [
      this._data.blurRadius,
      this._data.offsetX,
      this._data.offsetY,
      e._color,
      e._alpha
    ]), t;
  }, exports.exports = s;
}
