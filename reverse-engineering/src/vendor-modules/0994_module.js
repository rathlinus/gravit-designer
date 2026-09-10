/**
 * chunk.vendor.js Module #994
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      var n = i(105),
        r = i(89),
        o = i(115);

      function a(e, t) {
        var i = JSON.stringify(e),
          n = 256;
        for (var r in t) {
          var o = parseInt(r);
          if (o && !(o < 256)) {
            if (JSON.stringify(t[r]) === i) return o;
            n <= o && (n = o + 1);
          }
        }
        return ((t[n] = e), n);
      }

      function s(e, t, i) {
        var n = a(t.name, i);
        return [
          {
            name: "tag_" + e,
            type: "TAG",
            value: t.tag,
          },
          {
            name: "minValue_" + e,
            type: "FIXED",
            value: t.minValue << 16,
          },
          {
            name: "defaultValue_" + e,
            type: "FIXED",
            value: t.defaultValue << 16,
          },
          {
            name: "maxValue_" + e,
            type: "FIXED",
            value: t.maxValue << 16,
          },
          {
            name: "flags_" + e,
            type: "USHORT",
            value: 0,
          },
          {
            name: "nameID_" + e,
            type: "USHORT",
            value: n,
          },
        ];
      }

      function l(e, t, i) {
        var n = {},
          o = new r.Parser(e, t);
        return (
          (n.tag = o.parseTag()),
          (n.minValue = o.parseFixed()),
          (n.defaultValue = o.parseFixed()),
          (n.maxValue = o.parseFixed()),
          o.skip("uShort", 1),
          (n.name = i[o.parseUShort()] || {}),
          n
        );
      }

      function h(e, t, i, n) {
        for (
          var r = [
              {
                name: "nameID_" + e,
                type: "USHORT",
                value: a(t.name, n),
              },
              {
                name: "flags_" + e,
                type: "USHORT",
                value: 0,
              },
            ],
            o = 0;
          o < i.length;
          ++o
        ) {
          var s = i[o].tag;
          r.push({
            name: "axis_" + e + " " + s,
            type: "FIXED",
            value: t.coordinates[s] << 16,
          });
        }
        return r;
      }

      function A(e, t, i, n) {
        var o = {},
          a = new r.Parser(e, t);
        ((o.name = n[a.parseUShort()] || {}),
          a.skip("uShort", 1),
          (o.coordinates = {}));
        for (var s = 0; s < i.length; ++s)
          o.coordinates[i[s].tag] = a.parseFixed();
        return o;
      }
      ((t.make = function (e, t) {
        var i = new o.Table("fvar", [
          {
            name: "version",
            type: "ULONG",
            value: 65536,
          },
          {
            name: "offsetToData",
            type: "USHORT",
            value: 0,
          },
          {
            name: "countSizePairs",
            type: "USHORT",
            value: 2,
          },
          {
            name: "axisCount",
            type: "USHORT",
            value: e.axes.length,
          },
          {
            name: "axisSize",
            type: "USHORT",
            value: 20,
          },
          {
            name: "instanceCount",
            type: "USHORT",
            value: e.instances.length,
          },
          {
            name: "instanceSize",
            type: "USHORT",
            value: 4 + 4 * e.axes.length,
          },
        ]);
        i.offsetToData = i.sizeOf();
        for (var n = 0; n < e.axes.length; n++)
          i.fields = i.fields.concat(s(n, e.axes[n], t));
        for (var r = 0; r < e.instances.length; r++)
          i.fields = i.fields.concat(h(r, e.instances[r], e.axes, t));
        return i;
      }),
        (t.parse = function (e, t, i) {
          var o = new r.Parser(e, t),
            a = o.parseULong();
          n.argument(65536 === a, "Unsupported fvar table version.");
          var s = o.parseOffset16();
          o.skip("uShort", 1);
          for (
            var h = o.parseUShort(),
              c = o.parseUShort(),
              p = o.parseUShort(),
              u = o.parseUShort(),
              d = [],
              g = 0;
            g < h;
            g++
          )
            d.push(l(e, t + s + g * c, i));
          for (var f = [], m = t + s + h * c, y = 0; y < p; y++)
            f.push(A(e, m + y * u, d, i));
          return {
            axes: d,
            instances: f,
          };
        }));
    }