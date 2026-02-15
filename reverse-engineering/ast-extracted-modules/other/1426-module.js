/**
 * Module 1426
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
  var n = i(0), r = i(197), o = i(9), a = i(47), s = function (e, t) {
      r.call(this), this.putText("/Author", e || o.get(new a("GDocument", "text.default-export-author"))), this.putText("/Producer", o.get(new a("GDocument", "text.default-export-producer"))), this.putText("/Creator", o.get(new a("GDocument", "text.default-export-author"))), this.putText("/Title", t || "Untitled");
      var i = function (e) {
          return ("0" + parseInt(e)).slice(-2);
        }, n = new Date(), s = n.getTimezoneOffset(), l = s < 0 ? "+" : "-", h = Math.floor(Math.abs(s / 60)), A = Math.abs(s % 60), c = [
          l,
          i(h),
          "'",
          i(A),
          "'"
        ].join(""), p = [
          n.getFullYear(),
          i(n.getMonth() + 1),
          i(n.getDate()),
          i(n.getHours()),
          i(n.getMinutes()),
          i(n.getSeconds()),
          c
        ].join("");
      this.putText("/CreationDate", "D:" + p), this.putText("/ModDate", "D:" + p);
    };
  n.inherit(s, r), s.prototype.getMetadata = function () {
    var e = this.get("/Metadata");
    return e ? e.getPDFObject() : null;
  }, e.exports = s;
}
