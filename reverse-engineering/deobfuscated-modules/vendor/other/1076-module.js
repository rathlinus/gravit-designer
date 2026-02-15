/**
 * Module 1076
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
  var n = require(6) /* GRect */, r = require(7) /* GTransform */, o = require(2) /* GNode */, a = require(22) /* GElement */, s = (require(83) /* GPage */, require(0) /* GObject */), l = require(99) /* module */, h = require(327) /* GActionable */, A = require(140) /* module */;
  function c(e) {
    l.call(this, e);
  }
  s.inheritAndMix(c, l, [l.Visual]), c.ID = "guide.action", c.prototype.getId = function () {
    return c.ID;
  }, c.prototype.paint = function (e, t) {
    var i = this._gatherActions(e, t);
    i && i.forEach(function (e) {
      e.action.paint(t, e.transform);
    });
  }, c.prototype.map = function () {
    return null;
  }, c.prototype._gatherActions = function (e, t) {
    var i = t.dirtyMatcher.getDirtyRectangles(), s = this._scene, l = t.canvas, c = e.inverted().mapRect(new n(0, 0, l.getWidth(), l.getHeight())), p = s.retrieveChildrenInPaintBBox(c, A.RETRIEVE_MODE_INTERSECT);
    if (p) {
      var u;
      t.configuration.multiPageView || (p = p.filter(function (e) {
        return e.hasFlag(o.Flag.Active);
      }));
      var d = [], g = [], f = function (e) {
          if (e.hasMixin(h) && (d.push(e), g.push(u)), e instanceof a && e.hasMixin(o.Container))
            if (e.hasMixin(a.Accelerated)) {
              var t = e.retrieveChildrenInPaintBBox(c, A.RETRIEVE_MODE_INTERSECT);
              t && t.forEach(f);
            } else
              for (var i = e.getLastChild(); null != i; i = i.getPrevious())
                f(i);
        };
      p.forEach(function (e) {
        f(u = e);
      });
      for (var m = [], y = 0; y < i.length; ++y)
        for (var _ = i[y], v = d.length - 1; v >= 0; v--) {
          var b = g[v], C = d[v], w = C.getActionsBBox();
          if (w) {
            var E = e.getScaleFactor(), B = b.getPosition(t.configuration.multiPageView);
            if (w = w.translated(B.getX(), B.getY()), _.containsRect(w) || w.intersectsRect(_)) {
              var x = e.mapRect(w).getSide(n.Side.TOP_LEFT), P = 0;
              C.getActions().forEach(function (e) {
                m.push({
                  action: e,
                  transform: new r().scaled(E, E).translated(x.getX() + P, x.getY())
                }), P -= 5;
              }), d.splice(v, 1), g.splice(v, 1);
            }
          }
        }
      return m;
    }
  }, c.prototype.toString = function () {
    return "[Object GActionGuide]";
  }, exports.exports = c;
}
