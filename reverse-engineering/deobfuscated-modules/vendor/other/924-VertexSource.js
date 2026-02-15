/**
 * Module 924
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
  var n = require(195) /* module */, r = require(59) /* GVertexInfo */, o = require(7) /* GTransform */, a = require(63) /* GVertexTransformer */, s = require(6) /* GRect */;
  exports.exports = function (e) {
    e.VertexSource = function (e) {
      this.source = e;
    }, e.VertexSource.prototype.source = null, e.VertexSource.prototype._markerSource = null, e.VertexSource.prototype._bbox = null, e.VertexSource.prototype._update = function (e) {
      if (!this._markerSource) {
        var module = (e.fontSize || 20) / 4;
        this._markerSource = new a(this.source, new o(module, 0, 0, module, 0, 0)), this._bbox = r.calculateBounds(this._markerSource, true);
      }
    }, e.VertexSource.prototype.measure = function (e) {
      this._update(e);
      var t = this._bbox || new s(), i = n.measure(" ", e);
      return {
        width: t.getWidth(),
        ascent: i ? i.ascent : t.getHeight(),
        descent: i ? i.descent : 0
      };
    }, e.VertexSource.prototype.draw = function (e, t, i, r, l, h, A) {
      this._update(A);
      var c = this._bbox || new s(), p = new a(this._markerSource, new o(1, 0, 0, 1, -c.getX(), 0));
      n.drawMarker(e, p, A, t, i);
    };
  };
}
