/**
 * Module 1413
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
  var n = require(0) /* GObject */, r = require(197) /* module */, o = function (e) {
      if (r.call(this), !e.subType)
        throw "GPDFSoftMask.SubType is required";
      if (!e.stream)
        throw "GPDFStream is required";
      this.put("/Type", "/Mask"), this.put("/S", "/" + e.subType), this.put("/G", e.stream);
    };
  n.inherit(o, r), o.SubType = {
    ALPHA: "Alpha",
    LUMINOSITY: "Luminosity"
  }, exports.exports = o;
}
