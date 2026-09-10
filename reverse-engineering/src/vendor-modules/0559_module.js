/**
 * chunk.vendor.js Module #559
 * Type: unknown
 */

function (e, t, i) {
      var n = i(390),
        r = i(182),
        o = i(0),
        a = i(68),
        s = i(437),
        l = function (e) {
          var t = 0,
            i = 0,
            n = 0,
            r = 1;
          if ("string" == typeof e) {
            var o = [0, 0, 0],
              s = 10;
            if (
              (e.startsWith("#")
                ? ((s = 16), (o = e.match(/[0-9A-Fa-f]{2}/g)))
                : (o = e.match(/\d+(\.\d+)?/g)),
              o)
            )
              if (0 === e.indexOf("cmyk")) {
                var l = o.map(function (e) {
                    return parseFloat(e, s);
                  }),
                  h = a.cmykToRGB(l);
                ((t = h[0]), (i = h[1]), (n = h[2]));
                5 == o.length && (r = parseFloat(o[4]));
              } else
                ((t = parseInt(o[0], s)),
                  (i = parseInt(o[1], s)),
                  (n = parseInt(o[2], s)),
                  4 == o.length && (r = parseFloat(o[3])));
          } else if ("number" == typeof e)
            ((t = (e >> 24) & 255),
              (i = (e >> 16) & 255),
              (n = (e >> 8) & 255),
              (r = (255 & e) / 255));
          else if (e instanceof a) {
            var A = e.toScreen();
            ((t = A[0]), (i = A[1]), (n = A[2]), 4 === A.length && (r = A[3]));
          }
          ((this.r = t / 255),
            (this.g = i / 255),
            (this.b = n / 255),
            (this.a = r));
        };
      (o.inheritAndMix(l, s, [n]),
        (l.prototype.asRGBA = function () {
          return (
            ((255 * this.r) << 24) |
            ((255 * this.g) << 16) |
            ((255 * this.b) << 8) |
            (255 * this.a)
          );
        }),
        (l.prototype.getAlpha = function () {
          return this.a;
        }),
        (l.prototype.asArray = function () {
          var e = new r();
          return (e.push(this.r), e.push(this.g), e.push(this.b), e);
        }),
        (e.exports = l));
    }