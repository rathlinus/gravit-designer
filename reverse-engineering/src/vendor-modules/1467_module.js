/**
 * chunk.vendor.js Module #1467
 * Type: unknown
 */

function (e, t, i) {
      var n = i(7),
        r = i(5),
        o = i(147),
        a = i(158),
        s = i(138),
        l = i(11),
        h = i(28),
        A = i(1149),
        c = i(108),
        p = i(1148),
        u = i(438),
        d = i(132),
        g = i(801),
        f = i(838);

      function m(e) {
        ((this._element = e), (this._lines = []));
      }

      function y(e) {
        l.extend(this, e);
      }

      function _(e) {
        ((this.origin = e), (this.align = null), (this.words = []));
      }

      function v(e) {
        this.lines = e;
      }
      ((m.Mode = {
        FILL: 0,
        STROKE: 1,
        BOTH: 2,
      }),
        (m.prototype._element = null),
        (m.prototype._lines = null),
        (m.prototype._origin = null),
        (m.prototype.add = function (e) {
          var t = this._lines.slice(-1).pop();
          t
            ? t.origin.mapPoint(new r(0, 0)).getY() !==
                e.origin.mapPoint(new r(0, 0)).getY() &&
              ((t = new m.Line(e.origin)), this._lines.push(t))
            : ((t = new m.Line(e.origin)), this._lines.push(t));
          t.add(e);
        }),
        (m.prototype.setOrigin = function (e) {
          this._origin = e;
        }),
        (m.prototype.getCurrentWord = function () {
          var e = this._lines.slice(-1).pop();
          if (e) return e.words.slice(-1).pop();
        }),
        (m.prototype.renderSVG = function (e, t) {
          (((t = t || {}).origin = this._origin),
            new m.Paragraph(this._lines).renderSVG(e, t, this._element));
        }),
        (y.prototype.text = ""),
        (y.prototype.mode = m.Mode.BOTH),
        (y.prototype.lineWidth = 0),
        (y.prototype.charSpacing = 0),
        (y.prototype.wordSpacing = 0),
        (y.prototype.fontReference = null),
        (y.prototype.fillColor = null),
        (y.prototype.strokeColor = null),
        (y.prototype.origin = new n()),
        (y.prototype.textUnderline = null),
        (y.prototype.textStrikeout = null),
        (y.prototype.textLigatures = !1),
        (y.prototype.textFractions = !1),
        (y.prototype.append = function (e) {
          this.text += e.text;
        }),
        (y.prototype.merge = function (e) {
          if (e.align !== h.ParagraphAlignment.Justify) {
            var t = function (e, t) {
              return e instanceof s && t instanceof s
                ? s.equals(e, t)
                : e === t;
            };
            if (
              this.mode === e.mode &&
              this.textUnderline === e.textUnderline &&
              this.textStrikeout === e.textStrikeout &&
              this.textLigatures === e.textLigatures &&
              this.textFractions === e.textFractions &&
              this.lineWidth === e.lineWidth &&
              this.charSpacing === e.charSpacing &&
              this.wordSpacing === e.wordSpacing &&
              l.equals(this.fontReference, e.fontReference, !0) &&
              t(this.fillColor, e.fillColor) &&
              t(this.strokeColor, e.strokeColor)
            )
              return (this.append(e), !0);
          }
          return !1;
        }),
        (m.Word = y),
        (_.prototype.align = null),
        (_.prototype._getGradient = function (e) {
          for (var t = 0; t < this.words.length; t++)
            if (this.words[t][e] instanceof s) return this.words[t][e];
          return null;
        }),
        (_.prototype.renderSVG = function (e, t, i) {
          l.each(
            this.words,
            function (r, o) {
              var a = o.origin;
              t.origin &&
                t.origin instanceof n &&
                (a = o.origin.multiplied(t.origin));
              var l = e.createSvgElement("text");
              (l.setAttribute(
                "transform",
                "matrix(" + g.formatMatrix(a.getMatrix()).join(",") + ")",
              ),
                u.setAttributeId(l, i, t),
                u.exportAttributes(l, i, t));
              var h = (function (e, t) {
                  void 0 === t && (t = !0);
                  var i =
                    /((?:[\0-\x08\x0B\f\x0E-\x1F\uFFFD\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))/g;
                  return (
                    (e = e.replace(i, "")),
                    t &&
                      ((i = new RegExp(
                        "([\\x7F-\\x84]|[\\x86-\\x9F]|[\\uFDD0-\\uFDEF]|(?:\\uD83F[\\uDFFE\\uDFFF])|(?:\\uD87F[\\uDFFE\\uDFFF])|(?:\\uD8BF[\\uDFFE\\uDFFF])|(?:\\uD8FF[\\uDFFE\\uDFFF])|(?:\\uD93F[\\uDFFE\\uDFFF])|(?:\\uD97F[\\uDFFE\\uDFFF])|(?:\\uD9BF[\\uDFFE\\uDFFF])|(?:\\uD9FF[\\uDFFE\\uDFFF])|(?:\\uDA3F[\\uDFFE\\uDFFF])|(?:\\uDA7F[\\uDFFE\\uDFFF])|(?:\\uDABF[\\uDFFE\\uDFFF])|(?:\\uDAFF[\\uDFFE\\uDFFF])|(?:\\uDB3F[\\uDFFE\\uDFFF])|(?:\\uDB7F[\\uDFFE\\uDFFF])|(?:\\uDBBF[\\uDFFE\\uDFFF])|(?:\\uDBFF[\\uDFFE\\uDFFF])(?:[\\0-\\t\\x0B\\f\\x0E-\\u2027\\u202A-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF]))",
                        "g",
                      )),
                      (e = e.replace(i, ""))),
                    e
                  );
                })(o.text),
                p = document.createTextNode(h),
                y = new A();
              (y.set("font-family", "'" + o.fontReference.fontFamily + "'"),
                y.set("font-weight", o.fontReference.fontWeight),
                y.set("font-size", o.fontReference.fontSize + d.Unit.PX),
                y.set(
                  "font-style",
                  o.fontReference.fontStyle === c.Style.Normal
                    ? "normal"
                    : "italic",
                ),
                o.textLigatures
                  ? "auto" === o.textLigatures &&
                    o.charSpacing > 0 &&
                    y.set("font-variant-ligatures", "none")
                  : y.set("font-variant-ligatures", "none"));
              var _ = [];
              if (
                (o.textFractions && _.push('"frac"'),
                o.textStylisticSet && _.push('"' + o.textStylisticSet + '"'),
                o.textLocalizedForm)
              ) {
                var v = f.stringToTag(o.textLocalizedForm),
                  b = f.openTypeLanguageSystemTagNumberToBCP47TagNumber(v);
                if (b) {
                  var C = f.bcp47TagNumberToString(b);
                  (_.push('"locl"'), l.setAttribute("lang", C));
                }
              }
              (_.length > 0 && y.set("font-feature-settings", _.join(",")),
                o.wordSpacing && y.set("word-spacing", o.wordSpacing),
                o.charSpacing && y.set("letter-spacing", o.charSpacing));
              var w = [];
              (o.textUnderline && w.push("underline"),
                o.textStrikeout && w.push("line-through"),
                w.length && y.set("text-decoration", w.join(" ")));
              var E = o.fillColor || "none";
              E instanceof s || y.set("fill", E);
              var B = o.strokeColor || "none";
              (B instanceof s || y.set("stroke", B),
                o.mode >= m.Mode.STROKE &&
                  y.set("stroke-width", g.formatNumber(o.lineWidth)),
                y.setElementStyle(l),
                l.append(p),
                e.peek().append(l));
            }.bind(this),
          );
        }),
        (_.prototype.add = function (e) {
          var t = this.words.slice(-1).pop();
          ((t && t.merge(e)) || this.words.push(e),
            this.align || (this.align = e.align));
        }),
        (m.Line = _),
        (v.prototype._getGradient = function (e) {
          for (var t = 0; t < this.lines.length; t++)
            if (this.lines[t]._getGradient(e))
              return this.lines[t]._getGradient(e);
          return null;
        }),
        (v.prototype.renderSVG = function (e, t, i) {
          var n,
            r = this._getGradient("fillColor"),
            s = this._getGradient("strokeColor"),
            h = e.peek(),
            A = e.createSvgElement("g");
          (e.peek().appendChild(A), e.push(A));
          var c = function (t) {
            var i;
            if (
              (t instanceof o
                ? (i = p.createSvgLinearGradient(e, e.svgDoc, t))
                : t instanceof a &&
                  (i = p.createSvgRadialGradient(e, e.svgDoc, t)),
              !i)
            )
              throw new Error("Unsupported GGradient: " + t);
            return (
              n || ((n = e.createSvgElement("defs")), h.appendChild(n)),
              n.appendChild(i),
              u.createIdUrl(i.getAttribute("id"))
            );
          }.bind(this);
          (r && A.setAttribute("fill", c(r)),
            s && A.setAttribute("stroke", c(s)),
            l.each(this.lines, function (n, r) {
              r.renderSVG(e, t, i);
            }),
            e.pop());
        }),
        (m.Paragraph = v),
        (e.exports = m));
    }