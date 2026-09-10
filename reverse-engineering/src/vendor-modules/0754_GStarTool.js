/**
 * chunk.vendor.js Module #754
 * Type: class
 * Name: GStarTool
 */

function (e, t, i) {
      var n = i(384);

      function r() {
        n.call(this, !1, !1);
      }
      (i(0).inherit(r, n),
        (r.prototype._getNumberOfPoints = function () {
          return 5;
        }),
        (r.prototype._getInnerRadiusFactor = function () {
          return 0.5;
        }),
        (r.prototype._lockAngle = function (e) {
          return (Math.round((10 * e) / Math.PI) * Math.PI) / 10;
        }),
        (r.prototype.toString = function () {
          return "[Object GStarTool]";
        }),
        (e.exports = r));
    }