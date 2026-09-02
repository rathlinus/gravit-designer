/**
 * chunk.vendor.js Module #1411
 * Type: class
 * Name: GPDFShowText
 */

function (e, t, i) {
      var n = i(90),
        r = i(0),
        o = i(564);

      function a(e) {
        this._array = e;
      }
      (r.inherit(a, n),
        (a.prototype.write = function (e) {
          (this._array.write(e), e.writeln(o.TJ));
        }),
        (a.prototype.toString = function () {
          return "[Object GPDFShowText]";
        }),
        (e.exports = a));
    }