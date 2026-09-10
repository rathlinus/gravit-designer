/**
 * chunk.vendor.js Module #1225
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(1143),
        o = i(800),
        a = i(182),
        s = i(440),
        l = i(7),
        h = function (e, t, i, n, A) {
          o.call(this, {
            _out: null,
            write: function (e) {
              e.concat(this.getWriter());
            },
            length: function () {
              return this.getWriter().getPosition();
            },
            getWriter: function () {
              return (
                this._out ||
                  ((this._out = new r()),
                  A &&
                    !A.isIdentity() &&
                    (new s(A).write(this._out), this._out.writeln()),
                  t.write(this._out)),
                this._out
              );
            },
          });
          var c = new a(new l().getMatrix());
          (this.putDictionary("/Type", "/XObject"),
            this.putDictionary("/Subtype", "/Form"),
            this.putDictionary("/Matrix", c),
            this.putDictionary("/BBox", n),
            this.putDictionary("/FormType", h.FormType.DEFAULT),
            i && this.putDictionary("/Group", i));
        };
      (n.inherit(h, o),
        (h.FormType = {
          DEFAULT: 1,
        }),
        (e.exports = h));
    }