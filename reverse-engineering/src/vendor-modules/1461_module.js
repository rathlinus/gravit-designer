/**
 * chunk.vendor.js Module #1461
 * Type: unknown
 */

function (e, t, i) {
      var n = i(68),
        r = i(438);

      function o() {}
      ((o.apply = function (e, t, i) {
        var o = e.createParallelFilter(this);
        (o.addFilter("feGaussianBlur", {
          in: "SourceGraphic",
          stdDeviation: r.pixelToStdDeviation(t.getProperty("r")),
        }),
          o.addFilter("feOffset", {
            dx: t.getProperty("x"),
            dy: t.getProperty("y"),
            result: "offsetBlur",
          }));
        var a = t.getProperty("pat"),
          s = n.rgbToCSS(a.getValue());
        (o.addFilter("feFlood", {
          "flood-color": s,
          "flood-opacity": t.getProperty("opc"),
        }),
          o.addFilter("feComposite", {
            in2: "offsetBlur",
            operator: "in",
            result: "dropShadow",
          }),
          o.addFilter("feBlend", {
            in: "SourceGraphic",
            in2: "dropShadow",
            mode: "normal",
          }));
      }),
        (e.exports = o));
    }