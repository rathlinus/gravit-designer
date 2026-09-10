/**
 * chunk.vendor.js Module #662
 * Type: unknown
 */

function (e, t, i) {
      i(75);
      var n = i(2),
        r = i(76);

      function o() {
        r.call(this);
      }
      (n.inheritAndMix("swatches", o, r, [n.Container, n.Store]),
        (o.prototype._handleChange = function (e, t) {
          r.prototype._handleChange.call(this, e, t);
        }),
        (o.prototype.validateInsertion = function (e, t) {
          return "scene" === n.getName(e);
        }),
        (e.exports = o));
    }