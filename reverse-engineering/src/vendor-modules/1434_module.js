/**
 * chunk.vendor.js Module #1434
 * Type: unknown
 */

function (e, t) {
      function i(e, t, i) {
        ((this.cid = e), (this.width = t), (this.unicode = i));
      }
      ((i.prototype.cid = 0),
        (i.prototype.width = 0),
        (i.prototype.unicode = 0),
        (i.from = function (e, t) {
          var n = e.glyphs.get(t);
          return n
            ? new i(
                t,
                Math.ceil((1e3 * n.advanceWidth) / e.tables.head.unitsPerEm),
                n.unicode,
              )
            : null;
        }),
        (i.prototype.toString = function () {
          return "[GPDFGlyph]";
        }),
        (e.exports = i));
    }