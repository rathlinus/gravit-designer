/**
 * chunk.vendor.js Module #795
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(22),
        o = (i(70), i(73), i(284), i(45)),
        a = i(2),
        s = i(796);

      function l(e, t, i, n) {
        ((this._node = n || new (this._getRelatedNodeClass())()),
          s.apply(this, arguments));
      }
      (n.inherit(l, s),
        (l.transformStyledCorners = function (e, t) {
          if (
            t &&
            !t.isIdentity() &&
            (e instanceof o && e.transformStyledCorners(e, t),
            e.hasMixin(a.Container))
          )
            for (var i = e.getFirstChild(); null != i; i = i.getNext())
              l.transformStyledCorners(i, t);
        }),
        (l.prototype._node = null),
        (l.prototype.getNode = function () {
          return this._node;
        }),
        (l.prototype._getRelatedNodeClass = function () {
          throw new Error("Not implemented");
        }),
        (l.prototype.parse = function () {
          this._node &&
            ((this._node.__sketchNode__ = this),
            s.prototype.parse.apply(this, arguments));
        }),
        (l.prototype.transform = function (e) {
          e &&
            !e.isIdentity() &&
            this._node instanceof r &&
            this._node.hasMixin(r.Transform) &&
            this._node.transform(e);
        }),
        (l.prototype.setBounds = function (e) {
          if (this._node.hasMixin(r.Transform)) {
            var t = this._node.$vis;
            try {
              (t || this._node.setProperty("vis", !0),
                this._node.getGeometryBBox() &&
                  this._node.setBounds(
                    e.getX(),
                    e.getY(),
                    e.getWidth(),
                    e.getHeight(),
                  ));
            } finally {
              this._node.setProperty("vis", t);
            }
          }
        }),
        (l.prototype.appendTo = function (e, t) {
          this._node &&
            (e.appendChild(this._node),
            s.prototype.appendTo.call(this, this._node, t));
        }),
        (l.prototype.clone = function () {
          var e = s.prototype.clone.call(this);
          return ((e._node = this._node.clone()), e);
        }),
        (e.exports = l));
    }