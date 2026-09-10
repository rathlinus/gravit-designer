/**
 * chunk.vendor.js Module #598
 * Type: unknown
 */

function (e, t, i) {
      var n = i(5);

      function r() {
        throw new Error("No instance");
      }
      ((r.parse = function (e) {
        var t = e.replace(/{|}/g, "").trim().split(",");
        return new n(parseFloat(t[0]), parseFloat(t[1]));
      }),
        (e.exports = r));
    }