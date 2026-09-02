/**
 * chunk.vendor.js Module #1413
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(197),
        o = function (e) {
          if ((r.call(this), !e.subType))
            throw "GPDFSoftMask.SubType is required";
          if (!e.stream) throw "GPDFStream is required";
          (this.put("/Type", "/Mask"),
            this.put("/S", "/" + e.subType),
            this.put("/G", e.stream));
        };
      (n.inherit(o, r),
        (o.SubType = {
          ALPHA: "Alpha",
          LUMINOSITY: "Luminosity",
        }),
        (e.exports = o));
    }