/**
 * chunk.vendor.js Module #338
 * Type: unknown
 */

function (e, t) {
      var i = {
        normalizeNumber: function (e) {
          return (
            ("number" != typeof e || isNaN(e)) &&
              (console.warn("GPDFNumber.normalizeNumber", "invalid number", e),
              (e = 0)),
            parseFloat(e.toFixed(4))
          );
        },
        toHex: function (e, t) {
          for (
            var i = new Array(t || 4),
              n = e.toString(16),
              r = i.length - n.length,
              o = 0;
            o < r;
            o++
          )
            i[o] = "0";
          return i.join("") + n;
        },
      };
      e.exports = i;
    }