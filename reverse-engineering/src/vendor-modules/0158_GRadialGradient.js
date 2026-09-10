/**
 * chunk.vendor.js Module #158
 * Type: class
 * Name: GRadialGradient
 */

function (e, t, i) {
      var n = i(138),
        r = i(50),
        o = i(12);

      function a(e, t, i, r, o, a, s) {
        (n.call(this, e, t, i, r, s),
          (this._scale = "number" == typeof t ? t : 0.5),
          (this._cx = "number" == typeof o ? o : 0.5),
          (this._cy = "number" == typeof a ? a : 0.5));
      }
      (r.inherit("R", a, n),
        (a.equals = function (e, t, i) {
          return (
            !!(
              e instanceof a &&
              t instanceof a &&
              (i || (e._cx === t._cx && e._cy === t._cy))
            ) && n.equals(e, t, i)
          );
        }),
        (a.prototype._cx = null),
        (a.prototype._cy = null),
        (a.prototype.asCSSBackground = function (e) {
          return (
            "radial-gradient(ellipse at " +
            Math.round(100 * this._cx) +
            "% " +
            Math.round(100 * this._cy) +
            "%, " +
            this.toScreenCSS(e) +
            ")"
          );
        }),
        (a.prototype.clone = function () {
          return new a(
            this.getClonedStops(),
            this._scale,
            this._fx,
            this._fy,
            this._cx,
            this._cy,
            this._transform,
          );
        }),
        (a.prototype._serializeToBlob = function () {
          var e = n.prototype._serializeToBlob.call(this);
          return (
            e &&
              (o.isEqualEps(this._cx, 0.5) || (e._cx = this._cx),
              o.isEqualEps(this._cy, 0.5) || (e._cy = this._cy)),
            e
          );
        }),
        (a.prototype._deserializeFromBlob = function (e) {
          (n.prototype._deserializeFromBlob.call(this, e),
            (this._cx = e.hasOwnProperty("cx") ? e.cx : 0.5),
            (this._cy = e.hasOwnProperty("cy") ? e.cy : 0.5));
        }),
        (a.prototype.toString = function () {
          return "[Object GRadialGradient]";
        }),
        (e.exports = a));
    }