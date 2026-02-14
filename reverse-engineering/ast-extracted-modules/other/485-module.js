/**
 * Module 485
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
    n.call(this, e, n.tilingAwareVertexSource, "        uniform highp sampler2D texture;        uniform vec2 center;        uniform float scale;        uniform vec2 texSize;        uniform vec2 tileSize;        uniform vec2 offset;        varying highp vec2 texCoord;" + n.TOLOCAL + "void main() {            vec2 tex = (texCoord * texSize - center) / scale;            tex.y /= 0.866025404;            tex.x -= tex.y * 0.5;                        vec2 a;            if (tex.x + tex.y - floor(tex.x) - floor(tex.y) < 1.0) a = vec2(floor(tex.x), floor(tex.y));            else a = vec2(ceil(tex.x), ceil(tex.y));            vec2 b = vec2(ceil(tex.x), floor(tex.y));            vec2 c = vec2(floor(tex.x), ceil(tex.y));                        vec3 TEX = vec3(tex.x, tex.y, 1.0 - tex.x - tex.y);            vec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);            vec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);            vec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);                        float alen = length(TEX - A);            float blen = length(TEX - B);            float clen = length(TEX - C);                        vec2 choice;            if (alen < blen) {                if (alen < clen) choice = a;                else choice = c;            } else {                if (blen < clen) choice = b;                else choice = c;            }                        choice.x += choice.y * 0.5;            choice.y *= 0.866025404;            choice *= scale / texSize;            gl_FragColor = texture2D(texture, toLocal(choice + center / texSize));        }    ");
  }
  i(0).inherit(r, n), r.prototype.render = function (e, t, i, n, r, o) {
    var a = this.glEffect.width, s = this.glEffect.height, l = 0.01 * r * e.centerX, h = 0.01 * o * e.centerY, A = 0.01 * Math.min(r, o) * Math.max(e.scale, 0);
    this.simpleShader.call(this, {
      center: [
        l,
        h
      ],
      scale: A,
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
