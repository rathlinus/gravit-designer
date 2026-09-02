/**
 * chunk.vendor.js Module #1077
 * Type: class
 * Name: GSymbolLabelGuide
 */

function (e, t, i) {
      var n = i(0),
        r = i(744),
        o = i(5),
        a = (i(14), i(12), i(17), i(14), i(6)),
        s = i(2),
        l = i(83),
        h = (i(216), i(9)),
        A = i(47);
      i(133);

      function c(e) {
        r.call(this, e);
      }
      (n.inherit(c, r),
        (c.ID = "guide.symbollabel"),
        (c.prototype.getId = function () {
          return c.ID;
        }),
        (c.prototype._gatherLabels = function (e, t) {
          var i = null;
          if (t.configuration.symbolLabelsVisible) {
            t.canvas;
            var n = t.dirtyMatcher.getDirtyRectangles(),
              c = [],
              p = [];
            i = [];
            p = (c = this._scene.getSymbols().filter(function (e) {
              return e.isMaster() && e.getScene();
            })).map(function (e) {
              return e.findParent(function (e) {
                if (e instanceof l) return !0;
              });
            });
            for (var u = 0; u < n.length; ++u)
              for (var d = n[u], g = c.length - 1; g >= 0; g--) {
                var f = p[g];
                if (t.configuration.multiPageView || f.hasFlag(s.Flag.Active)) {
                  var m = c[g],
                    y = m.getFrame();
                  if (y) {
                    var _ = m.isScaleLabel() ? e.getScaleFactor() : 1,
                      v = this._scene.getLabelBBox(_).getHeight(),
                      b = f.getPosition(t.configuration.multiPageView);
                    y = y.translated(b.getX(), b.getY());
                    var C = new a(y.getX(), y.getY() - v, y.getWidth(), v);
                    if (d.containsRect(C) || C.intersectsRect(d)) {
                      var w = e.mapRect(y),
                        E = m.$name || h.get(new A("GSymbol", "name")),
                        B = t.selectionThirdOutlineColor;
                      (i.push(
                        new r.LabelItem(
                          new o(w.getX(), w.getY()),
                          w.getWidth(),
                          (m.isMaster() ? "○ " : "● ") + E,
                          B,
                          m.isScaleLabel(),
                        ),
                      ),
                        c.splice(g, 1),
                        p.splice(g, 1));
                    }
                  }
                }
              }
          }
          return i;
        }),
        (c.prototype.toString = function () {
          return "[Object GSymbolLabelGuide]";
        }),
        (e.exports = c));
    }