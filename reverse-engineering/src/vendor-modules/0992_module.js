/**
 * chunk.vendor.js Module #992
 * Type: unknown
 */

function (e, t, i) {
      var n = i(378).ContextParams;
      e.exports = function (e) {
        var t = this.features.arab;
        if (t.hasOwnProperty("rlig"))
          for (
            var i = this.tokenizer.getRangeTokens(e), r = 0;
            r < i.length;
            r++
          ) {
            var o = new n(i, r),
              a = t.rlig.lookup(o) || null,
              s = 1 === a.length && 63 === a[0].id && a[0].substitution,
              l = 1 === a.length && 41 === a[0].id && a[0].substitution[0],
              h = i[r];
            if (l) {
              h.setState("rlig", [l.ligGlyph]);
              for (var A = 0; A < l.components.length; A++) {
                var c = l.components[A],
                  p = o.get(A + 1);
                p.activeState.value === c && (p.state.deleted = !0);
              }
            } else if (s) {
              var u =
                s && 1 === s.length && 12 === s[0].id && s[0].substitution;
              u && u >= 0 && h.setState("rlig", u);
            }
          }
      };
    }