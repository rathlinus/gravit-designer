/**
 * chunk.vendor.js Module #1447
 * Type: unknown
 */

function (e, t, i) {
      var n = i(90),
        r = i(0),
        o = function (e, t) {
          ((this.fontResource = e), (this.size = t));
        };
      (r.inherit(o, n),
        (o.prototype.equals = function (e) {
          return (
            e instanceof o &&
            e.fontResource.getFont().equals(this.fontResource.getFont()) &&
            e.size === this.size
          );
        }),
        (o.prototype.getFont = function () {
          return this.getFontResource().getFont();
        }),
        (o.prototype.getFontResource = function () {
          return this.fontResource;
        }),
        (o.prototype.write = function (e) {
          (e.write("/"),
            e.write(this.fontResource.getName()),
            e.writeSpace(),
            e.write(this.size),
            e.writeSpace(),
            e.writeln("Tf"));
        }),
        (e.exports = o));
    }