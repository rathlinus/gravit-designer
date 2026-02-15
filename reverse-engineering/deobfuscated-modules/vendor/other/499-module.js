/**
 * Module 499
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
    n.call(this, e, null, "        uniform highp sampler2D texture;        uniform float sigma;        uniform float radius;        uniform vec2 delta;        uniform vec2 dimensions;        varying highp vec2 texCoord;        const float numSamples = 30.0;        const float step       = 1.0/numSamples;        const float pi = 3.14159265;        " + n.randomShaderFunc + "        void main() {            vec4 color = vec4(0.0);            float total = 0.0;            float r2    = 2.0*sigma*sigma;            float pir2  = 1.0/(sqrt(2.0*pi)*sigma);                        for (float i = -1.0; i <= 1.0; i+=step) {                /*float offsetx = (random(vec3(12.9898, 78.233, 151.7182), 0.0+i)-0.5)/numSamples;*/                for (float j = -1.0; j <= 1.0; j+=step) {                    /*float offsety = (random(vec3(12.9898, 78.233, 151.7182), 0.4321+j)-0.5)/numSamples;*/                    /*vec2 pos = vec2(radius*offsetx,radius*offsety)/dimensions;*/                    vec2 pos = delta * vec2(i,j);                    float d2 = pos.x*pos.x+pos.y*pos.y;                    float w = exp(-d2/r2)*pir2;                    vec4 sample = texture2D(texture, texCoord + pos);                    sample.rgb *= sample.a;                    color += sample * w;                    total += w;                }            }            gl_FragColor = color / total;            if (gl_FragColor.a == 0.0) {                gl_FragColor.rgb = vec3(1.0,1.0,1.0);            } else {                gl_FragColor.rgb = (gl_FragColor.rgb+0.0001)/gl_FragColor.a;            }        }    ");
  }
  require(0) /* GObject */.inherit(r, n), r.prototype.render = function (e, t) {
    var i = e.radius * t;
    if (!isNaN(i) && 0 != i) {
      var n = this.glEffect.width, r = this.glEffect.height;
      this.simpleShader.call(this, {
        sigma: i / (Math.sqrt(2 * Math.log(255)) - 1),
        dimensions: [
          n,
          r
        ],
        delta: [
          i / n,
          i / r
        ]
      });
    }
  }, exports.exports = r;
}
