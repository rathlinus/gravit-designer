/**
 * chunk.vendor.js Module #1395
 * Type: unknown
 */

function (e, t, i) {
      var n = i(0),
        r = i(587),
        o = i(708);

      function a(e, t, i, n) {
        var a = o.parse(n);
        if (!a || !a.supported) throw "Could not load embedded font";
        r.call(this, e, t, i, n, a);
      }
      (n.inherit(a, r),
        (a.prototype.isEmbedded = function () {
          return !0;
        }),
        (e.exports = a));
    }