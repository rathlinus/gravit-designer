/**
 * chunk.vendor.js Module #1446
 * Type: unknown
 */

function (e, t, i) {
      var n = i(293),
        r = i(853),
        o = i(161),
        a = i(0),
        s = i(1230),
        l = i(11),
        h = i(367),
        A = i(855),
        c = i(1447),
        p = i(5),
        u = i(369),
        d = i(655),
        g = i(195),
        f = i(440),
        m = i(854),
        y = i(7),
        _ = i(1223),
        v = i(215),
        b = i(1147),
        C = i(48),
        w = i(63),
        E = i(59),
        B = function (e, t, i) {
          ((this._pdfDoc = t),
            l.extend(this, i.getTLCore()),
            (this._ctx = new B.GPDFTLRender(
              this,
              this._canvas,
              e,
              this._pdfDoc,
              i,
            )));
        };
      (a.inherit(B, h),
        (B.prototype.render = function (e, t, i, n) {
          ((this._ctx._text = null), h.prototype.render.call(this, e, t, i, n));
        }),
        (B.GPDFTLRender = function (e, t, i, n, r) {
          (d.call(this, e, t),
            (this._pdfDoc = n),
            (this._node = r),
            (this._context = i),
            (this._text = null));
        }),
        a.inherit(B.GPDFTLRender, d),
        (B.GPDFTLRender.prototype._text = null),
        (B.GPDFTLRender.prototype._graphics = null),
        (B.GPDFTLRender.prototype._putVertices = function (e) {
          var t = new b(this._pdfDoc);
          if (e.rewindVertices(0))
            for (var i = new C(); e.readVertex(i); )
              switch (i.command) {
                case C.Command.Move:
                  t.moveTo(i.x, i.y);
                  break;
                case C.Command.Line:
                  t.lineTo(i.x, i.y);
                  break;
                case C.Command.Curve:
                  var n = i.x,
                    r = i.y;
                  e.readVertex(i) && t.quadraticCurveTo(i.x, i.y, n, r);
                  break;
                case C.Command.Curve2:
                  ((n = i.x), (r = i.y));
                  if (e.readVertex(i)) {
                    var o = i.x,
                      a = i.y;
                    e.readVertex(i) && t.bezierCurveTo(o, a, i.x, i.y, n, r);
                  }
                  break;
                case C.Command.Close:
                  t.close();
                  break;
                default:
                  throw new Error("Unknown Command Type - " + i.command);
              }
          return t;
        }),
        (B.GPDFTLRender.prototype.drawMarker = function (e, t, i) {
          if (!(this._renderMode & u.RENDERFLAG_STROKE)) {
            var o = 0;
            if (
              (this._node.hasStyleBorder() && (o |= 1 << _.Mode.STROKE),
              (this._node.hasStyleFill() || "transparent" !== this.fillStyle) &&
                (o |= 1 << _.Mode.FILL),
              !((o -= 1) < 0))
            ) {
              var a = this._node.$trf || new y(),
                s = a.mapPoint(new p(t, i));
              if (
                ((e = new w(e, new y(1, 0, 0, 1, s.getX(), s.getY()))),
                this._textTransformer)
              ) {
                var l = E.calculateBounds(e, !0);
                e = this._textTransformer.transform(e, s.getX(), s.getY(), l);
              }
              var h = this._putVertices(e),
                c = new n(this._pdfDoc);
              this._pdfDoc.getCurrentGraphics().add(c);
              var d,
                g = a.decomposed(),
                f = g.skew
                  .multiplied(g.rotate)
                  .multiplied(
                    new y(
                      this._node.getGeometryBBox()._width,
                      0,
                      0,
                      this._node.getGeometryBBox()._height,
                      0,
                      0,
                    ),
                  )
                  .translated(a._tx, a._ty);
              if (o !== _.Mode.STROKE) {
                var m =
                  this._textFillStyle ||
                  ("transparent" === this.fillStyle
                    ? this.defaultFill
                    : this.fillStyle);
                d = new A({
                  doc: this._pdfDoc,
                  transform: f,
                  color: m,
                });
              }
              if (o >= _.Mode.STROKE) {
                var v = this._node.createShapePaint(
                  this._context,
                  this._node.getPaintLayers().getBorderLayers(!0)[0].$_pt,
                  this._node.getPatternBBox(),
                );
                d = new r({
                  doc: this._pdfDoc,
                  transform: f,
                  color: v.paint,
                });
              }
              (c.add(h), c.add(d), o !== _.Mode.STROKE ? c.fill() : c.stroke());
            }
          }
        }),
        (B.GPDFTLRender.prototype.drawText = function (e, t, i, a, l) {
          var h = !1;
          if (!(this._renderMode & u.RENDERFLAG_STROKE) && e !== g.NBSP) {
            var d = 0;
            if (
              (this._node.hasStyleBorder() && (d |= 1 << _.Mode.STROKE),
              (this._node.hasStyleFill() || "transparent" !== this.fillStyle) &&
                (d |= 1 << _.Mode.FILL),
              !((d -= 1) < 0))
            ) {
              Y = (Y = this._transform
                .scaled(1 / this._transform._sx, 1 / this._transform._sy)
                .translated(t, i)).translated(0, 2 * -Y._ty);
              var b,
                C = this._node.$trf || new y(),
                w = C.decomposed(),
                E = w.skew
                  .multiplied(w.rotate)
                  .multiplied(
                    new y(
                      this._node.getGeometryBBox()._width,
                      0,
                      0,
                      this._node.getGeometryBBox()._height,
                      0,
                      0,
                    ),
                  )
                  .translated(C._tx, C._ty),
                B = null;
              if (d !== _.Mode.STROKE) {
                var x =
                    this._textFillStyle ||
                    ("transparent" === this.fillStyle
                      ? this.defaultFill
                      : this.fillStyle),
                  P = new A({
                    doc: this._pdfDoc,
                    transform: E,
                    color: x,
                  });
                ((this._fillColor && this._fillColor.equals(P)) ||
                  (this._fillColor = P),
                  (B = this._fillColor));
              } else this._fillColor = null;
              if (d >= _.Mode.STROKE) {
                if (!this._strokeColor) {
                  var S = this._node.createShapePaint(
                    this._context,
                    this._node.getPaintLayers().getBorderLayers(!0)[0].$_pt,
                    this._node.getPatternBBox(),
                  );
                  this._strokeColor = new r({
                    doc: this._pdfDoc,
                    transform: E,
                    color: S.paint,
                  });
                }
              } else this._strokeColor = null;
              this._text ||
                ((h = !0),
                (this._text = new _(this._pdfDoc)),
                (this._graphics = new n(this._pdfDoc)),
                this._pdfDoc.getCurrentGraphics().add(this._graphics));
              var T = this._pdfDoc.body.getFontResource(this.getCurrentFont()),
                I = o.parseFont(this.font).fontSize,
                F = new c(T, I),
                R = this._core.getTransformer(v.TYPE),
                D = void 0,
                k = void 0;
              if (
                (this.langScript &&
                  "auto" !== this.langScript &&
                  (D = this.langScript),
                this.textLocalizedForm && (k = this.textLocalizedForm),
                R)
              ) {
                var G = this.getCurrentFont(),
                  Q = {
                    letterSpacing: this.charSpacing,
                    kerning: !0,
                    direction: "ltr",
                    features: {
                      liga: this.textLigatures,
                      rlig: this.textLigatures,
                      frac: this.textFractions,
                      stylisticSet: this.textStylisticSet,
                    },
                    script: D,
                    language: k,
                    generateText: !0,
                  },
                  M = {};
                (this.langScript &&
                  "auto" !== this.langScript &&
                  (Q.script = this.langScript),
                  this.textVariant && (Q.variant = this.textVariant));
                for (
                  var N = G.stringToGlyphs(e, t, i, I, Q),
                    U = N.length - 1,
                    V = 0;
                  V < U;
                  V++
                ) {
                  var O = N[V],
                    L =
                      O.glyph.unicode === g.NBSP.charCodeAt(0)
                        ? null
                        : G.getGlyphOutline(I, O.x, O.y, O.glyph);
                  if (L) {
                    var Y,
                      X = G.getGlyphBoundingRect(I, O.glyph, !0);
                    if (
                      ((M.next = N[V + 1].x - O.x),
                      (M.prev = V > 0 ? O.x - N[V - 1].x : O.x - t),
                      (M.unicode = O.glyph.unicode),
                      (L = R.transform(L, O.x, O.y, X, M)))
                    )
                      (((Y = (Y = L._source._transform
                        .decomposed()
                        .translate.multiplied(L._transform)).translated(
                        0,
                        2 * -Y._ty,
                      ))._shx = -Y._shx),
                        (Y._shy = -Y._shy),
                        this._putWord(d, O.text, Y, B, F));
                  }
                }
                var H = this._core.getRenderBounds();
                (((b = new y()
                  .translated(-H.getX(), -H.getY())
                  .multiplied(C))._shx = -b._shx),
                  (b._shy = -b._shy),
                  (b._ty = this._pdfDoc.relativeY(b._ty)));
              } else {
                this._putWord(d, e, Y, B, F);
                var W = C.mapPoint(new p(0, 0));
                (((b = C.translated(-W.getX(), -W.getY()).translated(
                  W.getX(),
                  this._pdfDoc.relativeY(W.getY()),
                ))._shx = -b._shx),
                  (b._shy = -b._shy));
              }
              if (h) {
                this._graphics.add(new f(b));
                var Z = this._node.getSourceBBox();
                if (Z && !R) {
                  var z = new s(0, -Z.getHeight(), Z.getWidth(), Z.getHeight());
                  this._graphics.add(new m(z));
                }
                this._graphics.add(this._text);
              }
              var j = new n(this._pdfDoc);
              this._graphics.add(j);
              var J,
                q = Y.mapPoint(new p(0, 0));
              if (
                ((this.textUnderline || this.textStrikeout) &&
                  (J = (G = this.getCurrentFont()).getStrikeoutWidth(I)),
                this.textUnderline)
              ) {
                z = new s(q.getX(), q.getY() - 2 * J, l, J);
                (d !== _.Mode.STROKE && (j.add(z), j.fill()),
                  d >= _.Mode.STROKE && (j.add(z), j.stroke()));
              }
              if (this.textStrikeout) {
                var K = -G.getStrikeoutPosition(-q.getY(), a, J, I);
                z = new s(q.getX(), K, l, J);
                (d !== _.Mode.STROKE && (j.add(z), j.fill()),
                  d >= _.Mode.STROKE && (j.add(z), j.stroke()));
              }
            }
          }
        }),
        (B.GPDFTLRender.prototype._putWord = function (e, t, i, n, r) {
          var o,
            a = this._node.getPaintLayers().getBorderLayers(!0)[0];
          a && (o = a.$_bw);
          var s = void 0,
            l = void 0;
          (this.langScript &&
            "auto" !== this.langScript &&
            (s = this.langScript),
            this.textLocalizedForm && (l = this.textLocalizedForm));
          var h = new _.Word({
              text: t,
              textEncoded: r.getFont().encode(t, {
                letterSpacing:
                  "number" == typeof this.charSpacing ? this.charSpacing : 0,
                kerning: !0,
                features: {
                  liga: this.textLigatures,
                  rlig: this.textLigatures,
                  frac: this.textFractions,
                  stylisticSet: this.textStylisticSet,
                },
                script: s,
                language: l,
              }),
              mode: e,
              align: this._node.getProperty("_pal"),
              origin: i,
              charSpacing:
                "number" == typeof this.charSpacing ? this.charSpacing : 0,
              wordSpacing: Math.max(this.wordSpacing || 0, 0),
              fillColor: n,
              strokeColor: this._strokeColor,
              lineWidth: o,
              fontReference: r,
              script: s,
              textLigatures: this.textLigatures,
              textFractions: this.textFractions,
              textStylisticSet: this.textStylisticSet,
              textLocalizedForm: this.textLocalizedForm,
            }),
            A = this._text.getCurrentWord();
          t.trim().length ? this._text.add(h) : A && A.append(h);
        }),
        (e.exports = B));
    }