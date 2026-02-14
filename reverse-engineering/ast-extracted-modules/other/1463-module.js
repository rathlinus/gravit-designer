/**
 * Module 1463
 * Extracted from chunk.vendor.js
 *
 * Original: Gravit Designer by Corel
 * Reverse engineered for educational purposes
 *
 * Note: This is minified code. Variable names are compressed.
 * Common patterns:
 *   e = exports object
 *   t = module object
 *   n = require function
 *   i, o, a, r, s, l, c, h, u, d = local variables
 */

function (e, t, i) {
  var n = i(68), r = i(438);
  function o() {
  }
  o.apply = function (e, t, i) {
    var o = e.createParallelFilter(this);
    o.addFilter("feOffset", {
      in: "SourceGraphic",
      dx: t.getProperty("x"),
      dy: t.getProperty("y")
    }), o.addFilter("feGaussianBlur", {
      stdDeviation: r.pixelToStdDeviation(t.getProperty("r")),
      result: "offsetBlur"
    }), o.addFilter("feComposite", {
      in: "SourceGraphic",
      in2: "offsetBlur",
      result: "inverse",
      operator: "out"
    });
    var a = t.getProperty("pat"), s = n.rgbToCSS(a.getValue());
    o.addFilter("feFlood", {
      "flood-color": s,
      "flood-opacity": t.getProperty("opc"),
      result: "color"
    }), o.addFilter("feComposite", {
      in: "color",
      in2: "inverse",
      operator: "in",
      result: "shadow"
    }), o.addFilter("feComposite", {
      in: "shadow",
      in2: "SourceGraphic",
      operator: "over"
    });
  }, e.exports = o;
}
