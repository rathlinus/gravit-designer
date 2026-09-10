/**
 * chunk.vendor.js Module #982
 * Type: unknown
 */

function (e, t, i) {
      "use strict";
      var n = i(326),
        r = i(983),
        o = i(376),
        a = i(529),
        s = i(985),
        l = i(986),
        h = i(724),
        A = i(987),
        c = i(988),
        p = i(993).FeatureQuery,
        u = String.fromCharCode(47),
        d = String.fromCharCode(8725),
        g = String.fromCharCode(8260);

      function f(e) {
        ((e = e || {}).empty ||
          (h.checkArgument(
            e.familyName,
            "When creating a new Font object, familyName is required.",
          ),
          h.checkArgument(
            e.styleName,
            "When creating a new Font object, styleName is required.",
          ),
          h.checkArgument(
            e.unitsPerEm,
            "When creating a new Font object, unitsPerEm is required.",
          ),
          h.checkArgument(
            e.ascender,
            "When creating a new Font object, ascender is required.",
          ),
          h.checkArgument(
            e.descender,
            "When creating a new Font object, descender is required.",
          ),
          h.checkArgument(
            e.descender < 0,
            "Descender should be negative (e.g. -512).",
          ),
          (this.names = {
            fontFamily: {
              en: e.familyName || " ",
            },
            fontSubfamily: {
              en: e.styleName || " ",
            },
            fullName: {
              en: e.fullName || e.familyName + " " + e.styleName,
            },
            postScriptName: {
              en:
                e.postScriptName ||
                (e.familyName + e.styleName).replace(/\s/g, ""),
            },
            designer: {
              en: e.designer || " ",
            },
            designerURL: {
              en: e.designerURL || " ",
            },
            manufacturer: {
              en: e.manufacturer || " ",
            },
            manufacturerURL: {
              en: e.manufacturerURL || " ",
            },
            license: {
              en: e.license || " ",
            },
            licenseURL: {
              en: e.licenseURL || " ",
            },
            version: {
              en: e.version || "Version 0.1",
            },
            description: {
              en: e.description || " ",
            },
            copyright: {
              en: e.copyright || " ",
            },
            trademark: {
              en: e.trademark || " ",
            },
          }),
          (this.unitsPerEm = e.unitsPerEm || 1e3),
          (this.ascender = e.ascender),
          (this.descender = e.descender),
          (this.createdTimestamp = e.createdTimestamp),
          (this.tables = {
            os2: {
              usWeightClass: e.weightClass || this.usWeightClasses.MEDIUM,
              usWidthClass: e.widthClass || this.usWidthClasses.MEDIUM,
              fsSelection: e.fsSelection || this.fsSelectionValues.REGULAR,
            },
          })),
          (this.supported = !0),
          (this.glyphs = new a.GlyphSet(this, e.glyphs || [])),
          (this.encoding = new o.DefaultEncoding(this)),
          (this.position = new s(this)),
          (this.substitution = new l(this)),
          (this.tables = this.tables || {}),
          Object.defineProperty(this, "hinting", {
            get: function () {
              return this._hinting
                ? this._hinting
                : "truetype" === this.outlinesFormat
                  ? (this._hinting = new A(this))
                  : void 0;
            },
          }));
      }
      ((f.prototype.hasChar = function (e) {
        return null !== this.encoding.charToGlyphIndex(e);
      }),
        (f.prototype.charToGlyphIndex = function (e) {
          return this.encoding.charToGlyphIndex(e);
        }),
        (f.prototype.charToGlyph = function (e) {
          var t = this.charToGlyphIndex(e),
            i = this.glyphs.get(t);
          return (i || (i = this.glyphs.get(0)), i);
        }),
        (f.prototype.stringToGlyphs = function (e, t, i) {
          t = t || this.defaultRenderOptions;
          var n = new c(t.direction),
            r = function (e) {
              return this.charToGlyphIndex(e.char);
            }.bind(this);
          n.registerModifier("glyphIndex", null, r);
          var o = new p(this);
          n.applyFeatures(
            ["init", "medi", "fina", "rlig"].map(function (e) {
              var t = {
                  tag: e,
                  script: "arab",
                },
                i = o.getFeature(t);
              if (i) return i;
            }),
          );
          var a = i && [],
            s = n.getTextGlyphs(e, a),
            l = s.length;
          if (i) {
            i.splice(0, i.length);
            for (var h = 0; h < a.length; h++)
              i.push({
                char: a[h],
              });
          }
          if (t.features) {
            var A = t.script || this.substitution.getDefaultScriptName(),
              f = [];
            (t.features.liga &&
              (f = f.concat(
                this.substitution.getFeature("liga", A, t.language),
              )),
              t.features.rlig &&
                (f = f.concat(
                  this.substitution.getFeature("rlig", A, t.language),
                )));
            for (h = 0; h < l; h += 1)
              for (var m = 0; m < f.length; m++) {
                for (
                  var y = f[m], _ = y.sub, v = _.length, b = 0;
                  b < v && _[b] === s[h + b];
                )
                  b++;
                b === v &&
                  (s.splice(h, v, y.by),
                  i &&
                    i.splice(h, v, {
                      lig: i
                        .slice(h, h + v)
                        .map(function (e) {
                          return e.char;
                        })
                        .join(""),
                    }),
                  (l = l - v + 1));
              }
            if (t.features.frac) {
              var C = this.substitution.getFeature("numr", A, t.language),
                w = this.substitution.getFeature("dnom", A, t.language),
                E = this.charToGlyphIndex(g) || -1,
                B = this.charToGlyphIndex(u) || -1,
                x = this.charToGlyphIndex(d) || -1,
                P = C;
              e: for (h = 0; h < l; h++)
                if (s[h] !== B && s[h] !== E && s[h] !== x) {
                  for (m = 0; m < P.length; m++)
                    if (P[m].sub === s[h]) {
                      s.splice(h, 1, P[m].by);
                      continue e;
                    }
                  P = C;
                } else (s.splice(h, 1, E), (P = w));
            }
            (t.language && this._applyLocalizedForm(s, A, t.language),
              t.features.stylisticSet &&
                this._applyStylisticSet(
                  s,
                  t.features.stylisticSet,
                  A,
                  t.language,
                ));
          }
          if (i) for (h = 0; h < i.length; h++) i[h] = i[h].lig || i[h].char;
          var S = new Array(l),
            T = this.glyphs.get(0);
          for (h = 0; h < l; h += 1) S[h] = this.glyphs.get(s[h]) || T;
          return S;
        }),
        (f.prototype._applyStylisticSet = function (e, t, i, n) {
          var r = this.substitution.getFeature(t, i, n);
          r && r.length > 0 && this._applySubsitution(r, e);
        }),
        (f.prototype._applyLocalizedForm = function (e, t, i) {
          var n = this.substitution.getFeature("locl", t, i);
          n && n.length > 0 && this._applySubsitution(n, e);
        }),
        (f.prototype._applySubsitution = function (e, t) {
          if (e)
            for (
              var i = e.reduce(function (e, t) {
                  return ((e[t.sub] = t), e);
                }, {}),
                n = t.length,
                r = 0;
              r < n;
              r++
            ) {
              var o = i[t[r]];
              o && t.splice(r, 1, o.by);
            }
        }),
        (f.prototype.nameToGlyphIndex = function (e) {
          return this.glyphNames.nameToGlyphIndex(e);
        }),
        (f.prototype.nameToGlyph = function (e) {
          var t = this.nameToGlyphIndex(e),
            i = this.glyphs.get(t);
          return (i || (i = this.glyphs.get(0)), i);
        }),
        (f.prototype.glyphIndexToName = function (e) {
          return this.glyphNames.glyphIndexToName
            ? this.glyphNames.glyphIndexToName(e)
            : "";
        }),
        (f.prototype.getKerningValue = function (e, t) {
          ((e = e.index || e), (t = t.index || t));
          var i = this.position.defaultKerningTables;
          return i
            ? this.position.getKerningValue(i, e, t)
            : this.kerningPairs[e + "," + t] || 0;
        }),
        (f.prototype.defaultRenderOptions = {
          kerning: !0,
          features: {
            liga: !0,
            rlig: !0,
            frac: !1,
            stylisticSet: null,
          },
        }),
        (f.prototype.forEachGlyph = function (e, t, i, n, r, o) {
          ((t = void 0 !== t ? t : 0),
            (i = void 0 !== i ? i : 0),
            (n = void 0 !== n ? n : 72),
            (r = r || this.defaultRenderOptions));
          var a,
            s = (1 / this.unitsPerEm) * n;
          r.generateText && (a = []);
          var l,
            h = this.stringToGlyphs(e, r, a);
          if (r.kerning) {
            var A = r.script || this.position.getDefaultScriptName();
            l = this.position.getKerningTables(A, r.language);
          }
          for (var c = 0; c < h.length; c += 1) {
            var p,
              u = h[c];
            (r.kerning &&
              c < h.length - 1 &&
              (p = l
                ? this.position.getKerningValue(l, u.index, h[c + 1].index)
                : this.getKerningValue(u, h[c + 1])),
              o.call(this, u, t, i, n, r, a && a[c], p),
              u.advanceWidth && (t += u.advanceWidth * s),
              r.kerning && p && (t += p * s),
              r.letterSpacing
                ? (t += r.letterSpacing * n)
                : r.tracking && (t += (r.tracking / 1e3) * n));
          }
          return t;
        }),
        (f.prototype.getPath = function (e, t, i, r, o) {
          var a = new n.Path();
          return (
            this.forEachGlyph(e, t, i, r, o, function (e, t, i, n) {
              var r = e.getPath(t, i, n, o, this);
              a.extend(r);
            }),
            a
          );
        }),
        (f.prototype.getPaths = function (e, t, i, n, r) {
          var o = [];
          return (
            this.forEachGlyph(e, t, i, n, r, function (e, t, i, n) {
              var a = e.getPath(t, i, n, r, this);
              o.push(a);
            }),
            o
          );
        }),
        (f.prototype.getAdvanceWidth = function (e, t, i) {
          return this.forEachGlyph(e, 0, 0, t, i, function () {});
        }),
        (f.prototype.draw = function (e, t, i, n, r, o) {
          this.getPath(t, i, n, r, o).draw(e);
        }),
        (f.prototype.drawPoints = function (e, t, i, n, r, o) {
          this.forEachGlyph(t, i, n, r, o, function (t, i, n, r) {
            t.drawPoints(e, i, n, r);
          });
        }),
        (f.prototype.drawMetrics = function (e, t, i, n, r, o) {
          this.forEachGlyph(t, i, n, r, o, function (t, i, n, r) {
            t.drawMetrics(e, i, n, r);
          });
        }),
        (f.prototype.getEnglishName = function (e) {
          var t = this.names[e];
          if (t) return t.en;
        }),
        (f.prototype.validate = function () {
          var e = [],
            t = this;

          function i(t, i) {
            t || e.push(i);
          }

          function n(e) {
            var n = t.getEnglishName(e);
            i(n && n.trim().length > 0, "No English " + e + " specified.");
          }
          (n("fontFamily"),
            n("weightName"),
            n("manufacturer"),
            n("copyright"),
            n("version"),
            i(this.unitsPerEm > 0, "No unitsPerEm specified."));
        }),
        (f.prototype.toTables = function () {
          return r.fontToTable(this);
        }),
        (f.prototype.toBuffer = function () {
          return (
            console.warn(
              "Font.toBuffer is deprecated. Use Font.toArrayBuffer instead.",
            ),
            this.toArrayBuffer()
          );
        }),
        (f.prototype.toArrayBuffer = function () {
          for (
            var e = this.toTables().encode(),
              t = new ArrayBuffer(e.length),
              i = new Uint8Array(t),
              n = 0;
            n < e.length;
            n++
          )
            i[n] = e[n];
          return t;
        }),
        (f.prototype.download = function (e) {
          var t = this.getEnglishName("fontFamily"),
            n = this.getEnglishName("fontSubfamily");
          e = e || t.replace(/\s/g, "") + "-" + n + ".otf";
          var r = this.toArrayBuffer();
          if (h.isBrowser())
            if (((window.URL = window.URL || window.webkitURL), window.URL)) {
              var o = new DataView(r),
                a = new Blob([o], {
                  type: "font/opentype",
                }),
                s = document.createElement("a");
              ((s.href = window.URL.createObjectURL(a)), (s.download = e));
              var l = document.createEvent("MouseEvents");
              (l.initEvent("click", !0, !1), s.dispatchEvent(l));
            } else
              console.warn(
                "Font file could not be downloaded. Try using a different browser.",
              );
          else {
            var A = i(178),
              c = h.arrayBufferToNodeBuffer(r);
            A.writeFileSync(e, c);
          }
        }),
        (f.prototype.fsSelectionValues = {
          ITALIC: 1,
          UNDERSCORE: 2,
          NEGATIVE: 4,
          OUTLINED: 8,
          STRIKEOUT: 16,
          BOLD: 32,
          REGULAR: 64,
          USER_TYPO_METRICS: 128,
          WWS: 256,
          OBLIQUE: 512,
        }),
        (f.prototype.usWidthClasses = {
          ULTRA_CONDENSED: 1,
          EXTRA_CONDENSED: 2,
          CONDENSED: 3,
          SEMI_CONDENSED: 4,
          MEDIUM: 5,
          SEMI_EXPANDED: 6,
          EXPANDED: 7,
          EXTRA_EXPANDED: 8,
          ULTRA_EXPANDED: 9,
        }),
        (f.prototype.usWeightClasses = {
          THIN: 100,
          EXTRA_LIGHT: 200,
          LIGHT: 300,
          NORMAL: 400,
          MEDIUM: 500,
          SEMI_BOLD: 600,
          BOLD: 700,
          EXTRA_BOLD: 800,
          BLACK: 900,
        }),
        (t.Font = f));
    }