/**
 * chunk.vendor.js Module #1452
 * Type: class
 * Name: GPDFRect
 */

function (e, t, i) {
      var n = i(6);

      function r() {}
      ((r.tile = function (e, t) {
        var i,
          r,
          o = 0,
          a = 0,
          s = [],
          l = e.getWidth(),
          h = e.getHeight();
        if (l > (t = t || 1024) || h > t)
          for (; a < h; ) {
            for (r = t, a + t >= h && (r = h - a), o = 0; o < l; )
              ((i = t),
                o + t >= l && (i = l - o),
                s.push(new n(o, a, i, r)),
                (o += i));
            a += r;
          }
        else s = null;
        return s;
      }),
        (r.prototype.toString = function () {
          return "[Object GPDFRect]";
        }),
        (e.exports = r));
    }