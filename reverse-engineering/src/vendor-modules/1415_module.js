/**
 * chunk.vendor.js Module #1415
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
          (i.push(t._x0),
            i.push(t._y0),
            i.push(t._x1),
            i.push(t._y1),
            (e.coords = i),
            r.call(this, a.Type.AXIAL, e));
        };
      (n.inherit(s, r), (e.exports = s));
    }