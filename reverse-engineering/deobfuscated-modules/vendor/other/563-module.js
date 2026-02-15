/**
 * Module 563
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
  var n = require(0) /* GObject */, r = require(60) /* GPath */, o = require(439) /* module */, a = require(1134) /* module */, s = require(601) /* module */;
  function l() {
    o.apply(this, arguments);
  }
  n.inherit(l, o), l.prototype.parse = function (e, t) {
    var i = this._getTransform();
    this._node = a.generatePath(this._data.path, i, this._data.path.isClosed, s.parse(this._data.frame), this._data.fixedRadius), this._data.noTransform = true, this._node && (this._node.setProperty("csc", true), this._node.setProperty("evenodd", this.isEvenOdd()), o.prototype.parse.call(this, true, t));
  }, l.prototype._getRelatedNodeClass = function () {
    return r;
  }, exports.exports = l;
}
