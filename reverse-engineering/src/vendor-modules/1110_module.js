/**
 * chunk.vendor.js Module #1110
 * Type: unknown
 */

function (e, t, i) {
      var n = i(90),
        r = i(338),
        o = function (e) {
          this.primitve = e;
        };
      (i(0).inherit(o, n),
        (o.prototype.write = function (e) {
          var t = this.primitve;
          ("number" == typeof t && (t = r.normalizeNumber(t)), e.write(t));
        }),
        (e.exports = o));
    }