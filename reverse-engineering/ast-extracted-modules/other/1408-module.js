/**
 * Module 1408
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
  var n = i(800);
  function r(e, t, i, r) {
    n.call(this, r), this.putDictionary("/Type", "/XObject"), this.putDictionary("/Subtype", "/Image"), this.putDictionary("/Width", e), this.putDictionary("/Height", t), this.putDictionary("/ColorSpace", i.name), this.putDictionary("/BitsPerComponent", 8);
  }
  i(0).inherit(r, n), r.prototype.getWidth = function () {
    return this.dictionary.get("/Width");
  }, r.prototype.getHeight = function () {
    return this.dictionary.get("/Height");
  }, r.prototype.setMask = function (e) {
    this.putDictionary("/SMask", e);
  }, r.prototype.getMask = function () {
    var e = this.dictionary.get("/SMask");
    return e ? e.getPDFObject() : null;
  }, r.prototype.setFilter = function (e) {
    this.filter = e;
  }, r.prototype.toString = function () {
    return "[Object GPDFImage]";
  }, e.exports = r;
}
