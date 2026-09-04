/**
 * chunk.vendor.js Module #327
 * Type: unknown
 */

function (e, t, i) {
      var n = i(6),
        r = (i(7), i(112)),
        o = i(0);

      function a() {}
      (o.inherit(a, o),
        (a.prototype._actions = null),
        (a.prototype.addAction = function (e) {
          (this._actions || (this._actions = []), this._actions.push(e));
        }),
        (a.prototype.getActions = function () {
          return this._actions || [];
        }),
        (a.prototype.getActionsBBox = function () {
          var e = this.getGeometryBBox();
          if (!e) return null;
          if (!this._actions) return null;
          var t = e.getSide(n.Side.TOP_RIGHT),
            i = 0,
            r = null;
          return (
            this._actions.forEach(function (e) {
              var t = e.getSourceBBox();
              if (r) {
                var n = t.getWidth();
                ((t = t.translated(i, 0)), (r = r.united(t)), (i += 5 + n));
              } else r = t;
            }),
            r
              ? new n(
                  t.getX() - r.getWidth(),
                  t.getY() - r.getHeight(),
                  r.getWidth(),
                  r.getHeight(),
                )
              : null
          );
        }),
        (a.prototype.hitActionTest = function (e, t) {
          if (!this._actions) return null;
          var i = this.getGeometryBBox();
          if (!i) return null;
          for (
            var o = i.getSide(n.Side.TOP_RIGHT), a = 0, s = 0;
            s < this._actions.length;
            s++
          ) {
            var l = this._actions[s].getSourceBBox();
            if (
              t
                .mapRect(
                  new n(
                    o.getX() - l.getWidth() - a,
                    o.getY() - l.getHeight(),
                    l.getWidth(),
                    l.getHeight(),
                  ),
                )
                .containsPoint(e)
            )
              return new r(this, {
                action: this._actions[s],
              });
            a += 5 + l.getWidth();
          }
          return null;
        }),
        (e.exports = a));
    }