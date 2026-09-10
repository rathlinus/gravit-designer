/**
 * chunk.vendor.js Module #924
 * Type: unknown
 */

function (e, t, i) {
      var n = i(195),
        r = i(59),
        o = i(7),
        a = i(63),
        s = i(6);
      e.exports = function (e) {
        ((e.VertexSource = function (e) {
          this.source = e;
        }),
          (e.VertexSource.prototype.source = null),
          (e.VertexSource.prototype._markerSource = null),
          (e.VertexSource.prototype._bbox = null),
          (e.VertexSource.prototype._update = function (e) {
            if (!this._markerSource) {
              var t = (e.fontSize || 20) / 4;
              ((this._markerSource = new a(
                this.source,
                new o(t, 0, 0, t, 0, 0),
              )),
                (this._bbox = r.calculateBounds(this._markerSource, !0)));
            }
          }),
          (e.VertexSource.prototype.measure = function (e) {
            this._update(e);
            var t = this._bbox || new s(),
              i = n.measure(" ", e);
            return {
              width: t.getWidth(),
              ascent: i ? i.ascent : t.getHeight(),
              descent: i ? i.descent : 0,
            };
          }),
          (e.VertexSource.prototype.draw = function (e, t, i, r, l, h, A) {
            this._update(A);
            var c = this._bbox || new s(),
              p = new a(this._markerSource, new o(1, 0, 0, 1, -c.getX(), 0));
            n.drawMarker(e, p, A, t, i);
          }));
      };
    }