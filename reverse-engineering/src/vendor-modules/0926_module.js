/**
 * chunk.vendor.js Module #926
 * Type: unknown
 */

function (e, t, i) {
      var n = i(148);

      function r(e) {
        ((this._runArray = e), this.emit.bind(this));
      }

      function o(e, t) {
        if (e._runs !== t._runs)
          throw new Error("Characters for different documents");
      }

      function a(e, t) {
        for (; t < e.length; t++)
          if (0 != n.getTextLength(e[t].text)) return new r.Character(e, t, 0);
        return new r.Character(e, e.length, 0);
      }
      ((r.prototype._runArray = null),
        (r.prototype.emit = function (e) {
          for (var t = a(this._runArray, 0); !e(t) && null !== t.char; )
            t =
              t._offset + 1 < n.getTextLength(this._runArray[t._run].text)
                ? new r.Character(this._runArray, t._run, t._offset + 1)
                : a(this._runArray, t._run + 1);
        }),
        (r.Character = function (e, t, i) {
          ((this._runs = e),
            (this._run = t),
            (this._offset = i),
            (this.char =
              t >= e.length
                ? null
                : e[t].text
                  ? n.getTextChar(e[t].text, i)
                  : null));
        }),
        (r.Character.prototype._runs = null),
        (r.Character.prototype._run = null),
        (r.Character.prototype._offset = null),
        (r.Character.prototype.char = null),
        (r.Character.prototype.equals = function (e) {
          return (
            o(this, e),
            this._run === e._run && this._offset === e._offset
          );
        }),
        (r.Character.prototype.cut = function (e) {
          o(this, e);
          var t = this;
          return function (i) {
            for (var r = t._run; r <= e._run; r++) {
              var o = t._runs[r];
              if (o) {
                var a = r === t._run ? t._offset : 0,
                  s = r === e._run ? e._offset : n.getTextLength(o.text);
                a < s &&
                  n.getSubText(
                    function (e) {
                      var t = Object.create(o);
                      ((t.text = e), i(t));
                    },
                    o.text,
                    a,
                    s - a,
                  );
              }
            }
          };
        }),
        (e.exports = r));
    }