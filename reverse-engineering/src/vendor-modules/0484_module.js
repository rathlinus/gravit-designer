/**
 * chunk.vendor.js Module #484
 * Type: unknown
 */

function (e, t, i) {
      var n = i(42);

      function r(e) {
        n.call(
          this,
          e,
          n.tilingAwareVertexSource,
          "        uniform highp sampler2D texture;\n        uniform float strength;\n        uniform vec2 texSize;\n        varying highp vec2 texCoord;\n        uniform vec2 tileSize;\n        uniform vec2 offset;\n        varying vec2 localTexCoord;\n" +
            n.TOLOCAL +
            "        void main() {\n            vec4 color = texture2D(texture, localTexCoord);\n                        vec2 p = texCoord.xy;\n            vec2 m = vec2(0.5, 0.5);\n            vec2 d = p - m;\n            float prop = texSize.x/texSize.y;\n            float r = sqrt(dot(d, d));\n                        float power = ( 2.0 * 3.141592 / (2.0 * sqrt(dot(m, m))) ) * strength;\n            float bind;\n            if (power > 0.0) bind = sqrt(dot(m, m));//stick to corners\n            else {if (prop < 1.0) bind = m.x; else bind = m.y;}\n            vec2 uv;\n            if (power > 0.0)\n                uv = m + normalize(d) * tan(r * power) * bind / tan( bind * power);\n            else if (power < 0.0)\n                uv = m + normalize(d) * atan(r * -power * 10.0) * bind / atan(-power * bind * 10.0);\n            else uv = p;            gl_FragColor = texture2D(texture, toLocal(uv));\n        }\n    ",
        );
      }
      (i(0).inherit(r, n),
        (r.prototype.render = function (e, t, i, r, o, a) {
          var s = this.glEffect.width,
            l = this.glEffect.height,
            h = (Math.max(s, l), e.strength / 200);
          this.simpleShader.call(this, {
            strength: n.clamp(-0.5, h, 0.5),
            texSize: [o, a],
            tileSize: [s, l],
            offset: [i, r],
          });
        }),
        (e.exports = r));
    }