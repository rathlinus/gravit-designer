/**
 * Module 500
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
  var n = require(42) /* module */, r = require(206) /* module */;
  function o(e) {
    n.call(this, e, null, "        uniform highp sampler2D blurredTexture;        uniform highp sampler2D originalTexture;        uniform float strength;        uniform float threshold;        varying highp vec2 texCoord;        void main() {            vec4 blurred = texture2D(blurredTexture, texCoord);            vec4 original = texture2D(originalTexture, texCoord);            gl_FragColor = mix(blurred, original, 1.0 + strength);        }    "), this.blur = new r(this.glEffect);
  }
  require(0) /* GObject */.inherit(o, n), o.prototype.render = function (e, t) {
    this.glEffect.extraTexture.ensureFormat(this.glEffect.texture), this.glEffect.texture.use(), this.glEffect.extraTexture.drawTo(function () {
      n.getDefaultShader().drawRect(undefined, undefined, undefined, undefined, [
        0,
        0,
        this.glEffect.extraTexture.width,
        this.glEffect.extraTexture.height
      ]);
    }.bind(this)), this.glEffect.extraTexture.use(1), this.blur.render({ radius: e.radius }, t), this.textures({ originalTexture: 1 }), this.simpleShader.call(this, { strength: e.strength }), this.glEffect.extraTexture.unuse(1);
  }, o.prototype.destroy = function () {
    this.blur && this.blur.destroy(), n.prototype.destroy.call(this);
  }, exports.exports = o;
}
