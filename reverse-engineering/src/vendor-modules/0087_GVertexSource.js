/**
 * chunk.vendor.js Module #87
 * Type: class
 * Name: GVertexSource
 */

function (e, t, i) {
      var n = i(48),
        r = i(12);

      function o() {}
      ((o.prototype.rewindVertices = function (e) {
        return !1;
      }),
        (o.prototype.readVertex = function (e) {
          return !1;
        }),
        (o.prototype.hasVertexForRead = function () {
          return !1;
        }),
        (o.prototype.isClockWise = function () {
          this.rewindVertices(0);
          var e,
            t,
            i = 0,
            o = null,
            a = null,
            s = null,
            l = new n(),
            h = [];
          e: for (; this.readVertex(l); ) {
            switch (l.command) {
              case n.Command.Move:
                if (h.length > 0) break e;
              case n.Command.Line:
                h.push(l);
                break;
              case n.Command.Curve:
                ((e = new n()), this.readVertex(e), h.push(e), h.push(l));
                break;
              case n.Command.Curve2:
                ((e = new n()),
                  this.readVertex(e),
                  (t = new n()),
                  this.readVertex(t),
                  h.push(e),
                  h.push(t),
                  h.push(l));
                break;
              case n.Command.Close:
                ((l.x = h[0].x), (l.y = h[0].y), h.push(l));
                break e;
            }
            l = new n();
          }
          ((a = h[0]), (s = h[1]));
          for (var A = 2; A < h.length; A++) {
            ((o = a), (a = s), (s = h[A]));
            var c =
              Math.atan2(a.y - o.y, a.x - o.x) -
              Math.atan2(s.y - a.y, s.x - a.x);
            (c <= -Math.PI ? (c = r.PI2 + c) : c > Math.PI && (c = -r.PI2 + c),
              (i += c));
          }
          return i <= 0;
        }),
        (o.prototype.toSVGPath = function (e) {
          var t = "",
            i = new n(),
            r = !1;
          this.rewindVertices(0);
          for (
            var o = function (e) {
                return e && !isNaN(e.x) && !isNaN(e.y);
              },
              a = function (t) {
                return (o(t) && e && ((t.x = e(t.x)), (t.y = e(t.y))), t);
              };
            !r && this.readVertex(i);
          )
            switch ((a(i), i.command)) {
              case n.Command.Move:
                o(i) && (t += " M " + i.x + " " + i.y);
                break;
              case n.Command.Line:
                o(i) && (t += " L " + i.x + " " + i.y);
                break;
              case n.Command.Curve:
                var s = new n();
                this.readVertex(s)
                  ? o(i) &&
                    o(s) &&
                    (a(s),
                    (t += " Q " + s.x + " " + s.y + " " + i.x + " " + i.y))
                  : (r = !0);
                break;
              case n.Command.Curve2:
                s = new n();
                var l = new n();
                this.readVertex(s) && this.readVertex(l)
                  ? o(i) &&
                    o(s) &&
                    o(l) &&
                    (a(s),
                    a(l),
                    (t +=
                      " C " +
                      s.x +
                      " " +
                      s.y +
                      " " +
                      l.x +
                      " " +
                      l.y +
                      " " +
                      i.x +
                      " " +
                      i.y))
                  : (r = !0);
                break;
              case n.Command.Close:
                t += " Z ";
            }
          return t;
        }),
        (o.prototype.toString = function () {
          return "[Object GVertexSource]";
        }),
        (e.exports = o));
    }