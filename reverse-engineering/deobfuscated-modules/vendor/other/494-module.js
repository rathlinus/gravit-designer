/**
 * Module 494
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
    n.call(this, e, n.sobelVertexShader, "        precision mediump float;         varying highp vec2 texCoord;         varying vec2 leftTextureCoordinate;         varying vec2 rightTextureCoordinate;         varying vec2 topTextureCoordinate;         varying vec2 topLeftTextureCoordinate;         varying vec2 topRightTextureCoordinate;         varying vec2 bottomTextureCoordinate;         varying vec2 bottomLeftTextureCoordinate;         varying vec2 bottomRightTextureCoordinate;         uniform float edgeStrength;         uniform highp sampler2D texture;         void main()         {             vec4 textureColor = texture2D(texture, texCoord);             float bottomLeftIntensity = texture2D(texture, bottomLeftTextureCoordinate).r;             float topRightIntensity = texture2D(texture, topRightTextureCoordinate).r;             float topLeftIntensity = texture2D(texture, topLeftTextureCoordinate).r;             float bottomRightIntensity = texture2D(texture, bottomRightTextureCoordinate).r;             float leftIntensity = texture2D(texture, leftTextureCoordinate).r;             float rightIntensity = texture2D(texture, rightTextureCoordinate).r;             float bottomIntensity = texture2D(texture, bottomTextureCoordinate).r;             float topIntensity = texture2D(texture, topTextureCoordinate).r;             float h = -topLeftIntensity - 2.0 * topIntensity - topRightIntensity + bottomLeftIntensity + 2.0 * bottomIntensity + bottomRightIntensity;             float v = -bottomLeftIntensity - 2.0 * leftIntensity - topLeftIntensity + bottomRightIntensity + 2.0 * rightIntensity + topRightIntensity;             float mag = 1.0 - (length(vec2(h, v)) * edgeStrength);             gl_FragColor = vec4(vec3(mag), textureColor.a);         }    ");
  }
  require(0) /* GObject */.inherit(r, n), r.prototype.render = function (e, t) {
    this.simpleShader.call(this, {
      texelWidth: 1 / this.glEffect.width,
      textlHeight: 1 / this.glEffect.height,
      edgeStrength: e.strength
    });
  }, exports.exports = r;
}
