/**
 * Module 1077
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
  var n = require(0) /* GObject */, r = require(744) /* LabelItem */, o = require(5) /* GPoint */, a = (require(14) /* GPaintCanvas */, require(12) /* GMath */, require(17) /* GRGBColor */, require(14) /* GPaintCanvas */, require(6) /* GRect */), s = require(2) /* GNode */, l = require(83) /* GPage */, h = (require(216) /* GSymbol */, require(9) /* GLocale */), A = require(47) /* GLocaleKey */;
  require(133) /* GScenePaintConfiguration */;
  function c(e) {
    r.call(this, e);
  }
  n.inherit(c, r), c.ID = "guide.symbollabel", c.prototype.getId = function () {
    return c.ID;
  }, c.prototype._gatherLabels = function (e, t) {
    var i = null;
    if (t.configuration.symbolLabelsVisible) {
      t.canvas;
      var n = t.dirtyMatcher.getDirtyRectangles(), c = [], p = [];
      i = [];
      p = (c = this._scene.getSymbols().filter(function (e) {
        return e.isMaster() && e.getScene();
      })).map(function (e) {
        return e.findParent(function (e) {
          if (e instanceof l)
            return true;
        });
      });
      for (var u = 0; u < n.length; ++u)
        for (var d = n[u], g = c.length - 1; g >= 0; g--) {
          var f = p[g];
          if (t.configuration.multiPageView || f.hasFlag(s.Flag.Active)) {
            var m = c[g], y = m.getFrame();
            if (y) {
              var _ = m.isScaleLabel() ? e.getScaleFactor() : 1, v = this._scene.getLabelBBox(_).getHeight(), b = f.getPosition(t.configuration.multiPageView);
              y = y.translated(b.getX(), b.getY());
              var C = new a(y.getX(), y.getY() - v, y.getWidth(), v);
              if (d.containsRect(C) || C.intersectsRect(d)) {
                var w = e.mapRect(y), E = m.$name || h.get(new A("GSymbol", "name")), B = t.selectionThirdOutlineColor;
                i.push(new r.LabelItem(new o(w.getX(), w.getY()), w.getWidth(), (m.isMaster() ? "\u25CB " : "\u25CF ") + E, B, m.isScaleLabel())), c.splice(g, 1), p.splice(g, 1);
              }
            }
          }
        }
    }
    return i;
  }, c.prototype.toString = function () {
    return "[Object GSymbolLabelGuide]";
  }, exports.exports = c;
}
