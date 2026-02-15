/**
 * Module 481
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
    n.call(this, e, null, "        uniform highp sampler2D texture;        uniform vec2 center;        uniform float angle;        uniform float scale;        uniform vec2 texSize;        varying highp vec2 texCoord;                float pattern() {            float s = sin(angle), c = cos(angle);            vec2 tex = texCoord * texSize - center;            vec2 point = vec2(                c * tex.x - s * tex.y,                s * tex.x + c * tex.y            ) * scale;            return (sin(point.x) * sin(point.y)) * 4.0;        }                void main() {            vec4 color = texture2D(texture, texCoord);            float average = (color.r + color.g + color.b) / 3.0;            gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);        }    ");
  }
  require(0) /* GObject */.inherit(r, n), r.prototype.render = function (e, t) {
    var i = this.glEffect.width, n = this.glEffect.height, r = 0.01 * e.centerX * i, o = 0.01 * e.centerY * n, a = e.angle, s = t * e.size;
    this.simpleShader.call(this, {
      center: [
        r,
        o
      ],
      angle: a,
      scale: Math.PI / s,
      texSize: [
        i,
        n
      ]
    });
  }, exports.exports = r;
}
