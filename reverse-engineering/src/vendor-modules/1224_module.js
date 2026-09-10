/**
 * chunk.vendor.js Module #1224
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(197),
        o = function (e) {
          (r.call(this),
            (e = e || {}),
            this.put("/Type", "/Group"),
            this.put("/S", "/" + (e.subType || o.SubType.DEFAULT)),
            e.individual && this.put("/I", e.individual),
            e.colorSpace && this.put("/CS", e.colorSpace.name));
        };
      (n.inherit(o, r),
        (o.SubType = {
          DEFAULT: "Transparency",
        }),
        (e.exports = o));
    }