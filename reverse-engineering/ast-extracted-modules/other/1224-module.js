/**
 * Module 1224
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
  var n = i(0), r = i(197), o = function (e) {
      r.call(this), e = e || {}, this.put("/Type", "/Group"), this.put("/S", "/" + (e.subType || o.SubType.DEFAULT)), e.individual && this.put("/I", e.individual), e.colorSpace && this.put("/CS", e.colorSpace.name);
    };
  n.inherit(o, r), o.SubType = { DEFAULT: "Transparency" }, e.exports = o;
}
