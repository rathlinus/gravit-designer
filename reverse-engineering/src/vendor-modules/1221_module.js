/**
 * chunk.vendor.js Module #1221
 * Type: unknown
 */

function (e, t, i) {
      var n = i(90),
        r = i(0);

      function o(e) {
        this._style = e || o.Style.BUTT;
      }
      ((o.Style = {
        BUTT: 0,
        ROUND: 1,
        SQUARE: 2,
      }),
        r.inherit(o, n),
        (o.prototype._style = o.Style.BUTT),
        (o.prototype.write = function (e) {
          (e.write(this._style), e.writeSpace(), e.write("J"));
        }),
        (e.exports = o));
    }