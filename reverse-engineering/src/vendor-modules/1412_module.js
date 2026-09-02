/**
 * chunk.vendor.js Module #1412
 * Type: unknown
 */

function (e, t, i) {
      var n = i(90),
        r = i(0),
        o = i(338),
        a = i(564);

      function s(e) {
        this._width = e;
      }
      (r.inherit(s, n),
        (s.prototype._width = null),
        (s.prototype.write = function (e) {
          (e.write(o.normalizeNumber(this._width)),
            e.writeSpace(),
            e.write(a.setLineWidth));
        }),
        (s.prototype.toString = function () {
          return "[GPDFSetLineWidthOperation]";
        }),
        (e.exports = s));
    }