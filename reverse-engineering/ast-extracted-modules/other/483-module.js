/**
 * Module 483
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
    n.call(this, e, null, "        uniform highp sampler2D texture;        uniform vec2 delta;        varying highp vec2 texCoord;        " + n.randomShaderFunc + "        void main() {            vec2 color = vec2(0.0);            vec2 total = vec2(0.0);                        /* randomize the lookup values to hide the fixed number of samples */            float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);                        for (float t = -30.0; t <= 30.0; t++) {                float percent = (t + offset - 0.5) / 30.0;                float weight = 1.0 - abs(percent);                vec3 sample = texture2D(texture, texCoord + delta * percent).rgb;                float average = (sample.r + sample.g + sample.b) / 3.0;                color.x += average * weight;                total.x += weight;                if (abs(t) < 15.0) {                    weight = weight * 2.0 - 1.0;                    color.y += average * weight;                    total.y += weight;                }            }            gl_FragColor = vec4(color / total, 0.0, 1.0);        }    "), this.edgeWork2 = new n(e, null, "        uniform highp sampler2D texture;        uniform vec2 delta;        varying highp vec2 texCoord;        " + n.randomShaderFunc + "        void main() {            vec2 color = vec2(0.0);            vec2 total = vec2(0.0);                        /* randomize the lookup values to hide the fixed number of samples */            float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);                        for (float t = -30.0; t <= 30.0; t++) {                float percent = (t + offset - 0.5) / 30.0;                float weight = 1.0 - abs(percent);                vec2 sample = texture2D(texture, texCoord + delta * percent).xy;                color.x += sample.x * weight;                total.x += weight;                if (abs(t) < 15.0) {                    weight = weight * 2.0 - 1.0;                    color.y += sample.y * weight;                    total.y += weight;                }            }            float c = clamp(10000.0 * (color.y / total.y - color.x / total.x) + 0.5, 0.0, 1.0);            gl_FragColor = vec4(c, c, c, 1.0);        }    ");
  }
  i(0).inherit(r, n), r.prototype.edgeWork2 = null, r.prototype.render = function (e, t) {
    var i = this.glEffect.width, n = this.glEffect.height, r = e.radius * t;
    this.simpleShader.call(this, {
      delta: [
        r / i,
        0
      ]
    }), this.edgeWork2.simpleShader.call(this.edgeWork2, {
      delta: [
        0,
        r / n
      ]
    });
  }, r.prototype.destroy = function () {
    this.edgeWork2 && this.edgeWork2.destroy(), n.prototype.destroy.call(this);
  }, e.exports = r;
}
