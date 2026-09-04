/**
 * chunk.vendor.js Module #1146
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(197),
        o = function (e, t) {
          (r.call(this),
            this.put("/ShadingType", e),
            this.put("/ColorSpace", t.name));
        };
      (n.inherit(o, r),
        (o.prototype._hasTransparency = !1),
        (o.prototype.hasTransparency = function () {
          return this._hasTransparency;
        }),
        (o.prototype.isValid = function () {
          return !0;
        }),
        (o.Type = {
          AXIAL: 2,
          RADIAL: 3,
        }),
        (e.exports = o));
    }