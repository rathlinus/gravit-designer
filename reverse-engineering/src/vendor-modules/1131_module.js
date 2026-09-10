/**
 * chunk.vendor.js Module #1131
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(283),
        o = i(793);

      function a() {
        o.apply(this, arguments);
      }
      (n.inherit(a, o),
        (a.prototype._getGradient = function () {
          if (this._data) {
            var e = this._getStops();
            return (
              e.sort(function (e, t) {
                return e.position - t.position;
              }),
              e.forEach(function (t, i) {
                i > 0 && i < e.length - 1 && (t.position = 1 - t.position);
              }),
              new r(e)
            );
          }
          return new r();
        }),
        (e.exports = a));
    }