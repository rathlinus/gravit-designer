/**
 * chunk.vendor.js Module #1429
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(182),
        o = i(197),
        a = function (e, t) {
          (o.call(this), (this._font = e));
          var i = this.getOpenTypeFont().ascender,
            n = this.getOpenTypeFont().descender,
            a = 0.7 * this.getOpenTypeFont().tables.head.unitsPerEm;
          (this.getOpenTypeFont().tables.os2 &&
            ((i = this.getOpenTypeFont().tables.os2.sTypoAscender),
            (n = this.getOpenTypeFont().tables.os2.sTypoDescender),
            (a = this.getOpenTypeFont().tables.os2.sCapHeight || 0)),
            this.put("/Type", "/FontDescriptor"),
            this.put(
              "/Ascent",
              (1e3 * i) / this.getOpenTypeFont().tables.head.unitsPerEm,
            ),
            this.put(
              "/Descent",
              (1e3 * n) / this.getOpenTypeFont().tables.head.unitsPerEm,
            ),
            this.put(
              "/CapHeight",
              (1e3 * a) / this.getOpenTypeFont().tables.head.unitsPerEm,
            ));
          var s = new r();
          (s.push(
            (1e3 * this.getOpenTypeFont().tables.head.xMin) /
              this.getOpenTypeFont().tables.head.unitsPerEm,
          ),
            s.push(
              (1e3 * this.getOpenTypeFont().tables.head.yMin) /
                this.getOpenTypeFont().tables.head.unitsPerEm,
            ),
            s.push(
              (1e3 * this.getOpenTypeFont().tables.head.xMax) /
                this.getOpenTypeFont().tables.head.unitsPerEm,
            ),
            s.push(
              (1e3 * this.getOpenTypeFont().tables.head.yMax) /
                this.getOpenTypeFont().tables.head.unitsPerEm,
            ),
            this.put("/FontBBox", s),
            this.put(
              "/FontName",
              "/" + this.getOpenTypeFont().tables.name.postScriptName.en,
            ),
            this.put("/StemV", 80),
            this.put(
              "/ItalicAngle",
              this.getOpenTypeFont().tables.post.italicAngle,
            ),
            this.put("/Flags", 32),
            t && this.put("/FontFile2", t));
        };
      (n.inherit(a, o),
        (a.prototype._font = null),
        (a.prototype.getFont = function () {
          return this._font;
        }),
        (a.prototype.getOpenTypeFont = function () {
          return this.getFont()._openTypeFont;
        }),
        (e.exports = a));
    }