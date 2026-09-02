/**
 * chunk.vendor.js Module #1441
 * Type: unknown
 */

function (e, t, i) {
      var n = i(11),
        r = i(90),
        o = function (e) {
          this.references = e;
        };
      (i(0).inherit(o, r),
        (o.prototype.write = function (e) {
          ((this.offset = e.getPosition()),
            e.writeln("xref"),
            e.write(0),
            e.write(" "),
            e.writeln(this.references.length + 1),
            e.writeln("0000000000 65535 f "),
            n.each(this.references, function (t, i) {
              var n =
                "0000000000".substr(i.offset.toString().length) + i.offset;
              (e.write(n), e.writeln(" 00000 n "));
            }));
        }),
        (e.exports = o));
    }