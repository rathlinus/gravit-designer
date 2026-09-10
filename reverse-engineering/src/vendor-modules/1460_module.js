/**
 * chunk.vendor.js Module #1460
 * Type: unknown
 */

function (e, t, i) {
      var n = i(438);

      function r() {}
      ((r.apply = function (e, t, i) {
        e.createSeriesFilter(this).addFilter("feGaussianBlur", {
          stdDeviation: n.pixelToStdDeviation(t.getProperty("r")),
        });
      }),
        (e.exports = r));
    }