/**
 * chunk.vendor.js Module #147
 * Type: class
 * Name: GLinearGradient
 */

function (e, t, i) {
      var n = i(138),
        r = i(50),
        o = i(12);

      function a(e, t, i, r, o, a) {
        (n.call(this, e, t, r, o, a),
          (this._fx = "number" == typeof r ? r : 0),
          (this._angle = "number" == typeof i ? i : 0));
      }
      (r.inherit("L", a, n),
        (a.equals = function (e, t, i) {
          return (
            e instanceof a &&
            t instanceof a &&
            !(!n.equals(e, t, i) || i) &&
            o.isEqualEps(e._angle, t._angle)
          );
        }),
        (a.prototype._angle = 0),
        (a.prototype.getAngle = function () {
          return this._angle;
        }),
        (a.prototype.asCSSBackground = function (e) {
          return (
            "linear-gradient(" +
            (Math.round(o.toDegrees(this._angle)) + 90) +
            "deg, " +
            this.toScreenCSS(e) +
            ")"
          );
        }),
        (a.prototype.clone = function () {
          return new a(
            this.getClonedStops(),
            this._scale,
            this._angle,
            this._fx,
            this._fy,
            this._transform,
          );
        }),
        (a.prototype._serializeToBlob = function () {
          var e = n.prototype._serializeToBlob.call(this);
          return (e && !o.isEqualEps(this._angle, 0) && (e.r = this._angle), e);
        }),
        (a.prototype._deserializeFromBlob = function (e) {
          (n.prototype._deserializeFromBlob.call(this, e),
            (this._angle = e.hasOwnProperty("r") ? e.r : 0));
        }),
        (a.prototype.toString = function () {
          return "[Object GLinearGradient]";
        }),
        (e.exports = a));
    }