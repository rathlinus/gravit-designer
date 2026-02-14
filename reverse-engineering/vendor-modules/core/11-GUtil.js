/**
 * Module 11 - GUtil
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This code is minified. Variable names like e, t, n, i, o, a, r, s
 * have been compressed. Refer to the original open-source Gravit code
 * for better understanding of the logic.
 */

function (e, t, i) {
      var n = i(68),
        r = i(11);

      function o(e) {
        return (e = Math.round(e)) < 0 ? 0 : e > 255 ? 255 : e;
      }

      function a(e) {
        (e = e ? [o(e[0]), o(e[1]), o(e[2])] : [0, 0, 0]), n.call(this, e);
      }
      i(50).inherit("C", a, n),
        (a.RGBREGEX =
          /^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d+(?:\.\d+)?))?\s*\)$/),
        (a.BLACK = new a([0, 0, 0])),
        (a.WHITE = new a([255, 255, 255])),
        (a.RED = new a([255, 0, 0])),
        (a._kCSSColorTable = {
          transparent: [255, 255, 255, 0],
          aliceblue: [240, 248, 255, 1],
          antiquewhite: [250, 235, 215, 1],
          aqua: [0, 255, 255, 1],
          aquamarine: [127, 255, 212, 1],
          azure: [240, 255, 255, 1],
          beige: [245, 245, 220, 1],
          bisque: [255, 228, 196, 1],
          black: [0, 0, 0, 1],
          blanchedalmond: [255, 235, 205, 1],
          blue: [0, 0, 255, 1],
          blueviolet: [138, 43, 226, 1],
          brown: [165, 42, 42, 1],
          burlywood: [222, 184, 135, 1],
          cadetblue: [95, 158, 160, 1],
          chartreuse: [127, 255, 0, 1],
          chocolate: [210, 105, 30, 1],
          coral: [255, 127, 80, 1],
          cornflowerblue: [100, 149, 237, 1],
          cornsilk: [255, 248, 220, 1],
          crimson: [220, 20, 60, 1],
          cyan: [0, 255, 255, 1],
          darkblue: [0, 0, 139, 1],
          darkcyan: [0, 139, 139, 1],
          darkgoldenrod: [184, 134, 11, 1],
          darkgray: [169, 169, 169, 1],
          darkgreen: [0, 100, 0, 1],
          darkgrey: [169, 169, 169, 1],
          darkkhaki: [189, 183, 107, 1],
          darkmagenta: [139, 0, 139, 1],
          darkolivegreen: [85, 107, 47, 1],
          darkorange: [255, 140, 0, 1],
          darkorchid: [153, 50, 204, 1],
          darkred: [139, 0, 0, 1],
          darksalmon: [233, 150, 122, 1],
          darkseagreen: [143, 188, 143, 1],
          darkslateblue: [72, 61, 139, 1],
          darkslategray: [47, 79, 79, 1],
          darkslategrey: [47, 79, 79, 1],
          darkturquoise: [0, 206, 209, 1],
          darkviolet: [148, 0, 211, 1],
          deeppink: [255, 20, 147, 1],
          deepskyblue: [0, 191, 255, 1],
          dimgray: [105, 105, 105, 1],
          dimgrey: [105, 105, 105, 1],
          dodgerblue: [30, 144, 255, 1],
          firebrick: [178, 34, 34, 1],
          floralwhite: [255, 250, 240, 1],
          forestgreen: [34, 139, 34, 1],
          fuchsia: [255, 0, 255, 1],
          gainsboro: [220, 220, 220, 1],
          ghostwhite: [248, 248, 255, 1],
          gold: [255, 215, 0, 1],
          goldenrod: [218, 165, 32, 1],
          gray: [128, 128, 128, 1],
          green: [0, 128, 0, 1],
          greenyellow: [173, 255, 47, 1],
          grey: [128, 128, 128, 1],
          honeydew: [240, 255, 240, 1],
          hotpink: [255, 105, 180, 1],
          indianred: [205, 92, 92, 1],
          indigo: [75, 0, 130, 1],
          ivory: [255, 255, 240, 1],
          khaki: [240, 230, 140, 1],
          lavender: [230, 230, 250, 1],
          lavenderblush: [255, 240, 245, 1],
          lawngreen: [124, 252, 0, 1],
          lemonchiffon: [255, 250, 205, 1],
          lightblue: [173, 216, 230, 1],
          lightcoral: [240, 128, 128, 1],
          lightcyan: [224, 255, 255, 1],
          lightgoldenrodyellow: [250, 250, 210, 1],
          lightgray: [211, 211, 211, 1],
          lightgreen: [144, 238, 144, 1],
          lightgrey: [211, 211, 211, 1],
          lightpink: [255, 182, 193, 1],
          lightsalmon: [255, 160, 122, 1],
          lightseagreen: [32, 178, 170, 1],
          lightskyblue: [135, 206, 250, 1],
          lightslategray: [119, 136, 153, 1],
          lightslategrey: [119, 136, 153, 1],
          lightsteelblue: [176, 196, 222, 1],
          lightyellow: [255, 255, 224, 1],
          lime: [0, 255, 0, 1],
          limegreen: [50, 205, 50, 1],
          linen: [250, 240, 230, 1],
          magenta: [255, 0, 255, 1],
          maroon: [128, 0, 0, 1],
          mediumaquamarine: [102, 205, 170, 1],
          mediumblue: [0, 0, 205, 1],
          mediumorchid: [186, 85, 211, 1],
          mediumpurple: [147, 112, 219, 1],
          mediumseagreen: [60, 179, 113, 1],
          mediumslateblue: [123, 104, 238, 1],
          mediumspringgreen: [0, 250, 154, 1],
          mediumturquoise: [72, 209, 204, 1],
          mediumvioletred: [199, 21, 133, 1],
          midnightblue: [25, 25, 112, 1],
          mintcream: [245, 255, 250, 1],
          mistyrose: [255, 228, 225, 1],
          moccasin: [255, 228, 181, 1],
          navajowhite: [255, 222, 173, 1],
          navy: [0, 0, 128, 1],
          oldlace: [253, 245, 230, 1],
          olive: [128, 128, 0, 1],
          olivedrab: [107, 142, 35, 1],
          orange: [255, 165, 0, 1],
          orangered: [255, 69, 0, 1],
          orchid: [218, 112, 214, 1],
          palegoldenrod: [238, 232, 170, 1],
          palegreen: [152, 251, 152, 1],
          paleturquoise: [175, 238, 238, 1],
          palevioletred: [219, 112, 147, 1],
          papayawhip: [255, 239, 213, 1],
          peachpuff: [255, 218, 185, 1],
          peru: [205, 133, 63, 1],
          pink: [255, 192, 203, 1],
          plum: [221, 160, 221, 1],
          powderblue: [176, 224, 230, 1],
          purple: [128, 0, 128, 1],
          red: [255, 0, 0, 1],
          rosybrown: [188, 143, 143, 1],
          royalblue: [65, 105, 225, 1],
          saddlebrown: [139, 69, 19, 1],
          salmon: [250, 128, 114, 1],
          sandybrown: [244, 164, 96, 1],
          seagreen: [46, 139, 87, 1],
          seashell: [255, 245, 238, 1],
          sienna: [160, 82, 45, 1],
          silver: [192, 192, 192, 1],
          skyblue: [135, 206, 235, 1],
          slateblue: [106, 90, 205, 1],
          slategray: [112, 128, 144, 1],
          slategrey: [112, 128, 144, 1],
          snow: [255, 250, 250, 1],
          springgreen: [0, 255, 127, 1],
          steelblue: [70, 130, 180, 1],
          tan: [210, 180, 140, 1],
          teal: [0, 128, 128, 1],
          thistle: [216, 191, 216, 1],
          tomato: [255, 99, 71, 1],
          turquoise: [64, 224, 208, 1],
          violet: [238, 130, 238, 1],
          wheat: [245, 222, 179, 1],
          white: [255, 255, 255, 1],
          whitesmoke: [245, 245, 245, 1],
          yellow: [255, 255, 0, 1],
          yellowgreen: [154, 205, 50],
        }),
        (a.fromCSSColor = function (e) {
          var t = a.parseCSSColor(e);
          return t ? new a(t.slice(0, 3)) : null;
        }),
        (a.parseCSSColor = function (e) {
          function t(e) {
            return e < 0 ? 0 : e > 1 ? 1 : e;
          }

          function i(e) {
            return "%" === e[e.length - 1]
              ? o((parseFloat(e) / 100) * 255)
              : o(parseInt(e));
          }

          function n(e) {
            return "%" === e[e.length - 1]
              ? t(parseFloat(e) / 100)
              : t(parseFloat(e));
          }

          function r(e, t, i) {
            return (
              i < 0 ? (i += 1) : i > 1 && (i -= 1),
              6 * i < 1
                ? e + (t - e) * i * 6
                : 2 * i < 1
                ? t
                : 3 * i < 2
                ? e + (t - e) * (2 / 3 - i) * 6
                : e
            );
          }
          var s,
            l = e.replace(/ /g, "").toLowerCase();
          if (l in a._kCSSColorTable) return a._kCSSColorTable[l].slice();
          if ("#" === l[0])
            return l.length <= 4
              ? (s = parseInt(l.substr(1), 16)) >= 0 && s <= 4095
                ? [
                    ((3840 & s) >> 4) | ((3840 & s) >> 8),
                    (240 & s) | ((240 & s) >> 4),
                    (15 & s) | ((15 & s) << 4),
                    1,
                  ]
                : null
              : l.length <= 7 &&
                (s = parseInt(l.substr(1), 16)) >= 0 &&
                s <= 16777215
              ? [(16711680 & s) >> 16, (65280 & s) >> 8, 255 & s, 1]
              : null;
          var h = l.indexOf("("),
            A = l.indexOf(")");
          if (-1 !== h && A + 1 === l.length) {
            var c = l.substr(0, h),
              p = l.substr(h + 1, A - (h + 1)).split(","),
              u = 100;
            switch (c) {
              case "rgba":
                if (4 !== p.length) return null;
                u = n(p.pop());
              case "rgb":
                return 3 !== p.length ? null : [i(p[0]), i(p[1]), i(p[2]), u];
              case "hsla":
                if (4 !== p.length) return null;
                u = n(p.pop());
              case "hsl":
                if (3 !== p.length) return null;
                var d = (((parseFloat(p[0]) % 360) + 360) % 360) / 360,
                  g = n(p[1]),
                  f = n(p[2]),
                  m = f <= 0.5 ? f * (g + 1) : f + g - f * g,
                  y = 2 * f - m;
                return [
                  o(255 * r(y, m, d + 1 / 3)),
                  o(255 * r(y, m, d)),
                  o(255 * r(y, m, d - 1 / 3)),
                  u,
                ];
              default:
                return null;
            }
          }
          return a.parseCSSColor("#" + e);
        }),
        (a.prototype.getClosestCSSName = function () {
          var e = 195075,
            t = "white";
          for (var i in a._kCSSColorTable) {
            var n = a._kCSSColorTable[i],
              r = n[0] - this._value[0],
              o = n[1] - this._value[1],
              s = n[2] - this._value[2],
              l = r * r + o * o + s * s;
            l < e && ((t = i), (e = l));
          }
          return t;
        }),
        (a.equals = function (e, t) {
          return (
            e instanceof a && t instanceof a && r.equals(e._value, t._value)
          );
        }),
        (a.closeEnough = function (e, t, i) {
          var n = e[0] - t[0],
            r = e[1] - t[1],
            o = e[2] - t[2];
          return n * n + r * r + o * o <= i * i;
        }),
        (a.mix = function (e, t) {
          if (void 0 === e && void 0 !== t) return t;
          if (void 0 !== e && void 0 === t) return e;
          var i = e[0],
            n = e[1],
            r = e[2],
            o = e[3],
            a = t[0],
            s = t[1],
            l = t[2],
            h = t[3],
            A = h + o * (1 - h);
          return [
            Math.round((a * h + i * o * (1 - h)) / A),
            Math.round((s * h + n * o * (1 - h)) / A),
            Math.round((l * h + r * o * (1 - h)) / A),
            A,
          ];
        }),
        (a.blend = function (e, t, i) {
          return void 0 === e && void 0 !== t
            ? t
            : void 0 !== e && void 0 === t
            ? e
            : [
                e[0] + (t[0] - e[0]) * i,
                e[1] + (t[1] - e[1]) * i,
                e[2] + (t[2] - e[2]) * i,
              ];
        }),
        (a.prototype.toHumanString = function () {
          return (
            "rgb " +
            this._value[0] +
            "," +
            this._value[1] +
            "," +
            this._value[2]
          );
        }),
        (a.prototype.toScreen = function (e) {
          return this._value;
        }),
        (a.prototype.clone = function () {
          return new a(this._value);
        }),
        (a.prototype.toString = function () {
          return "[Object GRGBColor]";
        }),
        (e.exports = a);
    }
