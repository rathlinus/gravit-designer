/**
 * chunk.vendor.js Module #1464
 * Type: unknown
 */

function (e, t, i) {
      var n = i(852),
        r = i(17);

      function o() {}
      ((o.apply = function (e, t, i) {
        var o = n.extractRGBA(i, "f"),
          a = t.getProperty("pat").getValue();
        a[3] = t.getProperty("opc");
        var s = r.mix(o, a);
        e.createSeriesFilter(this).addFilter("feFlood", {
          "flood-color": "rgb(" + [s[0], s[1], s[2]].join(",") + ")",
          "flood-opacity": 1,
        });
      }),
        (e.exports = o));
    }