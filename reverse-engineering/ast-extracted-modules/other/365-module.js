/**
 * Module 365
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
    n.call(this, e, null, this._genBlur(a)), this.higherBlurs = [];
    for (var t = 2 * a; t <= o; t += a)
      this.higherBlurs.push(null);
    var i = 0;
    for (t = 2 * a; t <= o; t += a)
      this.higherBlurs[i++] = new n(e, null, this._genBlur(t));
  }
  i(0).inherit(r, n);
  var o = 128, a = 32;
  r.prototype.higherBlurs = null, r.prototype._genBlur = function (e) {
    return "    varying highp vec2 texCoord;    uniform float sigma;    uniform vec2  blurMultiplyVec;    uniform highp sampler2D texture;    const float blurPixels = " + e.toFixed(1) + ";    const float THRESHOLD = 0.7;/*alpha threshold to start clipping*/    const float pi = 3.14159265;    uniform vec2 texSize;    " + n.screenSpaceDither + "    " + n.randomShaderFunc + "    void main() {        vec3 incrementalGaussian;        incrementalGaussian.x = 1.0 / (sqrt(2.0 * pi) * sigma);        incrementalGaussian.y = exp(-0.5 / (sigma * sigma));        incrementalGaussian.z = incrementalGaussian.y * incrementalGaussian.y;        float rand = random(vec3(123.45,54.321,0.666), 0.0);        float threshold = THRESHOLD/* + 0.1 * rand <= this sometimes removes some artifacts*/;                vec4 avgValue = vec4(0.0, 0.0, 0.0, 0.0);        float coefficientSum = 0.0;                vec4 sample = texture2D(texture, texCoord.xy);        if (sample.a < 1.0-threshold) {            gl_FragColor = vec4(sample.rgb*sample.a, sample.a);            return;         }        sample.rgb *= sample.a;        avgValue += sample * incrementalGaussian.x;        coefficientSum += incrementalGaussian.x;        incrementalGaussian.xy *= incrementalGaussian.yz;                for (float i = 1.0; i <= blurPixels; i++) {            sample = texture2D(texture, texCoord.xy - (i + rand*0.5 - 0.25) * blurMultiplyVec);            if (sample.a > threshold) {                sample.rgb *= sample.a;                avgValue += sample * incrementalGaussian.x;                coefficientSum += incrementalGaussian.x;                            }            sample = texture2D(texture, texCoord.xy + (i + rand*0.5 - 0.25) * blurMultiplyVec);            if (sample.a > threshold) {                sample.rgb *= sample.a;                avgValue += sample * incrementalGaussian.x;                coefficientSum += incrementalGaussian.x;                            }            incrementalGaussian.xy *= incrementalGaussian.yz;        }        gl_FragColor = avgValue / coefficientSum;        if (gl_FragColor.a == 0.0) {            gl_FragColor.rgb = vec3(1.0,1.0,1.0);        } else {            gl_FragColor.rgb = (gl_FragColor.rgb+0.0001)/gl_FragColor.a + screenSpaceDither(texCoord*texSize);        }    }";
  }, r.prototype.render = function (e, t, i, r, o, s) {
    var l = e.radius * t;
    if (!isNaN(l) && 0 != l) {
      var h;
      if (l <= a)
        h = this;
      else {
        var A = Math.max(0, Math.floor((l - 1) / a) - 1);
        (h = this.higherBlurs[A]) || (h = this.higherBlurs[A] = new n(this.glEffect, null, this._genBlur(a * (2 + A))));
      }
      h.simpleShader.call(h, {
        sigma: l / (Math.sqrt(2 * Math.log(255)) - 1),
        blurMultiplyVec: [
          1 / this.glEffect.width,
          0
        ],
        texSize: [
          o,
          s
        ]
      }), h.simpleShader.call(h, {
        sigma: l / (Math.sqrt(2 * Math.log(255)) - 1),
        blurMultiplyVec: [
          0,
          1 / this.glEffect.height
        ],
        texSize: [
          o,
          s
        ]
      }), l > t && this.fxaa(i, r, o, s);
    }
  }, e.exports = r;
}
