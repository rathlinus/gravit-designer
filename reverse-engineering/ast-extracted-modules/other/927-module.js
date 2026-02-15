/**
 * Module 927
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
  var n = i(195);
  function r(e) {
    this._start = null, this._codes = e, this._trailingSpaces = null, this._newLine = !0, this._canBreakAfter = !1, this._canBreakBefore = !1;
  }
  var o = " \t})]?|&,;\xA2\xB0\u2032\u2033\u2030\u2103\u3001\u3002\uFF61\uFF64\uFFE0\uFF0C\uFF0E\uFF1A\uFF1B\uFF1F\uFF01\uFF05\u30FB\uFF65ゝゞヽヾーァィゥェォッャュョヮヵヶぁぃぅぇぉっゃゅょゎゕゖㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ々〻ｧｨｩｪｫｬｭｮｯｰ\u2019\u201D\u3009\u300B\u300D\u300F\u3011\u3015\uFF09\uFF3D\uFF5D\uFF63!%.:\xB7\"\u2020\u2021\u203A\u2236\u3003〆\u3017\u301E\uFE5A\uFE5C\uFF02\u3019\u301F\uFF60\xBB\u2010\u30A0\u2013\u301C\u203C\u2047\u2048\u2049\u3008\u300A\u300C\u300E\uFF07\uFF5E\u2014 \u2022\uFE30\uFE31\uFE32︳\uFE50\uFE51\uFE52\uFE53\uFE54\uFE55\uFE56\uFE58\uFE36\uFE38\uFE3A\uFE3C\uFE3E\uFE40\uFE42\uFE57\uFF5C", a = "([{\u2018\u201C\u3008\u300A\u300C\u300E\u3010\u3014\uFF08\uFF3B\uFF5B\uFF62\xA3\xA5\uFF04\uFFE1\uFFE5+\uFF0B$\"々〇\u3009\u300B\u300D\uFF60\uFFE6 #\u3018\u3016\u301D\uFF5F\xAB$\"々〇\u3009\u300B\u300D\uFF60\uFFE6 #\u3018\u3016\u301D\uFF5F\xAB\u2014\u2026\u2025〳〴〵\u2035︴\uFE59\uFE5B\uFE35\uFE37\uFE39\uFE3B\uFE3D\uFE3F\uFE41\uFE43﹏\xB7\uFF0E";
  r.prototype._codes = null, r.prototype._start = null, r.prototype._trailingSpaces = null, r.prototype._canBreakAfter = !1, r.prototype._canBreakBefore = !1, r.prototype._lastBreakBefore = !1, r.prototype._lastBreakAfter = !1, r.prototype._newLine = !0, r.prototype.split = function (e, t) {
    var i;
    if (null === t.char)
      i = !0;
    else if (this._newLine && (i = !0, this._newLine = !1), "string" == typeof t.char)
      " " === t.char ? this._trailingSpaces || (this._trailingSpaces = t) : "\n" === t.char || t.char === n.LS ? (i = !0, this._newLine = !0) : o.indexOf(t.char) >= 0 ? this._canBreakAfter = !0 : a.indexOf(t.char) >= 0 ? (i = !0, this._canBreakBefore = !0) : !function (e) {
        var t = e.codePointAt(0);
        if (t >= 19968 && t <= 40959 || t >= 13312 && t <= 19855 || t >= 12352 && t <= 12543)
          return !0;
        if (t >= 11904 && t <= 12245 || t >= 12688 && t <= 12703 || t >= 13312 && t <= 19903)
          return !0;
        if (t >= 44032 && t <= 55215 || t >= 4352 && t <= 4607 || t >= 12592 && t <= 12687 || t >= 43360 && t <= 43391 || t >= 55216 && t <= 55295)
          return !0;
        return !1;
      }(t.char) ? (this._trailingSpaces || this._canBreakAfter) && (i = !0) : this._trailingSpaces || this._canBreakAfter ? i = !0 : this._lastBreakBefore ? this._lastBreakBefore = !1 : i = !0;
    else {
      var r = this._codes(t.char);
      (r.block || r.eof) && (i = !0, this._newLine = !0);
    }
    if (i) {
      if (this._start && !this._start.equals(t)) {
        if (!1 === e({
            text: this._start,
            spaces: this._trailingSpaces || t,
            end: t
          }))
          return !1;
        this._lastBreakBefore = this._canBreakBefore, this._trailingSpaces = null, this._canBreakAfter = !1, this._canBreakBefore = !1;
      }
      null === t.char && e(null), this._start = t;
    }
  }, e.exports = r;
}
