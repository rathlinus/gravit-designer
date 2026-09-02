/**
 * chunk.vendor.js Module #1424
 * Type: unknown
 */

function (e, t, i) {
      var n = i(90);

      function r(e, t, i) {
        ((this.type = e), (this.number = t), (this.pdfobject = i));
      }
      (i(0).inherit(r, n),
        (r.prototype.write = function (e) {
          (e.write(this.number),
            e.write(" "),
            e.write(this.type),
            e.write(" "),
            e.write("obj"),
            e.writeln(),
            this.pdfobject.write(e),
            e.writeln(),
            e.write("endobj"));
        }),
        (r.prototype.equals = function (e) {
          return e instanceof r && this.getPDFObject().equals(e.getPDFObject());
        }),
        (r.prototype.getPDFObject = function () {
          return this.pdfobject;
        }),
        (e.exports = r));
    }