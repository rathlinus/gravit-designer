/**
 * chunk.vendor.js Module #919
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(148),
        o = i(230),
        a = i(195),
        s = i(510),
        l = i(267);

      function h(e, t, i, n, r) {
        ((this.word = e),
          (this.line = t),
          (this.left = i),
          (this.width = r),
          (this.ordinal = n),
          (this.length = e.text.length + e.space.length));
      }
      n.inherit(h, l);
      var A = function (e) {
        return a.measure(a.ENTER, e).width;
      };
      ((h.PositionedChar = function (e, t, i, n, r) {
        ((this.left = e),
          (this.part = t),
          (this.word = i),
          (this.ordinal = n),
          (this.length = r),
          (this.baseline = i.line.baseline));
      }),
        n.inherit(h.PositionedChar, l),
        (h.PositionedChar.prototype.word = null),
        (h.PositionedChar.prototype.left = NaN),
        (h.PositionedChar.prototype.part = null),
        (h.PositionedChar.prototype.ordinal = null),
        (h.PositionedChar.prototype.length = NaN),
        (h.PositionedChar.prototype.baseline = NaN),
        (h.PositionedChar.prototype.bounds = function (e) {
          var t = this.word.bounds(e),
            i = this.word.word.isNewLine()
              ? A(this.word.word.run)
              : this.width || this.part.width;
          return new o(t.l + this.left, t.t, i, t.h);
        }),
        (h.PositionedChar.prototype.parent = function () {
          return this.word;
        }),
        (h.PositionedChar.prototype.byOrdinal = function () {
          return this;
        }),
        (h.PositionedChar.prototype.byCoordinate = function (e, t) {
          return e <= this.bounds().center().x ? this : this.next();
        }),
        (h.PositionedChar.prototype.type = "character"),
        (h.prototype.draw = function (e) {
          this.word.draw(e, this.line.left + this.left, this.line.baseline);
        }),
        (h.prototype.bounds = function (e) {
          return e
            ? new o(
                this.line.left + this.left,
                this.line.baseline + this.word.minY,
                this.word.isNewLine()
                  ? A(this.word.run)
                  : this.word.maxX - this.word.minX,
                this.word.maxY - this.word.minY,
              )
            : new o(
                this.line.left + this.left,
                this.line.baseline - this.line.ascent,
                this.word.isNewLine() ? A(this.word.run) : this.width,
                this.line.ascent + this.line.descent,
              );
        }),
        (h.prototype.parts = function (e) {
          this.word.text.parts.some(e) || this.word.space.parts.some(e);
        }),
        (h.prototype.realiseCharacters = function () {
          if (!this._characters) {
            var e = [],
              t = 0,
              i = this,
              n = this.ordinal,
              o = this.parentOfType("document").codes;
            this.parts(function (a) {
              r.pieceCharacters(function (r, l) {
                var A = Object.create(a.run);
                ((A.text = r),
                  l &&
                    "capitalize" === A.transformation &&
                    (A.transformation = null));
                var c = new s(A, o);
                (e.push(new h.PositionedChar(t, c, i, n, 1)),
                  (t += c.width),
                  n++);
              }, a.run.text);
            });
            var a = e[e.length - 1];
            (a &&
              (Object.defineProperty(a, "width", {
                value: this.width - a.left,
              }),
              (this.word.isNewLine() ||
                (this.word.code() && this.word.code().eof)) &&
                Object.defineProperty(a, "newLine", {
                  value: !0,
                }),
              this.word.isEndOfList() &&
                Object.defineProperty(a, "endOfList", {
                  value: !0,
                })),
              (this._characters = e));
          }
        }),
        (h.prototype.children = function () {
          return (this.realiseCharacters(), this._characters);
        }),
        (h.prototype.parent = function () {
          return this.line;
        }),
        (h.prototype.type = "word"),
        (h.prototype.word = null),
        (h.prototype.line = NaN),
        (h.prototype.left = NaN),
        (h.prototype.width = NaN),
        (h.prototype.ordinal = null),
        (h.prototype.length = NaN),
        (e.exports = h));
    }