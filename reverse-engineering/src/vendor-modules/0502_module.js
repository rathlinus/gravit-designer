/**
 * chunk.vendor.js Module #502
 * Type: unknown
 */

function (e, t, i) {
      var n = i(42);

      function r(e) {
        n.call(
          this,
          e,
          n.tilingAwareVertexSource,
          n.screenSpaceDither +
            "        uniform highp sampler2D texture;        uniform float size;        uniform float amount;        varying highp vec2 texCoord;        uniform vec2 texSize;        varying vec2 localTexCoord;        void main() {            vec4 color = texture2D(texture, localTexCoord);                        float dist = distance(texCoord, vec2(0.5, 0.5));            color.rgb *= smoothstep(0.8, size * 0.799, dist * (amount + size));            color.rgb += screenSpaceDither(texCoord*texSize);                        gl_FragColor = color;        }    ",
        );
      }
      (i(0).inherit(r, n),
        (r.prototype.render = function (e, t, i, r, o, a) {
          e.amount &&
            this.simpleShader.call(this, {
              size: n.clamp(0, e.size, 1),
              amount: n.clamp(0, e.amount, 1),
              offset: [i, r],
              tileSize: [this.glEffect.width, this.glEffect.height],
              texSize: [o, a],
            });
        }),
        (e.exports = r));
    }