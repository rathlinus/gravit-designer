/**
 * Module 991
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (e, t, i) {
  var n = i(378).ContextParams, r = i(379), o = r.isIsolatedArabicChar, a = r.isTashkeelArabicChar;
  e.exports = function (e) {
    var t = this.features.arab, i = this.tokenizer.getRangeTokens(e);
    if (1 !== i.length) {
      var r = function (e, i, n) {
          if (t.hasOwnProperty(e)) {
            var r = function (e) {
              return 1 === e.length && 12 === e[0].id && e[0].substitution;
            }(t[e].lookup(n) || null)[0];
            return r >= 0 ? i.setState(e, r) : void 0;
          }
        }, s = new n(i, 0), l = new n(i.map(function (e) {
          return e.char;
        }), 0);
      i.forEach(function (e, t) {
        if (!a(e.char)) {
          s.setCurrentIndex(t), l.setCurrentIndex(t);
          var i = 0;
          switch (function (e) {
              for (var t = [].concat(e.backtrack), i = t.length - 1; i >= 0; i--) {
                var n = t[i], r = o(n), s = a(n);
                if (!r && !s)
                  return !0;
                if (r)
                  return !1;
              }
              return !1;
            }(l) && (i |= 1), function (e) {
              if (o(e.current))
                return !1;
              for (var t = 0; t < e.lookahead.length; t++) {
                var i = e.lookahead[t];
                if (!a(i))
                  return !0;
              }
              return !1;
            }(l) && (i |= 2), i) {
          case 0:
            return;
          case 1:
            r("fina", e, s);
            break;
          case 2:
            r("init", e, s);
            break;
          case 3:
            r("medi", e, s);
          }
        }
      });
    }
  };
}
