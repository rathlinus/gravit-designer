/**
 * chunk.vendor.js Module #1437
 * Type: unknown
 */

function (e, t, i) {
      var n = i(799),
        r = function (e) {
          n.call(this, e.getPDFObject().getName(), e);
        };
      (i(0).inherit(r, n),
        (r.prototype.getFont = function () {
          return this.getPDFObject();
        }),
        (e.exports = r));
    }