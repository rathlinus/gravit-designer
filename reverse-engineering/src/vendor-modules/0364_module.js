/**
 * chunk.vendor.js Module #364
 * Type: unknown
 */

function (e, t, i) {
      var n = i(42),
        r = i(0),
        o = i(14);

      function a(e) {
        var t = function (e, t) {
            var i =
              "if (angle >= angles[" +
              e +
              "] && angle < angles[" +
              (e + 1) +
              "]) {\n";
            return (
              a.RIGHT &&
                (i +=
                  "if (angles[" +
                  (e + 1) +
                  "] == " +
                  a.LAST_ANGLE.toFixed(1) +
                  ") {\n                    startAngle = angles[" +
                  e +
                  "];\n                    aliasFactor = -clamp(0.0,1.0," +
                  a.ANTIALIAS_ANGLE.toFixed(1) +
                  "*length(p));\n                    endAngle = angle;/*+ add trivial antialias*/\n                    startColor = colors[" +
                  e +
                  "];\n                    endColor = inputColor;\n                } else {\n"),
              (i +=
                "startAngle = angles[" +
                e +
                "];\n                startColor = colors[" +
                e +
                "];\n                endAngle = angles[" +
                (e + 1) +
                "];\n                endColor = colors[" +
                (e + 1) +
                "];\n"),
              a.RIGHT && (i += "}\n"),
              (i += "}" + (t ? " " : " else "))
            );
          },
          i = Math.max(1, Math.floor(a.MAX_ANGLES / o.getScreenDPI())),
          r =
            n.screenSpaceDither +
            "        uniform highp sampler2D tex;\n        const int MAX_ANGLES = " +
            i +
            ";\n        uniform vec2 centerPoint;\n        uniform float angles[" +
            i +
            "];\n        uniform vec4 colors[" +
            i +
            "];\n        uniform float opacity;\n        uniform int numAngles;\n        uniform float gOffset;\n        uniform vec2 texSize;\n        varying highp vec2 texCoord;\n        varying vec2 localTexCoord;\n        const float PI = 3.14159265;\n        const float PI2 = PI * 2.0;\n        void main()\n        {\n            vec4 inputColor = texture2D(tex, localTexCoord);\n            inputColor.a = 0.0;\n            vec2 p = vec2(centerPoint)-texCoord;\n            float aliasFactor = 0.0;\n            float angle = atan(p.y, p.x) + PI + gOffset;\n            float startAngle;\n            float endAngle;\n            vec4 startColor;\n            vec4 endColor;\n            int numAnglesM1 = numAngles - 1;\n            if (angle < angles[0]) {\n                angle += PI2;\n            }\n";
        a.LEFT
          ? (r +=
              "if (angle < angles[1]) {\n                aliasFactor = clamp(0.0,angles[1]," +
              a.ANTIALIAS_ANGLE.toFixed(1) +
              "*(p.x/p.y));\n                startAngle = angle;/*-aliasFactor;*/\n                startColor = inputColor;\n                endAngle = angles[1];\n                endColor = colors[1];\n            } else \n")
          : (r += t(0, 0 == i - 2));
        for (var s = 1; s < i - 1; s++) r += t(s, s === i - 2);
        ((r +=
          "        float aOffset = abs((angle - startAngle) / (endAngle - startAngle));\n        vec4 color = mix(startColor, endColor, aOffset);\n        /* Multiply by the transparency of the source pixel */\n        /* vec3 output = color.rgb * src.a;*/\n        gl_FragColor.rgb = (inputColor.rgb*(1.0-opacity) + color.rgb*opacity)+screenSpaceDither(texCoord*texSize);\n        gl_FragColor.a = inputColor.a*(1.0-opacity) + color.a*opacity;\n        }        "),
          n.call(this, e, n.tilingAwareVertexSource, r));
      }
      (r.inherit(a, n),
        (a.MAX_ANGLES = 16),
        (a.ANTIALIAS_ANGLE = 1),
        (a.LEFT = !1),
        (a.RIGHT = !1),
        (a.prototype.additionalGradient = null),
        (a.prototype.render = function (e, t, i, n, r, o, a, s) {
          var l = [],
            h = [],
            A = e.stops,
            c = e.a0 + Math.PI;
          A.sort(function (e, t) {
            return e.position - t.position;
          });
          for (var p = 0; p < A.length; p++) {
            var u = A[p].position;
            (l.push(u),
              h.push(A[p].color.getValue().concat([255 * A[p].opacity])));
          }
          ((l = l.map(function (e) {
            return c + 2 * Math.PI * e;
          })),
            (l = [c].concat(l).concat(c + 2 * Math.PI + 1e-9)));
          var d = h[h.length - 1],
            g = (h = [h[0]].concat(h).concat([d]))[0].map(function (e, t) {
              return h.map(function (e) {
                return e[t] / 255;
              });
            }),
            f = {
              centerPoint: [e.cx, e.cy],
              numAngles_int_: l.length,
              opacity: e.opacity,
              angles: [l],
              colors: g,
              gOffset: 0,
              texSize: [r, o],
              tileSize: [this.glEffect.width, this.glEffect.height],
              offset: [i, n],
            };
          (this.simpleShader.call(this, f, a, s),
            l[0] % Math.PI > 1e-4 && this.fxaa(i, n, r, o, !0));
        }),
        (e.exports = a));
    }