/**
 * Module 491
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
    n.call(this, e, null, "        varying highp vec2 texCoord;        uniform highp sampler2D texture0;        uniform highp sampler2D texture1;        uniform float glow_intensity;        void main(){            vec4 glow = texture2D(texture1, texCoord);            vec4 base = texture2D(texture0, texCoord);            gl_FragColor = base.a * base.rgba + (1.0-base.a) * vec4(glow.rgb,glow.a * glow_intensity);        }    "), this.textures({ texture1: 1 }), this.colorize = new n(e, null, "        uniform highp sampler2D texture;        uniform vec3 color;        varying highp vec2 texCoord;        void main(){            vec4 c = texture2D(texture, texCoord);            if (c.a>0.0) {                gl_FragColor = vec4(color, 1.0);            } else {                gl_FragColor = vec4(1.0,1.0,1.0,0.0);            }        }        "), this.blur = new r(e);
  }
  a.prototype.colorize = null, a.prototype.blur = null, o.inherit(a, n), a.prototype.render = function (e, t) {
    var i = e.color.slice();
    i[0] /= 255, i[1] /= 255, i[2] /= 255, this.glEffect.extraTexture.ensureFormat(this.glEffect.texture), this.colorize.simpleShader.call(this.colorize, { color: i }, this.glEffect.texture, this.glEffect.extraTexture);
    var n = e.radius * t;
    this.blur.simpleShader.call(this.blur, {
      sigma: n / (Math.sqrt(2 * Math.log(255)) - 1),
      blurMultiplyVec: [
        1 / this.glEffect.width,
        0
      ]
    }, this.glEffect.extraTexture, this.glEffect.extraTexture), this.blur.simpleShader.call(this.blur, {
      sigma: n / (Math.sqrt(2 * Math.log(255)) - 1),
      blurMultiplyVec: [
        0,
        1 / this.glEffect.height
      ]
    }, this.glEffect.extraTexture, this.glEffect.extraTexture), this.glEffect.extraTexture.use(1), this.simpleShader.call(this, { glow_intensity: e.intensity });
  }, a.prototype.destroy = function () {
    this.colorize && this.colorize.destroy(), this.blur && this.blur.destroy(), n.prototype.destroy.call(this);
  }, e.exports = a;
}
