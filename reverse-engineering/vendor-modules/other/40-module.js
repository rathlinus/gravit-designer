/**
 * Module 40
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This code is minified. Variable names like e, t, n, i, o, a, r, s
 * have been compressed. Refer to the original open-source Gravit code
 * for better understanding of the logic.
 */

function (e, t, i) {
      var n = i(17),
        r = i(6),
        o = i(5),
        a = i(24),
        s = i(14),
        l = {};
      var h = {
        SHADOW_SIZE: 2,
        SHADOW_COLOR: "rgba(0,0,0,0.75)",
        paintAnnotation: function (e, t, i, r, o, A, c, p, u, d, g) {
          if (o) {
            var f = c;
            (c = p), (p = f);
          }
          var m = (function (e, t, i, r, o, A, c) {
            var p = e.toString() + "_" + t.toString(),
              u = null,
              d = null;
            if (
              (i && (p += "_" + (u = i.toScreenCSS())),
              r && (p += "_" + (d = r.toScreenCSS())),
              o && (p += "_" + o),
              A && (p += "_" + A),
              c && (p += "_" + c),
              l[p])
            )
              return l[p];
            var g = t,
              f = 0,
              m = t + 2 + 4 * h.SHADOW_SIZE;
            u &&
              ((t -= 2 * (f = o || a.outlineWidth)),
              "rect" === e ||
                u !== n.WHITE.toScreenCSS() ||
                c ||
                ((f += 0.5), (t += 1), (m += 2)));
            var y = document.createElement("canvas");
            (y.width = m), (y.height = m);
            var _ = y.getContext("2d");
            (_.fillStyle = d || "transparent"),
              (_.strokeStyle = u || "transparent"),
              (_.lineWidth = f);
            var v = y.width / 2,
              b = y.height / 2,
              C = t / 2;
            f > 0 && f % 2 != 0 && (C += 0.5);
            var w = function (t, i) {
              switch ((t.beginPath(), e)) {
                case "rect":
                  t.moveTo(v - i, b - i),
                    t.lineTo(v + i, b - i),
                    t.lineTo(v + i, b + i),
                    t.lineTo(v - i, b + i);
                  break;
                case "circle":
                  t.arc(v, b, i, 0, 2 * Math.PI, !1);
                  break;
                case "diamond":
                  t.moveTo(v - i - 1, b),
                    t.lineTo(v, b - i - 1),
                    t.lineTo(v + i + 1, b),
                    t.lineTo(v, b + i + 1);
              }
              t.closePath();
            };
            if ((w(_, C), d)) {
              var E = A || h.SHADOW_COLOR;
              h.SHADOW_SIZE &&
                E &&
                ((_.shadowColor = E),
                (_.shadowBlur = h.SHADOW_SIZE * (f || 1)),
                (_.shadowOffsetX = 0),
                (_.shadowOffsetY = 0)),
                _.fill();
            }
            if ((u && ((_.shadowColor = "transparent"), _.stroke()), c)) {
              var B = document.createElement("canvas");
              (B.width = m), (B.height = m);
              var x = B.getContext("2d");
              w(x, (u && f ? Math.max(g - f, t) : g) / 2),
                (x.lineWidth = 2),
                x.stroke(),
                (x.globalCompositeOperation =
                  s.CompositeOperator.DestinationOut),
                x.fill(s.FillRule.EvenOdd),
                (x.fillStyle = d),
                (x.globalCompositeOperation = s.CompositeOperator.SourceIn),
                x.fillRect(0, 0, m, m),
                _.drawImage(B, 0, 0);
            }
            return (l[p] = y), l[p];
          })(r, A, c, p, u, d, g);
          t && (i = t.mapPoint(i));
          var y = Math.floor(i.getX() - m.width / 2),
            _ = Math.floor(i.getY() - m.height / 2);
          e.canvas.drawImage(m, y, _, !0);
        },
        getAnnotationBBox: function (e, t, i, n) {
          (t = t || new o(0, 0)), e && (t = e.mapPoint(t));
          var a = Math.floor(t.getX()) + 0.5,
            s = Math.floor(t.getY()) + 0.5,
            l = new r(a - i / 2 - 1, s - i / 2 - 1, i + 2, i + 2);
          if (n) {
            var h = this.getAnnotationPaintMargin(i) / 2;
            l = l.expanded(h, h, h, h);
          }
          return l;
        },
        getAnnotationPaintMargin: function (e) {
          return e + 4 + h.SHADOW_SIZE * a.outlineWidth * 4;
        },
      };
      e.exports = h;
    }
