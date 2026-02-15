/**
 * Module 1464
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

function (exports, module, require) {
  var n = require(852) /* module */, r = require(17) /* GRGBColor */;
  function o() {
  }
  o.apply = function (e, t, i) {
    var o = n.extractRGBA(i, "f"), a = t.getProperty("pat").getValue();
    a[3] = t.getProperty("opc");
    var s = r.mix(o, a);
    e.createSeriesFilter(this).addFilter("feFlood", {
      "flood-color": "rgb(" + [
        s[0],
        s[1],
        s[2]
      ].join(",") + ")",
      "flood-opacity": 1
    });
  }, exports.exports = o;
}
