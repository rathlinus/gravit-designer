/**
 * Module 504
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
    n.call(this, e, n.tilingAwareVertexSource, "        uniform highp sampler2D texture;        uniform vec2 center;        uniform float strength;        uniform vec2 texSize;        varying highp vec2 texCoord;        uniform vec2 tileSize;        uniform vec2 offset;        " + n.randomShaderFunc + "        " + n.TOLOCAL + "        void main() {            vec4 color = vec4(0.0);            float total = 0.0;            vec2 toCenter = center - texCoord * texSize;                        /* randomize the lookup values to hide the fixed number of samples */            float off = random(vec3(12.9898, 78.233, 151.7182), 0.0);                        for (float t = 0.0; t <= 40.0; t++) {                float percent = (t + off) / 40.0;                float weight = 4.0 * (percent - percent * percent);                vec4 sample = texture2D(texture, toLocal(texCoord + toCenter * percent * strength / texSize));                                /* switch to pre-multiplied alpha to correctly blur transparent images */                sample.rgb *= sample.a;                                color += sample * weight;                total += weight;            }                        gl_FragColor = color / total;                        /* switch back from pre-multiplied alpha */            gl_FragColor.rgb /= gl_FragColor.a + 0.00001;        }    ");
  }
  require(0) /* GObject */.inherit(r, n), r.prototype.render = function (e, t, i, n, r, o) {
    var a = this.glEffect.width, s = this.glEffect.height, l = e.centerX * r * 0.01, h = e.centerY * o * 0.01;
    this.simpleShader.call(this, {
      center: [
        l,
        h
      ],
      strength: e.strength,
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
  }, exports.exports = r;
}
