/**
 * chunk.vendor.js Module #648
 * Type: unknown
 */

function (e, t, i) {
      var n = i(68),
        r = i(188),
        o = i(17),
        a = i(649);

      function s() {}
      ((s.convertColor = function (e, t) {
        switch (t) {
          case n.ColorModes.CMYK:
            return e instanceof o || e instanceof a
              ? new r(n.rgbToCMYK(e.toScreen()))
              : e;
          case n.ColorModes.HSB:
            return e instanceof r || e instanceof o
              ? new a(n.rgbToHSV(e.toScreen()))
              : e;
          default:
            return e instanceof r || e instanceof a ? new o(e.toScreen()) : e;
        }
      }),
        (e.exports = s));
    }