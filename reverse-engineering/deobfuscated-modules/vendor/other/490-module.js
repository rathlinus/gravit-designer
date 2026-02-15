/**
 * Module 490
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
    n.call(this, e, null, "        uniform highp sampler2D texture;        uniform float amount;        uniform float colored;        uniform float transparency;        varying highp vec2 texCoord;        vec3 hsv2rgb_smooth(in vec3 c) {            vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0);            rgb = rgb*rgb*(3.0-2.0*rgb);            return c.z * mix( vec3(1.0), rgb, c.y);        }        float rand(vec2 co) {            return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);        }        void main() {            vec4 color = texture2D(texture, texCoord);            float _rand = rand(texCoord);            float alpha = 1.0;            if (colored == 1.0){                color.rgb = hsv2rgb_smooth(vec3(_rand, 1.0, 1.0)).xyz;            } else {                float diff = _rand - 0.5;                if (transparency != 1.0){                    diff *= amount;                }                color.r += diff;                color.g += diff;                color.b += diff;            }            if (transparency == 1.0){                alpha = amount;            }            gl_FragColor = vec4(color.rgb, color.a * alpha);        }    ");
  }
  require(0) /* GObject */.inherit(r, n), r.prototype.render = function (e, t) {
    this.simpleShader.call(this, {
      amount: n.clamp(0, e.amount, 1),
      colored: e.colored ? 1 : 0,
      transparency: e.transparency ? 1 : 0
    });
  }, exports.exports = r;
}
