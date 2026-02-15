/**
 * Module 487
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
    n.call(this, e, null, "        uniform highp sampler2D texture;        uniform float strength;        uniform vec2 texSize;        varying highp vec2 texCoord;        void main() {            vec2 dx = vec2(1.0 / texSize.x, 0.0);            vec2 dy = vec2(0.0, 1.0 / texSize.y);            vec4 color = texture2D(texture, texCoord);            float bigTotal = 0.0;            float smallTotal = 0.0;            vec3 bigAverage = vec3(0.0);            vec3 smallAverage = vec3(0.0);            for (float x = -2.0; x <= 2.0; x += 1.0) {                for (float y = -2.0; y <= 2.0; y += 1.0) {                    vec3 sample = texture2D(texture, texCoord + dx * x + dy * y).rgb;                    bigAverage += sample;                    bigTotal += 1.0;                    if (abs(x) + abs(y) < 2.0) {                        smallAverage += sample;                        smallTotal += 1.0;                    }                }            }            vec3 edge = max(vec3(0.0), bigAverage / bigTotal - smallAverage / smallTotal);            gl_FragColor = vec4(color.rgb - dot(edge, edge) * strength * 100000.0, color.a);        }    ");
  }
  require(0) /* GObject */.inherit(r, n), r.prototype.render = function (e, t) {
    var i = this.glEffect.width, n = this.glEffect.height, r = e.strength;
    this.simpleShader.call(this, {
      strength: r * r * r * r * r,
      texSize: [
        i,
        n
      ]
    });
  }, exports.exports = r;
}
