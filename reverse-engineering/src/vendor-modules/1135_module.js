/**
 * chunk.vendor.js Module #1135
 * Type: unknown
 */

function (e, t, i) {
      var n = i(83),
        r = i(0),
        o = i(439);

      function a() {
        o.apply(this, arguments);
      }
      (r.inherit(a, o),
        (a.prototype._postParse = function () {
          (o.prototype._postParse.call(this, !0),
            this._node.setProperties(["w", "h"], [0, 0]));
        }),
        (a.prototype._getRelatedNodeClass = function () {
          return n;
        }),
        (e.exports = a));
    }