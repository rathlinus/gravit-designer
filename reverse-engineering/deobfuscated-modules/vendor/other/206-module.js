/**
 * Module 206
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
    n.call(this, e, null, this._genBlur(a)), this.higherBlurs = [];
    for (var module = 2 * a; module <= o; module += a)
      this.higherBlurs.push(null);
    var i = 0;
    for (module = 2 * a; module <= o; module += a)
      this.higherBlurs[i++] = new n(e, null, this._genBlur(module));
  }
  require(0) /* GObject */.inherit(r, n);
  var o = 128, a = 32;
  r.prototype.higherBlurs = null, r.prototype._genBlur = function (e) {
    return "    varying highp vec2 texCoord;    uniform float sigma;    uniform vec2  blurMultiplyVec;    uniform highp sampler2D texture;    const float blurPixels = " + e.toFixed(1) + ";    const float pi = 3.14159265;    void main() {        vec3 incrementalGaussian;        incrementalGaussian.x = 1.0 / (sqrt(2.0 * pi) * sigma);        incrementalGaussian.y = exp(-0.5 / (sigma * sigma));        incrementalGaussian.z = incrementalGaussian.y * incrementalGaussian.y;                vec4 avgValue = vec4(0.0, 0.0, 0.0, 0.0);        float coefficientSum = 0.0;                vec4 sample = texture2D(texture, texCoord.xy);        sample.rgb *= sample.a;        avgValue += sample * incrementalGaussian.x;        coefficientSum += incrementalGaussian.x;        incrementalGaussian.xy *= incrementalGaussian.yz;                for (float i = 1.0; i <= blurPixels; i++) {            sample = texture2D(texture, texCoord.xy - i * blurMultiplyVec);            sample.rgb *= sample.a;            avgValue += sample * incrementalGaussian.x;            sample = texture2D(texture, texCoord.xy + i * blurMultiplyVec);            sample.rgb *= sample.a;            avgValue += sample * incrementalGaussian.x;            coefficientSum += 2.0 * incrementalGaussian.x;            incrementalGaussian.xy *= incrementalGaussian.yz;        }        gl_FragColor = avgValue / coefficientSum;        if (gl_FragColor.a == 0.0) {            gl_FragColor.rgb = vec3(1.0,1.0,1.0);        } else {            gl_FragColor.rgb = (gl_FragColor.rgb+0.0001)/gl_FragColor.a;        }    }";
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
      var c = l / (Math.sqrt(2 * Math.log(255)) - 1);
      h.simpleShader.call(h, {
        sigma: c,
        blurMultiplyVec: [
          1 / this.glEffect.width,
          0
        ]
      }), h.simpleShader.call(h, {
        sigma: c,
        blurMultiplyVec: [
          0,
          1 / this.glEffect.height
        ]
      });
    }
  }, exports.exports = r;
}
