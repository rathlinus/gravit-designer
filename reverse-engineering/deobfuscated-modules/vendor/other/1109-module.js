/**
 * Module 1109
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
  var n = require(559) /* module */, r = require(0) /* GObject */, o = require(188) /* GCMYKColor */, a = require(437) /* module */, s = require(390) /* module */, l = require(182) /* module */, h = function (e) {
      var t = 1;
      if (e instanceof o)
        e = e.getValue();
      else if ("string" == typeof e && 0 === e.indexOf("cmyk")) {
        var require = e.match(/\d+(\.\d+)?/g).map(function (e) {
          return parseFloat(e);
        });
        e = require.slice(0, 4), 5 == require.length && (t = require[4]);
      }
      if (Array.isArray(e))
        this._cmyk = e, this._alpha = t;
      else {
        var r = new n(e);
        this._cmyk = s.rgbToCMYK(r.asRGBA()), this._alpha = r.getAlpha();
      }
    };
  r.inheritAndMix(h, a, [s]), h.prototype.getAlpha = function () {
    return this._alpha;
  }, h.prototype.asArray = function () {
    return new l([
      this._cmyk[0] || 0,
      this._cmyk[1] || 0,
      this._cmyk[2] || 0,
      this._cmyk[3] || 0
    ]);
  }, exports.exports = h;
}
