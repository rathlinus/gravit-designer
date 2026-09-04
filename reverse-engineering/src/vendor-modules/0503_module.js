/**
 * chunk.vendor.js Module #503
 * Type: unknown
 */

function (e, t, i) {
      var n = i(42);

      function r(e) {
        n.call(
          this,
          e,
          null,
          "        uniform highp sampler2D texture;        varying highp vec2 texCoord;        void main() {            vec2 uv = texCoord;            vec4 color = texture2D(texture,vec2(uv.x,-uv.y+0.5*sin(uv.x*4.0)));            gl_FragColor = color;        }    ",
        );
      }
      (i(0).inherit(r, n),
        (r.prototype.render = function (e, t) {
          this.simpleShader.call(this, {});
        }),
        (e.exports = r));
    }