/**
 * chunk.vendor.js Module #1127
 * Type: unknown
 */

function (e, t, i) {
      var n = i(598);

      function r(e) {
        ((this.cornerRadius = e.cornerRadius),
          (this.curveMode = e.curveMode),
          (this.curveFrom = n.parse(e.curveFrom)),
          (this.curveTo = n.parse(e.curveTo)),
          (this.hasCurveFrom = e.hasCurveFrom),
          (this.hasCurveTo = e.hasCurveTo),
          (this.point = n.parse(e.point)));
      }
      ((r.prototype.cornerRadius = 0),
        (r.prototype.curveFrom = null),
        (r.prototype.curveTo = null),
        (r.prototype.curveMode = 0),
        (r.prototype.point = null),
        (r.prototype.hasCurveFrom = !1),
        (r.prototype.hasCurveTo = !1),
        (r.prototype.transform = function (e) {
          e &&
            ((this.curveFrom = e.mapPoint(this.curveFrom)),
            (this.curveTo = e.mapPoint(this.curveTo)),
            (this.point = e.mapPoint(this.point)));
        }),
        (e.exports = r));
    }