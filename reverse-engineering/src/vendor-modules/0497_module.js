/**
 * chunk.vendor.js Module #497
 * Type: unknown
 */

function (e, t, i) {
      var n = i(42);

      function r(e) {
        var t =
          "        uniform highp sampler2D texture;        uniform float blurRadius;        uniform float gradientRadius;        uniform float swap;        uniform vec2 start;        uniform vec2 end;        uniform vec2 delta;        uniform vec2 texSize;        varying highp vec2 texCoord;        uniform vec2 tileSize;        uniform vec2 offset;        " +
          n.randomShaderFunc +
          "        " +
          n.TOLOCAL +
          "        void main() {            vec4 color = vec4(0.0);            float total = 0.0;                        /* randomize the lookup values to hide the fixed number of samples */            float off = random(vec3(12.9898, 78.233, -151.7182), 0.0);                        vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));            /*the following lines turns around pixels depending on delta, so when start is before end, then blur direction is swapped*/            /*vec2 sgn = sign(vec2((1.0 + swap) * delta.x - (1.0 - swap) * delta.y, (1.0 + swap) * delta.y + (1.0 - swap) * delta.x));*/            /*vec2 asgn = abs(sgn); /*this is for checking if sgn = 0*/            /*vec2 newCoord = ((1.0 - sgn) * asgn * (1.0 - texCoord) + (1.0 + sgn) * asgn * (texCoord))/2.0 + (1.0 - asgn) * texCoord;*/            vec2 newCoord = texCoord;             /*end of direcional formula*/            float radius = smoothstep(0.0, 1.0, abs(dot(newCoord * texSize - start, normal)) / gradientRadius) * blurRadius;            for (float t = -30.0; t <= 30.0; t++) {                float percent = (t + off - 0.5) / 30.0;                float weight = 1.0 - abs(percent);                vec4 sample = texture2D(texture, toLocal(newCoord + delta / texSize * percent * radius));                                /* switch to pre-multiplied alpha to correctly blur transparent images */                sample.rgb *= sample.a;                                color += sample * weight;                total += weight;            }                        gl_FragColor = color / total;                        /* switch back from pre-multiplied alpha */            gl_FragColor.rgb /= gl_FragColor.a + 0.00001;        }    ";
        (n.call(this, e, n.tilingAwareVertexSource, t),
          (this._revxShader = new n(
            e,
            null,
            "        uniform highp sampler2D texture;        varying highp vec2 texCoord;        void main() {            gl_FragColor = texture2D(texture, vec2(1.0 - texCoord.x, texCoord.y));        }        ",
          )),
          (this._revyShader = new n(
            e,
            null,
            "        uniform highp sampler2D texture;        varying highp vec2 texCoord;        void main() {            gl_FragColor = texture2D(texture, vec2(texCoord.x, 1.0 - texCoord.y));        }        ",
          )),
          (this._revxyShader = new n(
            e,
            null,
            "        uniform highp sampler2D texture;        varying highp vec2 texCoord;        void main() {            gl_FragColor = texture2D(texture, 1.0 - texCoord);        }        ",
          )));
      }
      (i(0).inherit(r, n),
        (r.prototype._revxShader = null),
        (r.prototype._revyShader = null),
        (r.prototype._revxyShader = null),
        (r.prototype.render = function (e, t, i, n, r, o) {
          var a = e.startX,
            s = e.startY,
            l = e.endX,
            h = e.endY,
            A = e.blurRadius * t,
            c = e.gradientRadius * t,
            p = this.glEffect.width,
            u = this.glEffect.height;
          ((a = r * a * 0.01) == (l = r * l * 0.01) && l++,
            (s = o * s * 0.01) == (h = o * h * 0.01) && h++,
            (c = Math.max(r, o) * c * 0.01));
          var d,
            g = l - a,
            f = h - s,
            m = Math.sqrt(g * g + f * f),
            y = this.glEffect.texture;
          ((r && o && r > p && o > u) ||
            (d =
              g < 0
                ? f < 0
                  ? this._revxyShader
                  : this._revyShader
                : f < 0
                  ? this._revxShader
                  : null),
            d &&
              d.simpleShader.call(
                d,
                {
                  texSize: [r, o],
                  tileSize: [p, u],
                  offset: [i, n],
                },
                y,
                y,
              ),
            this.simpleShader.call(
              this,
              {
                blurRadius: A,
                gradientRadius: c,
                start: [a, s],
                end: [l, h],
                delta: [g / m, f / m],
                texSize: [r, o],
                tileSize: [p, u],
                offset: [i, n],
                swap: 1,
              },
              y,
              y,
            ),
            this.simpleShader.call(
              this,
              {
                blurRadius: A,
                gradientRadius: c,
                start: [a, s],
                end: [l, h],
                delta: [-f / m, g / m],
                texSize: [r, o],
                tileSize: [p, u],
                offset: [i, n],
                swap: -1,
              },
              y,
              y,
            ),
            d && d.simpleShader.call(d, null, y, y));
        }),
        (e.exports = r));
    }