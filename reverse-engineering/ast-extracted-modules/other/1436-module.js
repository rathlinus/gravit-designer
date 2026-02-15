/**
 * Module 1436
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
  var n = i(0), r = i(182), o = i(197), a = function () {
      o.call(this), this.pages = new r(), this.put("/Type", "/Pages");
    };
  n.inherit(a, o), a.prototype.addPage = function (e) {
    this.pages.push(e), this.put("/Kids", this.pages), this.put("/Count", this.pages.size());
  }, a.prototype.getPage = function (e) {
    var t = this.pages.get(e), i = t && t.getValue();
    return i ? i.getPDFObject() : null;
  }, e.exports = a;
}
