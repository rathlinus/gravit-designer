/**
 * Module 1134
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (exports, module, require) {
  var n = require(60) /* GPath */, r = require(113) /* GCompoundPath */, o = require(45) /* GPathBase */, a = require(2) /* GNode */, s = require(5) /* GPoint */, l = require(12) /* GMath */, h = require(1127) /* module */, A = {
      Straight: 1,
      Mirror: 2,
      Symmetric: 3,
      Asymmetric: 4
    };
  function c() {
    throw new Error();
  }
  c.generatePath = function (e, t, i, s, l) {
    var p, u, d, g = [], f = function (e) {
        e._beginBlockCompositeEvents(true, true), e._beginBlockChanges([
          a._Change.BeforeChildRemove,
          a._Change.AfterChildRemove,
          a._Change.BeforeChildInsert,
          a._Change.AfterChildInsert
        ]);
      }, m = function (e) {
        e._endBlockCompositeEvents(true, true), e._endBlockChanges([
          a._Change.BeforeChildRemove,
          a._Change.AfterChildRemove,
          a._Change.BeforeChildInsert,
          a._Change.AfterChildInsert
        ]);
      };
    if (e.points.forEach(function (e, i) {
        var r = new h(e);
        switch (r.transform(t), r.curveMode) {
        case A.Straight:
          p || (p = new n(), u = p.getAnchorPoints(), p.setSketchPath(true), f(p), f(u)), (d = new o.AnchorPoint()).setProperties([
            "x",
            "y",
            "tp"
          ], [
            r.point.getX(),
            r.point.getY(),
            o.CornerType.Rounded
          ]), u.appendChild(d);
          break;
        case A.Symmetric:
        case A.Asymmetric:
        case A.Mirror:
          p || (p = new n(), u = p.getAnchorPoints(), p.setSketchPath(true));
          var a = o.AnchorPoint.Type[Object.keys(A)[r.curveMode - 1]], g = r.point, m = r.curveFrom, y = r.curveTo;
          (d = new o.AnchorPoint()).setProperties([
            "tp",
            "x",
            "y",
            "hlx",
            "hly",
            "hrx",
            "hry",
            "cl",
            "cr"
          ], [
            a,
            g.getX(),
            g.getY(),
            y.getX(),
            y.getY(),
            m.getX(),
            m.getY(),
            0,
            0
          ]), u.appendChild(d);
          break;
        default:
          console.warn("Unsupported curve mode: " + r.curveMode);
        }
        if (0 != r.cornerRadius || !r.hasOwnProperty("cornerRadius") && l && r.curveMode === A.Straight) {
          var _ = r.cornerRadius || l, v = c.getPointsMinDistance(s) / 2;
          v < _ && (_ = v), d.setProperties([
            "cl",
            "cr"
          ], [
            _,
            _
          ]);
        }
      }), p && i && p.setProperty("closed", true), p && u && u.getFirstChild() != u.getLastChild() && (p.correctClosedAttribute(), g.push(p)), g.forEach(function (e) {
        m(e), m(e.getAnchorPoints());
      }), 1 === g.length)
      return g[0];
    if (g.length > 1) {
      for (var y = new r(), _ = 0; _ < g.length; ++_)
        y.getPaths().appendChild(g[_]);
      return y;
    }
    return null;
  }, c.getPointsMinDistance = function (e) {
    var t = new s(e.getX(), e.getY()), i = new s(e.getX() + e.getWidth(), e.getY()), n = new s(e.getX(), e.getY() + e.getHeight());
    return Math.min(l.ptDist(t.getX(), t.getY(), i.getX(), i.getY()), l.ptDist(t.getX(), t.getY(), n.getX(), n.getY()));
  }, exports.exports = c;
}
