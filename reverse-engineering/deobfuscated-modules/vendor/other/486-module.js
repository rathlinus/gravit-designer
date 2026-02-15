/**
 * Module 486
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
    n.call(this, e, null, "        uniform highp sampler2D texture;        uniform float hue;        uniform float saturation;        varying highp vec2 texCoord;        void main() {            vec4 color = texture2D(texture, texCoord);                        /* hue adjustment, wolfram alpha: RotationTransform[angle, {1, 1, 1}][{x, y, z}] */            float angle = hue * 3.14159265;            float s = sin(angle), c = cos(angle);            vec3 weights = (vec3(2.0 * c, -sqrt(3.0) * s - c, sqrt(3.0) * s - c) + 1.0) / 3.0;            float len = length(color.rgb);            color.rgb = vec3(                dot(color.rgb, weights.xyz),                dot(color.rgb, weights.zxy),                dot(color.rgb, weights.yzx)            );                        /* saturation adjustment */            float average = (color.r + color.g + color.b) / 3.0;            if (saturation > 0.0) {                color.rgb += (average - color.rgb) * (1.0 - 1.0 / (1.001 - saturation));            } else {                color.rgb += (average - color.rgb) * (-saturation);            }                        gl_FragColor = color;        }    ");
  }
  require(0) /* GObject */.inherit(r, n), r.prototype.render = function (e, t) {
    this.glEffect.width, this.glEffect.height;
    this.simpleShader.call(this, {
      hue: n.clamp(-1, e.hue, 1),
      saturation: n.clamp(-1, e.saturation, 1)
    });
  }, exports.exports = r;
}
