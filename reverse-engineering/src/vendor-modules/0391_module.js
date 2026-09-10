/**
 * chunk.vendor.js Module #391
 * Type: unknown
 */

function (e, t, i) {
      var n = i(90);

      function r(e) {
        this.pdfIndirectObject = e;
      }
      (i(0).inherit(r, n),
        (r.prototype.write = function (e) {
          (e.write(this.getPDFIndirectObject().number),
            e.write(" "),
            e.write(this.getPDFIndirectObject().type),
            e.write(" R"));
        }),
        (r.prototype.getPDFIndirectObject = function () {
          return this.pdfIndirectObject;
        }),
        (r.prototype.getPDFObject = function () {
          return this.getPDFIndirectObject().getPDFObject();
        }),
        (e.exports = r));
    }