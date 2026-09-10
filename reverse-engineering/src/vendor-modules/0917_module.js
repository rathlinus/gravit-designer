/**
 * chunk.vendor.js Module #917
 * Type: unknown
 */

function (e, t, i) {
      var n = i(148),
        r = i(510),
        o = i(509),
        a = i(368);

      function s(e, t) {
        var i, n;
        if (
          (e
            ? ((i = e.text.cut(e.spaces)), (n = e.spaces.cut(e.end)))
            : ((i = [
                {
                  text: "\n",
                },
              ]),
              (n = [])),
          !(i = s.section(i, t)))
        )
          throw new Error("Couldn't measure text");
        if (!(n = s.section(n, t))) throw new Error("Couldn't measure space");
        ((this.text = i),
          (this.space = n),
          e || (this.eof = !0),
          (this.ascent = Math.max(i.ascent, n.ascent)),
          (this.descent = Math.max(i.descent, n.descent)),
          (this.minY = i.minY),
          (this.maxY = i.maxY),
          (this.minX = i.minX),
          (this.maxX = i.maxX),
          (this.width = i.width + n.width),
          (this.length = i.length + n.length));
      }
      ((s.prototype.text = null),
        (s.prototype.space = null),
        (s.prototype.ascent = 0),
        (s.prototype.descent = 0),
        (s.prototype.minY = 0),
        (s.prototype.maxY = 0),
        (s.prototype.minX = 0),
        (s.prototype.maxX = 0),
        (s.prototype.width = 0),
        (s.prototype.length = 0),
        (s.prototype.eof = !1),
        (s.prototype.isNewLine = function () {
          return 1 == this.text.parts.length && this.text.parts[0].isNewLine;
        }),
        (s.prototype.isEndOfList = function () {
          var e = this.code();
          return !!e && e.$ === a.List.Close;
        }),
        (s.prototype.isStartOfList = function () {
          var e = this.code();
          return !!e && e.$ === a.List.Open;
        }),
        (s.prototype.isSoftBreak = function () {
          return 1 == this.text.parts.length && this.text.parts[0].isSoftBreak;
        }),
        (s.prototype.code = function () {
          return 1 == this.text.parts.length && this.text.parts[0].code;
        }),
        (s.prototype.codeFormatting = function () {
          return 1 == this.text.parts.length && this.text.parts[0].run;
        }),
        (s.prototype.listDepth = function () {
          var e = this.text.parts[0];
          return e ? (isNaN(e.run.listDepth) ? 0 : e.run.listDepth) : 0;
        }),
        (s.prototype.listMarker = function () {
          var e = this.text.parts[0];
          return e && e.listMarker;
        }),
        (s.prototype.draw = function (e, t, i) {
          o.create(this.text.parts)
            .concat(this.space.parts)
            .forEach(function (n) {
              (n.draw(e, t, i), (t += n.width));
            });
        }),
        (s.prototype.plainText = function () {
          return this.text.plainText + this.space.plainText;
        }),
        (s.prototype.align = function () {
          var e = this.text.parts.length
            ? this.text.parts[0]
            : this.space.parts[0];
          return e && e.run.align ? e.run.align : n.defaultFormatting.align;
        }),
        (s.prototype.lineSpacing = function () {
          var e = this.text.parts.length
            ? this.text.parts[0]
            : this.space.parts[0];
          return e && e.run.lineSpacing
            ? e.run.lineSpacing
            : n.defaultFormatting.lineSpacing;
        }),
        (s.prototype.paragraphSpacing = function () {
          var e = this.text.parts.length
            ? this.text.parts[0]
            : this.space.parts[0];
          return e &&
            null !== e.run.paragraphSpacing &&
            !isNaN(e.run.paragraphSpacing)
            ? e.run.paragraphSpacing
            : n.defaultFormatting.paragraphSpacing;
        }),
        (s.prototype.paragraphIndent = function () {
          var e = this.text.parts.length
            ? this.text.parts[0]
            : this.space.parts[0];
          return e && e.run.paragraphIndent
            ? parseFloat(e.run.paragraphIndent)
            : n.defaultFormatting.paragraphIndent;
        }),
        (s.prototype.runs = function (e, t) {
          var i = (t && t.start) || 0,
            n = t && t.end;
          ("number" != typeof n && (n = Number.MAX_VALUE),
            [this.text, this.space].forEach(function (t) {
              t.parts.some(function (t) {
                if (i >= n || n <= 0) return !0;
                var r = t.run,
                  o = r.text;
                if ("string" == typeof o) {
                  if (i <= 0 && n >= o.length) e(r);
                  else if (i < o.length) {
                    var a = Object.create(r),
                      s = Math.max(0, i);
                    ((a.text = o.substr(s, Math.min(o.length, n - s))), e(a));
                  }
                  ((i -= o.length), (n -= o.length));
                } else (i <= 0 && n >= 1 && e(r), i--, n--);
              });
            }));
        }),
        (s.section = function (e, t) {
          var i;
          try {
            i = o
              .create(e)
              .map(function (e) {
                return new r(e, t);
              })
              .all();
          } catch (e) {
            return null;
          }
          var a = {
            parts: i,
            ascent: 0,
            descent: 0,
            minY: Number.MAX_VALUE,
            maxY: -Number.MAX_VALUE,
            minX: Number.MAX_VALUE,
            maxX: -Number.MAX_VALUE,
            width: 0,
            length: 0,
            plainText: "",
          };
          a.parts.forEach(function (e) {
            ((a.ascent = Math.max(a.ascent, e.ascent)),
              (a.descent = Math.max(a.descent, e.descent)),
              (a.minY = Math.min(a.minY, e.minY)),
              (a.maxY = Math.max(a.maxY, e.maxY)),
              (a.minX = Math.min(a.minX, e.minX + a.width)),
              (a.maxX = Math.max(a.maxX, e.maxX + a.width)),
              (a.width += e.width),
              (a.length += n.getPieceLength(e.run.text)),
              (a.plainText += n.getPiecePlainText(e.run.text)));
          });
          var s = a.parts[a.parts.length - 1];
          return (
            s &&
              ((a.lastGlyphWidth = s.lastGlyphWidth),
              (a.lastGlyphAdvance = s.lastGlyphAdvance)),
            a
          );
        }),
        (e.exports = s));
    }