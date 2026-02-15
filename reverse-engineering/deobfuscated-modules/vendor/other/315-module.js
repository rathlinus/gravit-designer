/**
 * Module 315
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
    n.call(this, e, n.tilingAwareVertexSource, this._blurFinish), this._bendAndBlur = new n(e, n.tilingAwareVertexSource, this._bendAndBlurSrc);
  }
  require(0) /* GObject */.inherit(r, n), r.MAX_BLUR = 80, r.MAX_BLUR2 = 40, r.RADIUS_TO_BLUR = 2, r.prototype._bendAndBlurSrc = "    varying highp vec2 texCoord;    varying vec2 localTexCoord;    uniform float sigma;    uniform float sigma2;    uniform float bend;    uniform float krycie;    uniform vec2  blurMultiplyVec;    uniform highp sampler2D texture;    uniform float padding;    uniform vec2 tileSize;    uniform vec2 offset;    uniform vec2 texSize;    const float blurPixels = " + r.MAX_BLUR.toFixed(1) + ";    const float pi = 3.14159265;\n" + n.TOLOCAL + "\n    void main() {        float sbend = sign(bend);        vec2 coord = texCoord + vec2(0.0, -bend*max(0.0,sbend) + sbend*bend*sin((texCoord.x-padding)/(1.0-2.0*padding)*pi));        float distCoeff = smoothstep(0.0,0.5,max(-sbend,0.0)*min(abs(coord.x),abs(coord.x-1.0)) + max(sbend,0.0)*abs(coord.x-0.5));        float newSigma = sigma2 + sigma*distCoeff;        vec3 incrementalGaussian;        incrementalGaussian.x = 1.0 / (sqrt(2.0 * pi) * newSigma);        incrementalGaussian.y = exp(-0.5 / (newSigma * newSigma));        incrementalGaussian.z = incrementalGaussian.y * incrementalGaussian.y;                vec4 avgValue = vec4(0.0, 0.0, 0.0, 0.0);        float coefficientSum = 0.0;                vec4 sample = texture2D(texture, toLocal(coord.xy));        sample.rgb *= sample.a;        avgValue += sample * incrementalGaussian.x;        coefficientSum += incrementalGaussian.x;        incrementalGaussian.xy *= incrementalGaussian.yz;                for (float i = 1.0; i <= blurPixels; i++) {            sample = texture2D(texture, toLocal(coord.xy - i * blurMultiplyVec));            sample.rgb *= sample.a;            avgValue += sample * incrementalGaussian.x;            sample = texture2D(texture, toLocal(coord.xy + i * blurMultiplyVec));            sample.rgb *= sample.a;            avgValue += sample * incrementalGaussian.x;            coefficientSum += 2.0 * incrementalGaussian.x;            incrementalGaussian.xy *= incrementalGaussian.yz;        }        gl_FragColor = avgValue / coefficientSum;        gl_FragColor.a = distCoeff*(1.0-krycie)*gl_FragColor.a + krycie*gl_FragColor.a;        if (gl_FragColor.a == 0.0) {            gl_FragColor.rgb = vec3(1.0,1.0,1.0);        } else {            gl_FragColor.rgb = (gl_FragColor.rgb+0.0001)/gl_FragColor.a;        }    }", r.prototype._blurFinish = "    varying highp vec2 texCoord;    varying vec2 localTexCoord;    uniform float sigma;    uniform float sigma2;    uniform float bend;    uniform float krycie;    uniform vec2  blurMultiplyVec;    uniform highp sampler2D texture;    uniform vec2 tileSize;    uniform vec2 offset;    uniform vec2 texSize;    const float blurPixels = " + r.MAX_BLUR.toFixed(1) + ";    const float pi = 3.14159265;\n" + n.TOLOCAL + "\n    void main() {        vec3 incrementalGaussian;        float sbend = sign(bend);        float distCoeff = smoothstep(0.0,0.5,max(-sbend,0.0)*min(abs(texCoord.x),abs(texCoord.x-1.0)) + max(sbend,0.0)*abs(texCoord.x-0.5));        float newSigma = sigma2 + sigma*distCoeff;        incrementalGaussian.x = 1.0 / (sqrt(2.0 * pi) * newSigma);        incrementalGaussian.y = exp(-0.5 / (newSigma * newSigma));        incrementalGaussian.z = incrementalGaussian.y * incrementalGaussian.y;                vec4 avgValue = vec4(0.0, 0.0, 0.0, 0.0);        float coefficientSum = 0.0;                vec4 sample = texture2D(texture, localTexCoord.xy);        sample.rgb *= sample.a;        avgValue += sample * incrementalGaussian.x;        coefficientSum += incrementalGaussian.x;        incrementalGaussian.xy *= incrementalGaussian.yz;                for (float i = 1.0; i <= blurPixels; i++) {            sample = texture2D(texture, toLocal(texCoord.xy - i * blurMultiplyVec));            sample.rgb *= sample.a;            avgValue += sample * incrementalGaussian.x;            sample = texture2D(texture, toLocal(texCoord.xy + i * blurMultiplyVec));            sample.rgb *= sample.a;            avgValue += sample * incrementalGaussian.x;            coefficientSum += 2.0 * incrementalGaussian.x;            incrementalGaussian.xy *= incrementalGaussian.yz;        }        gl_FragColor = avgValue / coefficientSum;        gl_FragColor.a = distCoeff*distCoeff*(1.0-krycie)*gl_FragColor.a + krycie*gl_FragColor.a;        if (gl_FragColor.a == 0.0) {            gl_FragColor.rgb = vec3(1.0,1.0,1.0);        } else {            gl_FragColor.rgb = (gl_FragColor.rgb+0.0001)/gl_FragColor.a;        }    }", r.prototype.render = function (e, t, i, n, o, a) {
    var s = this.glEffect.width, l = this.glEffect.height, h = e.radius * t, A = e.softness;
    A <= 0 && (A = 0.001);
    var c = e.bend * t, p = A * r.MAX_BLUR2 * t, u = A * h, d = p + u + h * r.RADIUS_TO_BLUR, g = this.glEffect.texture;
    this._bendAndBlur.simpleShader.call(this._bendAndBlur, {
      sigma: this._radiusToSigma(p),
      sigma2: this._radiusToSigma(u),
      blurMultiplyVec: [
        1 / o,
        0
      ],
      bend: c / a,
      krycie: e.cov,
      padding: d / o,
      tileSize: [
        s,
        l
      ],
      texSize: [
        o,
        a
      ],
      offset: [
        i,
        n
      ]
    }, g, g), this.simpleShader.call(this, {
      sigma: this._radiusToSigma(p),
      sigma2: this._radiusToSigma(u),
      bend: c / a,
      krycie: e.cov,
      blurMultiplyVec: [
        0,
        1 / a
      ],
      tileSize: [
        s,
        l
      ],
      texSize: [
        o,
        a
      ],
      offset: [
        i,
        n
      ]
    }, g, g);
  }, r.prototype._radiusToSigma = function (e) {
    return e / (Math.sqrt(2 * Math.log(255)) - 1);
  }, exports.exports = r;
}
