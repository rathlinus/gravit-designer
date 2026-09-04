/**
 * chunk.vendor.js Module #746
 * Type: class
 * Name: GTriangleTool
 */

function (e, t, i) {
      var n = i(384);

      function r() {
        n.call(this, !1, !1);
      }
      (i(0).inherit(r, n),
        (r.prototype._getNumberOfPoints = function () {
          return 3;
        }),
        (r.prototype.toString = function () {
          return "[Object GTriangleTool]";
        }),
        (e.exports = r));
    }