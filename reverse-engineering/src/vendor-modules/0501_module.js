/**
 * chunk.vendor.js Module #501
 * Type: unknown
 */

function (e, t, i) {
      var n = i(42);

      function r(e) {
        n.call(
          this,
          e,
          null,
          "        uniform highp sampler2D texture;        uniform float amount;        varying highp vec2 texCoord;        void main() {            vec4 color = texture2D(texture, texCoord);            float average = (color.r + color.g + color.b) / 3.0;            float mx = max(color.r, max(color.g, color.b));            float amt = (mx - average) * (-amount * 3.0);            color.rgb = mix(color.rgb, vec3(mx), amt);            gl_FragColor = color;        }    ",
        );
      }
      (i(0).inherit(r, n),
        (r.prototype.render = function (e, t) {
          e.amount &&
            this.simpleShader.call(this, {
              amount: n.clamp(-1, e.amount, 1),
            });
        }),
        (e.exports = r));
    }