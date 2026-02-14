/**
 * Module 503
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
    n.call(this, e, null, "        uniform highp sampler2D texture;        varying highp vec2 texCoord;        void main() {            vec2 uv = texCoord;            vec4 color = texture2D(texture,vec2(uv.x,-uv.y+0.5*sin(uv.x*4.0)));            gl_FragColor = color;        }    ");
  }
  i(0).inherit(r, n), r.prototype.render = function (e, t) {
    this.simpleShader.call(this, {});
  }, e.exports = r;
}
