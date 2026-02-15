/**
 * Module 1135
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
  var n = require(83) /* GPage */, r = require(0) /* GObject */, o = require(439) /* module */;
  function a() {
    o.apply(this, arguments);
  }
  r.inherit(a, o), a.prototype._postParse = function () {
    o.prototype._postParse.call(this, true), this._node.setProperties([
      "w",
      "h"
    ], [
      0,
      0
    ]);
  }, a.prototype._getRelatedNodeClass = function () {
    return n;
  }, exports.exports = a;
}
