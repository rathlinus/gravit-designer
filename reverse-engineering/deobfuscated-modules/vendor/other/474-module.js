/**
 * Module 474
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
  var n = require(42) /* module */;
  function r(e) {
    n.call(this, e, null, n.warpShader("        uniform float strengthX;        uniform float strengthY;    ", "        vec2 globalCoord = (texCoord * tileSize + offset)/texSize;        coord = vec2(coord.x + strengthX*sin(globalCoord.y*3.141592), coord.y + strengthY*sin(globalCoord.x*3.141592));    "));
  }
  require(0) /* GObject */.inherit(r, n), r.prototype.render = function (e, t, i, n, r, o) {
    var a = this.glEffect.width, s = this.glEffect.height, l = e.radius * t, h = l * e.strengthX, A = l * e.strengthY;
    this.simpleShader.call(this, {
      strengthX: h,
      strengthY: A,
      texSize: [
        r,
        o
      ],
      tileSize: [
        a,
        s
      ],
      offset: [
        i,
        n
      ]
    });
  }, exports.exports = r;
}
