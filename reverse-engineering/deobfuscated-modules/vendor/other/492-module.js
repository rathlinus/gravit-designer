/**
 * Module 492
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
  var n = require(42) /* module */, r = require(0) /* GObject */;
  function o(e) {
    n.call(this, e, null, "        uniform highp sampler2D texture;        uniform float hue;        uniform float saturation;        varying highp vec2 texCoord;        vec3 rgb2hsv(vec3 c)        {            vec4 K = vec4(0.0, -0.33333333, 0.66666666, -1.0);            vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));            vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));                        float d = q.x - min(q.w, q.y);            float e = 1.0e-10;            return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);        }                vec3 hsv2rgb(vec3 c)        {            vec4 K = vec4(1.0, 0.66666666, 0.33333333, 3.0);            vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);            return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);        }                void main() {            vec4 color = texture2D(texture, texCoord);            vec3 hsv = rgb2hsv(color.rgb);            if (color.rgb != vec3(1.0, 1.0, 1.0)) {                hsv.x = hue;            }            hsv.y = hsv.y * saturation;            gl_FragColor = vec4(hsv2rgb(hsv), color.w);        }    ");
  }
  o.prototype.colorize = null, o.prototype.blur = null, r.inherit(o, n), o.prototype.render = function (e, t) {
    this.simpleShader.call(this, {
      hue: n.clamp(-1, e.hue, 1),
      saturation: n.clamp(-1, e.saturation, 1)
    });
  }, exports.exports = o;
}
