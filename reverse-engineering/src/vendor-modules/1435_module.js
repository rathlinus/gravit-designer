/**
 * chunk.vendor.js Module #1435
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(1231),
        o = i(1232);

      function a(e, t) {
        (r.call(this, e),
          this.put("/Type", "/Font"),
          this.put("/Subtype", "/Type1"),
          this.put("/BaseFont", "/" + t),
          this.put("/Encoding", "/WinAnsiEncoding"),
          (this._encoding = o.WINANSI));
      }
      (n.inherit(a, r),
        (a.prototype._encoding = null),
        (a.BASE_14 = [
          "Courier",
          "Courier-Bold",
          "Courier-Oblique",
          "Courier-BoldOblique",
          "Helvetica",
          "Helvetica-Bold",
          "Helvetica-Oblique",
          "Helvetica-BoldOblique",
          "Times-Roman",
          "Times-Bold",
          "Times-Italic",
          "Times-BoldItalic",
          "ZapfDingbats",
          "Symbol",
        ]),
        (a.prototype.encode = function (e) {
          return this._encoding.encode(e);
        }),
        (a.isStandardFont = function (e) {
          return a.BASE_14.some(function (t) {
            return t === e;
          });
        }),
        (e.exports = a));
    }