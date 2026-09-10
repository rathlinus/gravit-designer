/**
 * chunk.vendor.js Module #1128
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(73),
        o = i(28),
        a = i(17),
        s = i(439);

      function l() {
        s.apply(this, arguments);
      }
      (n.inherit(l, s),
        (l.prototype.parse = function () {
          (s.prototype.parse.apply(this, arguments),
            this._data.hasBackgroundColor ||
              this._node
                .getPaintLayers()
                .appendChild(new o.FillPaintLayer(a.WHITE)));
        }),
        (l.prototype._getRelatedNodeClass = function () {
          return r;
        }),
        (e.exports = l));
    }