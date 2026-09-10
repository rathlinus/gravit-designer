/**
 * chunk.vendor.js Module #985
 * Type: unknown
 */

function (e, t, i) {
      var n = i(723);

      function r(e) {
        n.call(this, e, "gpos");
      }
      ((r.prototype = n.prototype),
        (r.prototype.init = function () {
          var e = this.getDefaultScriptName();
          this.defaultKerningTables = this.getKerningTables(e);
        }),
        (r.prototype.getKerningValue = function (e, t, i) {
          for (var n = 0; n < e.length; n++)
            for (var r = e[n].subtables, o = 0; o < r.length; o++) {
              var a = r[o],
                s = this.getCoverageIndex(a.coverage, t);
              if (!(s < 0))
                switch (a.posFormat) {
                  case 1:
                    for (var l = a.pairSets[s], h = 0; h < l.length; h++) {
                      if ((A = l[h]).secondGlyph === i)
                        return (A.value1 && A.value1.xAdvance) || 0;
                    }
                    break;
                  case 2:
                    var A,
                      c = this.getGlyphClass(a.classDef1, t),
                      p = this.getGlyphClass(a.classDef2, i);
                    return (
                      ((A = a.classRecords[c][p]).value1 &&
                        A.value1.xAdvance) ||
                      0
                    );
                }
            }
          return 0;
        }),
        (r.prototype.getKerningTables = function (e, t) {
          if (this.font.tables.gpos)
            return this.getLookupTables(e, t, "kern", 2);
        }),
        (e.exports = r));
    }