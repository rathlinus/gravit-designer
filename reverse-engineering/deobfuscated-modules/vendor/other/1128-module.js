/**
 * Module 1128
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
  var n = require(0) /* GObject */, r = require(73) /* GRectangle */, o = require(28) /* GStylable */, a = require(17) /* GRGBColor */, s = require(439) /* module */;
  function l() {
    s.apply(this, arguments);
  }
  n.inherit(l, s), l.prototype.parse = function () {
    s.prototype.parse.apply(this, arguments), this._data.hasBackgroundColor || this._node.getPaintLayers().appendChild(new o.FillPaintLayer(a.WHITE));
  }, l.prototype._getRelatedNodeClass = function () {
    return r;
  }, exports.exports = l;
}
