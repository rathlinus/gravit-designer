/**
 * chunk.vendor.js Module #1442
 * Type: unknown
 */

function (e, t) {
      var i = function () {};
      ((i.prototype.version = 1.7),
        (i.prototype.write = function (e) {
          (e.write("%PDF-"),
            e.write(this.version),
            e.writeln(),
            e.writeBuffer(new Uint8Array([37, 226, 227, 207, 211])),
            e.writeln());
        }),
        (e.exports = i));
    }