/**
 * chunk.vendor.js Module #1000
 * Type: unknown
 */

function (e, t, i) {
      var n,
        r,
        o,
        a = i(0),
        s = i(54),
        l = i(63),
        h = i(59),
        A = i(48),
        c = i(727),
        p = i(17);

      function u() {}
      (a.inherit(u, c),
        (u.prototype.paint = function (e, t) {
          (e.canvas.putVertices(new l(this._getOuterVertices(), t)),
            e.canvas.fillVertices("#2CBE2D", 1),
            e.canvas.putVertices(new l(this._getInnerVertices(), t)),
            e.canvas.fillVertices(p.WHITE, 1));
        }),
        (u.prototype.getSourceBBox = function () {
          return (
            o || (o = h.calculateBounds(this._getOuterVertices(), !0)),
            o
          );
        }),
        (u.prototype.execute = function (e, t, i) {
          (t.isInlineEditing() && t.closeInlineEditor(),
            t.updateSelection(!1, [e]),
            t.openInlineEditor(e, i));
        }),
        (u.prototype._getOuterVertices = function () {
          return (
            n ||
              ((n = new s()).addVertex(A.Command.Move, 0, 12),
              n.addVertex(A.Command.Curve2, 12, 0),
              n.addVertex(A.Command.Curve2, 0, 5.377),
              n.addVertex(A.Command.Curve2, 5.377, 0),
              n.addVertex(A.Command.Curve2, 24, 12),
              n.addVertex(A.Command.Curve2, 18.623, 0),
              n.addVertex(A.Command.Curve2, 24, 5.377),
              n.addVertex(A.Command.Curve2, 12, 24),
              n.addVertex(A.Command.Curve2, 24, 18.623),
              n.addVertex(A.Command.Curve2, 18.623, 24),
              n.addVertex(A.Command.Curve2, 0, 12),
              n.addVertex(A.Command.Curve2, 5.377, 24),
              n.addVertex(A.Command.Curve2, 0, 18.623),
              n.addVertex(A.Command.Close, 0, 0)),
            n
          );
        }),
        (u.prototype._getInnerVertices = function () {
          return (
            r ||
              ((r = new s()).addVertex(A.Command.Move, 16.5, 6),
              r.addVertex(A.Command.Line, 13.5, 6),
              r.addVertex(A.Command.Curve2, 13, 6.5),
              r.addVertex(A.Command.Curve2, 13.224, 6),
              r.addVertex(A.Command.Curve2, 13, 6.224),
              r.addVertex(A.Command.Line, 13, 6.5),
              r.addVertex(A.Command.Line, 13, 8.5),
              r.addVertex(A.Command.Curve2, 13.5, 9),
              r.addVertex(A.Command.Curve2, 13, 8.776),
              r.addVertex(A.Command.Curve2, 13.224, 9),
              r.addVertex(A.Command.Line, 13.5, 9),
              r.addVertex(A.Command.Line, 16.5, 9),
              r.addVertex(A.Command.Curve2, 17, 8.5),
              r.addVertex(A.Command.Curve2, 16.776, 9),
              r.addVertex(A.Command.Curve2, 17, 8.776),
              r.addVertex(A.Command.Line, 17, 8.5),
              r.addVertex(A.Command.Line, 17, 6.5),
              r.addVertex(A.Command.Curve2, 16.5, 6),
              r.addVertex(A.Command.Curve2, 17, 6.224),
              r.addVertex(A.Command.Curve2, 16.776, 6),
              r.addVertex(A.Command.Line, 16.5, 6),
              r.addVertex(A.Command.Line, 16.5, 6),
              r.addVertex(A.Command.Close, 0, 0),
              r.addVertex(A.Command.Move, 17, 5),
              r.addVertex(A.Command.Curve2, 18, 6),
              r.addVertex(A.Command.Curve2, 17.552, 5),
              r.addVertex(A.Command.Curve2, 18, 5.448),
              r.addVertex(A.Command.Line, 18, 9),
              r.addVertex(A.Command.Curve2, 17, 10),
              r.addVertex(A.Command.Curve2, 18, 9.552),
              r.addVertex(A.Command.Curve2, 17.552, 10),
              r.addVertex(A.Command.Line, 14, 10),
              r.addVertex(A.Command.Line, 13, 11.5),
              r.addVertex(A.Command.Line, 13, 10),
              r.addVertex(A.Command.Curve2, 12, 9),
              r.addVertex(A.Command.Curve2, 12.448, 10),
              r.addVertex(A.Command.Curve2, 12, 9.552),
              r.addVertex(A.Command.Line, 12, 6),
              r.addVertex(A.Command.Curve2, 13, 5),
              r.addVertex(A.Command.Curve2, 12, 5.448),
              r.addVertex(A.Command.Curve2, 12.448, 5),
              r.addVertex(A.Command.Line, 17, 5),
              r.addVertex(A.Command.Line, 17, 5),
              r.addVertex(A.Command.Close, 0, 0),
              r.addVertex(A.Command.Move, 9.99, 9.707),
              r.addVertex(A.Command.Line, 9.821, 10.183),
              r.addVertex(A.Command.Curve2, 9.407, 11.362),
              r.addVertex(A.Command.Curve2, 9.709, 10.5),
              r.addVertex(A.Command.Curve2, 9.571, 10.893),
              r.addVertex(A.Command.Line, 8.917, 12.768),
              r.addVertex(A.Command.Curve2, 8.503, 13.947),
              r.addVertex(A.Command.Curve2, 8.753, 13.237),
              r.addVertex(A.Command.Curve2, 8.615, 13.63),
              r.addVertex(A.Command.Line, 8.334, 14.423),
              r.addVertex(A.Command.Line, 11.762, 14.423),
              r.addVertex(A.Command.Line, 10.107, 9.707),
              r.addVertex(A.Command.Line, 9.99, 9.707),
              r.addVertex(A.Command.Line, 9.99, 9.707),
              r.addVertex(A.Command.Close, 0, 0),
              r.addVertex(A.Command.Move, 13.212, 18.569),
              r.addVertex(A.Command.Line, 13.051, 18.111),
              r.addVertex(A.Command.Curve2, 12.681, 17.056),
              r.addVertex(A.Command.Curve2, 12.944, 17.806),
              r.addVertex(A.Command.Curve2, 12.821, 17.454),
              r.addVertex(A.Command.Curve2, 12.312, 16.002),
              r.addVertex(A.Command.Curve2, 12.542, 16.658),
              r.addVertex(A.Command.Curve2, 12.419, 16.307),
              r.addVertex(A.Command.Line, 12.15, 15.544),
              r.addVertex(A.Command.Line, 7.946, 15.544),
              r.addVertex(A.Command.Line, 6.884, 18.569),
              r.addVertex(A.Command.Line, 5.5, 18.569),
              r.addVertex(A.Command.Line, 9.397, 8),
              r.addVertex(A.Command.Line, 10.7, 8),
              r.addVertex(A.Command.Line, 14.597, 18.569),
              r.addVertex(A.Command.Line, 13.212, 18.569),
              r.addVertex(A.Command.Line, 13.212, 18.569),
              r.addVertex(A.Command.Close, 0, 0)),
            r
          );
        }),
        (e.exports = u));
    }