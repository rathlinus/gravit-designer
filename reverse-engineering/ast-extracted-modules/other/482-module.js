/**
 * Module 482
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

function (e, t, i) {
  var n = i(42);
  function r(e) {
    n.call(this, e, null, n.warpShader("        uniform float strengthX;        uniform float strengthY;    ", "        vec2 globalCoord = (texCoord * tileSize + offset)/texSize;        coord = vec2(coord.x + strengthX*sin(coord.x*3.141592), coord.y + strengthY*sin(coord.y*3.141592));    "));
  }
  i(0).inherit(r, n), r.prototype.render = function (e, t, i, n, r, o) {
    var a = this.glEffect.width, s = this.glEffect.height, l = (Math.max(a, s), e.radius * t), h = l * e.strengthX, A = l * e.strengthY;
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
  }, e.exports = r;
}
