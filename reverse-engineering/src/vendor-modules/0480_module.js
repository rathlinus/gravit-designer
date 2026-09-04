/**
 * chunk.vendor.js Module #480
 * Type: unknown
 */

function (e, t, i) {
      var n = i(42);

      function r(e) {
        n.call(
          this,
          e,
          null,
          "        uniform highp sampler2D texture;        uniform float exponent;        uniform float strength;        uniform vec2 texSize;        varying highp vec2 texCoord;        void main() {            vec4 center = texture2D(texture, texCoord);            vec4 color = vec4(0.0);            float total = 0.0;            for (float x = -4.0; x <= 4.0; x += 1.0) {                for (float y = -4.0; y <= 4.0; y += 1.0) {                    vec4 sample = texture2D(texture, texCoord + vec2(x, y) / texSize);                    float weight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));                    weight = pow(weight, exponent);                    color += sample * weight;                    total += weight;                }            }            gl_FragColor = color / total;        }    ",
        );
      }
      (i(0).inherit(r, n),
        (r.prototype.render = function (e, t) {
          var i = this.glEffect.width,
            n = this.glEffect.height,
            r = e.exponent;
          (this.simpleShader.call(this, {
            exponent: Math.max(0, r),
            texSize: [i, n],
          }),
            this.simpleShader.call(this, {
              exponent: Math.max(0, r),
              texSize: [i, n],
            }));
        }),
        (e.exports = r));
    }