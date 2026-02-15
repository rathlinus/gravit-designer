/**
 * Module 141
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
  var n = require(5) /* GPoint */, r = require(87) /* GVertexSource */, o = require(48) /* GVertex */, a = require(12) /* GMath */;
  function s(e, t, i, r) {
    if (this._source = e, this._transform = t || null, this._alignX = this._alignY = i ? 0 : 0.5, this._bbox = r, this._transform && (this._invTrf = this._transform.inverted()), r) {
      var o = this._transform.mapQuadrilateral(this._bbox), s = new n(a.round(o[0].getX() + l, true, 2) + this._alignX, a.round(o[0].getY() + l, true, 2) + this._alignY), h = new n(a.round(o[1].getX() + l, true, 2) + this._alignX, a.round(o[1].getY() + l, true, 2) + this._alignY), A = new n(a.round(o[2].getX() + l, false, 2) + this._alignX, a.round(o[2].getY() + l, false, 2) + this._alignY), c = new n(a.round(o[3].getX() + l, false, 2) + this._alignX, a.round(o[3].getY() + l, false, 2) + this._alignY), p = o[0].getX(), u = o[0].getY(), d = o[1].getX(), g = o[1].getY(), f = o[2].getX(), m = o[2].getY();
      this._bDiv1 = (g - m) * (p - f) + (f - d) * (u - m), d = o[2].getX(), g = o[2].getY(), f = o[3].getX(), m = o[3].getY(), this._bDiv2 = (g - m) * (p - f) + (f - d) * (u - m), this._bbox = o, this._alignedBBox = [
        s,
        h,
        A,
        c
      ];
    }
  }
  require(0) /* GObject */.inherit(s, r);
  var l = 1e-10;
  s.prototype._bbox = null, s.prototype._alignedBBox = null, s.prototype._bDiv1 = 0, s.prototype._bDiv2 = 0, s.prototype._source = null, s.prototype._transform = null, s.prototype._invTrf = null, s.prototype._alignX = 0.5, s.prototype._alignY = 0.5, s.prototype.rewindVertices = function (e) {
    return this._source.rewindVertices(e);
  }, s.prototype.readVertex = function (e) {
    if (this._source.readVertex(e)) {
      if (e.command >= o.Command.Move && e.command < o.Command.Close && this._invTrf)
        if (0 !== this._bDiv1 || 0 !== this._bDiv2) {
          this._transform.map(e);
          var module = this._bbox, require = module[0].getX(), n = module[0].getY(), r = module[1].getX(), a = module[1].getY(), s = module[2].getX(), h = module[2].getY(), A = (a - h) * (e.x - s) + (s - r) * (e.y - h), c = (h - n) * (e.x - s) + (require - s) * (e.y - h), p = 1 - (A /= this._bDiv1) - (c /= this._bDiv1);
          if (A >= 0 && A <= 1 && c >= 0 && c <= 1 && p >= 0) {
            var u = this._alignedBBox[0], d = this._alignedBBox[1], g = this._alignedBBox[2];
            e.x = A * u.getX() + c * d.getX() + p * g.getX(), e.y = A * u.getY() + c * d.getY() + p * g.getY();
          } else if (0 != this._bDiv2) {
            r = module[2].getX(), a = module[2].getY(), s = module[3].getX();
            var f = (a - (h = module[3].getY())) * (e.x - s) + (s - r) * (e.y - h), m = (h - n) * (e.x - s) + (require - s) * (e.y - h), y = 1 - (f /= this._bDiv2) - (m /= this._bDiv2), _ = (u = this._alignedBBox[0], g = this._alignedBBox[2], this._alignedBBox[3]);
            e.x = f * u.getX() + m * g.getX() + y * _.getX(), e.y = f * u.getY() + m * g.getY() + y * _.getY();
          }
          this._invTrf.map(e);
        } else
          this._transform.map(e), e.x = Math.floor(e.x + l) + this._alignX, e.y = Math.floor(e.y + l) + this._alignY, this._invTrf.map(e);
      return true;
    }
    return false;
  }, s.prototype.hasVertexForRead = function () {
    return this._source.hasVertexForRead();
  }, s.prototype.toString = function () {
    return "[Object GVertexPixelAligner]";
  }, exports.exports = s;
}
