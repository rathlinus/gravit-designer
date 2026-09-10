/**
 * chunk.vendor.js Module #1466
 * Type: unknown
 */

function (e, t, i) {
      var n = i(161),
        r = i(0),
        o = i(11),
        a = i(367),
        s = i(369),
        l = i(655),
        h = i(195),
        A = i(7),
        c = i(1467),
        p = i(68),
        u = i(215),
        d = i(63),
        g = i(59),
        f = i(801),
        m = i(138),
        y = i(147),
        _ = i(158),
        v = i(438),
        b = i(1148),
        C = i(1236),
        w =
          (i(5),
          function (e, t) {
            (o.extend(this, e.getTLCore()),
              (this._options = t || {}),
              (this._ctx = new w.GSVGTLRender(this, this._canvas, e, t)));
          });
      (r.inherit(w, a),
        (w.prototype._options = null),
        (w.prototype.render = function (e, t, i, n) {
          ((this._ctx._text = null), a.prototype.render.call(this, e, t, i, n));
        }),
        (w.prototype.renderSVG = function (e) {
          var t = null,
            i = this._ctx._node.getSourceBBox();
          if (i) {
            var n = e.createSvgElement("rect");
            (n.setAttribute("x", f.formatNumber(0)),
              n.setAttribute("y", f.formatNumber(0)),
              n.setAttribute("width", f.formatNumber(i.getWidth())),
              n.setAttribute("height", f.formatNumber(i.getHeight())),
              n.setAttribute(
                "transform",
                "matrix(" +
                  f
                    .formatMatrix(this._ctx._transformOrigin.getMatrix())
                    .join(",") +
                  ")",
              ),
              (t = C.createMaskDefinitionFromShape(e.svgDoc, n, !1)));
          }
          for (; this._ctx._texts.length; ) {
            var r = this._ctx._texts.shift();
            if (t) {
              var o,
                a = e.createSvgElement("g");
              ((s = e.peek()).appendChild(a),
                e.push(a),
                (o = e.createSvgElement("defs")).appendChild(t),
                s.appendChild(o),
                a.setAttribute(
                  "clip-path",
                  "url(#" + t.getAttribute("id") + ")",
                ),
                r.renderSVG(e, this._options),
                e.pop());
            } else r.renderSVG(e, this._options);
          }
          for (var s = e.peek(); this._ctx._markers.length; ) {
            var l = this._ctx._markers.shift(),
              h = l.pattern,
              A = l.mode,
              p = l.path;
            if (h instanceof m) {
              var u;
              if (
                (h instanceof y
                  ? (u = b.createSvgLinearGradient(e, e.svgDoc, h))
                  : h instanceof _ &&
                    (u = b.createSvgRadialGradient(e, e.svgDoc, h)),
                !u)
              )
                continue;
              (o || ((o = e.createSvgElement("defs")), s.appendChild(o)),
                o.appendChild(u),
                (h = v.createIdUrl(u.getAttribute("id"))));
            }
            var d = e.createSvgElement("path");
            (d.setAttribute("d", p),
              A !== c.Mode.STROKE
                ? (d.setAttribute("fill", h), d.setAttribute("stroke", "none"))
                : (d.setAttribute("stroke", h), d.setAttribute("fill", "none")),
              e.peek().appendChild(d));
          }
        }),
        (w.GSVGTLRender = function (e, t, i, n) {
          (l.call(this, e, t),
            (this._node = i),
            (this._text = null),
            (this._texts = []),
            (this._markers = []),
            n && n.fullFFName && (this._fullFFName = !0));
        }),
        r.inherit(w.GSVGTLRender, l),
        (w.prototype._texts = null),
        (w.prototype._markers = null),
        (w.prototype._fullFFName = !1),
        (w.GSVGTLRender.prototype._transformOrigin = null),
        (w.GSVGTLRender.prototype.drawMarker = function (e, t, i) {
          if (!(this._renderMode & s.RENDERFLAG_STROKE)) {
            var n = 0;
            if (
              (this._node.hasStyleBorder() && (n |= 1 << c.Mode.STROKE),
              (this._node.hasStyleFill() || "transparent" !== this.fillStyle) &&
                (n |= 1 << c.Mode.FILL),
              !((n -= 1) < 0))
            ) {
              var r,
                o = this._node.$trf || new A(),
                a = new A(1, 0, 0, 1, t, i).multiplied(o);
              if (((e = new d(e, a)), this._textTransformer)) {
                var l = g.calculateBounds(e, !0);
                e = this._textTransformer.transform(e, pt.getX(), pt.getY(), l);
              }
              (n !== c.Mode.STROKE &&
                (r =
                  this._textFillStyle ||
                  ("transparent" === this.fillStyle
                    ? this.defaultFill
                    : this.fillStyle)),
                n >= c.Mode.STROKE &&
                  (r = this._node
                    .getPaintLayers()
                    .getBorderLayers(!0)[0].$_pt) instanceof p &&
                  (r = r.toScreenCSS(
                    this._node.getPaintLayers().getBorderLayers(!0)[0].$_op,
                  )));
              var h = e.toSVGPath(f.formatNumber);
              this._markers.push({
                path: h,
                pattern: r,
                mode: n,
              });
            }
          }
        }),
        (w.GSVGTLRender.prototype.drawText = function (e, t, i, r, o) {
          if (!(this._renderMode & s.RENDERFLAG_STROKE) && e !== h.NBSP) {
            var a = 0;
            if (
              (this._node.hasStyleBorder() && (a |= 1 << c.Mode.STROKE),
              (this._node.hasStyleFill() || "transparent" !== this.fillStyle) &&
                (a |= 1 << c.Mode.FILL),
              !((a -= 1) < 0))
            ) {
              var l,
                d = this._transform
                  .scaled(1 / this._transform._sx, 1 / this._transform._sy)
                  .translated(t, i),
                g = this._node.$trf || new A(),
                f = null,
                m = null;
              (a !== c.Mode.STROKE &&
                (f =
                  this._textFillStyle ||
                  ("transparent" === this.fillStyle
                    ? this.defaultFill
                    : this.fillStyle)),
                a >= c.Mode.STROKE &&
                  (m = this._node
                    .getPaintLayers()
                    .getBorderLayers(!0)[0].$_pt) instanceof p &&
                  (m = m.toScreenCSS(
                    this._node.getPaintLayers().getBorderLayers(!0)[0].$_op,
                  )),
                this._text ||
                  ((this._text = new c(this._node)),
                  this._texts.push(this._text)));
              var y = this.getCurrentFont(),
                _ = n.parseFont(this.font);
              this._fullFFName &&
                y._openTypeFont &&
                y._openTypeFont.names &&
                y._openTypeFont.names.fontFamily &&
                y._openTypeFont.names.fontFamily.en &&
                (_.fontFamily = y._openTypeFont.names.fontFamily.en);
              var v = _.fontSize,
                b = this._core.getTransformer(u.TYPE);
              if (b) {
                var C = {
                    letterSpacing: this.charSpacing,
                    kerning: !0,
                    direction: "ltr",
                    features: {
                      liga: this.textLigatures,
                      rlig: this.textLigatures,
                      frac: this.textFractions,
                      stylisticSet: this.textStylisticSet,
                    },
                    language: this.textLocalizedForm,
                    generateText: !0,
                  },
                  w = {};
                (this.langScript &&
                  "auto" !== this.langScript &&
                  (C.script = this.langScript),
                  this.textVariant && (C.variant = this.textVariant));
                for (
                  var E = y.stringToGlyphs(e, t, i, v, C),
                    B = E.length - 1,
                    x = 0;
                  x < B;
                  x++
                ) {
                  var P = E[x],
                    S =
                      P.glyph.unicode === h.NBSP.charCodeAt(0)
                        ? null
                        : y.getGlyphOutline(v, P.x, P.y, P.glyph);
                  if (S) {
                    var T = y.getGlyphBoundingRect(v, P.glyph, !0);
                    if (
                      ((w.next = E[x + 1].x - P.x),
                      (w.prev = x > 0 ? P.x - E[x - 1].x : P.x - t),
                      (w.unicode = P.glyph.unicode),
                      (S = b.transform(S, P.x, P.y, T, w)))
                    ) {
                      d = S._source._transform
                        .decomposed()
                        .translate.multiplied(S._transform);
                      this._putWord(a, P.text, d, f, m, _);
                    }
                  }
                }
                var I = b.getBoxOrigin();
                I && (l = new A().translated(I.getX(), I.getY()).multiplied(g));
              } else (this._putWord(a, e, d, f, m, _), (l = g));
              (this._text.setOrigin(l), (this._transformOrigin = l));
            }
          }
        }),
        (w.GSVGTLRender.prototype._putWord = function (e, t, i, n, r, o) {
          var a,
            s = this._node.getPaintLayers().getBorderLayers(!0)[0];
          s && (a = s.$_bw);
          var l = new c.Word({
              text: t,
              mode: e,
              align: this._node.getProperty("_pal"),
              origin: i,
              charSpacing: this.charSpacing,
              wordSpacing: Math.max(this.wordSpacing || 0, 0),
              fillColor: n,
              strokeColor: r,
              lineWidth: a,
              fontReference: o,
              textUnderline: this.textUnderline,
              textStrikeout: this.textStrikeout,
              textLigatures: this.textLigatures,
              textFractions: this.textFractions,
              textStylisticSet: this.textStylisticSet,
              textLocalizedForm: this.textLocalizedForm,
            }),
            h = this._text.getCurrentWord();
          t.trim().length ? this._text.add(l) : h && h.append(l);
        }),
        (e.exports = w));
    }