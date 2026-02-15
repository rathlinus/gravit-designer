/**
 * Module 1439
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
  var n = require(391) /* module */, r = require(0) /* GObject */, o = require(197) /* module */, a = require(1440) /* module */, s = require(440) /* module */, l = require(7) /* GTransform */, h = require(5) /* GPoint */, A = function (e, t, i, r) {
      o.call(this), this.contents = e, this.resources = t, this._origin = new h(0, 0), this.put("/Type", "/Page"), this.put("/Contents", new n(e)), this.put("/Resources", new n(t)), this.put("/MediaBox", new a(0, 0, i, r)), this.lastObject = null;
    };
  r.inherit(A, o), A.prototype._origin = null, A.prototype.setBleedBox = function (e) {
    this.put("/BleedBox", new a(e.getX(), e.getY(), e.getWidth(), e.getHeight()));
  }, A.prototype.setPageOrigin = function (e) {
    this._origin = e;
    var t = new l().translated(e.getX(), e.getY());
    this.add(new s(t), 0);
  }, A.prototype.getPageOrigin = function () {
    return this._origin;
  }, A.prototype.add = function (e, t) {
    this.lastObject = e, this.contents.getPDFObject().add(e, t);
  }, A.prototype.getPageSize = function () {
    return this.get("/MediaBox");
  }, A.prototype.getResources = function () {
    return this.resources.getPDFObject();
  }, A.prototype.addResource = function (e, t) {
    this.getResources().add(e, t);
  }, A.prototype.getContents = function () {
    return this.contents.getPDFObject();
  }, exports.exports = A;
}
