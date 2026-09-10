/**
 * chunk.vendor.js Module #1222
 * Type: unknown
 */

function (e, t, i) {
      var n = i(90),
        r = i(0);

      function o(e) {
        this._style = e || o.Style.MITER;
      }
      ((o.Style = {
        MITER: 0,
        ROUND: 1,
        BEVEL: 2,
      }),
        r.inherit(o, n),
        (o.prototype._style = o.Style.MITER),
        (o.prototype.write = function (e) {
          (e.write(this._style), e.writeSpace(), e.write("j"));
        }),
        (e.exports = o));
    }