/**
 * Module 179 - GPathUtil
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
  var n = require(113) /* GCompoundPath */, r = require(60) /* GPath */, o = require(48) /* GVertex */, a = require(45) /* GPathBase */, s = require(2) /* GNode */, l = require(87) /* GVertexSource */, h = require(54) /* GVertexContainer */;
  function A() {
    throw new Error("This class cannot be instantiated");
  }
  A.makeClockWise = function (e) {
    var t = null;
    if (e instanceof a)
      e.isClockWise() || e.reverseOrder(), t = e;
    else if (e instanceof n) {
      for (var require = e.getPaths().getFirstChild(); require;)
        A.makeClockWise(require), require = require.getNext();
      t = e;
    } else
      e.hasMixin(l) && (t = h.makeClockWise(e));
    return t;
  }, A.createPathFromVertexSource = function (e, t, i, l) {
    var h = function (e) {
        e._beginBlockCompositeEvents(true, true), e._beginBlockChanges([
          s._Change.BeforeChildRemove,
          s._Change.AfterChildRemove,
          s._Change.BeforeChildInsert,
          s._Change.AfterChildInsert
        ]);
      }, A = function (e) {
        e._endBlockCompositeEvents(true, true), e._endBlockChanges([
          s._Change.BeforeChildRemove,
          s._Change.AfterChildRemove,
          s._Change.BeforeChildInsert,
          s._Change.AfterChildInsert
        ]);
      }, c = new o(), p = [], u = null, d = null, g = null, f = false;
    for (e.rewindVertices(0), e.readVertex(c), c.command === o.Command.Move ? (u && d && d.getFirstChild() != d.getLastChild() && (u.correctClosedAttribute(), p.push(u), i && (A(u), A(d))), d = (u = new r()).getAnchorPoints(), i && (h(u), h(d)), (g = new a.AnchorPoint()).$x = c.x, g.$y = c.y, d.appendChild(g)) : f = true; !f && e.readVertex(c);)
      switch (c.command) {
      case o.Command.Line:
        (g = new a.AnchorPoint()).$x = c.x, g.$y = c.y, d.appendChild(g);
        break;
      case o.Command.Curve:
        g = new a.AnchorPoint();
        var m = new o();
        e.readVertex(m) ? (g.$x = c.x, g.$y = c.y, g.$hlx = m.x, g.$hly = m.y, d.appendChild(g)) : (g.$x = c.x, g.$y = c.y, d.appendChild(g), f = true, u.setProperty("closed", true));
        break;
      case o.Command.Curve2:
        m = new o();
        e.readVertex(m) ? (g && (g.$hrx = m.x, g.$hry = m.y), e.readVertex(m) ? ((g = new a.AnchorPoint()).$x = c.x, g.$y = c.y, g.$hlx = m.x, g.$hly = m.y, d.appendChild(g)) : ((g = new a.AnchorPoint()).$x = c.x, g.$y = c.y, d.appendChild(g), f = true, u.setProperty("closed", true))) : ((g = new a.AnchorPoint()).$x = c.x, g.$y = c.y, d.appendChild(g), f = true, u.setProperty("closed", true));
        break;
      case o.Command.Move:
        u && d && d.getFirstChild() != d.getLastChild() && (u.correctClosedAttribute(), p.push(u), i && (A(u), A(d))), d = (u = new r()).getAnchorPoints(), i && (h(u), h(d)), (g = new a.AnchorPoint()).$x = c.x, g.$y = c.y, d.appendChild(g);
        break;
      case o.Command.Close:
        u.setProperty("closed", true);
      }
    if (u && d && d.getFirstChild() != d.getLastChild() && (l || u.correctClosedAttribute(), p.push(u)), i && p.forEach(function (e) {
        A(e), A(e.getAnchorPoints());
      }), t)
      return p;
    if (1 === p.length)
      return p[0];
    if (p.length > 1) {
      for (var y = new n(), _ = 0; _ < p.length; ++_)
        y.getPaths().appendChild(p[_]);
      return y;
    }
    return null;
  }, exports.exports = A;
}
