/**
 * chunk.vendor.js Module #1220
 * Type: unknown
 */

function (e, t, i) {
      var n = i(90),
        r = i(182),
        o = i(564);

      function a(e) {
        ((this._offset = 0), (this._dashArray = new r(e)));
      }
      (i(0).inherit(a, n),
        (a.prototype._dashArray = null),
        (a.prototype._offset = 0),
        (a.prototype._isDashPatternValid = function () {
          return (
            !(this._dashArray.size() > 0) ||
            !this._dashArray.every(function (e) {
              return 0 === e.getValue();
            })
          );
        }),
        (a.prototype.write = function (e) {
          this._isDashPatternValid() &&
            (this._dashArray.write(e),
            e.writeSpace(),
            e.write(String(this._offset)),
            e.writeSpace(),
            e.write(o.setLineDash));
        }),
        (e.exports = a));
    }