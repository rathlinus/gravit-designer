/**
 * Module 470
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
  var n = require(111) /* GRendererCtx */, r = "undefined" != typeof window ? window.WebGLTexture : function () {
    };
  function o() {
  }
  o._textures = [], o.addTexture = function (e) {
    e && e.id && (e.id instanceof n.WebGLTexture ? this._textures[e.id.__renderableId] = e : this._textures[e.id] = e);
  }, o.deleteTexture = function (e) {
    e && e.id && (e.id instanceof n.WebGLTexture ? delete this._textures[e.id.__renderableId] : delete this._textures[e.id]);
  }, o.flush = function () {
    var e = this;
    this._textures.slice().forEach(function (t, i) {
      t.id ? t.id && t.id instanceof n.WebGLTexture && !(t.id.$rendered instanceof r) && e.deleteTexture(t) : delete e._textures[i];
    });
  }, o.destroyTextures = function () {
    var e = require(226) /* module */, t = this;
    this.flush(), this._textures.slice().forEach(function (i) {
      if (i.id instanceof n.WebGLTexture)
        i.id.destroy();
      else if (null !== i.id && i.id instanceof r) {
        var o = e.getGLContext();
        o && o.deleteTexture(i.id);
      }
      t.deleteTexture(i), i.id = null;
    });
  }, o.checkMemory = function () {
    var e = 0, t = 0, i = 0;
    return this._textures.forEach(function (o) {
      if (o.id) {
        if (o.id instanceof n.WebGLTexture && !(o.id.$rendered instanceof r))
          return void (i += 1);
        var a = o.width, s = o.height;
        e += a * s * 8, t += 1;
      }
    }), {
      textures: t,
      unrendered: i,
      bytes: e
    };
  }, exports.exports = o;
}
