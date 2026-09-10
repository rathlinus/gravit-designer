/**
 * chunk.vendor.js Module #1419
 * Type: unknown
 */

function (e, t, i) {
      var n = i(197),
        r = i(437),
        o = i(0),
        a = i(440),
        s = i(391),
        l = function (e) {
          (n.call(this),
            (this._shading = e),
            this.put("/PatternType", 2),
            this.put("/Shading", new s(e)),
            this.put("/Matrix", new a(e.getPDFObject().transform).asArray()));
        };
      (o.inheritAndMix(l, r, [n]),
        (l.prototype.getShading = function () {
          return this._shading.getPDFObject();
        }),
        (l.prototype.equals = function (e) {
          return e instanceof l && this._shading.equals(e._shading);
        }),
        (e.exports = l));
    }