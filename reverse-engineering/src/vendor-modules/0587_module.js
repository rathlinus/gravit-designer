/**
 * chunk.vendor.js Module #587
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(108),
        o = i(63),
        a = i(48),
        s = i(6),
        l = i(54),
        h = i(59),
        A = i(7),
        c = i(708),
        p = i(726),
        u = i(11),
        d = i(838),
        g = i(9),
        f = i(457),
        m = i(266),
        y = [
          [69632, 69759, "BRAHMI"],
          [6656, 6687, "BUGINESE"],
          [69760, 69839, "KAITHI"],
          [3712, 3839, "LAO"],
          [7168, 7247, "LEPCHA"],
          [6400, 6479, "LIMBU"],
          [65536, 65791, "LINEAR_B"],
          [4096, 4255, "MYANMAR"],
          [66464, 66527, "OLD_PERSIAN"],
          [66688, 66735, "OSMANYA"],
          [67840, 67871, "PHOENICIAN"],
          [5792, 5887, "RUNIC"],
          [7040, 7103, "SUNDANESE"],
          [5888, 5919, "TAGALOG"],
          [6480, 6527, "TAI_LE"],
          [6688, 6831, "TAI_THAM"],
          [43648, 43743, "TAI_VIET"],
          [40960, 42191, "YI"],
        ];

      function _(e, t, i, n, r) {
        ((this._family = e),
          (this._style = t),
          (this._weight = i),
          (this._buffer = n),
          (this._openTypeFont = r),
          (this._outlinesCache = {}),
          (this._boundsCache = []),
          (this._smallCaps = void 0),
          (this._fractions = void 0),
          (this._stylisticSets = void 0),
          (this._localizedForms = void 0));
      }
      (n.inherit(_, r),
        (_.prototype._smallCaps = void 0),
        (_.prototype._fractions = void 0),
        (_.prototype._stylisticSets = void 0),
        (_.prototype._localizedForms = void 0),
        (_.create = function (e, t, i, n) {
          var r = p.getFont(e, t, i, n);
          r.length ||
            (r = [
              {
                buffer: n,
              },
            ]);
          var o = null;
          try {
            o = c.parse(r[0].buffer);
          } catch (e) {
            (console.warn("Couldn't parse font: " + (e.message || "")),
              (o = null));
          }
          return o && o.supported ? new _(e, t, i, n, o) : null;
        }),
        (_.getDirectionForString = function (e) {
          var t;
          if (!e || !e.length) return d.SCRIPTS.INVALID;
          try {
            switch ((t = new d.Buffer(e)).directionForScript(t.getScript())) {
              case d.DIRECTIONS.LTR:
                return m.LTR;
              case d.DIRECTIONS.RTL:
                return m.RTL;
              case d.DIRECTIONS.TTB:
                return m.TTB;
              case d.DIRECTIONS.BBT:
                return m.BTT;
            }
          } finally {
            t && t.destroy();
          }
          return m.LTR;
        }),
        (_.getScriptForString = function (e) {
          var t, i;
          if (!e || !e.length) return d.SCRIPTS.INVALID;
          try {
            var n = (t = new d.Buffer(e)).getScript();
            i = d.tagToName(n);
          } finally {
            t && t.destroy();
          }
          return i;
        }),
        (_.openTypeLanguageSystemTagStringToBCP47 = function (e) {
          var t = d.stringToTag(e),
            i = d.openTypeLanguageSystemTagNumberToBCP47TagNumber(t);
          return i ? d.bcp47TagNumberToString(i) : null;
        }),
        (_.scriptNameToOpenTypeScriptTagString = function (e) {
          return d.scriptNameToOpenTypeScriptTagString(e);
        }),
        (_.prototype._family = null),
        (_.prototype._style = null),
        (_.prototype._weight = null),
        (_.prototype._outlinesCache = null),
        (_.prototype._boundsCache = null),
        (_.prototype._buffer = null),
        (_.prototype._openTypeFont = null),
        (_.prototype._ghbFont = null),
        (_.prototype.isResolved = function () {
          return !0;
        }),
        (_.prototype.toFontFaceSrc = function () {
          for (
            var e = "",
              t = new Uint8Array(this._buffer),
              i = t.byteLength,
              n = 0;
            n < i;
            n++
          )
            e += String.fromCharCode(t[n]);
          return (
            "url(data:font/ttf;base64," +
            window.btoa(e) +
            ') format("truetype")'
          );
        }),
        (_.prototype.getFamily = function () {
          return this._family;
        }),
        (_.prototype.getStyle = function () {
          return this._style;
        }),
        (_.prototype.getWeight = function () {
          return this._weight;
        }),
        (_.prototype.getGlyphBaseline = function (e) {
          var t = (1 / this._openTypeFont.unitsPerEm) * e;
          return this._openTypeFont.ascender * t;
        }),
        (_.prototype.stringToGlyphs = function (e, t, i, n, r) {
          var o,
            a = void 0,
            s = [];

          function l(e) {
            return (
              e &&
              e !== d.SCRIPTS.LATIN &&
              e !== d.SCRIPTS.COMMON &&
              e !== d.SCRIPTS.INVALID &&
              e !== d.SCRIPTS.UNKNOWN
            );
          }

          function h(e) {
            if (e.length <= 1) return !1;
            for (var t = 0; t < e.length; t++) {
              var i = e.codePointAt(t);
              if (i >= 768 && i <= 879) return !0;
            }
            return !1;
          }
          if (
            (this._shouldSetScriptNameByLanguage(r) &&
              this._setScriptNameByLanguage(r),
            " " !== e)
          ) {
            if (((o = new d.Buffer(e)), r)) {
              if (r.script && !r.noghb && !r.generateText) {
                var A = d.nameToTag(r.script);
                l(A) || h(e) ? (o.setScript(A), (a = !0)) : (a = !1);
              }
              !r.variant || r.noghb || r.generateText || (a = !0);
            }
            if (void 0 === a && r && !r.noghb)
              a = !!(
                l(o.getScript()) ||
                this._openTypeFont.hasGHBTables ||
                h(e)
              );
          }
          if (a) {
            if (r.language) {
              var c = d.stringToTag(r.language),
                p = d.openTypeLanguageSystemTagNumberToBCP47TagNumber(c);
              p && o.setLanguage(p);
            }
            var g = this._ghbFont || d.createFontFromArrayBuffer(this._buffer);
            (r.features && g.setStylistcSet(r.features.stylisticSet),
              (this._ghbFont = g));
            var f = o.directionForScript(o.getScript());
            if ((g.setScale(n || 72), r && r.variant)) {
              var m,
                y = !1;
              try {
                m = JSON.parse(r.variant);
              } catch (e) {
                y = !0;
              }
              !y && m && g.setVariations(m);
            }
            var _ = g.getGlyphs(o),
              v = t || 0,
              b = i || 0,
              C = this._openTypeFont;
            if (f !== d.DIRECTIONS.RTL || (r && r.noreverse))
              s = _.map(function (t, i) {
                var n = i + 1 < _.length ? _[i + 1].cluster : e.length,
                  o = C.glyphs.get(t.codepoint),
                  a = {
                    x: v + t.xOffset,
                    y: b - t.yOffset,
                    text: e.slice(t.cluster, n),
                    glyph: o,
                  };
                return (
                  (v += t.xAdvance),
                  (b -= t.yAdvance),
                  r && r.letterSpacing && (v += r.letterSpacing),
                  a
                );
              });
            else {
              _.reverse();
              s = _.map(function (t, i) {
                var n = i + 1 < _.length ? _[i + 1].cluster : e.length,
                  o = C.glyphs.get(t.codepoint),
                  a = {
                    x: v,
                    y: b - t.yOffset,
                    text: e.slice(t.cluster, n),
                    glyph: o,
                    xOff: -t.xOffset,
                  };
                return (
                  (v += t.xAdvance),
                  (b -= t.yAdvance),
                  r && r.letterSpacing && (v += r.letterSpacing),
                  a
                );
              });
            }
            s.push({
              glyph: null,
              x: v,
              y: b,
              text: null,
            });
          } else {
            var w = u.extend({}, r);
            if (((w.script = null), r.script && "auto" !== r.script)) {
              var E = d.scriptNameToOpenTypeScriptTagString(r.script);
              E && (w.script = E);
            }
            if ((w.letterSpacing && n && (w.letterSpacing /= n), w.features)) {
              var B = u.extend({}, w.features);
              ((w.features = B),
                "auto" === B.rlig && (B.rlig = !w.letterSpacing),
                "auto" === B.liga && (B.liga = !w.letterSpacing));
            }
            var x = this._openTypeFont.forEachGlyph(
              e,
              t,
              i,
              n,
              w,
              function (e, t, i, n, r, o, a) {
                s.push({
                  glyph: e,
                  x: t,
                  y: i,
                  text: o,
                  kerning: a,
                });
              },
            );
            s.push({
              glyph: null,
              x: x,
              y: i,
              text: null,
            });
          }
          return (o && o.destroy(), s);
        }),
        (_.prototype._shouldSetScriptNameByLanguage = function (e) {
          return !(!e.language || (e.script && "auto" !== e.script));
        }),
        (_.prototype._setScriptNameByLanguage = function (e) {
          var t = this._getScriptNameByLanguage(e.language);
          t && (e.script = t);
        }),
        (_.prototype._getScriptNameByLanguage = function (e) {
          var t;
          if (
            (t = this._openTypeFont.substitution.getScriptNames()).length > 0 &&
            (t = t.find(
              function (t) {
                return this.getAvailableLanguageSystemTags(t).indexOf(e) >= 0;
              }.bind(this),
            ))
          )
            return d.stringTagToName(t);
          return null;
        }),
        (_.prototype.getGlyphBoundingRect = function (e, t, i) {
          var n,
            r =
              "string" == typeof t
                ? this._openTypeFont.stringToGlyphs(t)[0]
                : t;
          if (i) {
            if (!(n = this._boundsCache[r.index])) {
              var o = this.getGlyphOutline(1, 0, 0, r);
              ((n = h.calculateBounds(o, !0) || new s()),
                (this._boundsCache[r.index] = n));
            }
            n = n.scaled(e, e);
          } else {
            var a = (1 / this._openTypeFont.unitsPerEm) * e,
              l = r.getMetrics(),
              A = (l.yMax - l.yMin) * a,
              c = (l.xMax - l.xMin) * a;
            n = new s(l.xMin * a, -l.yMax * a, c, A);
          }
          return n;
        }),
        (_.prototype.getGlyphOutline = function (e, t, i, n) {
          var r = this._outlinesCache["string" == typeof n ? n : n.index],
            s = (1 / this._openTypeFont.unitsPerEm) * e;
          if (!r) {
            var h =
                "string" == typeof n
                  ? this._openTypeFont.stringToGlyphs(n)[0]
                  : n,
              c = h.getPath(
                0,
                0,
                this._openTypeFont.unitsPerEm,
                {
                  hinting: !0,
                },
                this._openTypeFont,
              );
            ((r = new l()), (this._outlinesCache[h.index] = r));
            for (var p = 0; p < c.commands.length; p += 1) {
              var u = c.commands[p];
              "M" === u.type
                ? r.addVertex(a.Command.Move, u.x, u.y)
                : "L" === u.type
                  ? r.addVertex(a.Command.Line, u.x, u.y)
                  : "C" === u.type
                    ? (r.addVertex(a.Command.Curve2, u.x, u.y),
                      r.addVertex(a.Command.Curve2, u.x1, u.y1),
                      r.addVertex(a.Command.Curve2, u.x2, u.y2))
                    : "Q" === u.type
                      ? (r.addVertex(a.Command.Curve, u.x, u.y),
                        r.addVertex(a.Command.Curve, u.x1, u.y1))
                      : "Z" === u.type && r.addVertex(a.Command.Close);
            }
          }
          return new o(r, new A(s, 0, 0, s, t, i));
        }),
        (_.prototype.getAvailableStylisticSets = function (e) {
          e = e || this._openTypeFont.substitution.getDefaultScriptName();
          for (var t = [], i = 1; i <= 20; i++) {
            var n = "ss" + "00".substr(String(i).length) + i,
              r = this._openTypeFont.substitution.getFeature(n, e);
            r && r.length > 0 && t.push(n);
          }
          return t;
        }),
        (_.prototype.getAvailableLanguageSystemTags = function (e) {
          if (!e || "auto" === e) {
            var t = this._openTypeFont.substitution.getScriptNames();
            if (t.length > 0) {
              var i = t
                .map(
                  function (e) {
                    return this._openTypeFont.substitution.getLangSysTags(e);
                  }.bind(this),
                )
                .reduce(function (e, t) {
                  return e.concat(t);
                }, []);
              return Array.from(new Set(i));
            }
          }
          return this._openTypeFont.substitution.getLangSysTags(e);
        }),
        (_.prototype.getAvailableScripts = function (e) {
          for (
            var t = this._openTypeFont.position.getScriptNames(),
              i = this._openTypeFont.substitution.getScriptNames(),
              n = t.length - 1;
            n >= 0;
            n--
          )
            i.indexOf(t[n]) < 0 && i.push(t[n]);
          if (
            ((i = i.map(function (e) {
              return d.stringTagToName(e);
            })),
            e)
          ) {
            var r = {},
              o = this._openTypeFont.glyphs.glyphs;
            for (var a in o) {
              var s = o[a];
              if (s.unicode)
                for (n = 0; n < y.length; n++) {
                  var l = y[n];
                  if (s.unicode >= l[0] && s.unicode <= l[1]) {
                    r[l[2]] = !0;
                    break;
                  }
                }
            }
            for (var h in r) i.indexOf(h) < 0 && i.push(h);
          }
          return i;
        }),
        (_.prototype.getAvailableVariants = function () {
          if (this.hasFeature(r.Features.Variants)) {
            var e = this._openTypeFont.tables.fvar,
              t = [];
            if (e)
              for (
                var i = g.getLanguage(), n = 0;
                n < e.instances.length;
                n++
              ) {
                var o = e.instances[n].name,
                  a = {};
                if (o[i]) a.name = o[i];
                else if (o[f.English]) a.name = o[f.English];
                else {
                  Object.keys(o).length && (a.name = Object.values(o)[0]);
                }
                a.name && ((a.coords = e.instances[n].coordinates), t.push(a));
              }
            return t;
          }
          return [];
        }),
        (_.prototype.getLeftSideBearing = function (e, t) {
          return (
            (this._openTypeFont.charToGlyph(t).leftSideBearing /
              this._openTypeFont.unitsPerEm) *
            e
          );
        }),
        (_.prototype.getMaxFontHeight = function (e) {
          return (
            ((-this._openTypeFont.tables.head.yMin +
              this._openTypeFont.tables.head.yMax) /
              this._openTypeFont.unitsPerEm) *
            e
          );
        }),
        (_.prototype.getStrikeoutPosition = function (e, t, i, n) {
          var r = this._openTypeFont.tables.os2;
          if (r) {
            var o = r.yStrikeoutPosition;
            if ("number" == typeof o)
              return e - (n / this._openTypeFont.unitsPerEm) * o - i / 2;
          }
          return e - t / 2 - i / 2;
        }),
        (_.prototype.getStrikeoutWidth = function (e) {
          var t = this._openTypeFont.tables.os2,
            i = e / this._openTypeFont.unitsPerEm;
          if (t) {
            var n = t.yStrikeoutSize;
            if ("number" == typeof n) return i * n;
          }
          return e / 20;
        }),
        (_.prototype.getUnicode = function (e) {
          var t = this._openTypeFont.stringToGlyphs(e)[0];
          return void 0 !== t.unicode ? t.unicode : -1;
        }),
        (_.prototype.getAdvance = function (e, t, i) {
          var n = (1 / this._openTypeFont.unitsPerEm) * e,
            r =
              "string" == typeof t
                ? this._openTypeFont.stringToGlyphs(t)[0]
                : t,
            o = 0;
          if (r.advanceWidth) {
            var a = this._openTypeFont.tables.hhea.advanceWidthMax;
            (a || (a = this._openTypeFont.unitsPerEm),
              (o = Math.min(r.advanceWidth * n, n * a)));
          }
          i && (o += this._openTypeFont.getKerningValue(i, t) * n);
          return o;
        }),
        (_.prototype.hasFeature = function (e) {
          switch (e) {
            case r.Features.SmallCaps:
              return (
                null == this._smallCaps &&
                  (this._smallCaps = Object.values(r.SmallCapsUnicodeMap).every(
                    function (e) {
                      return 0 !== this._openTypeFont.charToGlyph(e).index;
                    }.bind(this),
                  )),
                this._smallCaps
              );
            case r.Features.Variants:
              if (
                this._openTypeFont.tables.fvar &&
                this._openTypeFont.tables.fvar.axes &&
                this._openTypeFont.tables.fvar.axes.length > 0 &&
                this._openTypeFont.tables.fvar.instances &&
                this._openTypeFont.tables.fvar.instances.length > 0
              )
                return !0;
            case r.Features.Fractions:
              if (null == this._fractions) {
                var t = this._openTypeFont.substitution.getDefaultScriptName(),
                  i = this._openTypeFont.charToGlyphIndex(
                    String.fromCharCode(8260),
                  ),
                  n = this._openTypeFont.substitution.getFeature("numr", t),
                  o = this._openTypeFont.substitution.getFeature("dnom", t);
                this._fractions = !!(0 !== i && n && n.length && o && o.length);
              }
              return this._fractions;
            case r.Features.StylisticSet:
              return this._hasStylisticSetsAvailable();
            case r.Features.LocalizedForm:
              return this._hasLocalizedFormsAvailable();
          }
          return !1;
        }),
        (_.prototype._hasStylisticSetsAvailable = function () {
          if (void 0 === this._stylisticSets) {
            var e = this._openTypeFont.substitution.getScriptNames();
            this._stylisticSets = e.some(
              function (e) {
                var t = this.getAvailableStylisticSets(e);
                if (t && t.length > 0) return !0;
              }.bind(this),
            );
          }
          return this._stylisticSets;
        }),
        (_.prototype._hasLocalizedFormsAvailable = function () {
          if (void 0 === this._localizedForms) {
            var e = this._openTypeFont.substitution.getScriptNames();
            this._localizedForms = e.some(
              function (e) {
                return this.getAvailableLanguageSystemTags(e).some(
                  function (t) {
                    var i = this._openTypeFont.substitution.getFeature(
                      "locl",
                      e,
                      t,
                    );
                    if (i && i.length > 0) return !0;
                  }.bind(this),
                );
              }.bind(this),
            );
          }
          return this._localizedForms;
        }),
        (e.exports = _));
    }