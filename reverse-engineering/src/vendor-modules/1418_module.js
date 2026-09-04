/**
 * chunk.vendor.js Module #1418
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(1227),
        o = i(182),
        a = i(1146),
        s = function (e) {
          var t = e.color,
            i = new o();
          (i.push(t._fx),
            i.push(t._fy),
            i.push(0),
            i.push(t._cx),
            i.push(t._cy),
            i.push(t._scale),
            (e.coords = i),
            r.call(this, a.Type.RADIAL, e));
        };
      (n.inherit(s, r), (e.exports = s));
    }