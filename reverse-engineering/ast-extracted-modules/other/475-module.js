/**
 * Module 475
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
  var n = i(42), r = i(206), o = i(0);
  function a(e) {
    n.call(this, e, null, "        varying highp vec2 texCoord;        uniform highp sampler2D texture0;        uniform highp sampler2D texture1;        uniform float bloom_intensity;        uniform float base_intensity;        uniform float bloom_saturation;        uniform float base_saturation;        vec4 adjustSaturation(vec4 color, float saturation){            float grey = dot(color.rgb, vec3(0.3, 0.59, 0.11));            return vec4(mix(grey, color.r, saturation),mix(grey, color.g, saturation),mix(grey, color.b, saturation),color.a);        }        void main(){            vec4 bloom = texture2D(texture1, texCoord);            vec4 base = texture2D(texture0, texCoord);            bloom = adjustSaturation(bloom, bloom_saturation);            bloom.rgb *= bloom_intensity;            base = adjustSaturation(base, base_saturation);            base.rgb *= base_intensity;            base *= (1.0 - clamp(bloom,0.0,1.0));            gl_FragColor = base + bloom;        }    "), this.textures({ texture1: 1 }), this.brightness = new n(e, null, "        uniform highp sampler2D texture;        varying highp vec2 texCoord;        uniform float bloom_threshold;        uniform float bloom_ithreshold;        void main(){            vec4 c = texture2D(texture, texCoord);            gl_FragColor = vec4(c.rgb*bloom_ithreshold - bloom_threshold,c.a);        }        "), this.blur = new r(e);
  }
  a.prototype.brightness = null, a.prototype.blur = null, o.inherit(a, n), a.prototype.render = function (e, t, i, n, r, o) {
    this.glEffect.extraTexture.ensureFormat(this.glEffect.texture), this.brightness.simpleShader.call(this.brightness, {
      bloom_threshold: e.bloomThreshold / (1 - e.bloomThreshold),
      bloom_ithreshold: 1 / (1 - e.bloomThreshold)
    }, this.glEffect.texture, this.glEffect.extraTexture);
    var a = e.blurRadius * t;
    this.blur.simpleShader.call(this.blur, {
      sigma: a / (Math.sqrt(2 * Math.log(255)) - 1),
      blurMultiplyVec: [
        1 / this.glEffect.width,
        0
      ]
    }, this.glEffect.extraTexture, this.glEffect.extraTexture), this.blur.simpleShader.call(this.blur, {
      sigma: a / (Math.sqrt(2 * Math.log(255)) - 1),
      blurMultiplyVec: [
        0,
        1 / this.glEffect.height
      ]
    }, this.glEffect.extraTexture, this.glEffect.extraTexture), this.glEffect.extraTexture.use(1), this.simpleShader.call(this, {
      bloom_intensity: e.bloomIntensity,
      base_intensity: e.baseIntensity,
      bloom_saturation: e.bloomSaturation,
      base_saturation: e.baseSaturation
    });
  }, a.prototype.destroy = function () {
    this.brightness && this.brightness.destroy(), this.blur && this.blur.destroy(), n.prototype.destroy.call(this);
  }, e.exports = a;
}
