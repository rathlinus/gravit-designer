/**
 * chunk.vendor.js Module #742
 * Type: class
 * Name: GPageGuide
 */

function (e, t, i) {
      var n = i(99),
        r = i(5),
        o = i(6),
        a = i(0),
        s = i(210);

      function l(e) {
        n.call(this, e);
      }
      (a.inheritAndMix(l, n, [n.Map]),
        (l.ID = "guide.scene"),
        (l.prototype.getId = function () {
          return l.ID;
        }),
        (l.prototype.map = function (e, t, i, n, a, l) {
          var h,
            A = null,
            c = null,
            p = null,
            u = null,
            d = null,
            g = null,
            f = null;
          n = a ? n / a : n;
          if (this._scene.isFixedSized()) {
            var m,
              y,
              _ = [],
              v = this._scene.getActivePage(),
              b = new r(e, t);
            if (this._guides.isMultiPageEnabled())
              (v && ((y = v.getPosition(!0)), l || (b = b.add(y))),
                this._scene.iteratePages(
                  function (e) {
                    var t = !0,
                      i = e.getGeometryBBox(),
                      r = e.getPosition(!0),
                      o = i ? i.translated(r.getX(), r.getY()) : null;
                    (o = o && o.expanded(n, n, n, n)) &&
                      o.containsPoint(b) &&
                      (_.push(i), (t = !1));
                    var a = e.getMarginBBox(),
                      s = a ? a.translated(r.getX(), r.getY()) : null;
                    return (
                      (s = s && s.expanded(n, n, n, n)) &&
                        s.containsPoint(b) &&
                        (_.push(a), (t = !1)),
                      t || ((m = e), (b = b.subtract(r))),
                      t
                    );
                  }.bind(this),
                ));
            else if (v) {
              m = v;
              var C = v.getGeometryBBox();
              C && _.push(C);
              var w = v.getMarginBBox();
              (w && _.push(w),
                l && ((y = m.getPosition(!1)), (b = b.subtract(y))));
            }
            for (var E = 0; E < _.length; ++E) {
              var B = _[E];
              if (B && !B.isEmpty())
                for (
                  var x = B.getSide(o.Side.TOP_LEFT),
                    P = B.getSide(o.Side.BOTTOM_RIGHT),
                    S = [x, P, B.getSide(o.Side.CENTER)],
                    T = [o.Side.TOP_LEFT, o.Side.BOTTOM_RIGHT, o.Side.CENTER],
                    I = 0;
                  I < T.length;
                  ++I
                ) {
                  var F = S[I];
                  ((h = Math.abs(b.getX() - F.getX())),
                    null === A &&
                      h <= n &&
                      ((A = F.getX()),
                      (d = h),
                      ((p = {
                        bounds: [[x.getY(), P.getY()]],
                        orient: s.Orientation.V,
                      }).line = [new r(A, x.getY()), new r(A, P.getY())])),
                    (h = Math.abs(b.getY() - F.getY())),
                    null === c &&
                      h <= n &&
                      ((c = F.getY()),
                      (g = h),
                      ((u = {
                        bounds: [[x.getX(), P.getX()]],
                        orient: s.Orientation.H,
                      }).line = [new r(x.getX(), c), new r(P.getX(), c)])));
                }
            }
          }
          return (
            (null === A && null === c) ||
              (f = {
                x:
                  null !== A
                    ? {
                        value: A,
                        guide: p,
                        delta: d,
                        page: m,
                      }
                    : null,
                y:
                  null !== c
                    ? {
                        value: c,
                        guide: u,
                        delta: g,
                        page: m,
                      }
                    : null,
              }),
            f
          );
        }),
        (l.prototype.isRelativeToPage = function () {
          return !0;
        }),
        (l.prototype.toString = function () {
          return "[Object GPageGuide]";
        }),
        (e.exports = l));
    }