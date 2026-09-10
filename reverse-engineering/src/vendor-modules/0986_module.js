/**
 * chunk.vendor.js Module #986
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      var n = i(105),
        r = i(723),
        o = function (e) {
          r.call(this, e, "gsub");
        };

      function a(e, t) {
        var i = e.length;
        if (i !== t.length) return !1;
        for (var n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }

      function s(e, t, i) {
        for (var n = e.subtables, r = 0; r < n.length; r++) {
          var o = n[r];
          if (o.substFormat === t) return o;
        }
        if (i) return (n.push(i), i);
      }
      (((o.prototype = r.prototype).createDefaultTable = function () {
        return {
          version: 1,
          scripts: [
            {
              tag: "DFLT",
              script: {
                defaultLangSys: {
                  reserved: 0,
                  reqFeatureIndex: 65535,
                  featureIndexes: [],
                },
                langSysRecords: [],
              },
            },
          ],
          features: [],
          lookups: [],
        };
      }),
        (o.prototype.getSingle = function (e, t, i) {
          for (
            var n = [], r = this.getLookupTables(t, i, e, 1), o = 0;
            o < r.length;
            o++
          )
            for (var a = r[o].subtables, s = 0; s < a.length; s++) {
              var l,
                h = a[s],
                A = this.expandCoverage(h.coverage);
              if (1 === h.substFormat) {
                var c = h.deltaGlyphId;
                for (l = 0; l < A.length; l++) {
                  var p = A[l];
                  n.push({
                    sub: p,
                    by: p + c,
                  });
                }
              } else {
                var u = h.substitute;
                for (l = 0; l < A.length; l++)
                  n.push({
                    sub: A[l],
                    by: u[l],
                  });
              }
            }
          return n;
        }),
        (o.prototype.getAlternates = function (e, t, i) {
          for (
            var n = [], r = this.getLookupTables(t, i, e, 3), o = 0;
            o < r.length;
            o++
          )
            for (var a = r[o].subtables, s = 0; s < a.length; s++)
              for (
                var l = a[s],
                  h = this.expandCoverage(l.coverage),
                  A = l.alternateSets,
                  c = 0;
                c < h.length;
                c++
              )
                n.push({
                  sub: h[c],
                  by: A[c],
                });
          return n;
        }),
        (o.prototype.getLigatures = function (e, t, i) {
          for (
            var n = [], r = this.getLookupTables(t, i, e, 4), o = 0;
            o < r.length;
            o++
          )
            for (var a = r[o].subtables, s = 0; s < a.length; s++)
              for (
                var l = a[s],
                  h = this.expandCoverage(l.coverage),
                  A = l.ligatureSets,
                  c = 0;
                c < h.length;
                c++
              )
                for (var p = h[c], u = A[c], d = 0; d < u.length; d++) {
                  var g = u[d];
                  n.push({
                    sub: [p].concat(g.components),
                    by: g.ligGlyph,
                  });
                }
          return n;
        }),
        (o.prototype.addSingle = function (e, t, i, r) {
          var o = s(this.getLookupTables(i, r, e, 1, !0)[0], 2, {
            substFormat: 2,
            coverage: {
              format: 1,
              glyphs: [],
            },
            substitute: [],
          });
          n.assert(
            1 === o.coverage.format,
            "Ligature: unable to modify coverage table format " +
              o.coverage.format,
          );
          var a = t.sub,
            l = this.binSearch(o.coverage.glyphs, a);
          (l < 0 &&
            ((l = -1 - l),
            o.coverage.glyphs.splice(l, 0, a),
            o.substitute.splice(l, 0, 0)),
            (o.substitute[l] = t.by));
        }),
        (o.prototype.addAlternate = function (e, t, i, r) {
          var o = s(this.getLookupTables(i, r, e, 3, !0)[0], 1, {
            substFormat: 1,
            coverage: {
              format: 1,
              glyphs: [],
            },
            alternateSets: [],
          });
          n.assert(
            1 === o.coverage.format,
            "Ligature: unable to modify coverage table format " +
              o.coverage.format,
          );
          var a = t.sub,
            l = this.binSearch(o.coverage.glyphs, a);
          (l < 0 &&
            ((l = -1 - l),
            o.coverage.glyphs.splice(l, 0, a),
            o.alternateSets.splice(l, 0, 0)),
            (o.alternateSets[l] = t.by));
        }),
        (o.prototype.addLigature = function (e, t, i, r) {
          var o = this.getLookupTables(i, r, e, 4, !0)[0],
            s = o.subtables[0];
          (s ||
            ((s = {
              substFormat: 1,
              coverage: {
                format: 1,
                glyphs: [],
              },
              ligatureSets: [],
            }),
            (o.subtables[0] = s)),
            n.assert(
              1 === s.coverage.format,
              "Ligature: unable to modify coverage table format " +
                s.coverage.format,
            ));
          var l = t.sub[0],
            h = t.sub.slice(1),
            A = {
              ligGlyph: t.by,
              components: h,
            },
            c = this.binSearch(s.coverage.glyphs, l);
          if (c >= 0) {
            for (var p = s.ligatureSets[c], u = 0; u < p.length; u++)
              if (a(p[u].components, h)) return;
            p.push(A);
          } else
            ((c = -1 - c),
              s.coverage.glyphs.splice(c, 0, l),
              s.ligatureSets.splice(c, 0, [A]));
        }),
        (o.prototype.getFeature = function (e, t, i) {
          if (/ss\d\d/.test(e)) return this.getSingle(e, t, i);
          switch (e) {
            case "locl":
              return this.getSingle(e, t, i);
            case "aalt":
            case "salt":
            case "numr":
            case "dnom":
              return this.getSingle(e, t, i).concat(
                this.getAlternates(e, t, i),
              );
            case "dlig":
            case "liga":
            case "rlig":
              return this.getLigatures(e, t, i);
          }
        }),
        (o.prototype.add = function (e, t, i, n) {
          if (/ss\d\d/.test(e)) return this.addSingle(e, t, i, n);
          switch (e) {
            case "aalt":
            case "salt":
              return "number" == typeof t.by
                ? this.addSingle(e, t, i, n)
                : this.addAlternate(e, t, i, n);
            case "dlig":
            case "liga":
            case "rlig":
              return this.addLigature(e, t, i, n);
          }
        }),
        (e.exports = o));
    }