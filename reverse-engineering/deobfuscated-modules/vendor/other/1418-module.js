/**
 * Module 1418
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
  var n = require(0) /* GObject */, r = require(1227) /* module */, o = require(182) /* module */, a = require(1146) /* module */, s = function (e) {
      var t = e.color, i = new o();
      i.push(t._fx), i.push(t._fy), i.push(0), i.push(t._cx), i.push(t._cy), i.push(t._scale), e.coords = i, r.call(this, a.Type.RADIAL, e);
    };
  n.inherit(s, r), exports.exports = s;
}
