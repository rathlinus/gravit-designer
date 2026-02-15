/**
 * Module 1212
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
  var n = require(0) /* GObject */, r = require(122) /* GGroup */, o = require(794) /* module */;
  function a() {
    o.apply(this, arguments);
  }
  n.inherit(a, o), a.prototype._postAppendTo = function () {
    o.prototype._postAppendTo.apply(this, arguments), this.transform(this._getTransformation());
  }, a.prototype._getRelatedNodeClass = function () {
    return r;
  }, exports.exports = a;
}
