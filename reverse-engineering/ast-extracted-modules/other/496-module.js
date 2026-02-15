/**
 * Module 496
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
    n.call(this, e, null, n.warpShader("        uniform float radius;        uniform float angle;        uniform vec2 center;    ", "        coord -= center;        float distance = length(coord);        if (distance < radius) {            float percent = (radius - distance) / radius;            float theta = percent * percent * angle;            float s = sin(theta);            float c = cos(theta);            coord = vec2(                coord.x * c - coord.y * s,                coord.x * s + coord.y * c            );        }        coord += center;    "));
  }
  i(0).inherit(r, n), r.prototype.render = function (e, t, i, n, r, o) {
    var a, s = this.glEffect.width, l = this.glEffect.height;
    a = this.glEffect.swirlBBox ? 0.005 * e.radius * Math.max(this.glEffect.swirlBBox.getWidth(), this.glEffect.swirlBBox.getHeight()) : 0.005 * e.radius * Math.max(r, o);
    var h = 0.01 * e.centerX * r, A = 0.01 * e.centerY * o, c = e.angle;
    this.simpleShader.call(this, {
      radius: a,
      center: [
        h,
        A
      ],
      angle: c,
      texSize: [
        r,
        o
      ],
      tileSize: [
        s,
        l
      ],
      offset: [
        i,
        n
      ]
    });
  }, e.exports = r;
}
