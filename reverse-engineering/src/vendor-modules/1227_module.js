/**
 * chunk.vendor.js Module #1227
 * Type: unknown
 */

function (e, t, i) {
      var n = i(391),
        r = i(0),
        o = i(11),
        a = i(182),
        s = i(1146),
        l = i(1416),
        h = i(1417),
        A = function (e, t) {
          if (t && t.transform && t.doc) {
            var i = t.doc,
              r = t.transform._ty,
              A = t.transform._tx;
            if (
              ((this.transform = t.transform),
              (this.transform = this.transform
                .translated(-A, -r)
                .scaled(1, -1)
                .translated(A, i.relativeY(r))),
              this.isValid())
            ) {
              var c = t.colorSpace || t.doc.getColorSpace();
              (s.call(this, e, c), (this._gradient = t.color));
              var p = new a(),
                u = new a(),
                d = new a(),
                g = this._gradient._stops2.slice().sort(function (e, t) {
                  return e.stop - t.stop;
                }),
                f = g[0];
              (0 !== f.stop && (((f = o.extend({}, f)).stop = 0), g.unshift(f)),
                o.each(
                  g,
                  function (e, t) {
                    var r = e < g.length - 1 ? e + 1 : e,
                      o = c.parseColor(g[e].color),
                      a = c.parseColor(g[r].color);
                    (o.hasTransparency() || a.hasTransparency()) &&
                      (this._hasTransparency = !0);
                    var s = new h();
                    (s.put("/C0", o.asArray()),
                      s.put("/C1", a.asArray()),
                      s.put("/N", 1));
                    var l = i.getIndirectObject(s);
                    (i.addIndirectObject(l),
                      d.push(new n(l)),
                      e > 0 && p.push(t.stop),
                      u.push(0),
                      u.push(1));
                  }.bind(this),
                ));
              var m = i.getIndirectObject(new l(u, p, d));
              i.addIndirectObject(m);
              var y = new a();
              (y.push(!0),
                y.push(!0),
                this.put("/Coords", t.coords),
                this.put("/Extend", y),
                this.put("/Function", new n(m)));
            }
          }
        };
      (r.inherit(A, s),
        (A.prototype.isValid = function () {
          return !!this.transform && this.transform.invertible();
        }),
        (A.prototype.getGradient = function () {
          return this._gradient;
        }),
        (A.prototype.equals = function (e) {
          return e instanceof A && this._gradient == e._gradient;
        }),
        (e.exports = A));
    }