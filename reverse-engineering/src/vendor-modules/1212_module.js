/**
 * chunk.vendor.js Module #1212
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(122),
        o = i(794);

      function a() {
        o.apply(this, arguments);
      }
      (n.inherit(a, o),
        (a.prototype._postAppendTo = function () {
          (o.prototype._postAppendTo.apply(this, arguments),
            this.transform(this._getTransformation()));
        }),
        (a.prototype._getRelatedNodeClass = function () {
          return r;
        }),
        (e.exports = a));
    }