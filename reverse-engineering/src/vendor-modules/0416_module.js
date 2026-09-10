/**
 * chunk.vendor.js Module #416
 * Type: unknown
 */

function (e, t, i) {
      var n = i(161),
        r = i(508),
        o = i(148);

      function a(e, t, i, s) {
        var l = new r(),
          h = n.cssProperty(t, "font"),
          A = n.parseFont(h);
        if (!(s = s || a.fontManager)) return null;
        var c = s.getFont(A.fontFamily, A.fontStyle, A.fontWeight);
        if (!c.isResolved()) return null;
        var p,
          u,
          d,
          g,
          f,
          m = A.fontSize,
          y = (1 / c._openTypeFont.unitsPerEm) * m,
          _ = -Number.MAX_VALUE,
          v = -Number.MAX_VALUE,
          b = Number.MAX_VALUE,
          C = Number.MAX_VALUE,
          w = 0,
          E = o.defaultFormatting.ligatures,
          B = o.defaultFormatting.fractions,
          x = o.defaultFormatting.stylisticSet,
          P = o.defaultFormatting.localizedForm;
        if (
          (i &&
            ((w = i.charSpacing),
            (p = i.transformation),
            (u = i.script),
            (g = i.langScript && "auto" !== i.langScript ? i.langScript : null),
            (f = i.variant || o.defaultFormatting.variant),
            (d = i.fontSize),
            (E =
              void 0 === i.ligatures
                ? o.defaultFormatting.ligatures
                : i.ligatures),
            (B =
              void 0 === i.fractions
                ? o.defaultFormatting.fractions
                : i.fractions),
            (x =
              void 0 === i.stylisticSet
                ? o.defaultFormatting.stylisticSet
                : i.stylisticSet),
            (P =
              void 0 === i.localizedForm
                ? o.defaultFormatting.localizedForm
                : i.localizedForm)),
          p && (e = n.transformText(e, p, c)),
          (l.ascent = c._openTypeFont.ascender * y),
          (l.height = c.getMaxFontHeight(m)),
          (l.descent = -c._openTypeFont.descender * y),
          u && d)
        )
          switch (u) {
            case "sub":
            case "super":
              var S = (1 / c._openTypeFont.unitsPerEm) * d;
              ((l.ascent = c._openTypeFont.ascender * S),
                (l.height = c.getMaxFontHeight(d)),
                (l.descent = -c._openTypeFont.descender * S));
          }
        var T = {
          letterSpacing: w,
          kerning: !0,
          direction: "ltr",
          features: {
            liga: E,
            rlig: E,
            frac: !0 === B,
            stylisticSet: x,
          },
        };
        (P && (T.language = P), g && (T.script = g), f && (T.variant = f));
        for (
          var I = c.stringToGlyphs(e, 0, 0, m, T), F = I.length - 1, R = 0;
          R < F;
          R++
        ) {
          var D = I[R],
            k = c.getGlyphBoundingRect(m, D.glyph, !0);
          l.descent = Math.max(l.descent, k.getY() + k.getHeight());
          var G = k.getWidth() * k.getHeight();
          0 !== G &&
            !Number.isNaN(G) &&
            Number.isFinite(G) &&
            ((_ = Math.max(_, k.getY() + k.getHeight())),
            (b = Math.min(b, k.getY())),
            (C = Math.min(C, D.x + k.getX())),
            (v = Math.max(v, D.x + k.getX() + k.getWidth())));
          var Q = I[R + 1].x - D.x;
          R === F - 1 &&
            ((l.lastGlyphWidth = k.getX() + k.getWidth()),
            (l.lastGlyphAdvance = Q));
        }
        return (
          (l.width = I[F].x),
          Number.isNaN(b) ? (l.minY = Number.MAX_VALUE) : (l.minY = b),
          Number.isNaN(_) ? (l.maxY = -Number.MAX_VALUE) : (l.maxY = _),
          Number.isNaN(C) ? (l.minX = Number.MAX_VALUE) : (l.minX = C),
          Number.isNaN(v) ? (l.maxX = -Number.MAX_VALUE) : (l.maxX = v),
          l.minY !== Number.MAX_VALUE &&
            l.maxY !== -Number.MAX_VALUE &&
            l.maxY - l.minY > l.height &&
            console.warn("open type measure: wrong metrics"),
          l
        );
      }
      ((a.fontManager = null), (e.exports = a));
    }