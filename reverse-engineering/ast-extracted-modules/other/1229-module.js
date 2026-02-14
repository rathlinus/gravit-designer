/**
 * Module 1229
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
  var n = i(293), r = i(90), o = i(0), a = function (e, t) {
      this._operation = t, this.resource = e;
    };
  o.inherit(a, r), a.prototype.getShading = function () {
    return this.resource.getPDFObject().getShading();
  }, a.prototype.equals = function (e) {
    return e instanceof a && this.resource.getPDFObject().equals(e.resource.getPDFObject());
  }, a.prototype.write = function (e) {
    e.write("/Pattern"), e.writeSpace(), e.write(this._operation & n.OPERATIONFLAG_STROKE ? "CS" : "cs"), e.writeSpace(), e.write("/"), e.write(this.resource.getName());
  }, e.exports = a;
}
