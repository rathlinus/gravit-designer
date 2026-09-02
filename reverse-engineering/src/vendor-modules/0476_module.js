/**
 * chunk.vendor.js Module #476
 * Type: unknown
 */

function (e, t, i) {
      var n = i(42);

      function r(e) {
        n.call(
          this,
          e,
          null,
          "        uniform highp sampler2D texture;        uniform float brightness;        uniform float contrast;        varying highp vec2 texCoord;        void main() {            vec4 color = texture2D(texture, texCoord);            color.rgb += brightness;            if (contrast > 0.0) {                color.rgb = (color.rgb - 0.5) / (1.0 - contrast) + 0.5;            } else {                color.rgb = (color.rgb - 0.5) * (1.0 + contrast) + 0.5;            }            gl_FragColor = color;        }    ",
        );
      }
      (i(0).inherit(r, n),
        (r.prototype.render = function (e, t) {
          this.simpleShader.call(this, {
            brightness: n.clamp(-1, e.brightness, 1),
            contrast: n.clamp(-1, e.contrast, 1),
          });
        }),
        (e.exports = r));
    }