/**
 * chunk.vendor.js Module #934
 * Type: unknown
 */

function (e, t, i) {
      var n = i(14),
        r = i(0),
        o = i(664),
        a = i(118),
        s = (i(5), i(7)),
        l = i(935),
        h = i(936),
        A = i(166),
        c = i(6);

      function p(e) {
        ((this._currentCanvasGrid = new h(
          A.CACHE_CANVAS_GRID_ITEM_WIDTH,
          A.CACHE_CANVAS_GRID_ITEM_HEIGHT,
        )),
          (this._cachedCanvases = [
            new p.CacheEntry(this._currentCanvasGrid, this.scale),
          ]),
          (this._resolution = e || 1));
      }
      (r.inheritAndMix(p, r, [a]),
        (p.CacheEntry = function (e, t) {
          ((this.canvasGrid = e),
            (this.scale = t),
            (this.cacheMatcher = new l()));
        }),
        (p.CacheEntry.prototype.canvasGrid = null),
        (p.CacheEntry.prototype.scale = 1),
        (p.CacheEntry.prototype.cacheMatcher = null),
        (p.prototype._cachedCanvases = null),
        (p.prototype._resolution = 1),
        (p.prototype._currentCanvasGrid = null),
        (p.prototype.resize = function (e, t) {}),
        (p.prototype.getGimmick = function (e, t, i) {
          if (!e || !e.length) return null;
          if (e.length > 1 || 0 != e[0].getX() || 0 != e[0].getY()) return null;
          for (var r, o = -1, a = 0; a < this._cachedCanvases.length; a++) {
            var s = this._cachedCanvases[a].scale;
            s < i &&
              s > o &&
              !this._cachedCanvases[a].canvasGrid.isEmpty() &&
              ((o = s), (r = a));
          }
          if (o < 0) return null;
          var l = o / i,
            h = new n(!1, !0, !1),
            A = new n(!1, !0, !1),
            p = this._cachedCanvases[r],
            u = new c(0, 0, 1, 1);
          for (a = 0; a < e.length; a++) u = u.united(e[a]);
          var d = p.cacheMatcher.getRects(),
            g = p.canvasGrid,
            f = [],
            m = e.map(function (e) {
              return e
                .scaledAt(l, l, e.getSide(c.Side.TOP_LEFT))
                .translated(t.getX() * l, t.getY() * l)
                .toAlignedRect();
            });
          for (a = 0; a < d.length; a++)
            for (var y = 0; y < m.length; y++) {
              var _ = m[y].intersected(d[a]);
              _ && !_.isEmpty() && f.push(_);
            }
          if (!f.length) return null;
          (A.resize(u.getWidth() * l, u.getHeight() * l),
            A.prepare(),
            h.resize(u.getWidth(), u.getHeight()),
            h.prepare());
          for (a = 0; a < f.length; a++) {
            var v = f[a],
              b = v.translated(-t.getX() * l, -t.getY() * l);
            (g.drawFragmentTo(
              A,
              v.getX(),
              v.getY(),
              b.getX(),
              b.getY(),
              v.getWidth(),
              v.getHeight(),
            ),
              h.drawImageFragment(
                A,
                b.getX(),
                b.getY(),
                b.getX() / l,
                b.getY() / l,
                v.getWidth(),
                v.getHeight(),
                void 0,
                void 0,
                void 0,
                v.getWidth() / l,
                v.getHeight() / l,
              ));
          }
          return h;
        }),
        (p.prototype.cachedRender = function (e, t, i, n, r, a) {
          var h = this._getItemFromZoom(n);
          if (!h) return t;
          var c = h.cacheMatcher.getRects(),
            p = h.canvasGrid;
          t.transform(new s().translated(i.getX() + r, i.getY() + a));
          for (var u = [], d = 0; d < c.length; d++) {
            var g = t.intersect(c[d]);
            g && (u = u.concat(g.getDirtyRectangles()));
          }
          for (d = 0; d < u.length; d++) {
            var f = u[d],
              m = f.translated(-i.getX() - r, -i.getY() - a);
            p.drawFragmentTo(
              e,
              f.getX(),
              f.getY(),
              m.getX(),
              m.getY(),
              f.getWidth(),
              f.getHeight(),
            );
          }
          t.transform(new s().translated(-i.getX() - r, -i.getY() - a));
          var y = t.getDirtyRectangles(),
            _ = new l();
          for (d = 0; d < y.length; d++) _.merge(y[d]);
          for (d = 0; d < u.length; d++)
            _.subtract(u[d].translated(-i.getX() - r, -i.getY() - a));
          var v = _.getRects(),
            b = !0;
          for (d = 0; d < v.length; d++)
            if (!v[d].isEmpty()) {
              b = !1;
              break;
            }
          return (
            A.SHOW_CACHE_DEBUG_LOG &&
              console.log(
                "(render) matcher has " +
                  h.cacheMatcher.getRects().length +
                  " rects",
              ),
            b ? null : o.Matcher.from(v)
          );
        }),
        (p.prototype.setCache = function (e, t, i, r) {
          var o = r || e.getOrigin(),
            a = o.getX(),
            s = o.getY(),
            h = "number" == typeof i ? i : e.getScale() * n.getScreenDPI(),
            p = this._getItemFromZoom(h);
          if ((p || (p = this._getNewItem(h)), t)) {
            for (
              var u = new l(), d = (this._resolution, 0);
              d < t.length;
              d++
            ) {
              var g = t[d];
              ((g = g.toAlignedRect()), u.merge(g));
            }
            var f = u.getRects();
            for (d = 0; d < f.length; d++) {
              var m = (C = f[d]).translated(a, s);
              for (
                p.cacheMatcher.merge(m),
                  p.canvasGrid.drawFragmentFrom(
                    e,
                    C.getX(),
                    C.getY(),
                    m.getX(),
                    m.getY(),
                    m.getWidth(),
                    m.getHeight(),
                  );
                p.canvasGrid._paintCanvases.length > A.MAX_CACHED_PER_ONE_ZOOM;
              ) {
                var y = p.canvasGrid._paintCanvases.shift();
                p.cacheMatcher.subtract(
                  new c(y.x, y.y, y.canvas.getWidth(), y.canvas.getHeight()),
                );
              }
            }
            if (A.SHOW_CACHE_DIRTIES) {
              var _ = p.cacheMatcher.getRects();
              for (d = 0; d < p.canvasGrid._paintCanvases.length; d++) {
                var v = 0.2;
                gdb_debug_canvas(
                  p.canvasGrid._paintCanvases[d].canvas,
                  d * p.canvasGrid._paintCanvases[d].canvas.getWidth() * v,
                  0,
                  !1,
                  !1,
                  v,
                );
                for (var b = 0; b < _.length; b++) {
                  var C = _[b],
                    w = p.canvasGrid._paintCanvases[d],
                    E = new c(
                      w.x,
                      w.y,
                      w.canvas.getWidth(),
                      w.canvas.getHeight(),
                    );
                  C.intersectsRect(E) &&
                    w.canvas.strokeRect(
                      C.getX() - w.x,
                      C.getY() - w.y,
                      C.getWidth(),
                      C.getHeight(),
                      1,
                      "#0f0",
                    );
                }
              }
            }
            if (A.SHOW_DEBUG_CANVAS_CACHE)
              for (d = 0; d < p.canvasGrid._paintCanvases.length; d++) {
                v = 0.2;
                gdb_debug_canvas(
                  p.canvasGrid._paintCanvases[d].canvas,
                  d * p.canvasGrid._paintCanvases[d].canvas.getWidth() * v,
                  0,
                  !1,
                  !1,
                  v,
                );
              }
            if (
              (A.SHOW_CACHE_DEBUG_LOG &&
                (console.log("Adding " + t.length + " areas"),
                t.forEach(function (e) {
                  console.log(
                    "new GRect(" +
                      e.getX() +
                      "," +
                      e.getY() +
                      "," +
                      e.getWidth() +
                      "," +
                      e.getHeight() +
                      ");",
                  );
                }),
                console.log(
                  "Now cache has " +
                    p.cacheMatcher.getRects().length +
                    " rects",
                )),
              Math.floor(a) !== a)
            )
              throw new Error();
            if (Math.floor(s) !== s) throw new Error();
          } else console.warn("Set cache with empty areas");
        }),
        (p.prototype.setDirty = function (e, t, i, n) {
          if (
            (A.SHOW_CACHE_DEBUG_LOG &&
              (console.log("Subtracting:"),
              console.log(e ? e.translated(i, n).toString() : "all")),
            e)
          )
            for (s = 0; s < this._cachedCanvases.length; s++) {
              var r = this._cachedCanvases[s],
                o = r.scale / t,
                a = e.translated(i, n).scaled(o, o).toAlignedRect();
              r.cacheMatcher.subtract(a);
            }
          else
            for (var s = 0; s < this._cachedCanvases.length; s++)
              this._cachedCanvases[s].cacheMatcher.reset();
        }),
        (p.prototype._getItemFromZoom = function (e) {
          for (var t, i, n = 0; n < this._cachedCanvases.length && !t; n++)
            this._cachedCanvases[n].scale == e &&
              ((t = this._cachedCanvases[n]), (i = n));
          return (
            t &&
              (this._cachedCanvases.splice(i, 1), this._cachedCanvases.push(t)),
            t
          );
        }),
        (p.prototype._getNewItem = function (e) {
          var t = new p.CacheEntry(
            new h(
              A.CACHE_CANVAS_GRID_ITEM_WIDTH,
              A.CACHE_CANVAS_GRID_ITEM_HEIGHT,
            ),
            e,
          );
          return (
            this._cachedCanvases.push(t),
            this._cachedCanvases.length > A.MAX_CACHED_ZOOM_LEVELS &&
              this._cachedCanvases.shift(),
            t
          );
        }),
        (p.prototype.destroy = function () {
          for (var e = 0; e < this._cachedCanvases.length; e++)
            (this._cachedCanvases[e].canvasGrid.destroy(),
              this._cachedCanvases[e].cacheMatcher.reset());
          this._cachedCanvases = [];
        }),
        (e.exports = p));
    }