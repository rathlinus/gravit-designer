/**
 * chunk.vendor.js Module #927
 * Type: unknown
 */

function (e, t, i) {
      var n = i(195);

      function r(e) {
        ((this._start = null),
          (this._codes = e),
          (this._trailingSpaces = null),
          (this._newLine = !0),
          (this._canBreakAfter = !1),
          (this._canBreakBefore = !1));
      }
      var o =
          ' \t})]?|&,;¢°′″‰℃、。｡､￠，．：；？！％・･ゝゞヽヾーァィゥェォッャュョヮヵヶぁぃぅぇぉっゃゅょゎゕゖㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ々〻ｧｨｩｪｫｬｭｮｯｰ’”〉》」』】〕）］｝｣!%.:·"†‡›∶〃〆〗〞﹚﹜＂〙〟｠»‐゠–〜‼⁇⁈⁉〈《「『＇～— •︰︱︲︳﹐﹑﹒﹓﹔﹕﹖﹘︶︸︺︼︾﹀﹂﹗｜',
        a =
          '([{‘“〈《「『【〔（［｛｢£¥＄￡￥+＋$"々〇〉》」｠￦ #〘〖〝｟«$"々〇〉》」｠￦ #〘〖〝｟«—…‥〳〴〵‵︴﹙﹛︵︷︹︻︽︿﹁﹃﹏·．';
      ((r.prototype._codes = null),
        (r.prototype._start = null),
        (r.prototype._trailingSpaces = null),
        (r.prototype._canBreakAfter = !1),
        (r.prototype._canBreakBefore = !1),
        (r.prototype._lastBreakBefore = !1),
        (r.prototype._lastBreakAfter = !1),
        (r.prototype._newLine = !0),
        (r.prototype.split = function (e, t) {
          var i;
          if (null === t.char) i = !0;
          else if (
            (this._newLine && ((i = !0), (this._newLine = !1)),
            "string" == typeof t.char)
          )
            " " === t.char
              ? this._trailingSpaces || (this._trailingSpaces = t)
              : "\n" === t.char || t.char === n.LS
                ? ((i = !0), (this._newLine = !0))
                : o.indexOf(t.char) >= 0
                  ? (this._canBreakAfter = !0)
                  : a.indexOf(t.char) >= 0
                    ? ((i = !0), (this._canBreakBefore = !0))
                    : !(function (e) {
                          var t = e.codePointAt(0);
                          if (
                            (t >= 19968 && t <= 40959) ||
                            (t >= 13312 && t <= 19855) ||
                            (t >= 12352 && t <= 12543)
                          )
                            return !0;
                          if (
                            (t >= 11904 && t <= 12245) ||
                            (t >= 12688 && t <= 12703) ||
                            (t >= 13312 && t <= 19903)
                          )
                            return !0;
                          if (
                            (t >= 44032 && t <= 55215) ||
                            (t >= 4352 && t <= 4607) ||
                            (t >= 12592 && t <= 12687) ||
                            (t >= 43360 && t <= 43391) ||
                            (t >= 55216 && t <= 55295)
                          )
                            return !0;
                          return !1;
                        })(t.char)
                      ? (this._trailingSpaces || this._canBreakAfter) &&
                        (i = !0)
                      : this._trailingSpaces || this._canBreakAfter
                        ? (i = !0)
                        : this._lastBreakBefore
                          ? (this._lastBreakBefore = !1)
                          : (i = !0);
          else {
            var r = this._codes(t.char);
            (r.block || r.eof) && ((i = !0), (this._newLine = !0));
          }
          if (i) {
            if (this._start && !this._start.equals(t)) {
              if (
                !1 ===
                e({
                  text: this._start,
                  spaces: this._trailingSpaces || t,
                  end: t,
                })
              )
                return !1;
              ((this._lastBreakBefore = this._canBreakBefore),
                (this._trailingSpaces = null),
                (this._canBreakAfter = !1),
                (this._canBreakBefore = !1));
            }
            (null === t.char && e(null), (this._start = t));
          }
        }),
        (e.exports = r));
    }