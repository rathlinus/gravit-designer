/**
 * chunk.vendor.js Module #563
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(60),
        o = i(439),
        a = i(1134),
        s = i(601);

      function l() {
        o.apply(this, arguments);
      }
      (n.inherit(l, o),
        (l.prototype.parse = function (e, t) {
          var i = this._getTransform();
          ((this._node = a.generatePath(
            this._data.path,
            i,
            this._data.path.isClosed,
            s.parse(this._data.frame),
            this._data.fixedRadius,
          )),
            (this._data.noTransform = !0),
            this._node &&
              (this._node.setProperty("csc", !0),
              this._node.setProperty("evenodd", this.isEvenOdd()),
              o.prototype.parse.call(this, !0, t)));
        }),
        (l.prototype._getRelatedNodeClass = function () {
          return r;
        }),
        (e.exports = l));
    }