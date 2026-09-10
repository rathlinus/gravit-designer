/**
 * chunk.vendor.js Module #529
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      var n = i(712);

      function r(e, t, i) {
        Object.defineProperty(e, t, {
          get: function () {
            return (e.path, e[i]);
          },
          set: function (t) {
            e[i] = t;
          },
          enumerable: !0,
          configurable: !0,
        });
      }

      function o(e, t) {
        if (((this.font = e), (this.glyphs = {}), Array.isArray(t)))
          for (var i = 0; i < t.length; i++) this.glyphs[i] = t[i];
        this.length = (t && t.length) || 0;
      }
      ((o.prototype.get = function (e) {
        return (
          "function" == typeof this.glyphs[e] &&
            (this.glyphs[e] = this.glyphs[e]()),
          this.glyphs[e]
        );
      }),
        (o.prototype.push = function (e, t) {
          ((this.glyphs[e] = t), this.length++);
        }),
        (t.GlyphSet = o),
        (t.glyphLoader = function (e, t) {
          return new n.Glyph({
            index: t,
            font: e,
          });
        }),
        (t.ttfGlyphLoader = function (e, t, i, o, a, s) {
          return function () {
            var l = new n.Glyph({
              index: t,
              font: e,
            });
            return (
              (l.path = function () {
                i(l, o, a);
                var t = s(e.glyphs, l);
                return ((t.unitsPerEm = e.unitsPerEm), t);
              }),
              r(l, "xMin", "_xMin"),
              r(l, "xMax", "_xMax"),
              r(l, "yMin", "_yMin"),
              r(l, "yMax", "_yMax"),
              l
            );
          };
        }),
        (t.cffGlyphLoader = function (e, t, i, r) {
          return function () {
            var o = new n.Glyph({
              index: t,
              font: e,
            });
            return (
              (o.path = function () {
                var t = i(e, o, r);
                return ((t.unitsPerEm = e.unitsPerEm), t);
              }),
              o
            );
          };
        }));
    }