/**
 * chunk.vendor.js Module #1111
 * Type: unknown
 */

function (e, t, i) {
      var n = i(559),
        r = i(0),
        o = i(437),
        a = i(390),
        s = i(182),
        l = function (e) {
          this._alpha = new n(e).getAlpha();
        };
      (r.inheritAndMix(l, o, [a]),
        (l.prototype.getAlpha = function () {
          return this._alpha;
        }),
        (l.prototype.asArray = function () {
          return new s([this._alpha]);
        }),
        (e.exports = l));
    }