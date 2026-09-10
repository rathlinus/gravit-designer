/**
 * chunk.vendor.js Module #1147
 * Type: unknown
 */

function (e, t, i) {
      var n = i(602),
        r = i(90),
        o = i(0),
        a = i(1420),
        s = function (e) {
          ((this._doc = e), (this._collection = new n()));
        };
      (o.inherit(s, r),
        (s.prototype.peek = function () {
          return this._collection.peek().getValue();
        }),
        (s.prototype.quadraticCurveTo = function (e, t, i, n) {
          var r,
            o = this.peek();
          if (o instanceof a.PointTo) r = o.getPoint();
          else {
            if (!(o instanceof a.BezierCurveTo))
              return (
                this._collection.add(
                  this._x(e) +
                    " " +
                    this._y(t) +
                    " " +
                    this._x(i) +
                    " " +
                    this._y(n) +
                    " y",
                ),
                void console.log("WARN: Unsupported operator: " + o)
              );
            r = o.getPoint3();
          }
          var s = r.getX(),
            l = r.getY(),
            h = i,
            A = n,
            c = s + (2 / 3) * (e - s),
            p = l + (2 / 3) * (t - l),
            u = i + (2 / 3) * (e - i),
            d = n + (2 / 3) * (t - n);
          this.bezierCurveTo(c, p, u, d, h, A);
        }),
        (s.prototype.bezierCurveTo = function (e, t, i, n, r, o) {
          this._collection.add(
            new a.BezierCurveTo(this._doc, e, t, i, n, r, o),
          );
        }),
        (s.prototype.lineTo = function (e, t) {
          this._collection.add(new a.LineTo(this._doc, e, t));
        }),
        (s.prototype.moveTo = function (e, t) {
          this._collection.add(new a.MoveTo(this._doc, e, t));
        }),
        (s.prototype.close = function () {
          this._collection.add("h");
        }),
        (s.prototype.write = function (e) {
          this._collection.write(e);
        }),
        (e.exports = s));
    }