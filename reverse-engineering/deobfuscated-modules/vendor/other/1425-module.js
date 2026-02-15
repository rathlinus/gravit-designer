/**
 * Module 1425
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
  var n = require(197) /* module */, r = require(0) /* GObject */, o = require(602) /* module */, a = require(90) /* Container */, s = require(1143) /* module */, l = require(800) /* module */, h = require(856) /* module */, A = function () {
      this._collection = new o(), this.dictionary = new n();
    };
  r.inherit(A, a), A.prototype._collection = null, A.prototype.add = function (e, t) {
    this._collection.add(e, t);
  }, A.prototype.getCollection = function () {
    return this._collection;
  }, A.prototype.write = function (e) {
    var t = new s();
    this._collection.write(t), new l(new h(t.asArray())).write(e);
  }, exports.exports = A;
}
