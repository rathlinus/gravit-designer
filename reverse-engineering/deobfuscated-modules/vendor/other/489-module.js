/**
 * Module 489
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
    n.call(this, e, null, "        uniform highp sampler2D texture;        uniform float power;        varying highp vec2 texCoord;        void main() {            vec4 color = texture2D(texture, texCoord);            color = pow(color, vec4(power));            gl_FragColor = vec4(color);        }    ");
    var t = "        uniform highp sampler2D texture0;        uniform highp sampler2D texture1;        uniform vec2 delta0;        uniform vec2 delta1;        uniform float power;        varying highp vec2 texCoord;        " + n.randomShaderFunc + "        vec4 sample(vec2 delta) {            /* randomize the lookup values to hide the fixed number of samples */            float offset = random(vec3(delta, 151.7182), 0.0);                        vec4 color = vec4(0.0);            float total = 0.0;            for (float t = 0.0; t <= 30.0; t++) {                float percent = (t + offset) / 30.0;                color += texture2D(texture0, texCoord + delta * percent);                total += 1.0;            }            return color / total;        }    ";
    this.lensBlur0 = new n(e, null, t + "        void main() {            gl_FragColor = sample(delta0);        }    "), this.lensBlur1 = new n(e, null, t + "        void main() {            gl_FragColor = (sample(delta0) + sample(delta1)) * 0.5;        }    "), this.lensBlur2 = new n(e, null, t + "        void main() {            vec4 color = (sample(delta0) + 2.0 * texture2D(texture1, texCoord)) / 3.0;            gl_FragColor = pow(color, vec4(power));        }    ").textures({ texture1: 1 });
  }
  require(0) /* GObject */.inherit(r, n), r.prototype.lensBlurPrePass = null, r.prototype.lensBlur0 = null, r.prototype.lensBlur1 = null, r.prototype.lensBlur2 = null, r.prototype.render = function (e, t) {
    for (var require = e.radius * t, r = e.brightness, o = e.angle, a = [], s = 0; s < 3; s++) {
      var l = o + s * Math.PI * 2 / 3;
      a.push([
        require * Math.sin(l) / this.glEffect.width,
        require * Math.cos(l) / this.glEffect.height
      ]);
    }
    var h = Math.pow(10, n.clamp(-1, r, 1));
    this.simpleShader.call(this, { power: h }), this.glEffect.extraTexture.ensureFormat(this.glEffect.texture), this.lensBlur0.simpleShader.call(this.lensBlur0, { delta0: a[0] }, this.glEffect.texture, this.glEffect.extraTexture), this.lensBlur1.simpleShader.call(this.lensBlur1, {
      delta0: a[1],
      delta1: a[2]
    }, this.glEffect.extraTexture, this.glEffect.extraTexture), this.lensBlur0.simpleShader.call(this.lensBlur0, { delta0: a[1] }), this.glEffect.extraTexture.use(1), this.lensBlur2.simpleShader.call(this.lensBlur2, {
      power: 1 / h,
      delta0: a[2]
    });
  }, r.prototype.destroy = function () {
    this.lensBlurPrePass && this.lensBlurPrePass.destroy(), this.lensBlur0 && this.lensBlur0.destroy(), this.lensBlur1 && this.lensBlur1.destroy(), this.lensBlur2 && this.lensBlur2.destroy(), n.prototype.destroy.call(this);
  }, exports.exports = r;
}
