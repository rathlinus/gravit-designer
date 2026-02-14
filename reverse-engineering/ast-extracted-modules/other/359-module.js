/**
 * Module 359
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (e, t, i) {
  var n = i(1109), r = i(559), o = i(1111), a = i(390), s = {
      RGB: {
        name: "/DeviceRGB",
        operator: "rg",
        length: 3,
        parseColor: function (e) {
          return new r(e);
        },
        fromRGBA: function (e, t, i, n) {
          return [
            e,
            t,
            i
          ];
        }
      },
      RGBA: {
        name: "/DeviceRGB",
        operator: "rg",
        length: 4,
        parseColor: function (e) {
          return new r(e);
        },
        fromRGBA: function (e, t, i, n) {
          return [
            e,
            t,
            i,
            n
          ];
        }
      },
      GRAY: {
        name: "/DeviceGray",
        operator: "g",
        length: 1,
        parseColor: function (e) {
          return new o(e);
        },
        fromRGBA: function (e, t, i, n) {
          return [n];
        }
      },
      CMYK: {
        name: "/DeviceCMYK",
        operator: "k",
        length: 4,
        parseColor: function (e) {
          return new n(e);
        },
        fromRGBA: function (e, t, i, n) {
          var r = e << 24 | t << 16 | i << 8 | n, o = s._cmykToRGB[r];
          return o || (o = a.rgbToCMYK(r).map(function (e) {
            return 255 * e;
          }), s._cmykToRGB[r] = o), o;
        }
      },
      _cmykToRGB: {}
    };
  e.exports = s;
}
