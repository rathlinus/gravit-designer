/**
 * chunk.vendor.js Module #601
 * Type: unknown
 */

function (e, t, i) {
      var n = i(6),
        r = i(7);

      function o() {
        throw new Error("No instance");
      }
      ((o.parse = function (e) {
        return new n(e.x, e.y, e.width, e.height);
      }),
        (o.getTransformation = function (e, t) {
          var i = e.getWidth(),
            n = e.getHeight(),
            o = i > 0 ? t.getWidth() / i : 0,
            a = n > 0 ? t.getHeight() / n : 0;
          return new r()
            .translated(-e.getX(), -e.getY())
            .scaled(o, a)
            .translated(t.getX(), t.getY());
        }),
        (e.exports = o));
    }