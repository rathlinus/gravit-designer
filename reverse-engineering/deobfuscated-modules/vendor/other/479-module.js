/**
 * Module 479
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
    n.call(this, e, n.tilingAwareVertexSource, "        uniform highp sampler2D texture;        uniform vec2 center;        uniform float angle;        uniform float scale;        uniform vec2 texSize;        varying highp vec2 texCoord;        varying vec2 localTexCoord;                float pattern(float angle) {            float s = sin(angle), c = cos(angle);            vec2 tex = texCoord * texSize - center;            vec2 point = vec2(                c * tex.x - s * tex.y,                s * tex.x + c * tex.y            ) * scale;            return (sin(point.x) * sin(point.y)) * 4.0;        }                void main() {            vec4 color = texture2D(texture, localTexCoord);            vec3 cmy = 1.0 - color.rgb;            float k = min(cmy.x, min(cmy.y, cmy.z));            cmy = (cmy - k) / (1.0 - k);            cmy = clamp(cmy * 10.0 - 3.0 + vec3(pattern(angle + 0.26179), pattern(angle + 1.30899), pattern(angle)), 0.0, 1.0);            k = clamp(k * 10.0 - 5.0 + pattern(angle + 0.78539), 0.0, 1.0);            gl_FragColor = vec4(1.0 - cmy - k, color.a);        }    ");
  }
  require(0) /* GObject */.inherit(r, n), r.prototype.render = function (e, t, i, n, r, o) {
    var a = r, s = o, l = 0.01 * e.centerX * a, h = 0.01 * e.centerY * s, A = e.angle, c = t * e.size;
    this.simpleShader.call(this, {
      center: [
        l,
        h
      ],
      angle: A,
      scale: Math.PI / c,
      texSize: [
        a,
        s
      ],
      tileSize: [
        this.glEffect.width,
        this.glEffect.height
      ],
      offset: [
        i,
        n
      ]
    });
  }, exports.exports = r;
}
