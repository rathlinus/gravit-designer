/**
 * chunk.vendor.js Module #1440
 * Type: unknown
 */

function (e, t, i) {
      var n = i(90),
        r = i(182),
        o = i(0),
        a = i(338),
        s = function (e, t, i, n) {
          ((this.top = t),
            (this.left = e),
            (this.width = i),
            (this.height = n));
        };
      ((s.prototype.left = null),
        (s.prototype.top = null),
        (s.prototype.width = null),
        (s.prototype.height = null),
        o.inherit(s, n),
        (s.prototype.relativeY = function (e) {
          return a.normalizeNumber(this.height - e);
        }),
        (s.prototype.write = function (e) {
          var t = new r();
          (t.push(this.top),
            t.push(this.left),
            t.push(this.width),
            t.push(this.height),
            t.write(e));
        }),
        (e.exports = s));
    }