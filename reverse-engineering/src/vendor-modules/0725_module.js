/**
 * chunk.vendor.js Module #725
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      var n = i(105),
        r = i(529),
        o = i(89),
        a = i(326);

      function s(e, t, i, n, r) {
        var o;
        return (
          (t & n) > 0
            ? ((o = e.parseByte()), 0 == (t & r) && (o = -o), (o = i + o))
            : (o = (t & r) > 0 ? i : i + e.parseShort()),
          o
        );
      }

      function l(e, t, i) {
        var r,
          a,
          l,
          h = new o.Parser(t, i);
        if (
          ((e.numberOfContours = h.parseShort()),
          (e._xMin = h.parseShort()),
          (e._yMin = h.parseShort()),
          (e._xMax = h.parseShort()),
          (e._yMax = h.parseShort()),
          e.numberOfContours > 0)
        ) {
          var A = (e.endPointIndices = []);
          for (l = 0; l < e.numberOfContours; l += 1) A.push(h.parseUShort());
          for (
            e.instructionLength = h.parseUShort(), e.instructions = [], l = 0;
            l < e.instructionLength;
            l += 1
          )
            e.instructions.push(h.parseByte());
          var c = A[A.length - 1] + 1;
          for (r = [], l = 0; l < c; l += 1)
            if (((a = h.parseByte()), r.push(a), (8 & a) > 0))
              for (var p = h.parseByte(), u = 0; u < p; u += 1)
                (r.push(a), (l += 1));
          if ((n.argument(r.length === c, "Bad flags."), A.length > 0)) {
            var d,
              g = [];
            if (c > 0) {
              for (l = 0; l < c; l += 1)
                ((a = r[l]),
                  ((d = {}).onCurve = !!(1 & a)),
                  (d.lastPointOfContour = A.indexOf(l) >= 0),
                  g.push(d));
              var f = 0;
              for (l = 0; l < c; l += 1)
                ((a = r[l]), ((d = g[l]).x = s(h, a, f, 2, 16)), (f = d.x));
              var m = 0;
              for (l = 0; l < c; l += 1)
                ((a = r[l]), ((d = g[l]).y = s(h, a, m, 4, 32)), (m = d.y));
            }
            e.points = g;
          } else e.points = [];
        } else if (0 === e.numberOfContours) e.points = [];
        else {
          ((e.isComposite = !0), (e.points = []), (e.components = []));
          for (var y = !0; y; ) {
            r = h.parseUShort();
            var _ = {
              glyphIndex: h.parseUShort(),
              xScale: 1,
              scale01: 0,
              scale10: 0,
              yScale: 1,
              dx: 0,
              dy: 0,
            };
            ((1 & r) > 0
              ? (2 & r) > 0
                ? ((_.dx = h.parseShort()), (_.dy = h.parseShort()))
                : (_.matchedPoints = [h.parseUShort(), h.parseUShort()])
              : (2 & r) > 0
                ? ((_.dx = h.parseChar()), (_.dy = h.parseChar()))
                : (_.matchedPoints = [h.parseByte(), h.parseByte()]),
              (8 & r) > 0
                ? (_.xScale = _.yScale = h.parseF2Dot14())
                : (64 & r) > 0
                  ? ((_.xScale = h.parseF2Dot14()),
                    (_.yScale = h.parseF2Dot14()))
                  : (128 & r) > 0 &&
                    ((_.xScale = h.parseF2Dot14()),
                    (_.scale01 = h.parseF2Dot14()),
                    (_.scale10 = h.parseF2Dot14()),
                    (_.yScale = h.parseF2Dot14())),
              e.components.push(_),
              (y = !!(32 & r)));
          }
          if (256 & r)
            for (
              e.instructionLength = h.parseUShort(), e.instructions = [], l = 0;
              l < e.instructionLength;
              l += 1
            )
              e.instructions.push(h.parseByte());
        }
      }

      function h(e, t) {
        for (var i = [], n = 0; n < e.length; n += 1) {
          var r = e[n],
            o = {
              x: t.xScale * r.x + t.scale01 * r.y + t.dx,
              y: t.scale10 * r.x + t.yScale * r.y + t.dy,
              onCurve: r.onCurve,
              lastPointOfContour: r.lastPointOfContour,
            };
          i.push(o);
        }
        return i;
      }

      function A(e) {
        var t = new a.Path();
        if (!e) return t;
        for (
          var i = (function (e) {
              for (var t = [], i = [], r = 0; r < e.length; r += 1) {
                var o = e[r];
                (i.push(o), o.lastPointOfContour && (t.push(i), (i = [])));
              }
              return (
                n.argument(
                  0 === i.length,
                  "There are still points left in the current contour.",
                ),
                t
              );
            })(e),
            r = 0;
          r < i.length;
          ++r
        ) {
          var o = i[r],
            s = null,
            l = o[o.length - 1],
            h = o[0];
          if (l.onCurve) t.moveTo(l.x, l.y);
          else if (h.onCurve) t.moveTo(h.x, h.y);
          else {
            var A = {
              x: 0.5 * (l.x + h.x),
              y: 0.5 * (l.y + h.y),
            };
            t.moveTo(A.x, A.y);
          }
          for (var c = 0; c < o.length; ++c)
            if (((s = l), (l = h), (h = o[(c + 1) % o.length]), l.onCurve))
              t.lineTo(l.x, l.y);
            else {
              var p = s,
                u = h;
              (s.onCurve ||
                ((p = {
                  x: 0.5 * (l.x + s.x),
                  y: 0.5 * (l.y + s.y),
                }),
                t.lineTo(p.x, p.y)),
                h.onCurve ||
                  (u = {
                    x: 0.5 * (l.x + h.x),
                    y: 0.5 * (l.y + h.y),
                  }),
                t.lineTo(p.x, p.y),
                t.quadraticCurveTo(l.x, l.y, u.x, u.y));
            }
          t.closePath();
        }
        return t;
      }

      function c(e, t) {
        if (t.isComposite)
          for (var i = 0; i < t.components.length; i += 1) {
            var n = t.components[i],
              r = e.get(n.glyphIndex);
            if ((r.getPath(), r.points)) {
              var o;
              if (void 0 === n.matchedPoints) o = h(r.points, n);
              else {
                if (
                  n.matchedPoints[0] > t.points.length - 1 ||
                  n.matchedPoints[1] > r.points.length - 1
                )
                  throw Error("Matched points out of range in " + t.name);
                var a = t.points[n.matchedPoints[0]],
                  s = r.points[n.matchedPoints[1]],
                  l = {
                    xScale: n.xScale,
                    scale01: n.scale01,
                    scale10: n.scale10,
                    yScale: n.yScale,
                    dx: 0,
                    dy: 0,
                  };
                ((s = h([s], l)[0]),
                  (l.dx = a.x - s.x),
                  (l.dy = a.y - s.y),
                  (o = h(r.points, l)));
              }
              t.points = t.points.concat(o);
            }
          }
        return A(t.points);
      }
      ((t.parse = function (e, t, i, n) {
        var o,
          a = new r.GlyphSet(n);
        for (o = 0; o < i.length - 1; o += 1) {
          var s = i[o];
          s !== i[o + 1]
            ? a.push(o, r.ttfGlyphLoader(n, o, l, e, t + s, c))
            : a.push(o, r.glyphLoader(n, o));
        }
        return a;
      }),
        (t.getPath = A));
    }